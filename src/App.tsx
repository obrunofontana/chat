import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './globalStyle';

// Só irá carregar a página quando realmente for requisitada
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

// import { Container } from './styles';

const App: React.FC = function () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
