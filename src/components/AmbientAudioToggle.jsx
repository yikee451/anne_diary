import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AmbientAudioToggle({ tension }) {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!enabled || !audioRef.current) return;

    const { lowOsc, highOsc, gain } = audioRef.current;
    const now = audioRef.current.context.currentTime;
    const safeTension = Math.min(Math.max(tension, 0), 1);

    gain.gain.linearRampToValueAtTime(0.07 - safeTension * 0.045, now + 0.8);
    lowOsc.frequency.linearRampToValueAtTime(55 + safeTension * 16, now + 0.8);
    highOsc.frequency.linearRampToValueAtTime(180 + safeTension * 120, now + 0.8);
  }, [enabled, tension]);

  const createAmbience = async () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContextClass();
    const gain = context.createGain();
    const lowOsc = context.createOscillator();
    const highOsc = context.createOscillator();
    const filter = context.createBiquadFilter();

    lowOsc.type = 'sine';
    highOsc.type = 'triangle';
    lowOsc.frequency.value = 55;
    highOsc.frequency.value = 180;
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    gain.gain.value = 0.035;

    lowOsc.connect(filter);
    highOsc.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    lowOsc.start();
    highOsc.start();

    await context.resume();
    audioRef.current = { context, gain, lowOsc, highOsc };
  };

  const toggle = async () => {
    if (!enabled) {
      if (!audioRef.current) {
        await createAmbience();
      } else {
        await audioRef.current.context.resume();
      }
      setEnabled(true);
      return;
    }

    if (audioRef.current) {
      await audioRef.current.context.suspend();
    }
    setEnabled(false);
  };

  useEffect(() => {
    return () => {
      audioRef.current?.lowOsc.stop();
      audioRef.current?.highOsc.stop();
      audioRef.current?.context.close();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-stone-200/30 bg-charcoal/80 px-4 py-3 text-sm text-paper shadow-2xl backdrop-blur transition hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-paper"
      aria-pressed={enabled}
      aria-label={enabled ? 'Turn ambient sound off' : 'Turn ambient sound on'}
    >
      {enabled ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
      <span>{enabled ? 'Ambience on' : 'Ambience off'}</span>
    </button>
  );
}

export default AmbientAudioToggle;
