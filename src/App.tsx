import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import About from '@/pages/rcselect/About';
import Home from '@/pages/rcselect/Home';

import './App.css';
function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
