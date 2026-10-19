import './Header.css';

function Header({ namn, titel, stad }) {
  return (
    <header className="header">
      <h1>{namn}</h1>
      <p>{titel}</p>
      <p>{stad}</p> 
    </header>
  );
}

export default Header;