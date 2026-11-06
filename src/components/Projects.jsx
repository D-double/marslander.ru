import React, { useState, useMemo } from 'react';
import { projectsData, projectCategories } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Search, Eye, Filter, ArrowUpRight, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

export const Projects = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-24 bg-space-dark border-t border-space-border/50 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-mars-red/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-mars-darkred/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-mars-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-mars-accent font-mono">
                Реализованные проекты
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
              Работы из презентации
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Свыше 30 знаковых кейсов: премиальная полиграфия, наградная атрибутика, серийный автобрендинг, капсульный мерч и оформление арен.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="Поиск по названию или клиенту..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-space-surface border border-space-border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-mars-red focus:ring-1 focus:ring-mars-red transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Очистить
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {projectCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(12);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-mars-red text-white border-mars-accent glow-mars-sm shadow-md'
                    : 'bg-space-surface text-slate-300 border-space-border hover:border-slate-600 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                    activeCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-space-dark text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {displayedProjects.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-space-surface/50 border border-space-border">
            <SlidersHorizontal className="w-10 h-10 text-slate-500 mx-auto mb-3 opacity-60" />
            <h4 className="text-lg font-semibold text-white mb-1">Ничего не найдено</h4>
            <p className="text-sm text-slate-400 mb-4">
              Попробуйте изменить поисковый запрос или выбрать другую категорию.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-mars-red"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-space-surface border border-space-border hover:border-mars-red/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-mars-red/10 flex flex-col"
              >
                {/* Visual Image container with 16:9 ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-space-darkest">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-darkest/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Year & Category tags on image */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-mars-red text-[11px] font-mono text-white font-semibold">
                    {project.year}
                  </div>

                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-mars-red/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-black/80 text-xs font-semibold text-white backdrop-blur-sm shadow-xl">
                      <Eye className="w-3.5 h-3.5 text-mars-accent" />
                      <span>Подробнее</span>
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-xs font-mono text-mars-accent uppercase tracking-wider mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-mars-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bottom tags and link */}
                  <div className="pt-3 border-t border-space-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      {project.tags.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-card text-slate-400 truncate max-w-[110px]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1 shrink-0">
                      <span>Кейс</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-mars-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load more button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-space-surface hover:bg-space-card border border-space-border hover:border-mars-red/50 transition-all glow-mars-sm"
            >
              Показать еще проекты ({filteredProjects.length - visibleCount} осталось)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProjectForQuote={onSelectProjectForQuote}
        />
      )}
    </section>
  );
};
