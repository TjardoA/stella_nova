import { PageHero } from "../components/PageHero";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.7543015456315!2d4.4840635!3d52.0545706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c925ab5c07d5%3A0x60783e5daac6a6de!2sIKC%20Stella%20Nova!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl";
const mapsLink = "https://www.google.com/maps/place/IKC+Stella+Nova/@52.0545706,4.4840635,16z/data=!3m1!4b1!4m6!3m5!1s0x47c5c925ab5c07d5:0x60783e5daac6a6de!8m2!3d52.0545706!4d4.4866384!16s%2Fg%2F1td4tgdj";

export default function Contact() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Contact"
        title="Kom langs of plan een gesprek"
        description="Bel, mail of vul het formulier in. We reageren binnen twee werkdagen."
      />

      <section className="card grid md:grid-cols-[1.1fr_1fr] gap-6">
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4 text-slate-700">
            <p className="flex items-start gap-3"><MapPin className="mt-1 w-5 h-5 text-brand-primary" /> Willem Alexanderplantsoen 2, 2713 VM Zoetermeer</p>
            <p className="flex items-start gap-3"><Phone className="mt-1 w-5 h-5 text-brand-primary" /> 079 316 91 84</p>
            <p className="flex items-start gap-3"><Mail className="mt-1 w-5 h-5 text-brand-primary" /> directie@ikcstellanova.unicoz.nl</p>
            <p className="flex items-start gap-3"><Clock className="mt-1 w-5 h-5 text-brand-primary" /> Bereikbaar op schooldagen 08:00 - 16:30</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a className="btn-primary inline-flex items-center gap-2" href="mailto:directie@ikcstellanova.unicoz.nl">
              Mail de directie
            </a>
            <a className="btn-ghost inline-flex items-center gap-2" href={mapsLink} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
          <p className="text-sm text-slate-600">IKC Stella Nova is een samenwerking tussen Unicoz en Partou.</p>
          <div className="rounded-3xl overflow-hidden border border-brand-light shadow-sm">
            <iframe
              title="IKC Stella Nova locatie"
              src={mapsUrl}
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Bedankt! We nemen contact met je op.");
          }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
              Naam
              <input className="input" name="naam" required placeholder="Voor- en achternaam" />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
              E-mail
              <input className="input" type="email" name="email" required placeholder="voorbeeld@mail.nl" />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
              Telefoon
              <input className="input" type="tel" name="tel" placeholder="06-" />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
              Onderwerp
              <input className="input" name="onderwerp" placeholder="Bijv. rondleiding, vraag opvang, ziekmelding" />
            </label>
          </div>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
            Bericht
            <textarea className="input h-28 resize-vertical" name="bericht" required placeholder="Je vraag of bericht"></textarea>
          </label>
          <button type="submit" className="btn-primary inline-flex items-center gap-2">
            <Send className="w-4 h-4" /> Verstuur
          </button>
        </form>
      </section>
    </div>
  );
}
