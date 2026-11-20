// JSON kan bara innehålla text, inte bilder. Därför står bildens filnamn
// som text i projekt.json ("raknare.svg"), och här slår vi upp vilken
// importerad bild det betyder. Både Projekt.jsx och ProjektDetalj.jsx använder den.
// Egna illustrationer i sidans färger – inga upphovsrättsproblem
import portfolioBild from "../assets/portfolio.svg";
import raknareBild from "../assets/raknare.svg";
import kontaktBild from "../assets/kontaktformular.svg";
import vaderBild from "../assets/vader.svg";
import todoBild from "../assets/todo.svg";

export const bilder = {
  "portfolio.svg": portfolioBild,
  "raknare.svg": raknareBild,
  "kontaktformular.svg": kontaktBild,
  "vader.svg": vaderBild,
  "todo.svg": todoBild,
};
