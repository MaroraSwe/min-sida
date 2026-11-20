import "./ProjektKort.css";
import { Link } from "react-router-dom";

// Ett projektkort, byggt som exemplet:
// bild överst – "01 / KATEGORI" – rubrik – beskrivning – en rad med länk och tekniker.
// Alla kort ser likadana ut. Färgen kommer från bilderna, inte från kortet.
function ProjektKort({ id, titel, kategori, beskrivning, teknik, bild, typ }) {
  const personlig = typ === "personlig";

  // padStart fyller på med nollor framifrån tills texten är 2 tecken lång: 1 blir "01"
  const nummer = String(id).padStart(2, "0");

  // Kortet visar högst 3 tekniker, så att raden inte blir för lång.
  // Har projektet fler står det t.ex. "+10" – alla syns på projektets egen sida.
  const MAX_TEKNIKER = 3;
  const extra = teknik.length - MAX_TEKNIKER;
  const teknikText =
    teknik.slice(0, MAX_TEKNIKER).join(" · ") + (extra > 0 ? ` +${extra}` : "");

  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt={titel} />

      <div className="projekt-info">
        <p className="projekt-kategori">
          {nummer}
          {kategori && ` / ${kategori}`}
        </p>
        <h3>{titel}</h3>
        <p className="projekt-beskrivning">{beskrivning}</p>

        {/* Raden längst ner: länken till vänster, teknikerna till höger */}
        <div className="projekt-fot">
          <Link className="projekt-lank" to={`/projekt/${id}`}>
            Visa projekt
            <span className="projekt-ikon" aria-hidden="true">↗</span>
          </Link>
          <span className="projekt-teknik-rad">
            {personlig ? "Personligt" : teknikText}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProjektKort;
