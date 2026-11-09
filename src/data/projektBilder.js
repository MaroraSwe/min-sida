// JSON kan bara innehålla text, inte bilder. Därför står bildens filnamn
// som text i projekt.json ("Hero1.jpg"), och här slår vi upp vilken
// importerad bild det betyder. Både Projekt.jsx och ProjektDetalj.jsx använder den.
import bild1 from "../assets/Hero1.jpg";
import bild2 from "../assets/Hero2.jpg";
import bild3 from "../assets/Hero3.jpg";

export const bilder = {
  "Hero1.jpg": bild1,
  "Hero2.jpg": bild2,
  "Hero3.jpg": bild3,
};
