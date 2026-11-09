import './Footer.css';
import { NAME, EMAIL, GITHUB_USER, LINKEDIN_URL } from '../data/settings';
import { copyright } from '../utils/text';

function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <p className="footer-message">
        Tack för att du tittade på min webbplats!
      </p>
      <div className="footer-kontakt">
        <h2>Kontakt</h2>
        <p>
          {/* Template literals: ${...} sätter in värdet från settings.js */}
          <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">E-post</a>
          {" · "}
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">GitHub</a>
          {" · "}
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>

      <p className="footer-bottom">{copyright(NAME)} · Gjord med React ❤️</p>
    </footer>
  );
}

export default Footer;
