import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import gridWalls from '@/assets/images/grid-walls.png';
import cardFort from '@/assets/images/card-fort.png';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-bg-dark"
      {...sceneTransitions.clipPolygon}
    >
      <div className="absolute inset-0 flex">
        <div className="w-[55%] h-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ x: "-10%", scale: 1.1 }}
            animate={{ x: "0%", scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <img src={gridWalls} alt="Ancient Walls" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 to-bg-dark" />
          </motion.div>

          <motion.div
            className="absolute top-[20%] left-[20%] w-[60%] aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, rotate: -2 } : { opacity: 0, y: 50, rotate: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.img
              src={cardFort}
              alt="The Fort"
              className="w-full h-full object-cover"
              animate={{ scale: [1.1, 1] }}
              transition={{ duration: 4, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        <div className="w-[45%] h-full flex flex-col justify-center px-[5vw] z-10">
          <motion.div
            className="w-8 h-[1px] bg-primary mb-6"
            initial={{ width: 0 }}
            animate={phase >= 1 ? { width: 32 } : { width: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h2
            className="text-[5vw] font-display text-text-primary leading-[0.9] mb-6"
            initial={{ opacity: 0, x: 30 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            A living<br/>
            <span className="italic text-primary/90">citadel.</span>
          </motion.h2>

          <motion.p
            className="text-[1.2vw] text-text-secondary font-body font-light max-w-[25vw] leading-relaxed"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={phase >= 3 ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            Wander through narrow sandstone streets where history breathes in every carved balcony.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
