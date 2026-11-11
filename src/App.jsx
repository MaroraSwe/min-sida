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
import FizzBuzz from "./pages/FizzBuzz";
import ScrollToTop from "./components/ScrollToTop";
import MinServer from "./components/MinServer";

function App() {
  return (
    <>
      {/* Rullar upp till toppen vid varje sidbyte */}
      <ScrollToTop />

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
        {/* Dold sida: finns inte i menyn, bara om man skriver /fizzbuzz */}
        <Route path="/fizzbuzz" element={<FizzBuzz />} />
        {/* Hämtar från min egen server – fungerar när servern körs på datorn */}
        <Route path="/server" element={<MinServer />} />
        {/* * = "allt annat". Står sist och fångar adresser som inte finns */}
        <Route path="*" element={<EjHittad />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
