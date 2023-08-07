import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import About from '@/pages/rcselect/About';
import Home from '@/pages/rcselect/Home';
import Test from '@/pages/Test';

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
          <Link to="/test" style={{ padding: 5 }}>
            Test
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
