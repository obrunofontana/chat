/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import scalePage from './utils/scalePage';

// Só irá carregar a página quando realmente for requisitada
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App = function () {
  // const [pwaEvent, setPwaEvent] = useState(undefined);

  useEffect(() => {
    const divInstall = document.getElementById('installContainer');
    let butInstall = document.getElementById('butInstall');

    const windowAux = window as any;

    windowAux.addEventListener('beforeinstallprompt', (e: any) => {
      console.log(' windowAux.deferredPrompt', e);
      e.preventDefault();
      windowAux.deferredPrompt = e;

      // Remove the 'hidden' class from the install button container.
      divInstall?.classList.toggle('hidden', false);
      butInstall = document.getElementById('butInstall');
    });

    console.log('....  butInstall', butInstall);
    butInstall?.addEventListener('click', async () => {
      console.log('👍', 'butInstall-clicked');
      const promptEvent = windowAux.deferredPrompt;
      if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
      }
      // Show the install prompt.
      promptEvent.prompt();
      // Log the result
      const result = await promptEvent.userChoice;
      console.log('👍', 'userChoice', result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      windowAux.deferredPrompt = null;
      // Hide the install button.
      divInstall?.classList.toggle('hidden', true);
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
