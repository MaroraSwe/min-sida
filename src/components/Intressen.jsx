import "./Intressen.css";
import Ikon from "./Ikon";
import mandalaBild from "../assets/mandala-hel.webp";
import browniesBild from "../assets/brownies.webp";
import muffinsNaraBild from "../assets/muffins-nara.webp";
import muffinsGallerBild from "../assets/muffins-galler.webp";

// "Utanför koden" på Om mig: det jag skapar med händerna.
// Samma uppbyggnad som projektkorten: bild, "01 / KATEGORI", rubrik, text och taggar.
// Mandalabilden är liten och har mitt namn på mönstret, så att den är svår att stjäla.
function Intressen() {
  return (
    <div className="om-mig-del intressen">
      <h3>
        <Ikon namn="heart-outline" storlek={24} />
        Utanför koden
      </h3>
      <p className="intressen-intro">
        När jag inte arbetar med teknik tycker jag om att skapa med händerna – genom
        detaljerade mandalor och hembakat.
      </p>

      <div className="intressen-lista">
        <article className="hobby-kort">
          <div className="hobby-bildyta hobby-bildyta-hog">
            <img
              className="hobby-bild"
              src={mandalaBild}
              alt="En mandala i lila och svart tusch som jag har ritat för hand."
            />
            <span className="hobby-etikett">Originalkonst</span>
          </div>
          <div className="hobby-info">
            <p className="hobby-kategori">01 / Mandalakonstnär</p>
            <h4>Mönster, tålamod och kreativitet</h4>
            <p className="hobby-text">
              Jag skapar mandalor för hand, lager för lager. Jag tycker om att låta små
              detaljer växa fram till ett större mönster.
            </p>
            <p className="hobby-taggar">Handritat · Detaljer · Geometriska mönster</p>
          </div>
        </article>

        <article className="hobby-kort">
          <div className="hobby-bildyta">
            <img
              className="hobby-bild"
              src={browniesBild}
              alt="Brownies med valnötter som jag har bakat, skurna i bitar."
            />
            <span className="hobby-etikett">Hembakat</span>
          </div>
          {/* Två små bilder under den stora */}
          <div className="hobby-sma">
            <img src={muffinsNaraBild} alt="Blåbärsmuffins som jag har bakat, på nära håll." />
            <img src={muffinsGallerBild} alt="Mina blåbärsmuffins som svalnar på ett galler." />
          </div>
          <div className="hobby-info">
            <p className="hobby-kategori">02 / Bagare</p>
            <h4>Små bakverk, mycket omtanke</h4>
            <p className="hobby-text">
              Jag bakar vegetariskt, från muffins och brownies till något gott att njuta av.
              Jag tycker om hela processen – att förbereda, baka och dela med mig.
            </p>
            <p className="hobby-taggar">Muffins · Brownies · Vegetariskt</p>
          </div>
        </article>
      </div>

      <p className="intressen-slut">Personliga projekt · Skapande · Nyfikenhet</p>
    </div>
  );
}

export default Intressen;
