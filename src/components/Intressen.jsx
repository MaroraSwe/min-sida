import "./Intressen.css";
import mandalaBild from "../assets/mandala-hel.webp";
import bagareBild from "../assets/bagare-foto.webp";

// "Utanför koden" på Om mig: det jag skapar med händerna.
// Korten ser ut precis som projektkorten: bild, "01 / KATEGORI", rubrik, text och en rad längst ner.
// Mandalabilden är liten och har mitt namn på mönstret, så att den är svår att stjäla.
const intressen = [
  {
    nummer: "01",
    kategori: "Mandalakonstnär",
    titel: "Mönster, tålamod och kreativitet",
    text: "Jag skapar mandalor för hand, lager för lager. Jag tycker om att låta små detaljer växa fram till ett större mönster.",
    taggar: "Handritat · Detaljer · Geometriska mönster",
    bild: mandalaBild,
    alt: "En mandala i lila och svart tusch som jag har ritat för hand.",
    hel: true,                // hela mandalan ska synas, inget får klippas bort
  },
  {
    nummer: "02",
    kategori: "Bagare",
    titel: "Små bakverk, mycket omtanke",
    text: "Jag bakar vegetariskt, från muffins och brownies till något gott att njuta av. Jag tycker om hela processen – att förbereda, baka och dela med mig.",
    taggar: "Muffins · Brownies · Vegetariskt",
    bild: bagareBild,
    alt: "Blåbärsmuffins och brownies med valnötter som jag har bakat.",
  },
];

function Intressen() {
  return (
    <div className="om-mig-del intressen">
      <h2>Utanför koden</h2>
      <p className="intressen-intro">
        När jag inte arbetar med teknik tycker jag om att skapa med händerna – genom
        detaljerade mandalor och hembakat.
      </p>

      <div className="intressen-lista">
        {intressen.map((i) => (
          <article className="hobby-kort" key={i.nummer}>
            <img
              className={i.hel ? "hobby-bild hel" : "hobby-bild"}
              src={i.bild}
              alt={i.alt}
            />
            <div className="hobby-info">
              <p className="hobby-kategori">
                {i.nummer} / {i.kategori}
              </p>
              <h3>{i.titel}</h3>
              <p className="hobby-text">{i.text}</p>
              <p className="hobby-taggar">{i.taggar}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Intressen;
