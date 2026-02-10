import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Phone, Sun, MoonStar, School } from "lucide-react";

export default function Home() {
  const quickLinks = [
    { title: "Basisschool", to: "/basisschool", icon: <School className="w-5 h-5" /> },
    { title: "Kinderopvang", to: "/opvang", icon: <Sun className="w-5 h-5" /> },
    { title: "BSO", to: "/bso", icon: <MoonStar className="w-5 h-5" /> },
    { title: "Actueel", to: "/actueel", icon: <CalendarDays className="w-5 h-5" /> },
    { title: "Ziekmelden", to: "/ziekmelden", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white/90 via-white to-brand-light/40 shadow-xl border border-brand-light p-10 lg:p-12">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-[0.08em]">IKC Stella Nova</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Eén huis voor opvang, BSO en basisschool.</h1>
            <p className="text-lg max-w-xl text-slate-700">
              Wij zijn een integraal kindcentrum in Rokkeveen. Eén team, één pedagogische lijn en een doorgaande ontwikkeling van 0-12 jaar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" to="/kennismaken">Plan een rondleiding</Link>
              <Link className="btn-accent" to="/informatieboekjes">Bekijk informatieboekjes</Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link key={link.title} to={link.to} className="chip">
                  {link.icon} <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-xl overflow-hidden border border-brand-light">
            <div className="h-64 sm:h-80 bg-[url('/schoolfront.webp')] bg-cover bg-center" />
            <div className="p-4 sm:p-6 space-y-1 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Eigen locatie in Rokkeveen</p>
              <p>Flexibele leerpleinen, veel licht en goede akoestiek. </p>
            </div>
          </div>
        </div>
      </section>

      {/* WIE WIJ ZIJN */}
      <section className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 border border-brand-light space-y-3">
        <p className="eyebrow">Wie wij zijn</p>
        <h2 className="h2">Vrolijk, veilig en vooruitstrevend</h2>
        <p className="text-slate-700 max-w-4xl">
          We werken in units (open leerpleinen) en stemmen opvang en onderwijs dagelijks af. Kinderen ontdekken, ontmoeten en nemen
          verantwoordelijkheid voor hun eigen leren. 
        </p>
        <Link to="/ikc" className="btn-accent inline-flex items-center gap-2 w-fit">Wat is een IKC? <ArrowRight className="w-4 h-4" /></Link>
      </section>

      {/* WAAROM */}
      <section className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 border border-brand-light space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">Waarom Stella Nova</p>
          <h2 className="h2">Doorgaande lijn 0-12 jaar</h2>
        </div>
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="space-y-3">
            <ul className="list">
              <li>Één missie, visie en team voor opvang én onderwijs. </li>
              <li>Unitonderwijs: meerdere leerkrachten per unit, veel ruimte voor maatwerk. </li>
              <li>Flexibele ruimtes met leerhoeken, veel licht en goede akoestiek. </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white shadow-md border border-brand-light p-6 space-y-3">
            <p className="font-semibold text-slate-900">Snelle feiten</p>
            <ul className="list">
              <li>36 plekken per jaar voor groep 1; opvang-doorstroom geeft voorrang. </li>
              <li>Samenwerking Unicoz (onderwijs) & Partou (opvang). </li>
              <li>Rokkeveen, Willem Alexanderplantsoen 2, Zoetermeer.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ZIEKMELDEN */}
      <section className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 border border-brand-light space-y-4">
        <p className="eyebrow">Ziekmelden</p>
        <div className="grid md:grid-cols-[1fr_0.9fr] gap-6 items-start">
          <div>
            <h2 className="h2">Zo meld je je kind ziek</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Meld via Parro.</li>
              <li>Mail de basisgroepleerkracht.</li>
              <li>Bel het algemene nummer: 079 316 91 84.</li>
            </ol>
            <Link className="btn-primary mt-3 inline-flex" to="/ziekmelden">Bekijk ziekmeldinformatie</Link>
          </div>
          <div className="rounded-2xl bg-white shadow border border-brand-light p-6 space-y-2">
            <p className="font-semibold text-slate-900">Handig</p>
            <p className="text-sm text-slate-700">Sla het nummer op in je favorieten en zet Parro-notificaties aan.</p>
            <p className="text-sm text-slate-700">Ziekmeldingen graag vóór 08:15 uur doorgeven. </p>
          </div>
        </div>
      </section>
    </div>
  );
}

