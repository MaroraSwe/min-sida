import './Footer.css';

function Footer() {
  const år = new Date().getFullYear();   // årtalet just nu, t.ex. 2026

  return (
    <footer className="footer" id="kontakt">
      <p className="footer-message">
        Tack för att du tittade på min webbplats!
      </p>
      <div className="footer-kontakt">
        <h2>Kontakt</h2>
        <p>
          <a href="mailto:meenakshi.arora09@gmail.com" target="_blank" rel="noreferrer">E-post</a>
          {" · "}
          <a href="https://github.com/MaroraSwe" target="_blank" rel="noreferrer">GitHub</a>
          {" · "}
          <a href="https://www.linkedin.com/in/meenakshiarora0409" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>

      <p className="footer-bottom">© {år} Meenakshi Arora · Gjord med React ❤️</p>
    </footer>
  );
}

export default Footer;
