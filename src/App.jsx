import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import LocalSEO from './components/LocalSEO';
import LocalKeywordMatrix from './components/LocalKeywordMatrix';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import WhatsAppGreeting from './components/WhatsAppGreeting';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import AirportTaxiPage from './components/AirportTaxiPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('airport') || hash.includes('airport')) return 'airport';
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

  // Mock preloader loading meter for luxury brand experience
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Dissolve delay
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [loading]);

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
    <>
      <AnimatePresence mode="wait">
        {/* Startup Preloader Screen */}
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 w-full h-full bg-brand-black z-[99999] flex flex-col items-center justify-center space-y-6"
          >
            <div className="absolute top-1/3 w-80 h-80 rounded-full bg-brand-yellow/5 glow-orb blur-[120px]" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-2"
            >
              <h1 
                className="text-3xl sm:text-4xl font-black logo-text-yuva"
                style={{ color: theme === 'light' ? '#0B0F19' : '#FFFFFF' }}
              >
                YUVA<span className="text-brand-yellow text-glow-yellow">CABS</span>
              </h1>
              <span className="text-[10px] text-brand-gray font-extrabold uppercase tracking-widest">
                Premium Transit Partner
              </span>
            </motion.div>

            {/* Glowing progress bar */}
            <div className="w-48 h-1 bg-brand-charcoal rounded-full overflow-hidden relative border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                className="h-full bg-gradient-to-r from-brand-yellow to-brand-gold shadow-[0_0_12px_#FFD43B]"
              />
            </div>
            
            <span className="text-[10px] text-brand-yellow font-extrabold tracking-widest">{loadingProgress}%</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Layout Wrapper */}
      {!loading && (
        <>
          {currentRoute === 'airport' ? (
            /* Dedicated Airport Taxi Landing Page */
            <AirportTaxiPage 
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
                theme={theme} 
                setTheme={setTheme} 
              />

              {/* Page Sections */}
              <main>
                <Hero />
                <About />
                <Services />
                <Pricing />
                <LocalSEO />
                <LocalKeywordMatrix />
                <WhyChooseUs />
                <Testimonials />
                <FAQ />
                <Contact />
              </main>

              {/* Footer bar */}
              <Footer 
                onAdminToggle={handleAdminToggle} 
                onNavigateAirport={handleNavigateAirport} 
              />

              {/* Floating Mobile and WhatsApp triggers */}
              <FloatingCTA />
              <WhatsAppGreeting />
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
        </>
      )}
    </>
  );
}
