import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import AmbientAudioToggle from './components/AmbientAudioToggle';
import AnnexMap from './components/AnnexMap';
import DiaryThemes from './components/DiaryThemes';
import EndingSection from './components/EndingSection';
import HeroSection from './components/HeroSection';
import ParallelNarrative from './components/ParallelNarrative';
import ScrollProgress from './components/ScrollProgress';
import TimelineSection from './components/TimelineSection';

function App() {
  const { scrollYProgress } = useScroll();
  const [tension, setTension] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setTension(latest);
  });

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollProgress />
      <AmbientAudioToggle tension={tension} />
      <main id="main-content">
        <HeroSection />
        <TimelineSection />
        <DiaryThemes />
        <AnnexMap />
        <ParallelNarrative />
        <EndingSection />
      </main>
    </>
  );
}

export default App;
