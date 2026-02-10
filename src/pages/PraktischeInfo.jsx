import { PageHero } from "../components/PageHero";

export default function PraktischeInfo() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Praktische info"
        title="Alles wat je moet weten"
        description="Schooltijden, vakanties, communicatie en afspraken in één overzicht."
      />
      <section className="card space-y-4">
        <ul className="list">
          <li>Schooltijden, vakanties en studiedagen staan in de informatieboekjes (per bouw). citeturn0search1</li>
          <li>Communicatie via Parro en nieuwsbrieven; korte lijnen met leerkrachten. citeturn0search1</li>
          <li>Gezonde school: fruit, bewegen en veilige omgeving.</li>
          <li>Verlof & ziekmeldingen: digitaal melden via Parro en telefonisch doorgeven.</li>
        </ul>
      </section>
    </div>
  );
}
