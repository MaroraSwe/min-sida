import "./OmMig.css";
import Self from "../assets/Self.jpg";
import { useState } from "react";
import Intressen from "../components/Intressen";

// Mina styrkor: en kort mening som visar VARFÖR – inte bara ett ord.
// Skriv bara sådant som är sant och som du kan berätta mer om på en intervju.
const styrkor = [
  {
    titel: "Samordnare, Stöd, Administration",
    ikon: "calendar-check-outline",
    text: "Projektkoordinering, affärsstöd, verksamhetsstöd och kundframgång inom IT och finans.",
  },
  {
    titel: "Erfarenhet inom IT och finans",
    ikon: "swap-horizontal",
    text: "Det bästa av två världar – jag tar med mig kunskap från både IT och finans in i mitt arbete.",
  },
  {
    titel: "Lagspelare",
    ikon: "handshake-outline",
    text: "Jag hjälper andra att nå sina mål samtidigt som jag når mina egna. Vi når längst tillsammans.",
  },
  {
    titel: "Tre språk",
    ikon: "translate",
    text: "Jag arbetar på Engelska, Hindi och Svenska.",
  },
];

// Kompetenser i fyra grupper. Varje rad: [namn, ikon] (ikonen används inte just nu)
const kompetenser = [
  {
    rubrik: "Webbutveckling",
    lista: [
      ["React", "atom"],
      ["JavaScript", "code-tags"],
      ["REST API", "api"],
      ["useState", "variable"],
      ["useEffect", "lightning-bolt-outline"],
      ["CSS", "palette-swatch-outline"],
      ["Git", "source-branch"],
      ["Formspree", "send-outline"],
      ["localStorage", "content-save-outline"],
    ],
  },
  {
    rubrik: "Verksamhet",
    lista: [
      ["Projektkoordinering", "clipboard-text-outline"],
      ["Affärsstöd", "briefcase-outline"],
      ["Verksamhetsstöd", "lifebuoy"],
      ["Verksamhetsdrift", "cog-outline"],
      ["Kundframgång", "trending-up"],
      ["Utbildning", "school-outline"],
      ["Administration", "folder-open-outline"],
      ["Säljstöd", "point-of-sale"],
      ["Kund- och medarbetarintroduktion", "account-plus-outline"],
    ],
  },
  {
    rubrik: "Verktyg",
    lista: [
      ["Microsoft 365", "file-document-outline"],
      ["Jira", "view-dashboard-outline"],
      ["Confluence", "book-open-outline"],
      ["SharePoint", "share-variant-outline"],
      ["Power BI", "chart-bar"],
      ["Slack", "slack"],
    ],
  },
  {
    rubrik: "Egenskaper",
    lista: [
      ["Inspiratör", "lightbulb-outline"],
      ["Ledare", "account-group-outline"],
      ["Samordnare", "calendar-check-outline"],
      ["Lagspelare", "handshake-outline"],
    ],
  },
];

function OmMig() {
  const [visas, setVisas] = useState(false);

  return (
    <section className="om-mig" id="om-mig">
      {/* Toppen: text till vänster, foto till höger */}
      <div className="om-mig-topp">
        <div className="om-mig-innehall">
          <h2>Om mig</h2>
          <p className="om-mig-hej">Hej! Jag heter Meenakshi Arora.</p>
          <p className="om-mig-text">
            Jag tycker om att förenkla vardagen, lösa problem och hjälpa människor att
            lyckas tillsammans.
          </p>
          <p className="om-mig-text">
            Jag kombinerar erfarenhet inom IT och finans med struktur, samarbete,
            nyfikenhet och en ständig vilja att utvecklas.
          </p>

          {visas && (
            <>
              <p className="om-mig-text">
                Jag går på Tech School, där jag lär mig att bygga för webben med React. Den
                här sidan är mitt första projekt, och koden sparar jag på GitHub.
              </p>
              <p className="om-mig-text">
                Jag trivs med att samordna och samarbeta, ta initiativ och ge stöd när det
                behövs, för jag tror att vi når bäst resultat tillsammans.
              </p>
            </>
          )}

          {/* aria-expanded berättar för skärmläsare om texten är utfälld */}
          <button
            className={visas ? "om-mig-knapp oppen" : "om-mig-knapp"}
            onClick={() => setVisas(!visas)}
            aria-expanded={visas}
          >
            {visas ? "Visa mindre" : "Läs mer om mig"}
          </button>
        </div>

        <img
          className="om-mig-bild"
          src={Self}
          alt="Porträtt av Meenakshi Arora."
        />
      </div>

      {/* Mina styrkor: fyra kort */}
      <div className="om-mig-del">
        <h2>Mina styrkor</h2>
        <div className="styrke-lista">
          {styrkor.map((s) => (
            <article className="styrke-kort" key={s.titel}>
              <h3>{s.titel}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Kompetenser: fyra kort, som Mina styrkor */}
      <div className="om-mig-del">
        <h2>Kompetenser</h2>
        <div className="kompetens-grupper">
          {kompetenser.map((grupp) => (
            <div className="kompetens-kort" key={grupp.rubrik}>
              <h3>{grupp.rubrik}</h3>
              <ul className="kompetens-lista">
                {grupp.lista.map(([namn]) => (
                  <li key={namn}>{namn}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mandala och bakning */}
      <Intressen />
    </section>
  );
}

export default OmMig;
