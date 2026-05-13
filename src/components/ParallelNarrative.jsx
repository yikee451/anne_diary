import { motion, useReducedMotion } from 'framer-motion';
import { parallelMoments } from '../data/storyData';

function ParallelNarrative() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper px-5 py-28 text-charcoal md:px-10" aria-labelledby="parallel-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">Inside / Outside</p>
          <h2 id="parallel-title" className="section-title text-charcoal">
            Two histories moving at once
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-700">
            The diary records a young person’s interior life while catastrophe accelerates beyond the walls.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-2xl lg:grid-cols-2">
          <div className="bg-paper p-7 md:p-10">
            <p className="mb-8 text-xs uppercase tracking-[0.42em] text-brown">Inside the annex</p>
            <div className="space-y-6">
              {parallelMoments.map((moment, index) => (
                <motion.article
                  key={moment.inside}
                  className="parallel-card"
                  initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <span className="parallel-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>{moment.inside}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="bg-charcoal p-7 text-paper md:p-10">
            <p className="mb-8 text-xs uppercase tracking-[0.42em] text-stone-400">Outside world</p>
            <div className="space-y-6">
              {parallelMoments.map((moment, index) => (
                <motion.article
                  key={moment.outside}
                  className="parallel-card parallel-card--dark"
                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <span className="parallel-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>{moment.outside}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParallelNarrative;
