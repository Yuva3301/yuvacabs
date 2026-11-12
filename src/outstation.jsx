import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import OutstationTaxiPage from './components/OutstationTaxiPage';

function OutstationApp() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('yuva_theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('yuva_theme', theme);
  }, [theme]);

  const handleNavigateHome = () => {
    window.location.href = '/';
  };

  return (
    <OutstationTaxiPage 
      theme={theme} 
      setTheme={setTheme} 
      onNavigateHome={handleNavigateHome} 
    />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <OutstationApp />
    </HelmetProvider>
  </StrictMode>,
);
