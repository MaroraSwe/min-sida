// En kopia av kontakt.jsx som skickar till MIN EGEN server i stället för till Formspree.
// Formspree-versionen (pages/kontakt.jsx) finns kvar – den används på den publicerade sidan.
import "../pages/Kontakt.css"; // filen ligger i mappen pages, inte här i components
import kontaktBild from "../assets/kontakt.svg";
import { useState } from "react";

const MAX_TECKEN = 500; // längsta tillåtna meddelande

function ContactBackend() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");
  const [skickar, setSkickar] = useState(false); // true medan det skickas

  // Räknas ut på nytt varje gång man skriver – behöver inget eget state
  const kvar = MAX_TECKEN - message.length;
  const fardigt = message.trim() !== "" && kvar >= 0; // inte tomt och inte för långt

  async function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    // Check 1: no field may be empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFel("Fyll i alla fält innan du skickar.");
      setSkickat(false);
      return;
    }

    // Check 2: the email must contain @
    if (!email.includes("@")) {
      setFel("E-postadressen måste innehålla @.");
      setSkickat(false);
      return;
    }

    // Everything OK – send to MY server
    setFel(""); // remove any old error message
    setSkickar(true); // knappen visar "Skickar..."

    try {
      const svar = await fetch("http://localhost:3001/kontakt", {
        method: "POST", // vi skickar
        headers: { "Content-Type": "application/json" }, // datan är JSON (Accept behövdes bara för Formspree)
        // namn: name → skicka värdet från name, men döp fältet till namn – det namnet servern läser
        // text: message → samma sak: servern läser text, inte message
        body: JSON.stringify({ namn: name, email: email, text: message }),
      });

      if (svar.ok) {
        setSkickat(true); // show thank you message
        setEmail(""); // clear the fields
        setMessage("");
      } else {
        // Servern svarade, men med ett fel (t.ex. 400) – läs felet som servern skickade
        const data = await svar.json();
        setFel(data.fel || "Något gick fel. Försök igen om en stund.");
      }
    } catch {
      // hit kommer vi om servern inte svarar alls
      setFel("Får inget svar från servern. Är den igång?");
    } finally {
      setSkickar(false); // körs alltid, oavsett hur det gick
    }
  }

  return (
    <section className="kontakt">
      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Det här formuläret skickar till min egen server.</p>
        <img className="kontakt-bild" src={kontaktBild} alt="" />
      </div>

      {/* Höger kolumn: formuläret – alla fält ligger INNANFÖR <form> */}
      <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="namn">Namn</label>
        <input
          type="text"
          id="namn"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="epost">E-post</label>
        <input
          type="email"
          id="epost"
          placeholder="namn@exempel.se"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea
          id="meddelande"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby="tecken-kvar"
        />
        {/* Röd text när det är mindre än 50 tecken kvar */}
        <p id="tecken-kvar" className={kvar < 50 ? "tecken-kvar varning" : "tecken-kvar"}>
          {kvar} tecken kvar
        </p>

        {fel && <p className="kontakt-fel">{fel}</p>}

        <button type="submit" disabled={skickar || !fardigt}>
          {skickar ? "Skickar..." : "Skicka"}
        </button>

        {skickat && <p className="kontakt-tack">Tack {name}, jag hör av mig!</p>}
      </form>
    </section>
  );
}

export default ContactBackend;
