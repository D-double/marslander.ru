import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Download, Sparkles, ChevronDown, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export const Hero = ({ onOpenContactModal }) => {
  const canvasRef = useRef(null);

  // Subtle interactive orbital particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Stars and planetary dots
    const dotsCount = Math.floor(width < 768 ? 35 : 75);
    const dots = Array.from({ length: dotsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      color: Math.random() > 0.8 ? '#a71e28' : Math.random() > 0.6 ? '#ffffff' : '#475569',
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint orbital ellipses centered slightly offset
      const cx = width * 0.5;
      const cy = height * 0.45;
      const orbits = [180, 320, 480, 680, 920];

      ctx.save();
      orbits.forEach((r, idx) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.55, -0.15, 0, Math.PI * 2);
        ctx.strokeStyle = idx % 2 === 0 ? 'rgba(255, 255, 255, 0.035)' : 'rgba(167, 30, 40, 0.06)';
        ctx.lineWidth = 1;
        ctx.setLineDash(idx % 2 === 0 ? [4, 8] : [1, 0]);
        ctx.stroke();
      });
      ctx.restore();

      // Render dots
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.pulse += 0.02;

        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        const currentRadius = dot.radius * (0.8 + 0.3 * Math.sin(dot.pulse));
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = 0.6 + 0.3 * Math.sin(dot.pulse);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-space-darkest">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />

      {/* Atmospheric radial gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-mars-red/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-mars-darkred/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-space-surface/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag / Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-surface/80 border border-space-border text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md mb-8 animate-in fade-in duration-700 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-mars-accent animate-ping" />
          <span className="w-2 h-2 rounded-full bg-mars-red absolute left-4" />
          <span className="text-slate-400">Marslander</span>
          <span className="text-space-border">|</span>
          <span className="text-mars-accent font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
            Creative & Production Agency
          </span>
        </div>

        {/* Brand Big Logo Display */}
        <div className="mb-6 max-w-[340px] sm:max-w-[460px] md:max-w-[560px] opacity-95 transition-transform duration-500 hover:scale-[1.02]">
          <img 
            src="/logo.svg" 
            alt="Marslander — creative & production" 
            className="w-full h-auto drop-shadow-2xl" 
          />
        </div>

        {/* Main Punchy Tagline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6 font-display">
          Материализуем смелые идеи в{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-mars-accent">
            премиальные продукты
          </span>
        </h1>

        {/* Description Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          Комплексное сопровождение брендов на каждом этапе жизненного цикла: от стратегии и айдентики до сложной упаковки, корпоративного мерча, масштабных спортивных арен и автопарков.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-mars-red hover:bg-mars-hover transition-all duration-300 glow-mars active:scale-95 shadow-xl shadow-mars-red/25"
          >
            <span>Смотреть работы</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenContactModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-200 bg-space-surface hover:bg-space-card border border-space-border hover:border-mars-red/50 transition-all duration-300 backdrop-blur-md active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-mars-accent" />
            <span>Обсудить проект</span>
          </button>

          <a
            href="/Marslander_Presentation_2025.pdf"
            download="Marslander_Presentation_2025.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300"
          >
            <Download className="w-4 h-4 text-slate-400 group-hover:text-white" />
            <span>Скачать презентацию PDF</span>
          </a>
        </div>

        {/* Key Metrics / Trust Bar */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-space-border/60">
          <div className="p-4 rounded-xl bg-space-surface/40 border border-space-border/50 text-left backdrop-blur-sm hover:border-mars-red/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center gap-1 font-mono">
              <span>10+</span>
              <span className="text-mars-accent text-lg">лет</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-normal">
              Опыта в продакшне и брендинге
            </div>
          </div>

          <div className="p-4 rounded-xl bg-space-surface/40 border border-space-border/50 text-left backdrop-blur-sm hover:border-mars-red/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center gap-1 font-mono">
              <span>40+</span>
              <span className="text-mars-accent text-lg">топ</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-normal">
              Крупнейших брендов страны
            </div>
          </div>

          <div className="p-4 rounded-xl bg-space-surface/40 border border-space-border/50 text-left backdrop-blur-sm hover:border-mars-red/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center gap-1 font-mono">
              <span>500k+</span>
              <span className="text-mars-accent text-lg">шт</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-normal">
              Изделий выпускаем ежегодно
            </div>
          </div>

          <div className="p-4 rounded-xl bg-space-surface/40 border border-space-border/50 text-left backdrop-blur-sm hover:border-mars-red/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center gap-1 font-mono">
              <span>100%</span>
              <span className="text-mars-accent text-lg">контроль</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-normal">
              Собственные станки и контроль
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="pt-12 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
          <a href="#about" aria-label="Прокрутить к описанию">
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
