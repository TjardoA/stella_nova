export default function Ziekmelden() {
  return (
    <section className="card grid lg:grid-cols-2 gap-6">
      <div>
        <p className="eyebrow">Ziekmelden</p>
        <h2 className="h2">Zo meld je je kind ziek</h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li>Geef de ziekmelding door via Parro.</li>
          <li>Mail de basisgroepleerkracht van je kind.</li>
          <li>Bel het algemene nummer: 079 316 91 84.</li>
        </ol>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-brand-light to-white p-6 shadow-inner border border-brand-light">
        <p className="font-semibold text-slate-800 mb-2">Handig bij de hand</p>
        <p className="text-sm text-slate-700">Voeg het nummer toe aan je favorieten en zet Parro notificaties aan.</p>
        <a className="link mt-3 inline-flex items-center gap-2" href="/contact">
          Contact opnemen
        </a>
      </div>
    </section>
  );
}
