import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { StarField } from "./components/StarField";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dagopvang from "./pages/Dagopvang";
import BSO from "./pages/BSO";
import Basisschool from "./pages/Basisschool";
import Activiteiten from "./pages/Activiteiten";
import InfoBoekjes from "./pages/InfoBoekjes";
import Contact from "./pages/Contact";
import Ziekmelden from "./pages/Ziekmelden";
import Ikc from "./pages/Ikc";
import OverStellaNova from "./pages/OverStellaNova";
import MissieVisie from "./pages/MissieVisie";
import Team from "./pages/Team";
import PraktischeInfo from "./pages/PraktischeInfo";
import Actueel from "./pages/Actueel";
import Ouders from "./pages/Ouders";
import Kennismaken from "./pages/Kennismaken";
import MrOr from "./pages/MrOr";

export default function App() {
  return (
    <div className="bg-sand text-slate-900 min-h-screen relative overflow-hidden">
      <StarField />
      <NavBar />
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-6 space-y-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ikc" element={<Ikc />} />
          <Route path="/over-stella-nova" element={<OverStellaNova />} />
          <Route path="/missie-visie" element={<MissieVisie />} />
          <Route path="/team" element={<Team />} />
          <Route path="/basisschool" element={<Basisschool />} />
          <Route path="/opvang" element={<Dagopvang />} />
          <Route path="/bso" element={<BSO />} />
          <Route path="/praktische-info" element={<PraktischeInfo />} />
          <Route path="/actueel" element={<Actueel />} />
          <Route path="/activiteiten" element={<Activiteiten />} />
          <Route path="/informatieboekjes" element={<InfoBoekjes />} />
          <Route path="/ziekmelden" element={<Ziekmelden />} />
          <Route path="/ouders" element={<Ouders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kennismaken" element={<Kennismaken />} />
          <Route path="/mr-or" element={<MrOr />} />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
