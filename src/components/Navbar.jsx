import './Navbar.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ lankar }) {
  const [oppen, setOppen] = useState(false); // är mobilmenyn öppen?

  // Stäng menyn när man har valt en sida
  function stang() {
    setOppen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={stang}>
        Tech Trainee
      </Link>

      <button
        className="hamburgare"
        onClick={() => setOppen(!oppen)}
        aria-label={oppen ? "Stäng meny" : "Öppna meny"}
        aria-expanded={oppen}
        aria-controls="huvudmeny"
      >
        {oppen ? "✕" : "☰"}
      </button>

      <div id="huvudmeny" className={oppen ? "lankar oppen" : "lankar"}>
        {/* NavLink = Link som själv lägger till klassen "active" på sidan man står på.
            end på Hem: annars räknas "/" som aktiv på alla sidor */}
        {lankar.map((lank) => (
          <NavLink
            key={lank.namn}
            to={lank.till}
            end={lank.till === "/"}
            onClick={stang}
          >
            {lank.namn}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
