// Välj en stad i menyn – så hämtas vädret för just den staden.
import "./Weather.css";
import { useState, useEffect } from "react";
import { CITIES } from "../data/cities";
import { fetchCity } from "../utils/vader";
import { grader } from "../utils/text";

function CityWeather() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0].name); // första staden från början
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSelected() {
      setLoading(true);
      setError("");
      try {
        // .find() letar upp staden som har namnet vi valde i menyn
        const city = CITIES.find((c) => c.name === selectedCity);
        const result = await fetchCity(city);
        setWeather(result);
      } catch {
        setError("Kunde inte hämta vädret just nu.");
      } finally {
        setLoading(false);
      }
    }
    fetchSelected();
  }, [selectedCity]); // ← hämta igen varje gång staden ändras

  return (
    <section className="weather weather-valj">
      <h2>Välj stad</h2>

      <label className="weather-label">
        Stad
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          {CITIES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Laddar vädret...</p>}
      {error && <p className="weather-fel" role="alert">{error}</p>}
      {!loading && !error && weather && (
        <div className="weather-kort weather-ett">
          <h3>{weather.name}</h3>
          <p className="weather-temp">{grader(weather.temp)}</p>
          <p className="weather-vind">Vind {weather.wind} km/h</p>
        </div>
      )}
    </section>
  );
}

export default CityWeather;
