// Mina projekt – listan som servern skickar ut på /projekt.
// export: så att server.js kan låna listan med  import { projekt } from "./projekt.js";
// bild är bara NAMNET på bilden – React letar upp själva bilden i projektBilder.js
export const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    beskrivning: "Sidan du tittar på nu. Byggd med React och CSS.",
    teknik: ["React", "CSS", "Git"],
    bild: "Hero1.jpg",
    lank: "https://github.com/MaroraSwe/min-sida",
  },
  {
    id: 2,
    titel: "Räknare",
    beskrivning: "Interaktiv räknare med useState som byter färg efter värdet.",
    teknik: ["React", "useState"],
    bild: "Hero2.jpg",
    lank: "https://github.com/MaroraSwe/min-sida",
  },
  {
    id: 3,
    titel: "Kontaktformulär",
    beskrivning: "Formulär med kontrollerade fält, validering och tackmeddelande.",
    teknik: ["React", "useState", "Formspree"],
    bild: "Hero3.jpg",
    lank: "https://github.com/MaroraSwe/min-sida",
  },
];
