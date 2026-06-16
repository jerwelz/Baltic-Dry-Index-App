"use client";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from "recharts";

function CustomAreaDot({ cx, cy, payload, selectedDate, onClick }) {
  const isSelected = payload?.date === selectedDate;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={isSelected ? 6 : 10}
      fill={isSelected ? "purple" : "transparent"}
      stroke={isSelected ? "purple" : "transparent"}
      strokeWidth={isSelected ? 2 : 0}
      cursor="pointer"
      pointerEvents="all"
      onClick={(event) => {
        event.stopPropagation();
        onClick(payload);
      }}
    />
  );
}

export default function BalticDryChart({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedIndex(data.length - 1);
    }
  }, [data]);

  const selectedPoint = data?.[selectedIndex] ?? null;
  const hasPrev = selectedIndex > 0;
  const hasNext = data && selectedIndex < data.length - 1;

  const previousSelectedPoint = hasPrev ? data[selectedIndex - 1] : null;
  const monthlyChange = previousSelectedPoint
    ? selectedPoint.value - previousSelectedPoint.value
    : 0;
  const monthlyPercent =
    previousSelectedPoint && previousSelectedPoint.value !== 0
      ? ((monthlyChange / previousSelectedPoint.value) * 100).toFixed(1)
      : null;
  const isMonthlyUp = monthlyChange >= 0;

  const ArrowUp = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 5l7 7H5l7-7z" fill="currentColor" />
    </svg>
  );

  const ArrowDown = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 19l-7-7h14l-7 7z" fill="currentColor" />
    </svg>
  );

  function AnimatedTrendValue({ value }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      const target = Math.abs(value);
      if (target === 0) {
        setDisplayValue(0);
        return;
      }

      let current = 0;
      const duration = 450;
      const steps = 30;
      const increment = target / steps;
      const interval = Math.max(10, Math.round(duration / steps));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(target);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.round(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{displayValue}</span>;
  }

  function getStatus(value) {
    if (value >= 2500) return "Hoch";
    if (value >= 1000) return "Mittel";
    return "Niedrig";
  }

  function handleDateSearch(e) {
    e.preventDefault();
    if (!data || !searchDate.trim()) return;

    const foundIndex = data.findIndex(
      (item) => item.date === searchDate.trim(),
    );
    if (foundIndex >= 0) {
      setSelectedIndex(foundIndex);
      setSearchDate("");
    }
  }

  return (
    <div className="grid w-full gap-4 rounded-xl shadow-lg bg-white p-4 md:grid-cols-[2fr_1fr] outline-none">
      <div className="h-[320px] outline-none">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} width={45} />
            <Tooltip cursor={{ stroke: "purple", strokeWidth: 1 }} />
            <Area
              type="monotone"
              dataKey="value"
              name="Baltic Dry Index"
              fill="purple"
              stroke="purple"
              dot={false}
              activeDot={{ r: 8, fill: "purple" }}
            />
            <Brush
              dataKey="date"
              height={30}
              stroke="purple"
              travellerWidth={10}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm text-slate-500">Ausgewählter Punkt</p>
            {selectedPoint ? (
              <>
                <p className="mt-2 text-xl font-bold">{selectedPoint.date}</p>

                <p className="mt-4 text-sm text-slate-500">BDI Wert</p>
                <p className="text-3xl font-bold">{selectedPoint.value}</p>

                <p className="mt-4 text-sm text-slate-500">Status</p>
                <p className="text-lg font-semibold">
                  {getStatus(selectedPoint.value)}
                </p>
              </>
            ) : (
              <p className="mt-4 text-sm text-slate-500">
                Wähle einen Punkt mit den Buttons unten aus.
              </p>
            )}

            <div className="rounded-xl shadow-lg bg-white p-3 mt-3">
              <p className="text-sm text-slate-500">Monatliche Veränderung</p>
              {previousSelectedPoint ? (
                <div className="mt-2 flex items-center gap-2 text-2xl font-bold">
                  <span
                    className={`trend-arrow ${isMonthlyUp ? "up" : "down"} animate`}
                    aria-hidden
                  >
                    {isMonthlyUp ? ArrowUp : ArrowDown}
                  </span>
                  <span
                    className={
                      isMonthlyUp ? "text-emerald-600" : "text-red-600"
                    }
                  >
                    {isMonthlyUp ? "+" : "-"}
                    <AnimatedTrendValue value={monthlyChange} />
                  </span>
                  {monthlyPercent !== null && (
                    <span className="text-slate-500 text-sm">
                      ({monthlyPercent}%)
                    </span>
                  )}
                </div>
              ) : (
                <p className="mt-2 text-sm text-slate-500">Nicht genug Daten</p>
              )}
            </div>
          </div>

          <div className="space-y-3 rounded-xl shadow-lg bg-white p-4">
            <p className="text-sm font-medium text-slate-600">Navigation</p>

            <form onSubmit={handleDateSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="z.B. 2024-01"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="flex-1 rounded-lg shadow px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-bg px-3 py-2 text-sm font-medium cursor-pointer text-white hover:bg-purp"
              >
                Suchen
              </button>
            </form>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-lg bg-slate-100 px-3 cursor-pointer py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => setSelectedIndex(0)}
                disabled={!data || data.length === 0 || selectedIndex === 0}
              >
                Erstes
              </button>
              <button
                type="button"
                className="rounded-lg bg-slate-100 px-3 cursor-pointer py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() =>
                  setSelectedIndex((index) => Math.max(0, index - 1))
                }
                disabled={!hasPrev}
              >
                Zurück
              </button>
              <button
                type="button"
                className="rounded-lg bg-slate-100 px-3 cursor-pointer py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() =>
                  setSelectedIndex((index) =>
                    Math.min(data.length - 1, index + 1),
                  )
                }
                disabled={!hasNext}
              >
                Weiter
              </button>
              <button
                type="button"
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => setSelectedIndex(data.length - 1)}
                disabled={
                  !data ||
                  data.length === 0 ||
                  selectedIndex === data.length - 1
                }
              >
                Letztes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
