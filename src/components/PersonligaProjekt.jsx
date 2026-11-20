// Personliga projekt: samma kortstil som kursprojekten, men utan kod-länk.
// Visas längst ner på sidan för "Min portfoliosida" (/projekt/1).
import "./ProjektKort.css";
import "./PersonligaProjekt.css";
import { personligaProjekt } from "../data/personligaProjekt";

function PersonligaProjekt() {
  return (
    <div className="personliga-projekt" id="personliga-projekt">
      <h3>Personliga projekt</h3>
      <p className="personliga-intro">Det jag skapar utanför kursen.</p>

      <div className="personliga-lista">
        {personligaProjekt.map((p) => (
          <article key={p.id} className={`projekt-kort tint-${p.tint}`}>
            <img className="projekt-bild" src={p.bild} alt={p.titel} />
            <div className="projekt-info">
              <span className="projekt-etikett">Personligt</span>
              <h3>{p.titel}</h3>
              <p>{p.beskrivning}</p>
              {/* && = visa länken bara om projektet har en */}
              {p.lank && (
                <div className="projekt-lankar">
                  <a className="projekt-lank" href={p.lank} target="_blank" rel="noreferrer">
                    Se mer ↗
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PersonligaProjekt;
