// Små hjälpfunktioner som flera komponenter delar på.
// Varje funktion har export framför sig, så att andra filer kan låna den.

// "2026-11-02T09:15:00Z" -> "2 nov. 2026"
export const snyggtDatum = (datum) =>
  new Date(datum).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Klipper en lång text och lägger till tre punkter
export const kortText = (text, max) => {
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, max)}...`;
};

// 9.6 -> "9.6 °C"
export const grader = (temp) => `${temp} °C`;

// "Meenakshi Arora" -> "© 2026 Meenakshi Arora"
export const copyright = (namn) => `© ${new Date().getFullYear()} ${namn}`;

// (2, 3) -> "Visar 2 av 3 projekt"
export const antalProjekt = (antal, totalt) => `Visar ${antal} av ${totalt} projekt`;

// "Meenakshi Arora" -> "Meenakshi"
export const fornamn = (namn) => namn.split(" ")[0];

// "Meenakshi Arora" -> "MA"
export const initialer = (namn) =>
  namn
    .split(" ")
    .map((del) => del[0])
    .join("");

// En hälsning som följer tiden på dygnet
export const halsning = () => {
  const timme = new Date().getHours();

  if (timme < 5) {
    return "God natt";
  } else if (timme < 10) {
    return "God morgon";
  } else if (timme < 18) {
    return "Hej";
  } else {
    return "God kväll";
  }
};
