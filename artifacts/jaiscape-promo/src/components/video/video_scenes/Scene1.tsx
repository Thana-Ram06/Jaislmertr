import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import heroFort from '@assets/images/hero-fort.png';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-bg-dark"
      {...sceneTransitions.fadeBlur}
    >
      {/* Background Image with Ken Burns */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, filter: 'blur(10px) brightness(0.5)' }}
        animate={{ scale: 1.0, filter: 'blur(0px) brightness(0.6)' }}
        transition={{ duration: 4.5, ease: "easeOut" }}
      >
        <img 
          src={heroFort} 
          alt="Jaisalmer Fort" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-bg-dark/30" />
      </motion.div>

      {/* Typography */}
      <div className="relative z-10 flex flex-col items-center text-center px-12 mt-12">
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[1.2vw] tracking-[0.3em] text-primary uppercase font-body font-light mb-4"
            initial={{ y: "100%", opacity: 0 }}
            animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Welcome to the Golden City
          </motion.h2>
        </div>
        
        <motion.h1 
          className="text-[9vw] font-display leading-[0.85] text-text-primary tracking-tight"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(8px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Timeless<br/>
          <span className="italic text-primary/90">Escapism</span>
        </motion.h1>
      </div>

      {/* Accent Lines */}
      {phase >= 1 && (
        <motion.div 
          className="absolute top-[15vh] bottom-[15vh] left-[5vw] w-[1px] bg-primary/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}
      {phase >= 1 && (
        <motion.div 
          className="absolute top-[15vh] bottom-[15vh] right-[5vw] w-[1px] bg-primary/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
      )}
    </motion.div>
  );
}
