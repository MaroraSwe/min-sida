import "./ProjektKort.css";
import { Link } from "react-router-dom";

function ProjektKort({ id, titel, beskrivning, teknik, bild, länk }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt={titel} />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{beskrivning}</p>

        {/* teknik är en lista nu – en etikett per teknik */}
        <div className="projekt-taggar">
          {teknik.map((t) => (
            <span key={t} className="projekt-teknik">
              {t}
            </span>
          ))}
        </div>

        <div className="projekt-knappar">
          <Link className="projekt-las-mer" to={`/projekt/${id}`}>
            Läs mer
          </Link>
          <a className="projekt-knapp" href={länk} target="_blank" rel="noreferrer">
            Se projektet
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjektKort;
