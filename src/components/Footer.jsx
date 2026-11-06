import React from 'react';
import { Download, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-space-darkest text-slate-400 border-t border-space-border/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-space-border/60">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="h-10 flex items-center">
              <img
                src="/logo.svg"
                alt="Marslander Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Marslander — креативное продакшн-агентство полного цикла. Разработка брендов, сложная премиальная упаковка, корпоративный мерч и масштабный event-продакшн.
            </p>
            <div className="pt-2">
              <a
                href="/Marslander_Presentation_2025.pdf"
                download="Marslander_Presentation_2025.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-space-surface hover:bg-space-card border border-space-border text-xs font-semibold uppercase tracking-wider text-white transition-all glow-mars-sm"
              >
                <Download className="w-3.5 h-3.5 text-mars-accent" />
                <span>Скачать PDF презентацию (17.9 MB)</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">О компании</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Направления работы</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Портфолио проектов</a>
              </li>
              <li>
                <a href="#production" className="hover:text-white transition-colors">Производственные мощности</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Отзывы заказчиков</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Связь с нами
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-mars-accent shrink-0" />
                <a href="tel:+79852400060" className="hover:text-white transition-colors">
                  +7 985 240 0060
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-mars-accent shrink-0" />
                <a href="tel:+79104948700" className="hover:text-white transition-colors">
                  +7 910 494 8700
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-mars-accent shrink-0" />
                <a href="mailto:info@marslander.ru" className="hover:text-white transition-colors font-mono">
                  info@marslander.ru
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-mars-accent shrink-0 mt-0.5" />
                <span>Москва, Ружейный пер., д. 2А, офис 3</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Marslander (ООО «Марсландер»). Все права защищены.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
