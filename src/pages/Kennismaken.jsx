import { Link } from "react-router-dom";
import { Star, Mail, Phone, CheckCircle2, AlertTriangle, CalendarClock, Send } from "lucide-react";

const aanmeldBlokken = [
  {
    title: "Aanmelden groep 1",
    bullets: [
      "36 plekken per schooljaar; broertjes/zusjes en kinderen uit onze opvang krijgen voorrang.",
      "Gemeentelijk digitaal aanmeldsysteem vanaf 1 januari 2025; voorkeur voor drie scholen opgeven.",
      "Kinderen geboren op/na 1 januari 2022 kunnen vanaf 12 maart 2025 digitaal worden aangemeld.",
    ],
    cite: "",
  },
  {
    title: "Zij-instroom",
    bullets: [
      "Overstap kan alleen als er plek is; we stemmen af met de huidige school.",
      "Redenen kunnen zijn verhuizing of specifieke onderwijsbehoefte.",
      "Je hoort binnen zes weken na sluiting van de aanmeldperiode of er plaats is.",
    ],
    cite: "",
  },
];

const beschikbaarheid = [
  { groep: "Groep 1-2", status: "Vol voor 2024-2025", accent: true },
  { groep: "Zij-instroom (bovenbouw)", status: "Op aanvraag" },
  { groep: "Opvang 0-4", status: "Plaatsen in overleg" },
];

export default function Kennismaken() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-white shadow-lg p-8">
        <div className="absolute right-6 top-6 floating-star" />
        <div className="absolute left-10 bottom-6 floating-star blue" />
        <p className="eyebrow">Kennismaken</p>
        <h1 className="h2">Kennismaken en aanmelden nieuwe leerlingen</h1>
        <p className="text-slate-700 max-w-3xl">
          Plan een rondleiding of kennismakingsgesprek. We vertellen graag hoe opvang, BSO en basisschool op elkaar aansluiten
          binnen IKC Stella Nova. 
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <a className="btn-primary inline-flex items-center gap-2" href="mailto:directie@ikcstellanova.unicoz.nl">
            <Star className="w-4 h-4" /> Plan een rondleiding
          </a>
          <Link className="btn-ghost" to="/contact">Bekijk contactgegevens</Link>
        </div>
      </section>

      <section className="card grid md:grid-cols-[1fr_1fr] gap-6 items-start">
        <div className="space-y-4">
          {aanmeldBlokken.map((blok) => (
            <div key={blok.title} className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm space-y-2">
              <p className="font-semibold text-slate-900 flex items-center gap-2">
                <CalendarClock className="w-5 h-5 text-brand-accent" /> {blok.title}
              </p>
              <ul className="list text-sm">
                {blok.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-500">{blok.cite}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-brand-accent" /> Beschikbaarheid
            </p>
            <ul className="space-y-2 mt-2">
              {beschikbaarheid.map((item) => (
                <li key={item.groep} className="flex items-center justify-between text-sm text-slate-800">
                  <span>{item.groep}</span>
                  <span className={item.accent ? "text-amber-700 font-semibold" : "text-slate-600"}>{item.status}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm space-y-2">
            <p className="font-semibold text-slate-900">Vragen?</p>
            <p className="text-sm text-slate-700">Mail of bel ons, dan plannen we een oriëntatiegesprek.</p>
            <div className="flex flex-col gap-2 text-sm text-slate-800">
              <a className="link" href="mailto:directie@ikcstellanova.unicoz.nl">
                <Mail className="w-4 h-4" /> directie@ikcstellanova.unicoz.nl
              </a>
              <a className="link" href="tel:0793169184">
                <Phone className="w-4 h-4" /> 079 316 91 84
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-light bg-white p-4 shadow-sm flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5" />
            <span>Tip: zet het aanmeldmoment in je agenda en houd je e-mail in de gaten voor bevestiging.</span>
          </div>
        </div>
      </section>

      <section className="card space-y-4">
        <p className="eyebrow">Aanmeldformulier</p>
        <h2 className="h2">Meld je kind aan voor een kennismaking</h2>
        <p className="text-slate-700 text-sm">
          Vul je gegevens in; we nemen binnen 2 werkdagen contact op om een rondleiding of gesprek te plannen.
        </p>
        <form
          className="grid md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Bedankt! We nemen contact met je op.");
          }}
        >
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Naam ouder(s)/verzorger(s)
            <input required className="input" type="text" name="ouder" placeholder="Voor- en achternaam" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            E-mail
            <input required className="input" type="email" name="email" placeholder="voorbeeld@mail.nl" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Telefoon
            <input required className="input" type="tel" name="tel" placeholder="06-" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Naam kind
            <input required className="input" type="text" name="kind" placeholder="Voor- en achternaam" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Geboortedatum kind
            <input required className="input" type="date" name="geboortedatum" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Huidige opvang / school
            <input className="input" type="text" name="huidig" placeholder="Bijv. Partou Rokkeveen / peuteropvang / andere school" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Interesse
            <select className="input" name="interesse" defaultValue="kennismaking">
              <option value="kennismaking">Kennismakingsgesprek / rondleiding</option>
              <option value="groep1">Aanmelden groep 1</option>
              <option value="zij-instroom">Zij-instroom</option>
              <option value="opvang">Dagopvang</option>
              <option value="bso">BSO</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800 md:col-span-2">
            Gewenste start / opmerking
            <textarea
              className="input h-24 resize-vertical"
              name="opmerking"
              placeholder="Bijv. start in groep 1 per sept, vragen, voorkeur datum rondleiding"
            ></textarea>
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800 md:col-span-2">
            Voorkeursmoment kennismaking
            <input className="input" type="date" name="voorkeursdatum" />
          </label>
          <label className="flex items-start gap-2 text-sm text-slate-700 md:col-span-2">
            <input required type="checkbox" className="mt-1" name="akkoord" />
            <span>
              Ik ga akkoord dat IKC Stella Nova mijn gegevens gebruikt om contact met mij op te nemen over deze aanmelding.
            </span>
          </label>
          <div className="md:col-span-2 flex gap-3 items-center">
            <button type="submit" className="btn-primary inline-flex items-center gap-2">
              <Send className="w-4 h-4" /> Verstuur
            </button>
            <p className="text-xs text-slate-600">
              Door dit formulier te versturen ga je akkoord dat we contact met je opnemen over je aanmelding.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

