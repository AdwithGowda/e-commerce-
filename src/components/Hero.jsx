import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-bg-primary dark:bg-black pt-28 sm:pt-44 lg:pt-32 min-h-[100svh] flex flex-col justify-start lg:justify-center">

      {/* Base Gradient (Behind Maps) */}
      <div className="absolute inset-0 -z-40 bg-[linear-gradient(115deg,var(--bg-primary)_0%,var(--bg-surface)_45%,var(--bg-primary)_100%)] dark:hidden" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-bg-primary dark:from-black to-transparent" />

      <div className="relative mx-auto flex w-full max-w-[90rem] flex-col lg:flex-row items-center justify-start px-4 pb-10 sm:px-6 md:pb-12 min-h-[calc(100svh-10rem)] lg:min-h-[calc(100svh-8rem)] lg:px-10 xl:px-12">
        
        {/* Left Column: Text Content */}
        <motion.div
          className="relative z-20 flex w-full lg:w-1/2 flex-col items-center text-center lg:items-start lg:text-left mt-[10vh] sm:mt-12 lg:mt-0 lg:pr-10 xl:pr-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex w-full items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <div className="h-[1px] w-8 bg-text-main/70 sm:w-12 lg:w-16" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-text-muted sm:text-sm">
              The New Standard
            </span>
            <div className="h-[1px] w-8 bg-text-main/70 sm:w-12 lg:w-16" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="w-full font-heading text-[clamp(1.85rem,8vw,2.5rem)] sm:text-[clamp(2.5rem,6vw,6.5rem)] font-extrabold uppercase leading-[1.05] tracking-normal text-text-main"
          >
            Redefining
            <br />
            Timeless
            <br />
            <span className="bg-gradient-to-b from-text-main via-text-main to-text-main/40 bg-clip-text text-transparent">
              Style
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-sm font-light leading-relaxed text-text-muted sm:text-base md:text-lg md:leading-8 mx-auto lg:mx-0"
          >
            Premium apparel, engineered footwear, and elevated essentials designed for the modern trailblazer.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Link
              to="/shop"
              className="group inline-flex min-h-[3.25rem] items-center justify-center gap-4 rounded-full bg-white px-8 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-xl shadow-black/10 transition duration-300 hover:bg-gray-200 sm:min-h-[3.75rem] sm:px-10"
            >
              Explore Collection
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive Background / Right Image */}
      <motion.div
        className="absolute bottom-0 right-0 z-10 flex h-full w-full lg:w-[60vw] max-w-none items-end justify-center lg:justify-end pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        <img 
          src="/images/hero_all.png" 
          alt="Hero Model" 
          className="h-[80%] sm:h-[90%] lg:h-full w-auto object-contain object-bottom lg:object-right-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] opacity-30 lg:opacity-100 pointer-events-auto"
        />
      </motion.div>
    </section>
  );
}
