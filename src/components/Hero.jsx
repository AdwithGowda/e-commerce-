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
    <section className="relative isolate w-full overflow-hidden bg-bg-primary dark:bg-black pt-20 text-text-main sm:pt-44 lg:pt-32 min-h-[100svh] flex flex-col justify-center">
      {/* Light Theme Background */}
      <div 
        className="absolute inset-x-0 -top-24 -bottom-24 sm:inset-0 scale-110 translate-y-4 sm:translate-y-8 -z-30 bg-cover bg-center bg-no-repeat opacity-15 blur-[2px] mix-blend-multiply dark:hidden"
        style={{ backgroundImage: 'url("/images/world_map_bg_light.png")' }}
      />
      {/* Dark Theme Background */}
      <div 
        className="absolute inset-x-0 -top-24 -bottom-24 sm:inset-0 scale-110 translate-y-4 sm:translate-y-8 -z-30 hidden bg-cover bg-center bg-no-repeat opacity-25 blur-[2px] mix-blend-screen dark:block"
        style={{ backgroundImage: 'url("/images/world_map_bg.png")' }}
      />
      {/* Base Gradient (Behind Maps) */}
      <div className="absolute inset-0 -z-40 bg-[linear-gradient(115deg,var(--bg-primary)_0%,var(--bg-surface)_45%,var(--bg-primary)_100%)] dark:hidden" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-bg-primary dark:from-black to-transparent" />

      <div className="relative mx-auto grid max-w-[90rem] grid-cols-1 items-center justify-items-center gap-9 px-4 pb-10 sm:gap-10 sm:px-6 md:pb-12 min-h-[calc(100svh-10rem)] lg:min-h-[calc(100svh-8rem)] lg:px-10 xl:px-12">
        <motion.div
          className="relative z-10 mx-auto flex w-full flex-col items-center text-center mt-0 sm:mt-24 lg:mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 w-full self-center overflow-hidden text-center sm:mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-text-muted sm:text-xs sm:tracking-[0.45em] md:text-sm">
              The New Standard
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mx-auto w-full text-center font-heading text-[clamp(1.5rem,8vw,8.5rem)] font-extrabold uppercase leading-[1.25] sm:leading-[1.05] tracking-normal text-text-main px-4 sm:px-6"
          >
            Redefining
            <br />
            Timeless
            <br />
            <span className="bg-gradient-to-b from-text-main via-text-main to-text-main/25 bg-clip-text text-transparent">
              Style
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-6 h-[1px] w-14 bg-text-main/70 sm:mt-8 sm:w-16" />

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-full lg:whitespace-nowrap text-center text-sm font-light leading-7 text-text-muted sm:text-base md:text-lg md:leading-8"
          >
            Premium apparel, engineered footwear, and elevated essentials designed for the modern trailblazer.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-9 sm:gap-5">
            <Link
              to="/shop"
              className="group inline-flex min-h-[2.75rem] w-fit items-center justify-center gap-3 rounded-full border border-text-main bg-text-main px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-bg-primary shadow-xl shadow-black/10 transition duration-300 hover:bg-bg-primary hover:text-text-main sm:min-h-14 sm:w-auto sm:gap-4 sm:px-9 sm:text-xs sm:tracking-[0.22em]"
            >
              Explore Collection
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="max-w-full text-[10px] uppercase leading-5 tracking-[0.22em] text-text-muted opacity-75 sm:text-xs sm:tracking-[0.28em]">
              Apparel / Footwear / Accessories
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
