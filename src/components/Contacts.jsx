import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

export const Contacts = ({ preselectedProject, onClearPreselectedProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'merch',
    budget: 'mid',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If a project was selected from modal
  useEffect(() => {
    if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Здравствуйте! Интересует реализация проекта подобного уровня: «${preselectedProject.title}» для ${preselectedProject.client}. Прошу связаться со мной для расчета стоимости.`,
        service: preselectedProject.category === 'poligraphy' ? 'poligraphy' 
               : preselectedProject.category === 'packaging' ? 'packaging'
               : preselectedProject.category === 'merch' ? 'merch'
               : preselectedProject.category === 'events' ? 'events' : 'branding'
      }));
    }
  }, [preselectedProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instant sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPreselectedProject) onClearPreselectedProject();
    }, 800);
  };

  return (
    <section id="contacts" className="py-24 bg-space-darkest border-t border-space-border/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mars-red/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title like presentation slide 43 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mars-red/10 border border-mars-red/30 text-xs text-mars-accent font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Свяжитесь с нами</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black italic tracking-tight text-mars-red font-display mb-4">
            Есть контакт!
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Готовы обсудить вашу задачу, подготовить расчет сметы и показать живые образцы материалов в нашем московском шоуруме.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phones */}
            <div className="p-6 rounded-2xl bg-space-surface border border-space-border hover:border-mars-red/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mars-red/15 border border-mars-red/30 flex items-center justify-center text-mars-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Телефоны для связи
                  </div>
                  <a
                    href="tel:+79852400060"
                    className="block text-lg font-bold text-white hover:text-mars-accent transition-colors tracking-wide"
                  >
                    +7 985 240 0060
                  </a>
                  <a
                    href="tel:+79104948700"
                    className="block text-sm text-slate-300 hover:text-mars-accent transition-colors mt-0.5 tracking-wide"
                  >
                    +7 910 494 8700
                  </a>
                  <div className="text-xs text-slate-500 mt-2">
                    Звонки принимаются ежедневно с 10:00 до 20:00
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-space-surface border border-space-border hover:border-mars-red/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mars-red/15 border border-mars-red/30 flex items-center justify-center text-mars-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Электронная почта
                  </div>
                  <a
                    href="mailto:info@marslander.ru"
                    className="block text-lg font-bold text-white hover:text-mars-accent transition-colors font-mono"
                  >
                    info@marslander.ru
                  </a>
                  <a
                    href="mailto:marslander@mail.ru"
                    className="block text-sm text-slate-300 hover:text-mars-accent transition-colors font-mono mt-0.5"
                  >
                    marslander@mail.ru
                  </a>
                  <div className="text-xs text-slate-500 mt-2">
                    Отправляйте ТЗ и брифы — рассчитаем за 2 часа
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-space-surface border border-space-border hover:border-mars-red/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mars-red/15 border border-mars-red/30 flex items-center justify-center text-mars-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Офис и производство
                  </div>
                  <div className="text-base font-bold text-white">
                    Москва, Ружейный пер., д. 2А, офис 3
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    м. Смоленская / м. Киевская (ЦАО)
                  </div>
                  <a
                    href="https://yandex.ru/maps/?text=Москва, Ружейный переулок, 2А"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-mars-accent hover:text-white transition-colors mt-3"
                  >
                    <span>Открыть на Яндекс Картах</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Messengers quick buttons */}
            <div className="p-5 rounded-2xl bg-space-card/80 border border-space-border flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Быстрый диалог в мессенджере:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://t.me/marslander"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/40 text-xs font-semibold hover:bg-sky-500 hover:text-white transition-all"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/79852400060"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-space-surface border border-space-border shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Заявка успешно принята!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Спасибо! Наш ведущий продюсер свяжется с вами по указанным контактам в течение 30 минут для уточнения деталей.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'merch',
                        budget: 'mid',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-mars-red hover:bg-mars-hover transition-all"
                  >
                    Отправить еще запрос
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display mb-1">
                      Оставить заявку на расчет
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Заполните форму, и мы оперативно подготовим коммерческое предложение.
                    </p>
                  </div>

                  {/* Preselected project banner */}
                  {preselectedProject && (
                    <div className="p-3.5 rounded-xl bg-mars-red/15 border border-mars-red/40 flex items-center justify-between text-xs text-white">
                      <span>
                        Выбран кейс: <strong>{preselectedProject.title}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={onClearPreselectedProject}
                        className="text-slate-400 hover:text-white underline ml-2"
                      >
                        Сбросить
                      </button>
                    </div>
                  )}

                  {/* Contact inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Константин"
                        className="w-full px-4 py-3 rounded-xl bg-space-dark border border-space-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-mars-red focus:ring-1 focus:ring-mars-red"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Телефон / Telegram *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full px-4 py-3 rounded-xl bg-space-dark border border-space-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-mars-red focus:ring-1 focus:ring-mars-red"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Рабочая почта (для сметы и КП)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.ru"
                      className="w-full px-4 py-3 rounded-xl bg-space-dark border border-space-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-mars-red focus:ring-1 focus:ring-mars-red"
                    />
                  </div>

                  {/* Service type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Направление проекта
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'merch', label: 'Мерч & Сувениры' },
                        { id: 'packaging', label: 'Премиум-упаковка' },
                        { id: 'poligraphy', label: 'Полиграфия & Тиснение' },
                        { id: 'branding', label: 'Брендинг & Стиль' },
                        { id: 'events', label: 'Events & Арены' },
                        { id: 'retail', label: 'Автопарки & Ритейл' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, service: s.id }))}
                          className={`p-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                            formData.service === s.id
                              ? 'bg-mars-red text-white border-mars-accent'
                              : 'bg-space-dark text-slate-400 border-space-border hover:text-white'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Описание задачи или тираж
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишите кратко требуемые изделия, тиражи или пожелания..."
                      className="w-full px-4 py-3 rounded-xl bg-space-dark border border-space-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-mars-red focus:ring-1 focus:ring-mars-red resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-mars-red hover:bg-mars-hover transition-all glow-mars active:scale-[0.99] flex items-center justify-center gap-2 shadow-xl shadow-mars-red/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Отправляем...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Отправить заявку продюсеру</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Конфиденциальность гарантируется.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
