import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
// Räknare är gömd just nu. Visa den igen: ta bort // på nästa rad, och {/* */} runt <Raknare /> längre ner.
// import Raknare from "../components/Raknare";
import { NAME } from "../data/settings";
import { fornamn } from "../utils/text";

function Hem() {
  return (
    <>
      <Header namn={NAME} />
      <Hero namn={fornamn(NAME)} />
      {/* Vädret och Att göra har flyttat: de är egna projekt nu, på /projekt/4 och /projekt/5 */}
      <Projekt />
      <GitHubRepon />
      {/* <Raknare /> */}
    </>
  );
}

export default Hem;
