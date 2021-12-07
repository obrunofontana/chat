import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import scalePage from './utils/scalePage';

// Só irá carregar a página quando realmente for requisitada
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App = function () {
  // const [pwaEvent, setPwaEvent] = useState(undefined);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      // console.log("pwa event executed");
      e.preventDefault();
      // Stash the event so it can be triggered later.
      // setPwaEvent(e);
      // Update UI notify the user they can install the PWA
      console.log(
        'vai servir para notificar o usuário do mobile para instalar a aplicação',
        e
      );
    });

    window.addEventListener('resize', () => {
      const page = scalePage();
      console.log('rezize screen', page);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
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
