import '../styles/Home.css';
import logo from '../assets/logo.png';

function Home() {
  return (
    <section className="hero-section">
      <h1 className="bloody-title">Welcome to Slavic Mythology</h1>
      
      <p className="hero-subtitle">Slavic spirits await you</p>

      <div className="home-intro">
        <p>
          In the shadows of the old Slavic forests, forgotten gods whisper through
          the trees. This is a place of rituals, runes, and ancient blood...
        </p>
      </div>

      <div className="home-footer-logo">
        <a href="mailto:noctisdesign@gmail.com?subject=Hello%20Slavic%20Mythology&body=Hi%2C%20I%20found%20your%20site%20and%20wanted%20to%20reach%20out!">
          <img src={logo} alt="Slavic Mythology Logo" className="home-logo" />
        </a>
      </div>
    </section>
  );
}

export default Home;
