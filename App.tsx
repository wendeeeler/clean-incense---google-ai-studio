import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Standards from './pages/Standards';
import WarmingVsBurning from './pages/WarmingVsBurning';
import Ingredients from './pages/Ingredients';
import Start from './pages/Start';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
    // Basic scroll restoration since we are using HashRouter
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col text-stone-900 font-sans selection:bg-stone-200 leading-editorial">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/warming-vs-burning" element={<WarmingVsBurning />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/start" element={<Start />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;