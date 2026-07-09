import { motion } from 'framer-motion';

export const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-bg-primary transition-colors duration-500">
      {/* Orb 1: Magenta */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-accent-purple/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Orb 2: Pink */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[50vw] h-[50vw] rounded-full bg-accent-pink/10 blur-[150px]"
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Orb 3: Purple */}
      <motion.div
        className="absolute -bottom-32 left-1/2 w-[60vw] h-[60vw] rounded-full bg-accent-purple/20 blur-[130px] -translate-x-1/2"
        animate={{
          y: [0, -100, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};
