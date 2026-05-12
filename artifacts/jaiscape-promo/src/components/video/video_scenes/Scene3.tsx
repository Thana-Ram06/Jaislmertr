import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import reelDunes from '@assets/images/reel-dunes.png';
import gridCamel from '@assets/images/grid-camel.png';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1600),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-bg-dark"
      {...sceneTransitions.wipe}
    >
      {/* Background layer */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <img src={reelDunes} alt="Dunes" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/20 via-transparent to-bg-dark" />
      </motion.div>

      {/* Floating Image */}
      <motion.div 
        className="absolute right-[10vw] top-[20vh] w-[35vw] aspect-square rounded-full overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(200,151,74,0.1)]"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 10 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <motion.img 
          src={gridCamel} 
          alt="Camel Safari" 
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </motion.div>

      {/* Text Content */}
      <div className="absolute left-[8vw] top-[40vh] z-10 flex flex-col">
        <motion.div 
          className="overflow-hidden mb-2"
        >
          <motion.h3 
            className="text-[1.2vw] font-body tracking-[0.2em] text-primary uppercase"
            initial={{ y: "100%" }}
            animate={phase >= 2 ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Sam Sand Dunes
          </motion.h3>
        </motion.div>

        <motion.h2 
          className="text-[7vw] font-display text-text-primary leading-[0.9]"
          initial={{ opacity: 0, x: -40 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Endless<br/>
          <span className="italic text-text-secondary">horizons.</span>
        </motion.h2>
      </div>

    </motion.div>
  );
}
