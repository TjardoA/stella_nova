import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";

export default function InfoBoekjes() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Informatieboekjes"
        title="Alle praktische info bij elkaar"
        description="Schooltijden, studiedagen, verlofaanvragen en afspraken per bouw."
      />
      <section className="card grid md:grid-cols-[1.2fr_1fr] gap-8">
        <div className="space-y-3">
          <p className="eyebrow">Direct naar</p>
          <a
            className="btn-primary"
            href="https://www.ikcstellanova.nl/ikc-stella-nova/informatieboekjes"
            target="_blank"
            rel="noreferrer"
          >
            Bekijk informatieboekjes
          </a>
          <p className="text-slate-700 text-sm">Tip: zet de link als snelkoppeling op je telefoon.</p>
        </div>
        <div className="rounded-3xl border border-brand-light bg-white shadow-lg p-6 space-y-3">
          <p className="font-semibold text-slate-900">Wat staat erin?</p>
          <ul className="list">
            <li>Schooltijden, vakanties en studiedagen</li>
            <li>Communicatie via Parro en nieuwsbrieven</li>
            <li>Gezondheid, veiligheid en privacy</li>
          </ul>
          <Link className="btn-ghost" to="/praktische-info">Zie praktische info</Link>
        </div>
      </section>
    </div>
  );
}
