import AreaChart from "./AreaChart";
import StatsSection from "./StatsSection";
export default function Hero({ data, loading, error }) {
  return (
    <section className="bg-white p-8">
      {loading && <p className="mb-4 text-sm text-slate-500">Daten laden...</p>}

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      <div className="rounded-xl bg-white p-4">
        <p className="mb-3 text-sm font-medium text-slate-500">
          Analysebereich
        </p>

        {!loading && !error && <AreaChart data={data} />}
      </div>

      {!loading && !error && (
        <div className="mt-4">
          <StatsSection data={data} />
        </div>
      )}
    </section>
  );
}
