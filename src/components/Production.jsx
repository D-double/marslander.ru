import React from 'react';
import { Layers, Scissors, Flame, Sparkles, Printer, Zap, CheckCircle2, ShieldCheck, Factory } from 'lucide-react';

export const Production = () => {
  const capabilities = [
    {
      icon: Layers,
      title: '3D-конгрев и глубокое тиснение',
      desc: 'Многоуровневые латунные штампы, осязаемый тактильный рельеф на хлопковых и дизайнерских картонах плотностью до 1200 г/м².'
    },
    {
      icon: Sparkles,
      title: 'Горячее фольгирование',
      desc: 'Золото Kurz, матовое серебро, цветные, голографические и пигментные фольги с микронной точностью приводки.'
    },
    {
      icon: Printer,
      title: 'Шелкография и УФ-лакирование',
      desc: 'Насыщенные кроющие краски Pantone, выборочный объемный лак, тактильный Soft-Touch, песочные и глиттерные эффекты.'
    },
    {
      icon: Zap,
      title: 'Прямая УФ-печать по материалам',
      desc: 'Фотографическое разрешение печати по дереву, анодированному алюминию, акрилу, натуральной коже и стеклу.'
    },
    {
      icon: Flame,
      title: 'Литье металла и горячая эмаль',
      desc: 'Производство наградных кубков, медалей со сложной геометрией, нагрудных значков и ювелирных брелоков с полировкой.'
    },
    {
      icon: Scissors,
      title: 'Лазерная резка и фигурная высечка',
      desc: 'Прецизионный раскрой картона, дерева и пластика, сложные вырубные штампы для нестандартных упаковок и открыток.'
    },
  ];

  return (
    <section id="production" className="py-24 bg-space-darkest border-t border-space-border/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-mars-red/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mars-red/10 border border-mars-red/30 text-xs text-mars-accent font-mono uppercase tracking-wider mb-4">
            <Factory className="w-3.5 h-3.5" />
            <span>Производственные мощности</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Технологии, которые чувствуются на ощупь
          </h2>
          <p className="text-slate-400 text-base">
            Marslander сочетает авторский арт-дирекшн с собственными производственными цехами в Москве. Никаких посредников — полный контроль качества от первой пробы до тиража.
          </p>
        </div>

        {/* Grid of technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-space-surface border border-space-border hover:border-mars-red/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-mars-red/10"
              >
                <div className="w-12 h-12 rounded-xl bg-mars-red/15 border border-mars-red/30 flex items-center justify-center text-mars-accent mb-5 group-hover:scale-110 group-hover:bg-mars-red group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mars-accent transition-colors">
                  {tech.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-space-surface via-space-card to-space-surface border border-space-border/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-mars-red/20 text-mars-accent flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Цветопроба и пилотный образец</div>
                <div className="text-xs text-slate-400">Согласование живого образца перед запуском тиража</div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-mars-red/20 text-mars-accent flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Строгий контроль брака</div>
                <div className="text-xs text-slate-400">Поштучная проверка каждого готового изделия</div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-mars-red/20 text-mars-accent flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Экспресс-производство 24/7</div>
                <div className="text-xs text-slate-400">Работаем в две смены при горящих дедлайнах</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
