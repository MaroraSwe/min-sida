import "./ProjektKort.css";
import { Link } from "react-router-dom";

function ProjektKort({ id, titel, beskrivning, teknik, bild, länk }) {
  // .some() svarar true om MINST EN teknik i listan är "React"
  const harReact = teknik.some((t) => t === "React");

  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt={titel} />
      {/* Etiketten syns bara på projekt som använder React */}
      {harReact && <span className="projekt-react">Byggd med React</span>}

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
          {/* Link = en sida på min egen sajt, ingen omladdning */}
          <Link className="projekt-knapp" to={`/projekt/${id}`}>
            Läs mer
          </Link>
          {/* sekundar = en knapp med bara ram, så att Läs mer syns mest */}
          <a className="projekt-knapp sekundar" href={länk} target="_blank" rel="noreferrer">
            Se projektet
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjektKort;
