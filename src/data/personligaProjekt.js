// Mina personliga projekt – det jag gör utanför kursen.
// Lägg till ett nytt projekt: kopiera ett objekt { … } och ändra texten.
// tint = kortets färg: "ros", "mauve", "sand" eller "salvia" (samma som projektkorten).
// lank är frivillig: utan lank visas ingen länk på kortet.
import mandalakonst from "../assets/mandalakonst.webp";
import bagare from "../assets/bagare.svg";

export const personligaProjekt = [
  {
    id: "mandala",
    titel: "Mandalakonstnär",
    beskrivning:
      "Jag ritar mandalas för hand med tusch, detalj för detalj. Samma tålamod och precision tar jag med mig in i kod.",
    bild: mandalakonst,          // ett foto av min egen teckning
    tint: "sand",
  },
  {
    id: "bagare",
    titel: "Bagare",
    beskrivning:
      "Jag bakar och testar nya recept. Det liknar kod: följ receptet, prova, justera och prova igen.",
    bild: bagare,
    tint: "salvia",
  },
];
