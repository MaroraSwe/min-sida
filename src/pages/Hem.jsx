import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import Weather from "../components/Weather";
import CityWeather from "../components/CityWeather";
import Todo from "../components/Todo";
// Räknare är gömd just nu. Visa den igen: ta bort // på nästa rad, och {/* */} runt <Raknare /> längre ner.
// import Raknare from "../components/Raknare";
import { NAME } from "../data/settings";
import { fornamn } from "../utils/text";

function Hem() {
  return (
    <>
      <Header namn={NAME} />
      <Hero namn={fornamn(NAME)} />
      <Projekt />
      <GitHubRepon />
      <Weather />
      <CityWeather />
      <Todo />
      {/* <Raknare /> */}
    </>
  );
}

export default Hem;
