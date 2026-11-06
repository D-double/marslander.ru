import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Download, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'О нас', href: '#about' },
    { label: 'Направления', href: '#services' },
    { label: 'Работы', href: '#portfolio' },
    { label: 'Производство', href: '#production' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-space-darkest/90 backdrop-blur-md py-3 border-b border-space-border shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-9 md:h-11 flex items-center">
              <img 
                src="/logo.svg" 
                alt="Marslander Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-mars-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mars-red hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Phone */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="tel:+79852400060" 
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white font-medium transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-mars-red/10 border border-mars-red/30 flex items-center justify-center text-mars-accent">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide">+7 985 240 0060</span>
            </a>

            <a
              href="/Marslander_Presentation_2025.pdf"
              download="Marslander_Presentation_2025.pdf"
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-space-surface border border-space-border hover:border-mars-red/50 transition-all duration-300"
              title="Скачать PDF-презентацию"
            >
              <Download className="w-3.5 h-3.5 text-mars-accent" />
              <span>Презентация PDF</span>
            </a>

            <button
              onClick={onOpenContactModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-mars-red hover:bg-mars-hover transition-all duration-300 glow-mars-sm active:scale-95 shadow-lg shadow-mars-red/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Обсудить проект</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-space-surface border border-space-border text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-space-darkest/98 border-b border-space-border px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-mars-accent py-2 border-b border-space-border/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a 
              href="tel:+79852400060" 
              className="flex items-center gap-3 text-sm text-slate-200 font-medium py-1"
            >
              <Phone className="w-4 h-4 text-mars-accent" />
              <span>+7 985 240 0060</span>
            </a>

            <a 
              href="mailto:info@marslander.ru" 
              className="flex items-center gap-3 text-sm text-slate-200 font-medium py-1"
            >
              <Mail className="w-4 h-4 text-mars-accent" />
              <span>info@marslander.ru</span>
            </a>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="/Marslander_Presentation_2025.pdf"
                download="Marslander_Presentation_2025.pdf"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 bg-space-surface border border-space-border text-center"
              >
                <Download className="w-3.5 h-3.5 text-mars-accent" />
                <span>PDF презентация</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-mars-red text-center"
              >
                <span>Заказать</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
