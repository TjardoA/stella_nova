import { PageHero } from "../components/PageHero";

export default function BSO() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="BSO"
        title="Na school nog steeds ontdekken"
        description="Sport, koken, techniek en veel buiten. Flexibele pakketten voor vakantie- en studiedagen."
      />
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="photo-card bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80')]" />
        <div className="card">
          <p className="eyebrow">BSO</p>
          <h2 className="h2">Vrije tijd die bruist van activiteiten</h2>
          <ul className="list">
            <li>Openingstijden afgestemd op werktijden ouders</li>
            <li>Workshops met lokale partners en sportclubs</li>
            <li>Eigen stamruimte voor elke groep</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
