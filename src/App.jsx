import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gods from './pages/Gods';
import Rituals from './pages/Rituals';
import Symbols from './pages/Symbols';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gods" element={<Gods />} />
        <Route path="rituals" element={<Rituals />} />
        <Route path="symbols" element={<Symbols />} />
      </Route>
    </Routes>
  );
}

export default App;
