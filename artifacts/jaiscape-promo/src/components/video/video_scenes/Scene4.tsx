import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import camp1 from '@assets/images/camp-1.png';
import reelFire from '@assets/images/reel-fire.png';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-bg-dark"
      {...sceneTransitions.splitVertical}
    >
      <div className="absolute inset-0 flex">
        {/* Left Side: Text and small image */}
        <div className="w-[50%] h-full flex flex-col justify-center px-[8vw] z-10 relative">
          
          <motion.div
            className="absolute top-[15vh] left-[8vw] w-[20vw] aspect-[4/3] rounded-sm overflow-hidden opacity-60 mix-blend-screen"
            initial={{ opacity: 0, y: -20 }}
            animate={phase >= 2 ? { opacity: 0.6, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <img src={reelFire} alt="Campfire" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h2 
            className="text-[6vw] font-display text-text-primary leading-[0.9] mt-[20vh] relative z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Nights under<br/>
            <span className="italic text-primary/90">the stars.</span>
          </motion.h2>

          <motion.p 
            className="text-[1.2vw] text-text-secondary font-body font-light max-w-[30vw] leading-relaxed mt-6 relative z-20"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luxury desert camps, crackling fires, and the silence of the deep Thar desert.
          </motion.p>
        </div>

        {/* Right Side: Main Image */}
        <div className="w-[50%] h-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, transformOrigin: "right center" }}
            animate={{ scale: 1 }}
            transition={{ duration: 4.5, ease: "easeOut" }}
          >
            <img src={camp1} alt="Luxury Camp" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bg-dark" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
