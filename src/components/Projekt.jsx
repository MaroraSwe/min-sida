import "./Projekt.css";
import { useState } from "react";
import ProjektKort from "./ProjektKort";
// En JSON-fil importeras precis som en JS-fil – Vite gör om den till en vanlig lista
import projektLista from "../data/projekt.json";
import { bilder } from "../data/projektBilder";
import { antalProjekt } from "../utils/text";

// Filterknapparna skapas av två loopar: gå igenom varje projekt,
// och varje teknik i projektet. Finns tekniken inte i listan än – lägg till den.
// Lägger du till en ny teknik i projekt.json dyker knappen upp av sig själv.
const filterLista = ["Alla"];

for (const projekt of projektLista) {
  for (const teknik of projekt.teknik) {
    if (!filterLista.includes(teknik)) {
      filterLista.push(teknik);
    }
  }
}

function Projekt() {
  // Vilken filterknapp är vald, vad står i sökrutan, och hur ska listan sorteras?
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");
  const [sortering, setSortering] = useState("standard");

  // .filter() behåller bara de projekt där vi svarar true.
  // Listan räknas ut på nytt varje gång state ändras – den behöver inget eget state.
  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok; // båda måste stämma
  });

  // Sortera en KOPIA ([...]), eftersom .sort() ändrar listan den får
  const sorteradeProjekt = [...synligaProjekt];

  if (sortering === "titel") {
    sorteradeProjekt.sort((a, b) => a.titel.localeCompare(b.titel, "sv"));
  } else if (sortering === "tekniker") {
    sorteradeProjekt.sort((a, b) => b.teknik.length - a.teknik.length);
  }

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-filter">
        {filterLista.map((f) => (
          <button
            key={f}
            className={f === vald ? "filter-knapp aktiv" : "filter-knapp"}
            onClick={() => setVald(f)}
            aria-pressed={f === vald}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projekt-verktyg">
        {/* Samma kontrollerade input som i kontaktformuläret */}
        <label className="projekt-falt">
          Sök projekt
          <input
            type="search"
            value={sok}
            onChange={(e) => setSok(e.target.value)}
            placeholder="t.ex. räknare"
          />
        </label>

        <label className="projekt-falt">
          Sortera
          <select value={sortering} onChange={(e) => setSortering(e.target.value)}>
            <option value="standard">Standard</option>
            <option value="titel">Titel A–Ö</option>
            <option value="tekniker">Flest tekniker först</option>
          </select>
        </label>
      </div>

      <p className="projekt-antal">
        {antalProjekt(sorteradeProjekt.length, projektLista.length)}
      </p>

      {/* Tom lista? Visa ett meddelande istället för ingenting */}
      {sorteradeProjekt.length === 0 ? (
        <p className="projekt-tom">Inga projekt matchar. Prova ett annat filter.</p>
      ) : (
        <div className="projekt-lista">
          {sorteradeProjekt.map((p) => (
            <ProjektKort
              key={p.id}
              id={p.id}
              titel={p.titel}
              beskrivning={p.beskrivning}
              teknik={p.teknik}
              bild={bilder[p.bild]}
              länk={p.lank}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;
