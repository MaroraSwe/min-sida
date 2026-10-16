import './Navbar.css';  
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="logo">Meenakshi</h1>
      <div className="lankar">
        <a href="#">Hem</a>
        <a href="#om-mig">Om Mig</a>
        <a href="#kontakt">Kontakt</a>
        <a href="#projekt">Projekt</a>
        <a href="#Länk">Länk</a>
      </div>
    </nav>
  );
}



export default Navbar;