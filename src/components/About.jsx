export default function About() {
  return (
    <section className="max-w-2xl mx-auto flex min-h-100 flex-col justify-center gap-20">
      <div className="flex flex-col items-center gap-5 mt-20">
        <h1 className="font-bold text-xl">Features dieses Projekts:</h1>
        <ul>
          <li>Skalierbarer Chart</li>
          <li>Suche durch Datum nach Daten</li>
          <li>Monatliche Veränderung</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-bold text-xl">Was ist der Baltic Dry Index?</h1>
        <p>
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
