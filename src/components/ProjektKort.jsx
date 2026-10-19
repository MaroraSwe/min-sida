import "./ProjektKort.css";

function ProjektKort({ titel, text, bild, länk }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt={titel} />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>
        <a className="projekt-knapp" href={länk}>
          Se projektet
        </a>
      </div>
    </article>
  );
}

export default ProjektKort;
