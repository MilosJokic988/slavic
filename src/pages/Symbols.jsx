
import RuneCard from '../components/RuneCard';
import runes from '../data/runes';
import '../styles/Symbols.css';

function Symbols() {
  return (
    <section className="symbols-section">
      <h1 className="bloody-title">Slavic Symbols </h1>
      <div className="rune-grid">
        {runes.map((rune) => (
          <RuneCard key={rune.id} rune={rune} />
        ))}
      </div>
    </section>
  );
}

export default Symbols;
