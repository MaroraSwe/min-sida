// Mina projekt – listan som servern skickar ut på /projekt.
// export: så att server.js kan låna listan med  import { projekt } from "./projekt.js";
export const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    beskrivning: "Sidan du tittar på nu. Byggd med React och CSS.",
    teknik: ["React", "CSS", "Git"],
  },
  {
    id: 2,
    titel: "Räknare",
    beskrivning: "Interaktiv räknare med useState som byter färg efter värdet.",
    teknik: ["React", "useState"],
  },
  {
    id: 3,
    titel: "Kontaktformulär",
    beskrivning: "Formulär med kontrollerade fält, validering och tackmeddelande.",
    teknik: ["React", "useState", "Formspree"],
  },
];
