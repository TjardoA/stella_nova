import { PageHero } from "../components/PageHero";

export default function Dagopvang() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Dagopvang"
        title="Zachte landing voor de allerkleinsten"
        description="Vaste stamgroepen, veel buiten spelen en dagelijkse updates via Parro."
      />
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="card">
          <p className="eyebrow">Dagopvang 0-4 jaar</p>
          <h2 className="h2">Spelend leren in een warme omgeving</h2>
          <ul className="list">
            <li>Rijke hoeken voor spelend leren</li>
            <li>Schaduwrijke tuin & waterpret in de zomer</li>
            <li>Samenwerking met Partou voor opvangkwaliteit</li>
          </ul>
          <p className="text-slate-700 mt-3">Dagelijks contact via Parro; korte lijnen met leerkrachten.</p>
          <a className="btn-primary mt-4 inline-flex" href="mailto:directie@ikcstellanova.unicoz.nl">Vraag opvangplekken op</a>
        </div>
        <div className="photo-card bg-[url('https://images.unsplash.com/photo-1508829025540-9725d6b54e9a?auto=format&fit=crop&w=1200&q=80')]" />
      </section>
    </div>
  );
}
