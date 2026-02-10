import { PageHero } from "../components/PageHero";
import { Sparkles, Compass } from "lucide-react";

const kernwaarden = [
  {
    title: "SAMEN",
    values: ["verbinden", "openheid", "samenwerken", "kwaliteit"],
  },
  {
    title: "LEREN",
    values: ["procesgericht", "vaardigheden", "groepsdoorbrekend", "differentiatie"],
  },
  {
    title: "LEVEN",
    values: ["autonomie", "zelfstandigheid", "zeggenschap", "leerling centraal"],
  },
];

export default function MissieVisie() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Missie & Visie"
        title="Samen Leren Leven"
        description="Drie pijlers sturen alles wat we doen: SAMEN, LEREN, LEVEN. "
      />

      <section className="card space-y-4">
        <div className="grid sm:grid-cols-3 gap-4">
          {kernwaarden.map((blok) => (
            <div key={blok.title} className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm space-y-2">
              <p className="font-semibold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-accent" /> {blok.title}
              </p>
              <ul className="list text-sm">
                {blok.values.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-3">
        <p className="eyebrow">Visie</p>
        <h2 className="h2">Ontdekken, ontmoeten, eigenaarschap</h2>
        <ul className="list">
          <li>We starten en eindigen in een basisgroep; tussendoor werken kinderen in wisselende samenstellingen. </li>
          <li>Roosters zijn afgestemd op niveau en instructiebehoefte; blokken combineren leergebieden. </li>
          <li>Spelend leren en inspanning/ontspanning in balans; motivatie groeit door succeservaringen. </li>
          <li>Reflectie en eigenaarschap: kinderen nemen verantwoordelijkheid voor hun ontwikkeling. </li>
        </ul>
        <p className="text-sm text-slate-600 flex items-center gap-2"><Compass className="w-4 h-4 text-brand-primary" />
          "Samen Leren Leven" is ons kompas voor opvang én onderwijs. </p>
      </section>
    </div>
  );
}

