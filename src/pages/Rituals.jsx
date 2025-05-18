
import RitualCard from '../components/RitualCard';
import rituals from '../data/rituals';
import '../styles/Rituals.css';

function Rituals() {
  return (
    <section className="rituals-section">
      <h1 className="bloody-title">Slavic Rituals </h1>
      <div className="rituals-grid">
        {rituals.map((ritual) => (
          <RitualCard key={ritual.id} ritual={ritual} />
        ))}
      </div>
    </section>
  );
}

export default Rituals;
