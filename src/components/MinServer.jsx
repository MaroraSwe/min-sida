// Visar svaret från min egen server (server/server.js).
// Samma upplägg som Weather.jsx: useEffect, fetch och tre lägen – laddar, fel och klart.
import "./MinServer.css";
import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:3001";

function MinServer() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Extrauppgift: ett slumptal från /slump
  const [slumptal, setSlumptal] = useState(null);
  const [slumpFel, setSlumpFel] = useState("");

  useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await fetch(`${SERVER_URL}/hej`);
        if (!response.ok) {
          throw new Error("Svar: " + response.status);
        }
        const data = await response.json();
        setInfo(data);
      } catch {
        setError("Kunde inte nå min server. Är den igång? Kör npm run dev i mappen server.");
      } finally {
        setLoading(false);
      }
    }
    fetchInfo();
  }, []);

  // Körs när man klickar på knappen – ett nytt tal från servern varje gång
  async function hamtaSlumptal() {
    try {
      const response = await fetch(`${SERVER_URL}/slump`);
      if (!response.ok) {
        throw new Error("Svar: " + response.status);
      }
      const data = await response.json();
      setSlumptal(data.tal);
      setSlumpFel("");
    } catch {
      setSlumpFel("Kunde inte hämta ett slumptal just nu.");
    }
  }

  return (
    <section className="min-server">
      <h2>Min server</h2>
      <p className="min-server-intro">
        Allt här nedanför kommer från min egen server på {SERVER_URL}.
      </p>

      {loading && <p>Laddar från servern...</p>}
      {error && (
        <p className="min-server-fel" role="alert">
          {error}
        </p>
      )}

      {info && (
        <div className="min-server-kort">
          <p className="min-server-meddelande">{info.meddelande}</p>
          <h3>{info.namn}</h3>
          <p className="min-server-roll">{info.roll}</p>

          <h4>Intressen</h4>
          <ul className="min-server-intressen">
            {info.intressen.map((intresse) => (
              <li key={intresse}>{intresse}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="min-server-slump">
        <button type="button" onClick={hamtaSlumptal}>
          Ge mig ett slumptal
        </button>
        {slumptal !== null && <p className="min-server-tal">{slumptal}</p>}
        {slumpFel && (
          <p className="min-server-fel" role="alert">
            {slumpFel}
          </p>
        )}
      </div>
    </section>
  );
}

export default MinServer;
