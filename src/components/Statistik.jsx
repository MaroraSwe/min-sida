// Räknar hur många av mina projekt som använder varje teknik.
// Uppdateras av sig själv när projekt.json ändras.
import "./Statistik.css";
import projektLista from "../data/projekt.json";

// .reduce() går igenom alla projekt och bygger upp ETT svar – här ett objekt:
// { React: 3, CSS: 1, Git: 1, useState: 2, Formspree: 1 }
const antal = projektLista.reduce((summa, projekt) => {
  for (const teknik of projekt.teknik) {
    summa[teknik] = (summa[teknik] || 0) + 1;
  }
  return summa;
}, {});

// Object.entries gör om objektet till en lista: [["React", 3], ["CSS", 1], ...]
// och .sort() lägger den vanligaste tekniken först
const lista = Object.entries(antal).sort((a, b) => b[1] - a[1]);

function Statistik() {
  return (
    <section className="statistik">
      <h3>Det här har jag använt mest</h3>
      <ul className="statistik-lista">
        {lista.map(([teknik, st]) => {
          const procent = Math.round((st / projektLista.length) * 100);
          return (
            <li key={teknik}>
              <span className="statistik-namn">{teknik}</span>
              <span className="statistik-stapel">
                <span style={{ width: `${procent}%` }}></span>
              </span>
              <span className="statistik-antal">
                {procent} % ({st} av {projektLista.length})
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistik;
