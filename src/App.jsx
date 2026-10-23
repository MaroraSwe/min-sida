import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/kontakt";

function App() {
  return (
    <>
      <Navbar
        lankar={[
          { namn: "Hem", till: "/" },
          { namn: "Om Mig", till: "/om-mig" },
          { namn: "Projekt", till: "/#projekt" },
          { namn: "Kontakt", till: "/kontakt" },
        ]}
      />

      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;