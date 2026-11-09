// Hämtar vädret för EN stad från Open-Meteo.
// Ligger i en egen fil eftersom både Weather.jsx och CityWeather.jsx använder den.
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchCity(city) {
  const url = `${BASE_URL}?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Kunde inte hämta ${city.name}`);
  }

  const data = await response.json();
  return {
    name: city.name,
    temp: data.current.temperature_2m,
    wind: data.current.wind_speed_10m,
  };
}
