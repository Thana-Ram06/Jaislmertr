import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export const SCENE_DURATIONS: Record<string, number> = {
  open: 4500,
  fort: 4000,
  dunes: 4000,
  camps: 4500,
  close: 5000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: Scene1,
  fort: Scene2,
  dunes: Scene3,
  camps: Scene4,
  close: Scene5,
};

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d0c0a]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
        />
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-10"
          style={{ background: 'radial-gradient(circle, #C8974A, transparent 70%)' }}
          animate={{ x: ['-20%', '10%', '-10%'], y: ['-20%', '0%', '-10%'], scale: [1, 1.2, 0.9] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[80px] opacity-[0.08] right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, #8B6534, transparent 70%)' }}
          animate={{ x: ['10%', '-10%', '0%'], y: ['10%', '-20%', '5%'], scale: [1, 1.1, 0.8] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="absolute h-[1px] bg-[#C8974A]/30 pointer-events-none"
        animate={{
          left: ['5%', '45%', '10%', '55%', '20%'][sceneIndex] ?? '5%',
          width: ['40%', '20%', '35%', '25%', '60%'][sceneIndex] ?? '40%',
          top: ['85%', '12%', '75%', '88%', '50%'][sceneIndex] ?? '85%',
          opacity: [0.3, 0.5, 0.4, 0.3, 0.6][sceneIndex] ?? 0.3,
        }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute inset-4 border border-white/5 rounded-2xl pointer-events-none z-50" />

      <AnimatePresence mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
