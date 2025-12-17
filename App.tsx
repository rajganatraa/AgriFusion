import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Background from './components/Background';
import { PageState } from './types';

// Views
import Home from './views/Home';
import Project from './views/Project';
import About from './views/About';
import Science from './views/Science';
import Solution from './views/Solution';
import Team from './views/Team';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageState>(PageState.HOME);

  const renderPage = () => {
    switch (activePage) {
      case PageState.HOME:
        return <Home key="home" setPage={setActivePage} />;
      case PageState.PROJECT:
        return <Project key="project" />;
      case PageState.ABOUT:
        return <About key="about" />;
      case PageState.SCIENCE:
        return <Science key="science" />;
      case PageState.SOLUTION:
        return <Solution key="solution" />;
      case PageState.TEAM:
        return <Team key="team" />;
      default:
        return <Home key="home" setPage={setActivePage} />;
    }
  };

  return (
    <div className="relative min-h-screen text-gray-800 selection:bg-green-200 selection:text-green-900">
      <Background />
      <Navigation activePage={activePage} setPage={setActivePage} />
      
      <main className="pt-28 pb-12 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-4 left-0 right-0 text-center text-xs text-gray-400 pointer-events-none">
        &copy; 2025-26 AgriFusion Project. Designed for Science.
      </footer>
    </div>
  );
};

export default App;