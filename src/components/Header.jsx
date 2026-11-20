import './Header.css';

function Header({ namn, titel, stad }) {
  return (
    <header className="header">
      <h1>{namn}</h1>
      {/* && = visa bara raden om den finns – annars blir det tomma rader med luft */}
      {titel && <p>{titel}</p>}
      {stad && <p>{stad}</p>}
    </header>
  );
}

export default Header;