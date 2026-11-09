// En dold sida på /fizzbuzz – den finns inte i menyn, man måste skriva adressen.
import "./FizzBuzz.css";

// FizzBuzz för ETT tal:
// delbart med både 3 och 5 -> "FizzBuzz", bara med 3 -> "Fizz", bara med 5 -> "Buzz", annars talet.
// % ger resten vid division: 9 % 3 är 0, alltså går 9 jämnt upp i 3.
function fizzbuzz(tal) {
  if (tal % 15 === 0) {
    return "FizzBuzz"; // måste kollas FÖRST – annars fångas 15 redan av "Fizz"
  } else if (tal % 3 === 0) {
    return "Fizz";
  } else if (tal % 5 === 0) {
    return "Buzz";
  } else {
    return String(tal);
  }
}

// En for-loop bygger listan med 100 rader: { tal: 1, text: "1" }, { tal: 3, text: "Fizz" } ...
const rader = [];
for (let i = 1; i <= 100; i++) {
  rader.push({ tal: i, text: fizzbuzz(i) });
}

// Ger varje ruta en klass efter vad den blev, så att CSS kan färga den
function klassFor(text) {
  if (text === "FizzBuzz") return "fb-fizzbuzz";
  if (text === "Fizz") return "fb-fizz";
  if (text === "Buzz") return "fb-buzz";
  return "";
}

function FizzBuzz() {
  return (
    <section className="fizzbuzz">
      <h2>FizzBuzz</h2>
      <p className="fizzbuzz-intro">
        Talen 1 till 100. Delbart med 3 blir Fizz, med 5 blir Buzz och med båda blir FizzBuzz.
      </p>

      <ol className="fizzbuzz-lista">
        {rader.map((rad) => (
          <li key={rad.tal} className={klassFor(rad.text)}>
            {rad.text}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default FizzBuzz;
