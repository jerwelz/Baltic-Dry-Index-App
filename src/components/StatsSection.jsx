import { useEffect, useState } from "react";

function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const steps = 40;
    const increment = value / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
}

export default function StatsSection({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  const latest = data[data.length - 1];
  const values = data.map((item) => item.value);

  const highest = Math.max(...values);
  const lowest = Math.min(...values);

  const previous = data.length > 1 ? data[data.length - 2] : null;
  const monthlyChange = previous ? latest.value - previous.value : 0;
  const monthlyPercent =
    previous && previous.value !== 0
      ? ((monthlyChange / previous.value) * 100).toFixed(1)
      : null;

  return (
    <section className="bg-white px-8 py-6">
      <h2 className="mb-4 text-2xl font-bold">Baltic Dry Index Overview</h2>

      <div className="rounded-xl shadow-lg bg-gradient-to-br from-slate-50 to-white p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-slate-500">Aktueller Wert</p>
            <p className="text-3xl font-bold text-slate-900">
              <AnimatedNumber value={latest.value} />
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-slate-500">Höchster Wert</p>
            <p className="text-3xl font-bold text-slate-900">
              <AnimatedNumber value={highest} />
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-slate-500">Niedrigster Wert</p>
            <p className="text-3xl font-bold text-slate-900">
              <AnimatedNumber value={lowest} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
