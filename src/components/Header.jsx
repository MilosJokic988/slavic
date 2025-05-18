import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="logo">⛧ Slavic Blood ⛧</div>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/gods" onClick={() => setMenuOpen(false)}>Gods</Link>
        <Link to="/rituals" onClick={() => setMenuOpen(false)}>Rituals</Link>
        <Link to="/symbols" onClick={() => setMenuOpen(false)}>Symbols</Link>
      </nav>
    </header>
  );
}

export default Header;
