import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="lankar">
        <Link to="/">Hem</Link>
        <Link to="/om-mig">Om Mig</Link>
        <a href="/#projekt">Projekt</a>
        <Link to="/kontakt">Kontakt</Link>
        
        
       
      </div>
    </nav>
  );
}

export default Navbar;
