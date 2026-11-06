import React, { useState } from 'react';
import { MarqueeLogoScroller, type Logo } from '@/components/ui/marquee-logo-scroller';
import { Building2, Sparkles } from 'lucide-react';

export const Clients: React.FC = () => {
  const marslanderPartners: Logo[] = [
    {
      src: '/logos/1tv.svg',
      alt: 'Первый Канал',
      gradient: { from: '#a71e28', via: '#1e3a8a', to: '#0f172a' },
    },
    {
      src: '/logos/alfa.svg',
      alt: 'Альфа-Банк',
      gradient: { from: '#ef4444', via: '#a71e28', to: '#450a0a' },
    },
    {
      src: '/logos/bosco.svg',
      alt: 'BOSCO di Ciliegi',
      gradient: { from: '#15803d', via: '#854d0e', to: '#a71e28' },
    },
    {
      src: '/logos/gum.svg',
      alt: 'ГУМ Красная площадь',
      gradient: { from: '#d97706', via: '#a71e28', to: '#1c1917' },
    },
    {
      src: '/logos/gpb.svg',
      alt: 'Газпромбанк',
      gradient: { from: '#2563eb', via: '#1d4ed8', to: '#0f172a' },
    },
    {
      src: '/logos/vtb.svg',
      alt: 'ВТБ',
      gradient: { from: '#0284c7', via: '#0369a1', to: '#082f49' },
    },
    {
      src: '/logos/skolkovo.svg',
      alt: 'Skolkovo Golf Club',
      gradient: { from: '#eab308', via: '#ca8a04', to: '#14532d' },
    },
    {
      src: '/logos/moscow.svg',
      alt: 'Правительство Москвы',
      gradient: { from: '#dc2626', via: '#991b1b', to: '#450a0a' },
    },
    {
      src: '/logos/artek.svg',
      alt: 'МДЦ Артек',
      gradient: { from: '#f97316', via: '#ea580c', to: '#0284c7' },
    },
    {
      src: '/logos/vesper.svg',
      alt: 'Vesper',
      gradient: { from: '#64748b', via: '#334155', to: '#0f172a' },
    },
    {
      src: '/logos/bork.svg',
      alt: 'BORK',
      gradient: { from: '#475569', via: '#1e293b', to: '#020617' },
    },
    {
      src: '/logos/ctc.svg',
      alt: 'СТС',
      gradient: { from: '#facc15', via: '#eab308', to: '#713f12' },
    },
    {
      src: '/logos/maxmara.svg',
      alt: 'MaxMara',
      gradient: { from: '#d4af37', via: '#78350f', to: '#1c1917' },
    },
    {
      src: '/logos/moschino.svg',
      alt: 'Moschino',
      gradient: { from: '#e11d48', via: '#be123c', to: '#4c0519' },
    },
  ];

  return (
    <section className="py-20 bg-space-darkest border-y border-space-border/50 relative overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-mars-red/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Integrated Marquee Logo Scroller Component */}
        <MarqueeLogoScroller
          title="Бренды и партнеры Marslander"
          description="За 10+ лет работы Marslander реализовал знаковые проекты для крупнейших корпораций, ведущих телеканалов, люксовых модных домов и государственных институтов."
          logos={marslanderPartners}
          speed="normal"
          className="bg-space-surface/60 backdrop-blur-xl border-space-border shadow-2xl"
        />

        {/* Bottom Banner with NDA & Quality guarantee */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-space-surface via-space-card to-space-surface border border-space-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-mars-red/20 border border-mars-red/40 flex items-center justify-center text-mars-accent shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                Нужно индивидуальное решение под строгий брендбук?
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                Соблюдаем соглашения о конфиденциальности (NDA), работаем по корпоративным стандартам и предоставляем живую цветопробу в день обращения.
              </div>
            </div>
          </div>
          <a
            href="#contacts"
            className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-mars-red hover:bg-mars-hover transition-all shrink-0 glow-mars-sm active:scale-95 shadow-lg shadow-mars-red/20"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
};
