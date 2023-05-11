import { FC } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import n from './nest-router/data';
import About from './About';
import Home from './Home';
import NoMatch from './NoMatch';

const App: FC = () => {
  return (
    <>
      <h1>{n}</h1>
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
