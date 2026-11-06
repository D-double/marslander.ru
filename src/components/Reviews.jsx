import React, { useState } from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare } from 'lucide-react';

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-space-dark border-t border-space-border/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-mars-red/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-mars-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-mars-accent font-mono">
                Репутация & Доверие
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
              Отзывы наших клиентов
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Что говорят о сотрудничестве с Marslander топ-менеджеры и руководители проектов крупнейших брендов.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              className="p-3 rounded-xl bg-space-surface hover:bg-space-card border border-space-border text-slate-300 hover:text-white transition-all active:scale-95"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-xl bg-space-surface hover:bg-space-card border border-space-border text-slate-300 hover:text-white transition-all active:scale-95"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Big Review Card */}
        <div className="mb-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-space-surface/90 to-space-card/80 border border-space-border relative backdrop-blur-md shadow-2xl">
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 text-mars-red/15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="text-xs font-mono font-semibold text-slate-400 ml-2">
                  5.0 / 5.0
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl text-slate-100 font-normal leading-relaxed italic">
                «{reviewsData[currentIndex].text}»
              </p>

              {/* Project reference */}
              <div className="p-3.5 rounded-xl bg-space-darkest/60 border border-space-border/60 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span className="text-mars-accent font-semibold">Реализованный проект:</span>
                <span>{reviewsData[currentIndex].project}</span>
              </div>
            </div>

            {/* Author profile */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 p-6 rounded-2xl bg-space-dark/80 border border-space-border">
              <img
                src={reviewsData[currentIndex].avatar}
                alt={reviewsData[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-mars-red/40"
              />
              <div>
                <h4 className="text-lg font-bold text-white">
                  {reviewsData[currentIndex].name}
                </h4>
                <div className="text-xs text-mars-accent font-medium mt-0.5">
                  {reviewsData[currentIndex].position}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {reviewsData[currentIndex].company}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-2">
                  {reviewsData[currentIndex].date}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((rev, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <div
                key={rev.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-space-card border-mars-red/60 shadow-lg shadow-mars-red/10'
                    : 'bg-space-surface/50 border-space-border hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-4 italic">
                  «{rev.text}»
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-space-border/60">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-9 h-9 rounded-full object-cover border border-space-border"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{rev.name}</div>
                    <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                      {rev.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
