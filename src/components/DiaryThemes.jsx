import { motion, useReducedMotion } from 'framer-motion';
import { themes } from '../data/storyData';

function DiaryThemes() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-ink px-5 py-28 text-paper md:px-10" aria-labelledby="themes-title">
      <div className="paper-grain opacity-20" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker text-stone-400">Emotional diary themes</p>
          <h2 id="themes-title" className="section-title">
            Feelings preserved in fragments
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-300 md:text-base">
            Each panel is intentionally brief: a museum label, a page margin, a feeling held without spectacle.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, index) => (
            <motion.article
              key={theme.name}
              className="theme-card group"
              tabIndex={0}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              whileFocus={reduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <p className="text-xs uppercase tracking-[0.45em] text-stone-500">Theme</p>
              <h3 className="mt-5 font-serif text-4xl text-paper">{theme.name}</h3>
              <blockquote className="mt-8 border-l border-paper/20 pl-5 font-serif text-xl italic leading-8 text-stone-100">
                “{theme.quote}”
              </blockquote>
              <p className="mt-7 text-sm leading-7 text-stone-400">{theme.description}</p>
              <span className="mt-10 block h-px w-12 bg-paper/30 transition-all group-hover:w-24 group-focus:w-24" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiaryThemes;
