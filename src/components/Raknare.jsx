import { useState } from 'react';
import './Raknare.css';

function Raknare() {
  const [antal, setAntal] = useState(0);
  const [visas, setVisas] = useState(false);

  return (
    <div className="Raknare">
      <div className="raknare-rad">
        <button className="raknare-rund" onClick={() => antal > 0 && setAntal(antal - 1)}>-</button>
        <span className="raknare-siffra" style={{ color: antal > 0 ? 'green' : 'red' }}>{antal}</span>
        <button className="raknare-rund" onClick={() => setAntal(antal + 1)}>+</button>
      </div>

      <div className="raknare-rad">
        <button className="raknare-knapp" onClick={() => setAntal(0)}>Nollställ</button>
        <button className="raknare-knapp" onClick={() => setVisas(!visas)}>
          {visas ? "Visa mindre" : "Visa mer"}
        </button>
      </div>

      {visas && <p className="raknare-text">Här är den dolda texten!</p>}
    </div>
  );
}

export default Raknare;
