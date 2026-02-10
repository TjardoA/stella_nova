import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { ArrowRight, Users, Sparkles, Layers } from "lucide-react";

export default function Ikc() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="IKC Stella Nova"
        title="Wat is een IKC?"
        description="Opvang, BSO en basisschool op één plek met één missie, visie en team. Kinderen stromen soepel door. "
      />

      <section className="card">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Users className="w-10 h-10 text-brand-primary" />, title: "Eén team", text: "Pedagogisch medewerkers en leerkrachten plannen samen." },
            { icon: <Sparkles className="w-10 h-10 text-brand-accent" />, title: "Doorgaande lijn 0-12", text: "Ontwikkeling wordt gevolgd; plannen per kind." },
            { icon: <Layers className="w-10 h-10 text-brand-primary" />, title: "Unitonderwijs", text: "Leren in leerpleinen met meerdere leerkrachten." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-light bg-white/80 backdrop-blur p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-brand-primary font-semibold">{item.icon}<span>{item.title}</span></div>
              <p className="text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <Link className="btn-primary" to="/kennismaken">Plan een oriëntatiegesprek</Link>
          <Link className="btn-ghost" to="/informatieboekjes">Bekijk informatieboekjes</Link>
        </div>
      </section>

      <section className="card grid md:grid-cols-[1.1fr_1fr] gap-6 items-start">
        <div className="space-y-3">
          <p className="eyebrow">Voordelen</p>
          <h2 className="h2">Waarom een IKC werkt</h2>
          <ul className="list">
            <li>Één missie en visie voor opvang en onderwijs; iedereen werkt vanuit hetzelfde fundament. </li>
            <li>Dagelijkse afstemming tussen leerkrachten en pedagogisch medewerkers, zodat overgangen soepel zijn. </li>
            <li>Balans tussen veiligheid en uitdaging in elke dagindeling. </li>
            <li>Breed team (vakleerkrachten, ondersteuners) kijkt vanuit meerdere invalshoeken naar kinderen. </li>
          </ul>
        </div>
        <div className="card space-y-3">
          <p className="eyebrow">Gebouw & ruimtes</p>
          <h2 className="h2">Modern, open en flexibel</h2>
          <p className="text-slate-700">
            Geen traditionele lokalen, maar leerpleinen en hoeken die met kasten en kringen worden ingericht. Veel licht, goede akoestiek en aandacht voor duurzaamheid. 
          </p>
          <p className="text-sm text-slate-600">Alles onder één dak geeft rust voor ouders en kinderen. </p>
        </div>
      </section>

      <section className="card space-y-4">
        <p className="eyebrow">Meer weten</p>
        <h2 className="h2">Ontdek onze missie en aanpak</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Missie & visie</p>
            <p className="text-sm text-slate-700">Ieder kind is een “nieuwe ster” die we laten stralen met vernieuwend onderwijs en opvang. </p>
          </div>
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Samenwerking</p>
            <p className="text-sm text-slate-700">We zijn een samenwerking tussen Unicoz en Partou; ouders zijn partner in leren en opgroeien.</p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link className="btn-accent" to="/kennismaken">
            Kennismaken <ArrowRight className="w-4 h-4" />
          </Link>
          <Link className="btn-ghost" to="/actueel">
            Zie wat er nu speelt
          </Link>
        </div>
      </section>
    </div>
  );
}

