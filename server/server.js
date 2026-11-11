// Min egen server. Den körs som ett eget program, bredvid Min sida.
// Starta den: öppna en ny terminal, skriv  cd server  och sedan  npm run dev
import express from "express";
import cors from "cors";
import { projekt } from "./projekt.js"; // .js måste skrivas ut i Node

const app = express();
const PORT = 3001; // Min sida använder dörr 5173 – servern får en egen dörr

// Låter Min sida (localhost:5173) hämta svar från servern (localhost:3001).
// Utan den här raden stoppar webbläsaren svaret med ett CORS-fel.
app.use(cors());

// GET / – en lista över vad servern kan svara på
app.get("/", (req, res) => {
  res.json({
    meddelande: "Min server är igång!",
    vagar: [
      "/hej",
      "/tid",
      "/slump",
      "/rakna/2/3",
      "/projekt",
      "/projekt/1",
      "/projekt/teknik/React",
      "/statistik",
    ],
  });
});

// GET /hej – information om mig
app.get("/hej", (req, res) => {
  res.json({
    meddelande: "Hej från min egen server!",
    namn: "Meenakshi Arora",
    roll: "Tech Trainee – frontendutvecklare under utbildning",
    intressen: ["React", "JavaScript", "REST API", "Samordning"],
  });
});

// GET /tid – servern räknar ut svaret på nytt varje gång
app.get("/tid", (req, res) => {
  res.json({ tid: new Date().toLocaleTimeString("sv-SE") });
});

// Extrauppgift: GET /slump – ett slumptal mellan 1 och 100
app.get("/slump", (req, res) => {
  // Math.random() ger 0–0,999…  * 100 ger 0–99,9…  floor tar bort decimalerna, + 1 ger 1–100
  const tal = Math.floor(Math.random() * 100) + 1;
  res.json({ tal });
});

// Extrauppgift: GET /rakna/2/3 – svarar med summan
app.get("/rakna/:a/:b", (req, res) => {
  // Allt i req.params är TEXT: "2" och "3". Utan Number() blir "2" + "3" = "23"
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  // /rakna/hej/3 går inte att räkna ut. NaN betyder "Not a Number" – inte ett tal
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ fel: "Skriv två tal, till exempel /rakna/2/3" });
    return;
  }

  res.json({ a, b, summa: a + b });
});

// ---------- Projekt-API ----------

// GET /projekt – hela listan
app.get("/projekt", (req, res) => {
  res.json(projekt);
});

// Extrauppgift: GET /projekt/teknik/React – bara projekten som använder den tekniken
app.get("/projekt/teknik/:namn", (req, res) => {
  const namn = req.params.namn.toLowerCase(); // så att både "react" och "React" fungerar
  const traffar = projekt.filter((p) =>
    p.teknik.some((t) => t.toLowerCase() === namn)
  );
  res.json(traffar); // inga träffar = en tom lista [], och det är helt okej
});

// GET /projekt/2 – ett enda projekt
app.get("/projekt/:id", (req, res) => {
  // id i adressen är TEXT ("2"), id i listan är ett TAL (2) – Number() gör dem lika
  const id = Number(req.params.id);
  const hittat = projekt.find((p) => p.id === id);

  if (!hittat) {
    // 404 = "finns inte". return stoppar funktionen här
    res.status(404).json({ fel: `Det finns inget projekt med id ${req.params.id}` });
    return;
  }

  res.json(hittat);
});

// Extrauppgift: GET /statistik – hur många projekt jag har
app.get("/statistik", (req, res) => {
  res.json({ antalProjekt: projekt.length });
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
