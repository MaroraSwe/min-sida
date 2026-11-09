// Vädret just nu i flera städer, från Open-Meteos öppna API.
// Samma upplägg som GitHubRepon.jsx: tre lägen – laddar, fel och klart.
import "./Weather.css";
import { useState, useEffect } from "react";
import { CITIES } from "../data/cities";
import { fetchCity } from "../utils/vader";
import { grader } from "../utils/text";

function Weather() {
  const [weather, setWeather] = useState([]); // en lista – ett objekt per stad
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAll() {
      try {
        // Promise.all startar ALLA anrop samtidigt och väntar tills alla är klara.
        // Snabbare än att hämta en stad i taget.
        const results = await Promise.all(CITIES.map(fetchCity));
        setWeather(results);
      } catch {
        setError("Kunde inte hämta vädret just nu.");
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return (
    <section className="weather">
      <h2>Vädret just nu</h2>
      {loading && <p>Laddar vädret...</p>}
      {error && <p className="weather-fel" role="alert">{error}</p>}

      <ul className="weather-lista">
        {weather.map((city) => (
          <li key={city.name} className="weather-kort">
            <h3>{city.name}</h3>
            <p className="weather-temp">{grader(city.temp)}</p>
            <p className="weather-vind">Vind {city.wind} km/h</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Weather;
