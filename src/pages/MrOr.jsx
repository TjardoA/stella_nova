import { PageHero } from "../components/PageHero";
import { Users, ShieldCheck, Vote, Mail } from "lucide-react";

const mrTaken = [
  "Advies en instemming over schoolbeleid (bijv. schoolplan, formatie, veiligheid)",
  "Aanspreekpunt voor ouders en medewerkers", 
  "Samenwerken met directie en bestuur (Unicoz)"
];

const orTaken = [
  "Organiseren en ondersteunen van activiteiten (vieringen, sport, uitjes)",
  "Meedenken over ouderbetrokkenheid en communicatie",
  "Helpen bij fondsenwerving en praktische hulp"
];

export default function MrOr() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="MR & OR"
        title="Medezeggenschap en Ouderraad"
        description="De MR praat mee over beleid, de OR zorgt voor activiteiten en ouderbetrokkenheid. Samen maken we de school beter en leuker."
      />

      <section className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 border border-brand-light space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="eyebrow flex items-center gap-2"><Vote className="w-5 h-5 text-brand-primary" /> MR (Medezeggenschapsraad)</p>
            <p className="text-slate-700">Bestaat uit ouders en personeelsleden. Bespreekt onder meer schoolplan, begroting en veiligheid.</p>
            <ul className="list">
              {mrTaken.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">Wil je meedenken of heb je een onderwerp voor de MR? Stuur een mail.</p>
          </div>

          <div className="space-y-3">
            <p className="eyebrow flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-accent" /> OR (Ouderraad)</p>
            <p className="text-slate-700">Helpt bij de organisatie van vieringen en activiteiten en houdt ouderbetrokkenheid hoog.</p>
            <ul className="list">
              {orTaken.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">Ook helpen? Geef je op als vrijwilliger of spreek de OR aan bij een activiteit.</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow border border-brand-light p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900">Contact MR/OR</p>
            <p className="text-sm text-slate-700">Mail je vraag of voorstel; we nemen contact op.</p>
          </div>
          <a className="btn-primary inline-flex items-center gap-2" href="mailto:mr.ikcstellanova@unicoz.nl">
            <Mail className="w-4 h-4" /> mr.ikcstellanova@unicoz.nl
          </a>
        </div>
      </section>
    </div>
  );
}
