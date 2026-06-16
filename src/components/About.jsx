export default function About() {
  return (
    <section className="bg-white p-10 flex flex-col justify-center gap-20 mt-10 mb-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-2xl">Features dieses Projekts:</h1>
        <ul className="list-disc pl-5 text-slate-700">
          <li>Skalierbarer Chart</li>
          <li>Suche durch Datum nach Daten</li>
          <li>Monatliche Veränderung</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-bold text-2xl">Was ist der Baltic Dry Index?</h1>
        <p className="text-slate-700 leading-7 max-w-170">
          Der Baltic Dry Index (BDI) ist ein wirtschaftlicher Indikator, der die
          Kosten für den Transport von Rohstoffen auf internationalen
          Seehandelsrouten misst. Er wird auf Basis der Frachtraten für
          verschiedene Schiffstypen berechnet, die Schüttgut wie Eisenerz, Kohle
          oder Getreide transportieren. Der Index gilt als Frühindikator für die
          globale wirtschaftliche Aktivität, da steigende Frachtraten auf eine
          erhöhte Nachfrage nach Rohstoffen und damit auf eine wachsende
          Produktion hindeuten. Umgekehrt können sinkende Werte auf eine
          Abschwächung hinweisen. Somit wird der BDI von Marktanalysten und
          Ökonomen genutzt, um kurzfristige Trends in der Weltwirtschaft
          abzuleiten.
        </p>
      </div>
    </section>
  );
}
