import { Users } from "lucide-react";

const teamCards = [
  { role: "Locatiedirecteur", names: "Rick van der Hoek", unit: "Directie" },
  { role: "Intern begeleiders", names: "Joanna, Celeste", unit: "Zorg & begeleiding" },
  { role: "Unit 1 (groep 1/2)", names: "Annemieke, Joanne, Mariëtte", unit: "Onderbouw" },
  { role: "Unit 2 (groep 3/4)", names: "Mirjam, Daniëlle, Manon", unit: "Middenbouw" },
  { role: "Unit 3 (groep 5/6)", names: "Ella, Pascal, Davy", unit: "Middenbouw" },
  { role: "Unit 4 (groep 7/8)", names: "Monique, Robin", unit: "Bovenbouw" },
  { role: "Onderwijsassistenten", names: "Amber, Ella, Anne", unit: "Ondersteuning" },
  { role: "Vakleerkrachten", names: "Gym Marloes | Muziek Amber | ICT Davy", unit: "Specialisten" },
];

const placeholder = "https://placehold.co/240x240/1f3b83/ffffff?text=Team+foto";

export default function Team() {
  return (
    <section className="card space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-8 h-8 text-brand-primary" />
        <div>
          <p className="eyebrow">Team</p>
          <h1 className="h2 m-0">Samen voor de kinderen</h1>
        </div>
      </div>
      <p className="text-slate-700">
        Eén team van leerkrachten, pedagogisch medewerkers, vakleerkrachten en ondersteuners. We stemmen dagelijks af zodat opvang en
        onderwijs op elkaar aansluiten. citeturn0search0
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamCards.map((member) => (
          <div key={member.role} className="rounded-3xl border border-brand-light bg-white p-5 shadow-md space-y-4">
            <div className="w-full h-48 rounded-2xl overflow-hidden ring-2 ring-brand-light bg-brand-light/60">
              <img src={placeholder} alt="Team placeholder" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">{member.role}</p>
              <p className="text-sm text-slate-700">{member.names}</p>
              <p className="text-xs text-brand-primary font-semibold uppercase tracking-wide">{member.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
