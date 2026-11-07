import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Volume2, VolumeX, Flame } from 'lucide-react';

// Ornate SVG Diya Component with Realistic Flickering Flame
export function DiyaIcon({ className = "w-6 h-6", glowing = true }) {
  return (
    <span className={`inline-block relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(255,183,3,0.6)]"
      >
        {/* Glow halo */}
        {glowing && (
          <circle
            cx="32"
            cy="18"
            r="16"
            fill="url(#diyaAura)"
            className="animate-pulse opacity-75"
          />
        )}

        {/* Outer Flame */}
        <path
          d="M32 4C32 4 23 15 23 23C23 28 27 32 32 32C37 32 41 28 41 23C41 15 32 4 32 4Z"
          fill="url(#outerFlame)"
          className="diya-flame-outer"
        />

        {/* Inner Flame Core */}
        <path
          d="M32 10C32 10 26 17 26 23C26 26.5 28.5 29 32 29C35.5 29 38 26.5 38 23C38 17 32 10 32 10Z"
          fill="url(#innerFlame)"
          className="diya-flame-inner"
        />

        {/* Terracotta Diya Clay Lamp Body */}
        <path
          d="M8 36C8 36 12 50 32 50C52 50 56 36 56 36C56 36 50 42 32 42C14 42 8 36 8 36Z"
          fill="url(#diyaBase)"
        />
        {/* Rim highlights */}
        <ellipse
          cx="32"
          cy="37"
          rx="24"
          ry="4"
          fill="#D97706"
          stroke="#FDE68A"
          strokeWidth="0.8"
        />
        {/* Decorative lamp base pedestal */}
        <path
          d="M26 49H38L42 54C42 54 38 56 32 56C26 56 22 54 22 54L26 49Z"
          fill="#B45309"
        />

        {/* Traditional golden bead motifs */}
        <circle cx="20" cy="42" r="1.5" fill="#FEF08A" />
        <circle cx="26" cy="44" r="1.5" fill="#FEF08A" />
        <circle cx="32" cy="45" r="1.8" fill="#FEF08A" />
        <circle cx="38" cy="44" r="1.5" fill="#FEF08A" />
        <circle cx="44" cy="42" r="1.5" fill="#FEF08A" />

        {/* Gradients */}
        <defs>
          <radialGradient id="diyaAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="outerFlame" x1="32" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="innerFlame" x1="32" y1="10" x2="32" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="diyaBase" x1="8" y1="36" x2="56" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="30%" stopColor="#B45309" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

// Synthesizes a soft, festive sparkling firework pop using Web Audio API (silent by default, plays on explicit click)
function playSparkleSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch {
    // Graceful fallback if audio is not allowed
  }
}

export default function DiwaliEffects() {
  const [effectsEnabled, setEffectsEnabled] = useState(() => {
    return localStorage.getItem('yuva_diwali_effects') !== 'off';
  });
  const [bannerDismissed, setBannerDismissed] = useState(() => {
    return sessionStorage.getItem('yuva_diwali_banner') === 'dismissed';
  });
  const [soundEnabled, setSoundEnabled] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameId = useRef(null);
  const lastAutoBurstRef = useRef(0);

  // Toggle effects persistence
  const toggleEffects = () => {
    setEffectsEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('yuva_diwali_effects', next ? 'on' : 'off');
      return next;
    });
  };

  const dismissBanner = () => {
    setBannerDismissed(true);
    sessionStorage.setItem('yuva_diwali_banner', 'dismissed');
  };

  // Sparkler Burst Spawner
  const spawnBurst = useCallback((x, y, count = 35) => {
    const isMobile = window.innerWidth < 640;
    const actualCount = isMobile ? Math.min(count, 20) : count;

    // Festival Color Palette: Gold, Warm Amber, Vermilion Red, Electric Sparkle
    const colors = [
      '#FFD700', '#FFA500', '#FF4500', '#FF1493',
      '#00F5FF', '#39FF14', '#FFF44F', '#FFFFFF'
    ];

    for (let i = 0; i < actualCount; i++) {
      const angle = (Math.PI * 2 * i) / actualCount + (Math.random() - 0.5) * 0.4;
      const speed = Math.random() * 4.5 + 1.5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 1.5),
        alpha: 1,
        decay: Math.random() * 0.02 + 0.012,
        size: Math.random() * 3 + 1.5,
        color,
        sparkle: Math.random() > 0.4,
      });
    }

    if (soundEnabled) {
      playSparkleSound();
    }
  }, [soundEnabled]);

  // Burst multiple crackers across screen
  const burstCelebration = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    spawnBurst(width * 0.25, height * 0.35, 45);
    setTimeout(() => spawnBurst(width * 0.75, height * 0.3, 45), 200);
    setTimeout(() => spawnBurst(width * 0.5, height * 0.22, 55), 400);
    setTimeout(() => spawnBurst(width * 0.35, height * 0.45, 35), 600);
    setTimeout(() => spawnBurst(width * 0.65, height * 0.4, 35), 750);
  };

  // Canvas loop & Auto-launching fireworks
  useEffect(() => {
    if (!effectsEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Click anywhere on screen to trigger celebratory sparks
    const handleWindowClick = (e) => {
      // Don't burst on input or button clicks to prevent disturbance
      if (['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(e.target?.tagName)) {
        return;
      }
      spawnBurst(e.clientX, e.clientY, 30);
    };
    window.addEventListener('click', handleWindowClick);

    // Initial festive welcome bursts
    const initialTimer1 = setTimeout(() => spawnBurst(width * 0.3, height * 0.28, 40), 800);
    const initialTimer2 = setTimeout(() => spawnBurst(width * 0.7, height * 0.24, 40), 1600);

    // Render loop
    const render = (timestamp) => {
      ctx.clearRect(0, 0, width, height);

      // Auto burst every 4-6 seconds
      if (timestamp - lastAutoBurstRef.current > (window.innerWidth < 640 ? 6000 : 4200)) {
        if (!document.hidden) {
          const rx = width * (0.2 + Math.random() * 0.6);
          const ry = height * (0.15 + Math.random() * 0.35);
          spawnBurst(rx, ry, window.innerWidth < 640 ? 22 : 36);
          lastAutoBurstRef.current = timestamp;
        }
      }

      // Update & render particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.045; // gentle gravity
        p.vx *= 0.985; // air friction
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);

        if (p.sparkle && Math.random() > 0.3) {
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleWindowClick);
      clearTimeout(initialTimer1);
      clearTimeout(initialTimer2);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [effectsEnabled, spawnBurst]);

  return (
    <>
      {/* ── 1. Fullscreen Canvas for Non-Blocking Fireworks & Sparklers ── */}
      {effectsEnabled && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 w-full h-full"
        />
      )}

      {/* ── 2. Festive Top Diwali Greeting Announcement Ribbon ── */}
      <AnimatePresence>
        {!bannerDismissed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative z-50 bg-gradient-to-r from-[#78350F] via-[#D97706] to-[#B45309] text-white border-b border-amber-300/30 shadow-[0_4px_20px_rgba(217,119,6,0.25)] overflow-hidden"
          >
            {/* Shimmer light bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer pointer-events-none" />

            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <DiyaIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 leading-tight">
                  <span className="font-black text-amber-200 tracking-wide uppercase text-[11px] sm:text-xs flex items-center gap-1">
                    <span>🪔 Happy Diwali!</span>
                    <span className="hidden md:inline text-amber-100 font-extrabold">• Special Festival Cab Offers</span>
                  </span>
                  <span className="text-white/90 font-medium text-[11px] sm:text-xs truncate hidden sm:inline">
                    Airport Fixed ₹2,200 | Outstation ₹9/km | 24/7 Hosur Cabs
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0">
                <a
                  href="tel:+919944271322"
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-white text-amber-950 font-black text-[10px] sm:text-xs shadow hover:bg-amber-100 transition-colors flex items-center space-x-1"
                >
                  <span>Book Now</span>
                  <span className="hidden sm:inline">• 99442 71322</span>
                </a>
                <button
                  type="button"
                  onClick={dismissBanner}
                  className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                  aria-label="Close Diwali Announcement"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 3. Hanging / Floating Glowing Corner Diyas ── */}
      {effectsEnabled && (
        <>
          {/* Top Left Floating Diya */}
          <div
            className="fixed top-24 left-4 z-40 hidden xl:flex flex-col items-center pointer-events-auto cursor-pointer group"
            onClick={() => spawnBurst(window.innerWidth * 0.15, window.innerHeight * 0.25, 45)}
            title="Click to burst Diwali fireworks!"
          >
            <div className="w-[1px] h-10 bg-gradient-to-b from-amber-400/80 to-amber-500/20" />
            <div className="transform group-hover:scale-125 transition-transform duration-300">
              <DiyaIcon className="w-10 h-10" />
            </div>
            <span className="text-[9px] font-extrabold text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity mt-1 bg-black/70 px-1.5 py-0.5 rounded shadow">
              Spark!
            </span>
          </div>

          {/* Top Right Floating Diya */}
          <div
            className="fixed top-24 right-4 z-40 hidden xl:flex flex-col items-center pointer-events-auto cursor-pointer group"
            onClick={() => spawnBurst(window.innerWidth * 0.85, window.innerHeight * 0.25, 45)}
            title="Click to burst Diwali fireworks!"
          >
            <div className="w-[1px] h-10 bg-gradient-to-b from-amber-400/80 to-amber-500/20" />
            <div className="transform group-hover:scale-125 transition-transform duration-300">
              <DiyaIcon className="w-10 h-10" />
            </div>
            <span className="text-[9px] font-extrabold text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity mt-1 bg-black/70 px-1.5 py-0.5 rounded shadow">
              Spark!
            </span>
          </div>
        </>
      )}

      {/* ── 4. Interactive Floating Diwali Magic Widget (Bottom Left) ── */}
      <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center space-x-2">
        <button
          type="button"
          onClick={burstCelebration}
          className="group relative flex items-center space-x-2 px-3 sm:px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-brand-black font-black text-xs shadow-[0_0_18px_rgba(255,183,3,0.45)] hover:shadow-[0_0_24px_rgba(255,183,3,0.7)] hover:scale-105 active:scale-95 transition-all"
          aria-label="Burst Diwali Crackers"
        >
          <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Burst Crackers! 🎆
          </span>
          <span className="sm:hidden font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            🪔 Diwali
          </span>
        </button>

        {/* Small Toggle for Sound / Effects */}
        <div className="flex items-center bg-brand-charcoal/90 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-lg">
          <button
            type="button"
            onClick={toggleEffects}
            className={`px-2 py-1 rounded-full text-[10px] font-black transition-colors ${
              effectsEnabled ? 'bg-amber-500 text-brand-black' : 'text-brand-silver hover:text-white'
            }`}
            title={effectsEnabled ? "Turn Diwali fireworks off" : "Turn Diwali fireworks on"}
          >
            {effectsEnabled ? '✨ ON' : 'OFF'}
          </button>
          {effectsEnabled && (
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="p-1 rounded-full text-brand-silver hover:text-white transition-colors"
              title={soundEnabled ? "Mute Diwali cracker sounds" : "Enable Diwali cracker sounds"}
              aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-brand-gray" />
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
