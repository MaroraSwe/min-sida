import './Footer.css';

function Footer() {
  const år = new Date().getFullYear();   // årtalet just nu, t.ex. 2026

  return (
    <footer className="footer" id="kontakt">
       <p className="footer-message">
    Tack för att du tittade på min webbplats!
  </p>

  <nav className="footer-links">
    <a href="#">Hem</a>
    <a href="#om-mig">Om Mig</a>
    <a href="mailto:yourname@example.com">Kontakt</a>
  </nav>

  <div className="footer-bottom">
    <p>© 2026 Meenakshi</p>
    <p>Gjord med React ❤️</p>
  </div>
</footer>
  )
}
export default Footer;
