import "./OmMig.css";
import Self from "../assets/Self.jpg";


function OmMig() {
  return (
    <section className="om-mig" id="om-mig">
      <img
        className="om-mig-bild"
        src={Self}
        alt="Illustrerat porträtt av Meenakshi Arora."
      />
      <div className="om-mig-innehall">
        <h2>Om mig</h2>
        <p className="om-mig-text">
          Jag tycker om att förenkla vardagen för människorna omkring mig. Att hjälpa
          andra att nå sina mål samtidigt som jag arbetar mot mina egna ger mig mycket.
          Jag trivs med att samordna och samarbeta, ta initiativ och ge stöd när det
          behövs, för jag tror att vi når bäst resultat tillsammans.
        </p>
        <p className="om-mig-text">
          Jag heter Meenakshi Arora och går på Tech School, där jag lär mig att bygga
          för webben. Den här sidan är mitt första projekt i React.
        </p>
        <p className="om-mig-text">
          Här lär jag mig att bygga sidor med komponenter och att spara min kod på
          GitHub.
        </p>

        <h3>Det här lär jag mig i kursen</h3>
        <ul className="om-mig-lista">
          <li>React</li>
          <li>JavaScript</li>
          <li>REST API</li>
        </ul>
      </div>
    </section>
  );
}

export default OmMig;