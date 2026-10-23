import "./Projekt.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/Hero1.jpg";
import bild2 from "../assets/Hero2.jpg";
import bild3 from "../assets/Hero3.jpg";

const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    beskrivning: "Sidan du tittar på nu. Byggd med React och CSS.",
    teknik: "React",
    bild: bild1,
    länk: "https://github.com/MaroraSwe/min-sida",
  },
  {
    id: 2,
    titel: "Räknare",
    beskrivning: "Interaktiv räknare med useState som byter färg efter värdet.",
    teknik: "React",
    bild: bild2,
    länk: "https://github.com/MaroraSwe/min-sida",
  },
  {
    id: 3,
    titel: "Kontaktformulär",
    beskrivning: "Formulär med kontrollerade fält, validering och tackmeddelande.",
    teknik: "React",
    bild: bild3,
    länk: "https://github.com/MaroraSwe/min-sida",
  },
];

function Projekt() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#projekt") {
      document.getElementById("projekt").scrollIntoView();
    }
  }, [hash]);

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
         {projekt.map((p) => (
          <ProjektKort
            key={p.id}
            titel={p.titel}
            beskrivning={p.beskrivning}
            teknik={p.teknik}
            bild={p.bild}
            länk={p.länk}
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;