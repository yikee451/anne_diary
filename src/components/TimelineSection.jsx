import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { timelineEvents } from '../data/storyData';

function TimelineSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const maxWidth = useTransform(scrollYProgress, [0, 1], ['74rem', '38rem']);
  const darkness = useTransform(scrollYProgress, [0, 1], [0.05, 0.58]);
  const tracking = useTransform(scrollYProgress, [0, 1], ['0.08em', '-0.015em']);

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative overflow-hidden bg-paper px-5 py-28 text-ink md:px-10"
      aria-labelledby="timeline-title"
    >
      <motion.div
        className="absolute inset-0 bg-charcoal"
        style={{ opacity: reduceMotion ? 0.2 : darkness }}
        aria-hidden="true"
      />
      <div className="paper-grain opacity-30" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto"
        style={{
          maxWidth: reduceMotion ? '68rem' : maxWidth,
          letterSpacing: reduceMotion ? 'normal' : tracking,
        }}
      >
        <div className="mb-20 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="section-kicker">1933-1945</p>
            <h2 id="timeline-title" className="section-title text-charcoal">
              The narrowing of a life
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-stone-700">
            The interface tightens as the story moves forward: margins close, light recedes, and silence becomes a
            spatial pressure. This is not decoration; it is a restrained way to feel loss of freedom.
          </p>
        </div>

        <ol className="relative border-l border-charcoal/20 pl-7 md:pl-12">
          {timelineEvents.map((item, index) => (
            <motion.li
              key={`${item.year}-${item.event}`}
              className={`timeline-card ${item.rupture ? 'timeline-card--rupture' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 45 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.8, delay: index * 0.04 }}
              style={{
                marginBottom: `${3.5 - item.compression * 1.6}rem`,
                padding: `${2 - item.compression * 0.55}rem`,
              }}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-serif text-4xl text-brown md:text-5xl">{item.year}</p>
                  <h3 className="mt-3 font-serif text-2xl text-charcoal md:text-3xl">{item.title}</h3>
                </div>
                <p className="rounded-full border border-charcoal/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-600">
                  {item.event}
                </p>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700">{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

export default TimelineSection;
