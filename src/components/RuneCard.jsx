import './RuneCard.css';

function RuneCard({ rune }) {
  return (
    <div className="rune-card">
      <div className="rune-symbol">{rune.symbol}</div>
      <h3>{rune.name}</h3>
      <h5>{rune.meaning}</h5>
      <p>{rune.description}</p>
    </div>
  );
}

export default RuneCard;
