import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import LocalSEO from './components/LocalSEO';
import About from './components/About';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

// Code-split heavy secondary pages and below-the-fold modules for sub-second mobile load
const LocalKeywordMatrix = lazy(() => import('./components/LocalKeywordMatrix'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const AirportTaxiPage = lazy(() => import('./components/AirportTaxiPage'));
const LocalTaxiPage = lazy(() => import('./components/LocalTaxiPage'));
const OutstationTaxiPage = lazy(() => import('./components/OutstationTaxiPage'));

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('airport') || hash.includes('airport')) return 'airport';
    if (path.includes('local-taxi')) return 'local';
    if (path.includes('outstation-taxi')) return 'outstation';
    return 'home';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('yuva_theme') || 'dark';
  });

  // Sync theme with HTML root class
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('yuva_theme', theme);
  }, [theme]);

  // URL Hash & History routing logic: Admin and Airport routes
  useEffect(() => {
    const handleRouter = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash === '#admin') {
        setShowAdmin(true);
      } else {
        setShowAdmin(false);
      }

      if (path.includes('airport') || hash.includes('airport')) {
        setCurrentRoute('airport');
      } else if (path.includes('local-taxi')) {
        setCurrentRoute('local');
      } else if (path.includes('outstation-taxi')) {
        setCurrentRoute('outstation');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleRouter);
    window.addEventListener('popstate', handleRouter);
    // Initial load check
    handleRouter();

    return () => {
      window.removeEventListener('hashchange', handleRouter);
      window.removeEventListener('popstate', handleRouter);
    };
  }, []);

  const handleAdminToggle = () => {
    if (showAdmin) {
      window.location.hash = '';
      setShowAdmin(false);
    } else {
      window.location.hash = 'admin';
      setShowAdmin(true);
    }
  };

  const handleNavigateAirport = () => {
    try {
      window.history.pushState(null, '', '/airport-taxi');
    } catch {
      window.location.hash = 'airport-taxi';
    }
    setCurrentRoute('airport');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateLocal = () => {
    try {
      window.history.pushState(null, '', '/local-taxi');
    } catch {
      window.location.hash = 'local-taxi';
    }
    setCurrentRoute('local');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateOutstation = () => {
    try {
      window.history.pushState(null, '', '/outstation-taxi');
    } catch {
      window.location.hash = 'outstation-taxi';
    }
    setCurrentRoute('outstation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    try {
      window.history.pushState(null, '', '/');
    } catch {
      window.location.hash = '';
    }
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin" /></div>}>
      {currentRoute === 'airport' ? (
        /* Dedicated Airport Taxi Landing Page */
        <AirportTaxiPage 
          theme={theme} 
          setTheme={setTheme} 
          onNavigateHome={handleNavigateHome} 
        />
      ) : currentRoute === 'local' ? (
        /* Dedicated Local Taxi Landing Page */
        <LocalTaxiPage
          theme={theme}
          setTheme={setTheme}
          onNavigateHome={handleNavigateHome}
        />
      ) : currentRoute === 'outstation' ? (
        /* Dedicated Outstation Taxi Landing Page */
        <OutstationTaxiPage
          theme={theme}
          setTheme={setTheme}
          onNavigateHome={handleNavigateHome}
        />
      ) : (
        /* Main Home Landing Page */
        <div className="bg-brand-black text-brand-white min-h-screen relative bg-gradient-mesh selection:bg-brand-yellow selection:text-brand-black transition-colors duration-300">
          {/* Search Engine Optimization Head */}
          <SEO />
          
          {/* Header Navigation */}
          <Header 
            onAdminToggle={handleAdminToggle} 
            onNavigateAirport={handleNavigateAirport}
            onNavigateLocal={handleNavigateLocal}
            onNavigateOutstation={handleNavigateOutstation}
            theme={theme} 
            setTheme={setTheme} 
          />

          {/* Page Sections */}
          <main id="main-content">
            <Hero />
            <About />
            <Services />
            <Pricing />
            <LocalSEO />
            <WhyChooseUs />
            <Suspense fallback={<div className="py-12 flex justify-center"><div className="w-6 h-6 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin" /></div>}>
              <LocalKeywordMatrix />
              <Testimonials />
              <FAQ />
              <Contact />
            </Suspense>
          </main>

          {/* Footer bar */}
          <Footer 
            onAdminToggle={handleAdminToggle} 
            onNavigateAirport={handleNavigateAirport}
            onNavigateLocal={handleNavigateLocal}
            onNavigateOutstation={handleNavigateOutstation}
          />

          {/* Floating Mobile and WhatsApp triggers */}
          <FloatingCTA />
        </div>
      )}

      {/* Protected Administrative Dashboard overlay */}
      <AnimatePresence>
        {showAdmin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AdminDashboard onClose={handleAdminToggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </Suspense>
  );
}
