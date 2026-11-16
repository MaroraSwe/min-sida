// Extrauppgift: en enkel admin-sida som visar alla meddelanden från min server (GET /kontakt).
// Den finns inte i menyn – man skriver /admin i adressfältet.
import "./Admin.css";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/kontakt";

function Admin() {
  const [meddelanden, setMeddelanden] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  // Knappen "Uppdatera" ökar omgang med 1 → useEffect ser ändringen och hämtar igen
  const [omgang, setOmgang] = useState(0);

  useEffect(() => {
    async function hamta() {
      try {
        const svar = await fetch(API_URL);
        if (!svar.ok) {
          throw new Error("Svar: " + svar.status);
        }
        const data = await svar.json();
        setMeddelanden(data);
        setFel(""); // ta bort ett gammalt fel om det fungerar nu
      } catch {
        setFel("Får inget svar från servern. Är den igång?");
      } finally {
        setLaddar(false);
      }
    }
    hamta();
  }, [omgang]); // ← hämta igen varje gång omgang ändras

  // Nyaste meddelandet först. .reverse() på en KOPIA, så att state inte ändras
  const nyastForst = [...meddelanden].reverse();

  return (
    <section className="admin">
      <h2>Meddelanden</h2>
      <p className="admin-intro">
        Allt som har skickats via formuläret på <code>/kontakt-server</code>. Listan töms när
        servern startas om.
      </p>

      <button type="button" className="admin-knapp" onClick={() => setOmgang(omgang + 1)}>
        Uppdatera
      </button>

      {laddar && <p>Laddar meddelanden...</p>}
      {fel && (
        <p className="admin-fel" role="alert">
          {fel}
        </p>
      )}
      {!laddar && !fel && meddelanden.length === 0 && (
        <p className="admin-tom">Inga meddelanden än.</p>
      )}

      <ul className="admin-lista">
        {nyastForst.map((m) => (
          <li key={m.id} className="admin-meddelande">
            <div className="admin-rad">
              <strong>{m.namn}</strong>
              {/* datum kommer som "2026-11-16T09:30:00.000Z" – toLocaleString gör det läsbart */}
              <span className="admin-datum">{new Date(m.datum).toLocaleString("sv-SE")}</span>
            </div>
            <a href={`mailto:${m.email}`}>{m.email}</a>
            <p>{m.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Admin;
