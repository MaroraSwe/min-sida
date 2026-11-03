import "./Hero.css";
import herobild from "../assets/Self.jpg";
import { Link } from "react-router-dom";


function Hero({ namn }) {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-innehall">
                <p className="hero-intro">Hej, jag heter {namn}!</p>
                <h2 id="hero-title">Jag lär mig att bygga webben.</h2>
                <p className="hero-text">Välkommen till min portfolio</p>
                <Link className="hero-knapp" to="/om-mig">
                 Läs Vidare
                </Link>
            </div>
            
            <div id="wrapper">
            <img
                className="hero-bild"
                src={herobild}
                alt="Hero Bild"
            />

            </div>
        </section>
    );
}
export default Hero;