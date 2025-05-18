import './GodCard.css';

function GodCard({ god }) {
  return (
    <div className="god-card">
      <div className="god-symbol">{god.symbol}</div>
      <h2>{god.name}</h2>
      <h4>{god.title}</h4>
      <p>{god.description}</p>
    </div>
  );
}

export default GodCard;