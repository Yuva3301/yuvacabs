import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import LocalTaxiPage from './components/LocalTaxiPage';

function LocalApp() {
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
    <LocalTaxiPage 
      theme={theme} 
      setTheme={setTheme} 
      onNavigateHome={handleNavigateHome} 
    />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <LocalApp />
    </HelmetProvider>
  </StrictMode>,
);
