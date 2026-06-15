import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import introVideo from '../assets/AG-INtro.mp4';

export default function IntroSplash() {
  // Use sessionStorage to ensure it only plays on fresh load/refresh, 
  // not when navigating back to home (optional, but requested "when website is refresh").
  // The state alone will reset on full page refresh anyway, so just state is fine.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ backgroundColor: 'rgba(0,0,0,1)' }}
          exit={{ backgroundColor: 'rgba(0,0,0,0)', pointerEvents: 'none' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center"
        >
          <motion.video
            src={introVideo}
            autoPlay
            muted
            playsInline
            onEnded={() => setIsVisible(false)}
            initial={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.04, y: 'calc(-50vh + 64px)', opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
