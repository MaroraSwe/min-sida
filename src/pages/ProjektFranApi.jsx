// Projekten hämtas från MIN EGEN server (server/projekt.js) i stället för från projekt.json.
// Den vanliga projektlistan (Projekt.jsx) finns kvar som den är.
import "../components/Projekt.css"; // samma bakgrund och kort-rutnät som den vanliga listan
import "./ProjektFranApi.css";
import { useState, useEffect } from "react";
import ProjektKort from "../components/ProjektKort";
import { bilder } from "../data/projektBilder";

const API_URL = "http://localhost:3001/projekt";

function ProjektFranApi() {
  const [projekt, setProjekt] = useState([]); // tom lista tills svaret kommer
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((r) => {
        // fetch klagar inte själv på 404 eller 500 – därför kollar vi r.ok
        if (!r.ok) {
          throw new Error("Svar: " + r.status);
        }
        return r.json();
      })
      .then((data) => {
        setProjekt(data);
      })
      .catch(() => setFel("Kunde inte hämta projekt. Är servern igång?"))
      .finally(() => setLaddar(false)); // körs alltid – både när det gick bra och när det blev fel
  }, []); // [] = hämta en gång, när sidan visas

  return (
    <section className="projekt projekt-api">
      <h2>Projekt från min server</h2>
      <p className="projekt-api-kalla">
        Hämtade från <code>{API_URL}</code>
      </p>

      {laddar && <p>Laddar projekt...</p>}
      {fel && (
        <p className="projekt-api-fel" role="alert">
          {fel}
        </p>
      )}

      {/* Samma ProjektKort som på den vanliga projektsidan – bara datan kommer från servern */}
      <div className="projekt-lista">
        {projekt.map((p) => (
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
    </section>
  );
}

export default ProjektFranApi;
