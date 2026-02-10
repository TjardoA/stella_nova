import { PageHero } from "../components/PageHero";
import { ArrowRight } from "lucide-react";

const calendar = [
  { date: "29 jan", title: "Themaweek Kunst", note: "Groep 1-8" },
  { date: "06 feb", title: "Ouderavond unit 2", note: "19:00 uur" },
  { date: "12 feb", title: "Kennismiddag nieuwe ouders", note: "Meld je aan" },
];

export default function Activiteiten() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Activiteiten"
        title="Wat er binnenkort gebeurt"
        description="Agenda met themaweken, ouderavonden en kennismiddagen."
      />
      <section className="card space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Binnenkort</p>
            <h2 className="h2">Activiteiten</h2>
          </div>
          <a className="link" href="https://www.ikcstellanova.nl/activiteiten" target="_blank" rel="noreferrer">
            Hele kalender <ArrowRight className="inline w-4 h-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {calendar.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-brand-primary">{item.date}</p>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
