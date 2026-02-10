import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";

export default function Basisschool() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Basisschool"
        title="Unitonderwijs: leren in licht, open ruimtes"
        description="Teams van leerkrachten begeleiden leerlingen op niveau. Aandacht voor talent, burgerschap en digitale geletterdheid."
      />
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="card">
          <p className="eyebrow">Basisschool</p>
          <h2 className="h2">Leren met meerdere leerkrachten per unit</h2>
          <ul className="list">
            <li>Schooltijden in lijn met middelbare vakanties</li>
            <li>Leerlingen vanaf groep 1 in units</li>
            <li>Christelijke identiteit, open voor iedereen</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link className="btn-primary" to="/activiteiten">Bekijk activiteiten</Link>
            <Link className="btn-ghost" to="/informatieboekjes">Download schoolgids</Link>
          </div>
        </div>
        <div className="photo-card bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80')]" />
      </section>
    </div>
  );
}
