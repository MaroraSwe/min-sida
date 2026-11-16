// Vädret just nu: Helsingborg från början, eller där besökaren är om hen trycker på knappen.
// Samma upplägg som de andra väderrutorna: tre lägen – laddar, fel och klart.
import "./Weather.css";
import { useState, useEffect } from "react";
import { CITIES } from "../data/cities";
import { fetchCity } from "../utils/vader";
import { grader } from "../utils/text";

// Hemstaden hämtas från cities.js, så att lat och lon bara står på ett ställe
const HEMSTAD = CITIES.find((c) => c.name === "Helsingborg");

function Weather() {
  const [plats, setPlats] = useState(HEMSTAD); // vilken plats vi visar: { name, lat, lon }
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // när vädret inte går att hämta (röd text)
  const [meddelande, setMeddelande] = useState(""); // när vi inte fick veta platsen (vanlig text)

  // Hämta vädret varje gång plats ändras ([plats] längst ner säger det till useEffect)
  useEffect(() => {
    async function hamta() {
      setLoading(true);
      setError("");
      try {
        const result = await fetchCity(plats);
        setWeather(result);
      } catch {
        setError("Kunde inte hämta vädret just nu.");
      } finally {
        setLoading(false);
      }
    }
    hamta();
  }, [plats]);

  // Fråga webbläsaren var besökaren är. Webbläsaren frågar först om lov.
  function visaMinPlats() {
    setMeddelande("");

    // Gamla webbläsare saknar geolocation – då stannar vi i Helsingborg
    if (!navigator.geolocation) {
      setMeddelande("Din webbläsare kan inte visa var du är, så du ser Helsingborg.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      // 1. Ja: vi får koordinaterna → ny plats → useEffect hämtar vädret där
      (position) => {
        setPlats({
          name: "Där du är",
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      // 2. Nej (eller det gick inte): visa ett vänligt meddelande, behåll Helsingborg
      () => {
        setLoading(false);
        setMeddelande("Fick inte veta var du är, så du ser Helsingborg.");
      },
      { timeout: 10000 } // ge upp efter 10 sekunder
    );
  }

  // Är det hemstaden som visas just nu? Då erbjuder knappen "där jag är", annars tvärtom.
  const visarHemstad = plats === HEMSTAD;

  return (
    <section className="weather">
      <h2>Vädret just nu</h2>

      {loading && <p>Laddar vädret...</p>}

      {!loading && weather && (
        <div className="weather-kort weather-ett">
          <h3>{weather.name}</h3>
          <p className="weather-temp">{grader(weather.temp)}</p>
          <p className="weather-vind">Vind {weather.wind} km/h</p>
        </div>
      )}

      {error && (
        <p className="weather-fel" role="alert">
          {error}
        </p>
      )}
      {meddelande && <p className="weather-info">{meddelande}</p>}

      <button
        type="button"
        className="weather-plats-knapp"
        onClick={visarHemstad ? visaMinPlats : () => setPlats(HEMSTAD)}
        disabled={loading}
      >
        {visarHemstad ? "Visa vädret där jag är" : "Visa Helsingborg"}
      </button>
    </section>
  );
}

export default Weather;
