import "./ProjektDetalj.css";
import { useParams, Link } from "react-router-dom";
import projektLista from "../data/projekt.json";
import { bilder } from "../data/projektBilder";

// En egen sida för varje projekt: /projekt/1, /projekt/2 ...
function ProjektDetalj() {
  // useParams läser :id ur adressen. Det kommer alltid som text, t.ex. "2"
  const { id } = useParams();

  // .find() letar upp det FÖRSTA projektet där svaret är true.
  // Number(id) gör om texten "2" till talet 2, så att === stämmer.
  const projekt = projektLista.find((p) => p.id === Number(id));

  if (!projekt) {
    return (
      <section className="projekt-detalj">
        <h2>Projektet finns inte</h2>
        <p>
          <Link to="/projekt">Till alla projekt</Link>
        </p>
      </section>
    );
  }

  // Destructuring: plocka ut det vi behöver ur projektet
  const { titel, beskrivning, teknik, bild, lank } = projekt;

  return (
    <section className="projekt-detalj">
      <Link className="projekt-detalj-tillbaka" to="/projekt">
        ← Alla projekt
      </Link>

      <h2>{titel}</h2>
      <img className="projekt-detalj-bild" src={bilder[bild]} alt={titel} />
      <p>{beskrivning}</p>

      <h3>Tekniker</h3>
      <ul className="projekt-detalj-teknik">
        {teknik.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <a className="hero-knapp" href={lank} target="_blank" rel="noreferrer">
        Se koden på GitHub
      </a>
    </section>
  );
}

export default ProjektDetalj;
