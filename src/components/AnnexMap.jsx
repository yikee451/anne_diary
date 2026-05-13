import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MapPinned } from 'lucide-react';
import { useState } from 'react';
import { annexRooms } from '../data/storyData';

const roomLayout = [
  { id: 'entrance', className: 'col-span-2 row-span-1', label: 'Hidden bookshelf entrance' },
  { id: 'kitchen', className: 'col-span-2 row-span-2', label: 'Kitchen' },
  { id: 'room', className: 'col-span-2 row-span-2', label: "Anne's room" },
  { id: 'attic', className: 'col-span-4 row-span-1', label: 'Attic' },
];

function AnnexMap() {
  const [activeRoom, setActiveRoom] = useState('room');
  const reduceMotion = useReducedMotion();
  const active = annexRooms[activeRoom];

  return (
    <section className="relative bg-stone-950 px-5 py-28 text-paper md:px-10" aria-labelledby="annex-title">
      <div className="map-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <p className="section-kicker text-stone-400">Interactive Secret Annex map</p>
            <h2 id="annex-title" className="section-title">
              A floor plan of constrained movement
            </h2>
          </div>
          <p className="text-sm leading-7 text-stone-300 md:text-base">
            Select a room to reveal a concise diary fragment and historical context. The interaction is designed like a
            quiet museum exhibit: tactile, sparse, and reflective.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-paper/15 bg-paper/5 p-4 shadow-2xl md:p-6">
            <div className="grid min-h-[28rem] grid-cols-4 grid-rows-6 gap-3 rounded-[1.4rem] border border-paper/15 bg-charcoal/80 p-4">
              {roomLayout.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setActiveRoom(room.id)}
                  className={`map-room ${room.className} ${activeRoom === room.id ? 'map-room--active' : ''}`}
                  aria-pressed={activeRoom === room.id}
                >
                  <span>{room.label}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-paper/15 bg-paper/90 p-8 text-charcoal shadow-2xl">
            <div className="paper-grain opacity-40" aria-hidden="true" />
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-charcoal/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-600">
                <MapPinned size={16} aria-hidden="true" />
                Selected room
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoom}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="font-serif text-4xl text-charcoal">{active.label}</h3>
                  <blockquote className="mt-8 border-l border-brown/30 pl-5 font-serif text-2xl italic leading-9 text-brown">
                    “{active.excerpt}”
                  </blockquote>
                  <p className="mt-8 text-sm uppercase tracking-[0.35em] text-stone-500">Historical context</p>
                  <p className="mt-4 text-base leading-8 text-stone-700">{active.context}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AnnexMap;
