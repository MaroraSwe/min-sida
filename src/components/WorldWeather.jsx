// Sök vädret för vilken plats som helst i hela världen.
// Två frågor efter varandra:
//   1. Var ligger platsen?  → Open-Meteos geocoding-API ger latitud och longitud
//   2. Vilket väder är det där? → samma fetchCity som de andra väderrutorna
import "./Weather.css";
import { useState } from "react";
import { fetchCity } from "../utils/vader";
import { grader } from "../utils/text";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

// Namnen kommer med uttalstecken från ett annat alfabet: "Srīnagar", "Uttarākhand".
// Ett streck över en bokstav (ā, ī, ū) betyder "säg den lite längre" – vi tar bort det.
//   1. normalize("NFD") delar "ī" i två delar: "i" + "strecket ovanför"
//   2. .replace(...) tar bort strecket (\u0304) och prickar under (\u0323), som i "Ḍhākā"
//   3. normalize("NFC") sätter ihop resten igen – så å, ä och ö blir kvar som de var
// Sist tas "State of " bort i början: "State of Bihar" blir "Bihar".
function snyggStavning(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0304\u0323]/g, "")
    .normalize("NFC")
    .replace(/^State of /, "");
}

// Var ligger platsen? Kommun/distrikt (admin2), län/delstat (admin1) och land.
// "Mandi, Himachal Pradesh, Indien". .filter(Boolean) tar bort delar som saknas,
// så att det inte blir ", , Frankrike" när en plats inte har något distrikt.
function omrade(p) {
  return [p.admin2, p.admin1, p.country].filter(Boolean).map(snyggStavning).join(", ");
}

// Hela namnet till knapparna: "Kashmir, Mandi, Himachal Pradesh, Indien"
function platsNamn(p) {
  return [snyggStavning(p.name), omrade(p)].join(", ");
}

function WorldWeather() {
  const [text, setText] = useState("");
  const [traffar, setTraffar] = useState([]); // upp till 5 platser som matchar sökningen
  const [plats, setPlats] = useState(null); // platsen vi visar vädret för just nu
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // false: inget hämtas förrän man söker
  const [error, setError] = useState("");

  // Hämta vädret för EN plats.
  // Geocoding kallar det latitude/longitude, men fetchCity vill ha lat/lon.
  async function visaVader(p) {
    const result = await fetchCity({ name: snyggStavning(p.name), lat: p.latitude, lon: p.longitude });
    setPlats(p);
    setWeather(result);
  }

  // Varje gång man skriver i rutan. Tömmer man den, tas det gamla svaret bort också.
  function andraText(e) {
    setText(e.target.value);
    if (e.target.value.trim() === "") {
      setTraffar([]);
      setPlats(null);
      setWeather(null);
      setError("");
    }
  }

  async function sok(e) {
    e.preventDefault(); // formuläret ska inte ladda om sidan
    const namn = text.trim();
    if (namn === "") {
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);
    setTraffar([]);

    try {
      // encodeURIComponent gör å, ä, ö och mellanslag säkra att skicka i en adress
      const svar = await fetch(
        `${GEO_URL}?name=${encodeURIComponent(namn)}&count=10&language=sv&format=json`
      );
      if (!svar.ok) {
        throw new Error("Svar: " + svar.status);
      }
      const data = await svar.json();

      // Hittas ingen plats skickar API:et ingen "results" alls – därför !data.results
      if (!data.results) {
        setError(`Hittade ingen plats som heter "${namn}".`);
        return; // finally körs ändå
      }

      // Svaret kan innehålla dammar, flygplatser och annat som inte är städer.
      // feature_code som börjar på "PPL" (populated place) betyder stad, by eller ort.
      // Finns inga sådana alls, visar vi allt hellre än ingenting.
      const orter = data.results.filter((p) => (p.feature_code || "").startsWith("PPL"));
      const lista = (orter.length > 0 ? orter : data.results).slice(0, 5); // högst 5 val

      setTraffar(lista);
      await visaVader(lista[0]); // den första träffen är oftast den största staden
    } catch {
      setError("Kunde inte hämta vädret just nu.");
    } finally {
      setLoading(false);
    }
  }

  // Klick på en annan träff i listan: hämta vädret för den i stället
  async function valj(p) {
    setLoading(true);
    setError("");
    try {
      await visaVader(p);
    } catch {
      setError("Kunde inte hämta vädret just nu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="weather weather-varlden">
      <h2>Hela världen</h2>

      <form className="weather-sok" onSubmit={sok}>
        <label htmlFor="varlden-plats">Sök en stad</label>
        <div className="weather-sok-rad">
          <input
            id="varlden-plats"
            type="text"
            value={text}
            onChange={andraText}
            placeholder="t.ex. Tokyo"
          />
          <button type="submit" disabled={loading}>
            Sök
          </button>
        </div>
        {/* Sökningen hittar orter med det namnet – inte regioner eller län */}
        <p className="weather-tips">
          Sök på en stad eller by, inte en region. För Kashmir, sök till exempel Srinagar.
        </p>
      </form>

      {loading && <p>Hämtar vädret...</p>}
      {error && (
        <p className="weather-fel" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && weather && plats && (
        <div className="weather-kort weather-ett">
          <h3>{weather.name}</h3>
          <p className="weather-plats">{omrade(plats)}</p>
          <p className="weather-temp">{grader(weather.temp)}</p>
          <p className="weather-vind">Vind {weather.wind} km/h</p>
        </div>
      )}

      {/* Många platser har samma namn (Paris finns i Frankrike OCH i USA). Visa de andra. */}
      {traffar.length > 1 && (
        <div className="weather-andra">
          <p>Fel plats? Välj en annan:</p>
          <ul>
            {traffar.map((p) => {
              // Är det här platsen som visas just nu? (plats && … : plats kan vara null)
              const vald = plats && p.id === plats.id;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    className={vald ? "weather-traff aktiv" : "weather-traff"}
                    aria-pressed={vald}
                    onClick={() => valj(p)}
                  >
                    {platsNamn(p)}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

export default WorldWeather;
