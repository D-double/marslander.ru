import React from 'react';
import FeaturesWithPanel from '@/components/ui/features-with-panel';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-12 bg-space-dark border-t border-space-border/40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-mars-red/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-mars-darkred/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-[2px] bg-mars-red" />
          <span className="text-xs font-bold uppercase tracking-widest text-mars-accent font-mono">
            О компании & Манифест
          </span>
        </div>

        {/* Big Manifesto Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl font-black italic tracking-tight text-white mb-6 font-display">
              <span className="text-mars-red">Поехали!</span>
            </h2>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl text-white font-medium leading-snug">
                Marslander — креативное продакшн-агентство, осуществляющее комплексное сопровождение брендов на каждом этапе их жизненного цикла.
              </p>
              <p>
                Мы оказываем услуги по разработке, производству и обеспечению в сфере брендинга, дизайна, стратегии, коммуникаций и активаций.
              </p>
              <p className="text-slate-400">
                Мы смотрим на задачу глазами клиента и создаем <span className="text-white font-semibold">не формальные, а полезные решения</span>, обеспечивающие гарантированное достижение бизнес-результатов.
              </p>
            </div>

            {/* Principles / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="p-4 rounded-xl bg-space-surface border border-space-border hover:border-mars-red/40 transition-colors">
                <div className="text-mars-accent font-bold text-lg mb-1 font-mono">01 / Скорость</div>
                <div className="text-xs text-slate-400">
                  Срочные тиражи и оперативная печать за 24-48 часов
                </div>
              </div>
              <div className="p-4 rounded-xl bg-space-surface border border-space-border hover:border-mars-red/40 transition-colors">
                <div className="text-mars-accent font-bold text-lg mb-1 font-mono">02 / Точность</div>
                <div className="text-xs text-slate-400">
                  Многоуровневый контроль цвета по Pantone и приводки
                </div>
              </div>
              <div className="p-4 rounded-xl bg-space-surface border border-space-border hover:border-mars-red/40 transition-colors">
                <div className="text-mars-accent font-bold text-lg mb-1 font-mono">03 / Полный цикл</div>
                <div className="text-xs text-slate-400">
                  От эскиза и чертежа до монтажа на ледовой арене
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card with presentation artwork */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-mars-red to-mars-darkred rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-space-border bg-space-surface p-3 shadow-2xl">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-space-darkest flex items-center justify-center">
                  <img
                    src="/portfolio/slide_06.webp"
                    alt="Marslander Creative Production Art"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-darkest/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-space-darkest/90 backdrop-blur-md border border-white/10">
                    <div className="text-xs uppercase tracking-widest text-mars-accent font-mono mb-1">
                      Marslander Production
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Комплексные визуальные и материальные решения
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section "Экспертиза на каждом этапе" with FeaturesWithPanel */}
        <div className="mt-8">
          <FeaturesWithPanel
            title="Экспертиза на каждом этапе"
            badge="5 ключевых направлений"
            description="Объединяем стратегический брендинг, смелый графический дизайн и промышленное высокоточное производство в единую экосистему."
            className="border-none py-10 px-0 bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};
