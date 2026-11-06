import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Building, Tag, CheckCircle2, Sparkles, Download, Layers } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onSelectProjectForQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-space-surface border border-space-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-space-border bg-space-darkest/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-mars-red" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {project.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Image from Presentation */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-space-darkest border border-space-border/60 shadow-lg group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
              {project.year} г.
            </div>
          </div>

          {/* Title and Client */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-space-border">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Building className="w-4 h-4 text-mars-accent" />
                <span className="font-medium text-white">{project.client}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectProjectForQuote(project);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-mars-red hover:bg-mars-hover transition-all glow-mars-sm shrink-0 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Заказать подобный проект</span>
            </button>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-mars-accent">
              О проекте и производственной задаче
            </h4>
            <p className="text-base text-slate-200 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Scope of Work */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-mars-accent">
              Что было реализовано
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-space-dark/80 border border-space-border/50 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-mars-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-500 mr-1" />
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-space-card text-slate-300 border border-space-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-space-border bg-space-darkest/90 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Кейс из официальной презентации Marslander 2025
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white underline transition-colors"
          >
            Закрыть просмотр
          </button>
        </div>
      </div>
    </div>
  );
};
