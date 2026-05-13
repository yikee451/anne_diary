import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroQuote = 'I can shake off everything as I write.';

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [typedQuote, setTypedQuote] = useState(reduceMotion ? heroQuote : '');

  useEffect(() => {
    if (reduceMotion) {
      setTypedQuote(heroQuote);
      return undefined;
    }

    setTypedQuote('');
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedQuote(heroQuote.slice(0, index));
      if (index >= heroQuote.length) window.clearInterval(timer);
    }, 48);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const enterAnnex = () => {
    document.getElementById('timeline')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-6 text-paper"
      aria-labelledby="hero-title"
    >
      <div className="attic-light" aria-hidden="true" />
      <div className="paper-grain opacity-45" aria-hidden="true" />
      <div className="dust-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{
              '--x': `${(index * 37) % 100}%`,
              '--y': `${(index * 19) % 100}%`,
              '--delay': `${index * -0.8}s`,
              '--duration': `${9 + (index % 6) * 1.5}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <p className="mb-6 text-xs uppercase tracking-[0.65em] text-stone-300/80">
          A digital memory archive
        </p>
        <h1 id="hero-title" className="font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
          Inside the Annex
        </h1>
        <motion.blockquote
          className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic leading-relaxed text-stone-100 md:text-3xl"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          aria-label={`“${heroQuote}”`}
        >
          <span aria-hidden="true">“{typedQuote}</span>
          <span className="type-caret" aria-hidden="true" />
          <span aria-hidden="true">”</span>
        </motion.blockquote>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-stone-300 md:text-base">
          An atmospheric scroll through hiding, memory, and the narrowing of freedom during World War II.
        </p>
        <button
          type="button"
          onClick={enterAnnex}
          className="mt-10 rounded-full border border-paper/45 bg-paper/10 px-7 py-4 text-sm uppercase tracking-[0.28em] text-paper shadow-2xl backdrop-blur transition hover:bg-paper hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-paper"
        >
          Enter the Annex
        </button>
      </motion.div>
    </section>
  );
}

export default HeroSection;
