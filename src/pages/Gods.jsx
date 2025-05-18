import GodCard from '../components/GodCard';
import gods from '../data/gods';
import '../styles/Gods.css';

function Gods() {
  return (
    <section className="gods-section">
      <h1 className="bloody-title">Slavic Gods</h1>
      
      <div className="runes-decoration">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</div>

      <div className="gods-grid">
        {gods.map((god) => (
          <GodCard key={god.id} god={god} />
        ))}
      </div>
    </section>
  );
}

export default Gods;
