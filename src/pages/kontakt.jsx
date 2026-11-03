import "./Kontakt.css";
import kontaktBild from "../assets/kontakt.svg";
import { useState } from "react";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");
  const [skickar, setSkickar] = useState(false); // NYTT: true medan det skickas

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

    // Everything OK – send to Formspree
    setFel(""); // remove any old error message
    setSkickar(true); // knappen visar "Skickar..."

    try {
      const svar = await fetch("https://formspree.io/f/mnppoeya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ namn: name, email: email, meddelande: message }),
      });

      if (svar.ok) {
        setSkickat(true); // show thank you message
        setEmail(""); // clear the fields
        setMessage("");
      } else {
        setFel("Något gick fel. Försök igen om en stund.");
      }
    } catch {
      // hit kommer vi om internet är nere
      setFel("Kunde inte skicka. Kolla din internetanslutning.");
    } finally {
      setSkickar(false); // körs alltid, oavsett hur det gick
    }
  }

  return (
    <section className="kontakt">
      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Har du en fråga? Skriv ett meddelande</p>
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
        />

        {fel && <p className="kontakt-fel">{fel}</p>}

        <button type="submit" disabled={skickar}>
          {skickar ? "Skickar..." : "Skicka"}
        </button>

        {skickat && <p className="kontakt-tack">Tack {name}, jag hör av mig!</p>}
      </form>
    </section>
  );
}