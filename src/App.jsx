import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import ProjektSida from "./pages/ProjektSida";
import ProjektDetalj from "./pages/ProjektDetalj";
import Kontakt from "./pages/kontakt";
import EjHittad from "./pages/EjHittad";

function App() {
  return (
    <>
      <Navbar
        lankar={[
          { namn: "Hem", till: "/" },
          { namn: "Om Mig", till: "/om-mig" },
          { namn: "Projekt", till: "/projekt" },
          { namn: "Kontakt", till: "/kontakt" },
        ]}
      />

      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/projekt" element={<ProjektSida />} />
        <Route path="/projekt/:id" element={<ProjektDetalj />} />
        <Route path="/kontakt" element={<Kontakt />} />
        {/* * = "allt annat". Står sist och fångar adresser som inte finns */}
        <Route path="*" element={<EjHittad />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
