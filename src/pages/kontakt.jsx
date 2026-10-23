import "./Kontakt.css";
import kontaktBild from "../assets/kontakt.svg";
import { useState } from "react";

export default function Kontakt() {
const [name, setName] = useState( "" );
 const [email, setEmail] = useState( "" );
 const [message, setMessage] = useState( "" );
 const [skickat, setSkickat] = useState(false);
 const [fel, setFel] = useState("");
 
 
 function  handleSubmit (e) {
  e.preventDefault();       // stop page reload
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

    // Everything OK
    setFel(""); // remove any old error message
    console.log(name, email, message);
    setSkickat(true); // show thank you message
    setEmail(""); // clear the fields
    setMessage("");
  }

  console.log(name, email, message);

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

        <button type="submit">Skicka</button>

        {skickat && <p className="kontakt-tack">Tack {name}, jag hör av mig!</p>}
      </form>
    </section>
  );
}