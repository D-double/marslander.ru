"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  title: string;
  alt?: string;
  content: string | React.ReactNode;
  category?: string;
  details?: string;
}

export function FeatureMedia({
  content,
  alt,
}: {
  content: string | React.ReactNode;
  alt?: string;
}) {
  if (typeof content !== "string") {
    return <div className="w-full h-full">{content}</div>;
  }

  const isVideo = /\.(mp4|webm|ogg)$/i.test(content);
  const isImage =
    /\.(jpg|jpeg|png|webp|gif|avif|svg)$/i.test(content) ||
    /unsplash|images\./i.test(content);

  if (isVideo) {
    return (
      <video
        src={content}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  }

  if (isImage) {
    return (
      <div className="relative w-full h-full overflow-hidden group">
        <img 
          src={content} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-darkest/80 via-transparent to-transparent pointer-events-none" />
        {alt && (
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-space-darkest/90 backdrop-blur-md border border-white/10 text-xs text-slate-200">
            {alt}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full p-8 bg-space-surface">
      <p className="text-sm text-slate-300 leading-relaxed">{content}</p>
    </div>
  );
}

const defaultMarslanderItems: FeatureItem[] = [
  {
    title: "01. Брендинг и позиционирование",
    alt: "Платформа бренда, креативная концепция, бренд-айдентика и стратегия коммуникаций.",
    category: "Стратегия & Смысл",
    details: "Создание уникального образа бренда в сознании потребителя, формулирование ценностей, атрибутов и визуального кода бренда.",
    content: "/portfolio/slide_03.webp",
  },
  {
    title: "02. Дизайн носителей бренда",
    alt: "Упаковка, фирменный стиль, корпоративная полиграфия, презентации и телевизионная графика.",
    category: "Айдентика & Носители",
    details: "Создание визуальных решений, которые обеспечат узнаваемость и премиальный статус в каждой точке контакта.",
    content: "/portfolio/slide_29.webp",
  },
  {
    title: "03. Продакшн и оперативная печать",
    alt: "Многоуровневый 3D-конгрев, горячее фольгирование Kurz, шелкография, УФ-печать по любым материалам.",
    category: "Технологии & Печать",
    details: "Собственные производственные мощности в Москве: оперативная цифровая, офсетная, трафаретная и широкоформатная печать.",
    content: "/portfolio/slide_16.webp",
  },
  {
    title: "04. Корпоративный мерч и VIP-подарки",
    alt: "Капсульная одежда (худи, свитшоты), наградные кубки из хрусталя и металла, термопосуда BORK.",
    category: "Мерч & Подарки",
    details: "Разработка авторских коллекций мерча, пошив одежды с 3D-вышивкой, производство эмалированных значков и арт-объектов.",
    content: "/portfolio/slide_15.webp",
  },
  {
    title: "05. Оформление пространств и Event-продакшн",
    alt: "Застройка ледовых стадионов, фестивалей, серийная оклейка автопарков Москвы и ритейл ГУМ.",
    category: "Events & Ритейл",
    details: "Полная материализация бренда: крупномасштабные спортивные арены, выставочные павильоны, ритейл-навигация и автопарки.",
    content: "/portfolio/slide_36.webp",
  },
];

interface FeaturesWithPanelProps {
  items?: FeatureItem[];
  title?: string;
  badge?: string;
  description?: string;
  className?: string;
}

export default function FeaturesWithPanel({
  items = defaultMarslanderItems,
  title = "Экспертиза на каждом этапе.",
  badge = "5 ключевых направлений",
  description = "Объединяем стратегический брендинг, смелый графический дизайн и промышленное высокоточное производство в единую экосистему полного цикла.",
  className,
}: FeaturesWithPanelProps) {
  const [active, setActive] = React.useState(0);

  return (
    <section id="services" className={cn("relative w-full py-20 bg-space-darkest/70 border-t border-space-border/50 overflow-hidden", className)}>
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-mars-red/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 lg:items-start">
          {/* Left List of Features */}
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mars-red/10 border border-mars-red/30 text-xs text-mars-accent font-mono uppercase tracking-wider mb-4">
                {badge}
              </div>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-4 font-display">
              {title}
            </h2>

            {description && (
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                {description}
              </p>
            )}

            <ul className="flex flex-col gap-2">
              {items.map((item, index) => {
                const isActive = active === index;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.07,
                      ease: "easeOut",
                    }}
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex flex-col px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 lg:flex-row lg:items-start lg:gap-4 border",
                      isActive
                        ? "border-mars-red/70 bg-space-surface/90 shadow-lg shadow-mars-red/10 ring-1 ring-mars-red/30"
                        : "border-space-border/60 bg-space-surface/40 hover:bg-space-surface/70 hover:border-slate-600",
                    )}
                  >
                    <div className="flex flex-row items-center gap-3.5 w-full lg:contents">
                      <span
                        className={cn(
                          "size-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors duration-200 mt-0.5",
                          isActive
                            ? "bg-mars-red text-white"
                            : "bg-space-dark text-slate-400",
                        )}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={cn(
                              "text-sm sm:text-base font-semibold transition-colors duration-200",
                              isActive
                                ? "text-white"
                                : "text-slate-300",
                            )}
                          >
                            {item.title}
                          </span>
                          {item.category && (
                            <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-mars-accent/80">
                              {item.category}
                            </span>
                          )}
                        </div>

                        {isActive && item.details && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed"
                          >
                            {item.details}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Mobile inline media panel */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="w-full overflow-hidden lg:hidden"
                        >
                          <Card className="w-full mt-3 overflow-hidden p-0 gap-0 aspect-[4/3] relative border border-space-border/80">
                            <div className="absolute inset-0">
                              <FeatureMedia
                                content={item.content}
                                alt={item.alt}
                              />
                            </div>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Right Sticky Media Panel (Desktop) */}
          <div className="hidden lg:block sticky top-24">
            <Card className="relative w-full aspect-[4/3] overflow-hidden p-0 gap-0 bg-space-darkest border border-space-border/80 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <FeatureMedia
                    content={items[active].content}
                    alt={items[active].alt}
                  />
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FeaturesWithPanel };
