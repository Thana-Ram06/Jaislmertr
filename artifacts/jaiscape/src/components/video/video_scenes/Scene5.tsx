import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import aboutHero from '@/assets/images/about-hero.png';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-bg-dark"
      {...sceneTransitions.zoomThrough}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src={aboutHero} alt="Jaisalmer Landscape" className="w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-bg-dark/60 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="text-[12vw] font-display text-text-primary leading-none tracking-tight">
            Jaisalmer.city
          </h1>
        </motion.div>

        <motion.div
          className="h-[1px] bg-primary/40 mb-6"
          initial={{ width: 0 }}
          animate={phase >= 1 ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.p
          className="text-[1.5vw] font-body tracking-[0.3em] text-text-secondary uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Where the desert speaks.
        </motion.p>
      </div>
    </motion.div>
  );
}
