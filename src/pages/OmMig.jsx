import "./OmMig.css";
import Self from "../assets/Self.jpg";
import { useState } from "react";
import Ikon from "../components/Ikon";
import Intressen from "../components/Intressen";

// Mina styrkor: en kort mening som visar VARFÖR – inte bara ett ord.
const styrkor = [
  {
    titel: "Samordnare",
    ikon: "calendar-check-outline",
    text: "Projektkoordinering och verksamhetsstöd inom IT, på IKEA IT och Quest Global.",
  },
  {
    titel: "Från finans till IT",
    ikon: "swap-horizontal",
    text: "Jag började inom finansiella tjänster i New Delhi och arbetar nu med IT i Sverige.",
  },
  {
    titel: "Lagspelare",
    ikon: "handshake-outline",
    text: "Jag hjälper andra att nå sina mål samtidigt som jag når mina egna. Vi når längst tillsammans.",
  },
  {
    titel: "Tre språk",
    ikon: "translate",
    text: "Jag arbetar på engelska, hindi och svenska.",
  },
];

// Kompetenser i tre korta grupper. Varje rad: [namn, ikon]
const kompetenser = [
  {
    rubrik: "Webbutveckling",
    lista: [
      ["React med hooks", "atom"],
      ["JavaScript", "code-tags"],
      ["CSS", "palette-swatch-outline"],
      ["REST API", "api"],
      ["Git", "source-branch"],
    ],
  },
  {
    rubrik: "Verksamhet",
    lista: [
      ["Verksamhetsstöd", "lifebuoy"],
      ["Verksamhetsdrift", "cog-outline"],
      ["Kundframgång", "trending-up"],
      ["Utbildning", "school-outline"],
      ["Administration", "folder-open-outline"],
    ],
  },
  {
    rubrik: "Verktyg",
    lista: [
      ["Office 365", "file-document-outline"],
      ["Jira", "view-dashboard-outline"],
      ["Confluence", "book-open-outline"],
      ["SharePoint", "share-variant-outline"],
      ["Power BI", "chart-bar"],
      ["Slack", "slack"],
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
            <Ikon namn="chevron-down" />
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
        <h3>
          <Ikon namn="medal-outline" storlek={24} />
          Mina styrkor
        </h3>
        <div className="styrke-lista">
          {styrkor.map((s) => (
            <article className="styrke-kort" key={s.titel}>
              <span className="styrke-ikon">
                <Ikon namn={s.ikon} storlek={22} />
              </span>
              <h4>{s.titel}</h4>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Kompetenser: tre grupper bredvid varandra */}
      <div className="om-mig-del">
        <h3>
          <Ikon namn="toolbox-outline" storlek={24} />
          Kompetenser
        </h3>
        <div className="kompetens-grupper">
          {kompetenser.map((grupp) => (
            <div key={grupp.rubrik}>
              <h4 className="kompetens-rubrik">{grupp.rubrik}</h4>
              <ul className="piller">
                {grupp.lista.map(([namn, ikon]) => (
                  <li key={namn}>
                    <Ikon namn={ikon} />
                    {namn}
                  </li>
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
