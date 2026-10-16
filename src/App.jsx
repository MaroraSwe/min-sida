import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Hem from "./Pages/Hem";
import OmMig from "./Pages/OmMig";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;