import { Link } from "react-router-dom";
import { Building2, Sparkles, Handshake } from "lucide-react";

export default function OverStellaNova() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-white shadow-lg p-8">
        <div className="absolute right-6 top-6 floating-star" />
        <div className="absolute left-10 bottom-6 floating-star blue" />
        <p className="eyebrow">Over Stella Nova</p>
        <h1 className="h2">Kinderopvang en onderwijs onder één dak</h1>
        <p className="text-slate-700 max-w-3xl">
          Stella Nova betekent “nieuwe ster”. We bieden opvang, BSO en basisschool in één modern gebouw in Rokkeveen. Eén
          team, één visie en een doorgaande lijn 0-12 jaar, zodat kinderen soepel doorgroeien. 
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm flex gap-3">
            <Building2 className="w-10 h-10 text-brand-primary" />
            <div>
              <p className="font-semibold text-slate-900">Modern gebouw</p>
              <p className="text-sm text-slate-700">Geen traditionele lokalen; open leerpleinen, veel licht en goede akoestiek. </p>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm flex gap-3">
            <Sparkles className="w-10 h-10 text-brand-accent" />
            <div>
              <p className="font-semibold text-slate-900">Doorgaande lijn</p>
              <p className="text-sm text-slate-700">Opvang → BSO → basisschool met afgestemde programma’s en ontwikkelplannen. </p>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm flex gap-3">
            <Handshake className="w-10 h-10 text-brand-primary" />
            <div>
              <p className="font-semibold text-slate-900">Samenwerking</p>
              <p className="text-sm text-slate-700">Partners Unicoz (onderwijs) en Partou (opvang) zorgen voor één pedagogisch team. </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <Link className="btn-primary" to="/kennismaken">Plan een rondleiding</Link>
          <Link className="btn-ghost" to="/informatieboekjes">Download informatieboekjes</Link>
        </div>
      </section>

      <section className="card space-y-3">
        <p className="eyebrow">Zo werkt het in de praktijk</p>
        <ul className="list">
          <li>Kinderen kunnen vanaf de opvang direct doorstromen naar onze basisschool; regels en aanpak zijn gelijk. </li>
          <li>Dagelijkse afstemming tussen leerkrachten en pedagogisch medewerkers over thema’s en zorg. </li>
          <li>Ruimtes zijn flexibel in te delen met kasten en kringen; zo creëren we leerhoeken of juist open ruimte. </li>
        </ul>
      </section>
    </div>
  );
}

