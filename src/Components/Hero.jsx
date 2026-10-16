import "./Hero.css";
import herobild from "../Assets/Hero2.jpg";

function Hero({ namn }) {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-innehall">
                <p className="hero-intro">Hej, jag heter {namn}!</p>
                <h2 id="hero-title">Jag lär mig att bygga webben.</h2>
                <p className="hero-text">Välkommen till min portfolio</p>
                <a className="hero-knapp" href="#valkommen">
                    Läs vidare
                </a>
            </div>
            <img
                className="hero-bild"
                src={herobild}
                alt="Hero Bild"
                width="2880"
                height="1800"
            />
        </section>
    );
}
export default Hero;