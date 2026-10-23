import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ lankar }) {
  return (
    <nav className="navbar">
      <div className="lankar">
        {lankar.map((lank) =>
  lank.till.includes("#") ? (
    <a key={lank.namn} href={lank.till}>{lank.namn}</a>
  ) : (
    <Link key={lank.namn} to={lank.till}>{lank.namn}</Link>
  )
)}   
      </div>
    </nav>
  );
}

export default Navbar;
