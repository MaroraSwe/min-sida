import "./Kontakt.css";

export default function Kontakt() {
  return (
    <section className="kontakt">
      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Har du en fråga? Skriv ett meddelande</p>
        
      </div>

      {/* Höger kolumn: formuläret – alla fält ligger INNANFÖR <form> */}
      <form className="kontakt-form">
        <label htmlFor="namn">Namn</label>
        <input type="text" id="namn" placeholder="Ditt namn" />

        <label htmlFor="epost">E-post</label>
        <input type="email" id="epost" placeholder="namn@exempel.se" />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea id="meddelande" rows="5" />

        <button type="submit">Skicka</button>
      </form>
    </section>
  )
}
