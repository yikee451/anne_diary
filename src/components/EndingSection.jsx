import { motion, useReducedMotion } from 'framer-motion';

const fragments = ['August 4, 1944', 'silence', 'deportation', 'Bergen-Belsen', '1947', 'remembrance'];

function EndingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal px-5 py-32 text-paper md:px-10" aria-labelledby="ending-title">
      <motion.div
        className="absolute inset-x-0 top-0 h-44 bg-paper"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: [0, 0.9, 0.05] }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, times: [0, 0.2, 1] }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-20 grid gap-4 md:grid-cols-6">
          {fragments.map((fragment, index) => (
            <motion.span
              key={fragment}
              className="fragment"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: index === 1 ? 0.45 : 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
            >
              {fragment}
            </motion.span>
          ))}
        </div>

        <p className="section-kicker text-stone-400">After interruption</p>
        <h2 id="ending-title" className="section-title max-w-4xl">
          What remains is not an ending, but a responsibility.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7 text-base leading-8 text-stone-300">
            <p>
              After the arrest, the experience opens into empty space. Anne Frank’s diary survived because Miep Gies
              preserved the pages and Otto Frank carried his daughter’s words into public memory.
            </p>
            <p>
              Remembrance is not passive. It asks each generation to defend the dignity, freedom, and complexity of
              human life before those freedoms are narrowed again.
            </p>
          </div>

          <div className="rounded-[2rem] border border-paper/15 bg-paper/5 p-7">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-stone-400">Sentiment trace</p>
            <div className="sentiment-bars" aria-label="Abstract emotional sentiment visualization">
              {[58, 46, 34, 24, 18, 42, 12, 64].map((height, index) => (
                <span key={height + index} style={{ '--height': `${height}%` }} />
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-stone-400">
              A restrained visualization of contraction and return: fear, hope, rupture, legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EndingSection;
