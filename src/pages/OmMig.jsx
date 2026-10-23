import "./OmMig.css";
import Self from "../assets/Self.jpg";
import { useState } from "react";

const egenskaper = ["Inspiratör", "Ledare", "Samordnare", "Lagspelare"];

const kompetenser = [
  "Administration",
  "Verksamhetsstöd",
  "Kundframgång",
  "Verksamhetsdrift",
  "Säljstöd",
  "Utbildning",
  "Kund- och medarbetarintroduktion",
];

const kurs = ["React", "JavaScript", "REST API"];

function OmMig() {
  const [visas, setVisas] = useState(false);

  return (
    <section className="om-mig" id="om-mig">
      <img
        className="om-mig-bild"
        src={Self}
        alt="Illustrerat porträtt av Meenakshi Arora."
      />
      <div className="om-mig-innehall">
        <h2>Om mig</h2>

        <p className="om-mig-text">
          Jag heter Meenakshi Arora och går på Tech School, där jag lär mig att bygga
          för webben. Den här sidan är mitt första projekt i React.
        </p>

        {visas && (
          <>
            <p className="om-mig-text">
              Jag tycker om att förenkla vardagen för människorna omkring mig. Att hjälpa
              andra att nå sina mål samtidigt som jag arbetar mot mina egna ger mig mycket.
              Jag trivs med att samordna och samarbeta, ta initiativ och ge stöd när det
              behövs, för jag tror att vi når bäst resultat tillsammans.
            </p>
            <p className="om-mig-text">
              Här lär jag mig att bygga sidor med komponenter och att spara min kod på
              GitHub.
            </p>
          </>
        )}

        <button className="om-mig-knapp" onClick={() => setVisas(!visas)}>
          {visas ? "Visa mindre" : "Läs mer om mig"}
        </button>
      </div>

      {/* Hela bredden under text och bild */}
      <div className="om-mig-styrkor">
        <h3>Mina styrkor</h3>

        <div className="styrkor-grupper">
          <div>
            <h4 className="styrkor-rubrik">Egenskaper</h4>
            <ul className="om-mig-lista styrkor">
              {egenskaper.map((ord, i) => (
                <li key={ord} style={{ animationDelay: `${i * 0.4}s` }}>{ord}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="styrkor-rubrik">Kompetenser</h4>
            <ul className="om-mig-lista styrkor">
              {kompetenser.map((ord, i) => (
                <li key={ord} style={{ animationDelay: `${i * 0.4}s` }}>{ord}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3>Det här lär jag mig i kursen</h3>
        <ul className="om-mig-lista styrkor">
          {kurs.map((ord, i) => (
            <li key={ord} style={{ animationDelay: `${i * 0.4}s` }}>{ord}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OmMig;