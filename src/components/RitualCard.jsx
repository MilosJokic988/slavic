import './RitualCard.css';

function RitualCard({ ritual }) {
  return (
    <div className="ritual-card">
      <div className="ritual-symbol">{ritual.symbol}</div>
      <h3>{ritual.name}</h3>
      <p>{ritual.description}</p>
    </div>
  );
}

export default RitualCard;
