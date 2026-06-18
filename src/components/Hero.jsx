import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import agDogVideo from '../assets/AG_dog.webm';
import agDogVideoDark from '../assets/AG_dog2.webm';

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
    <section className="relative isolate w-full overflow-hidden bg-bg-primary pt-20 text-text-main sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,var(--bg-primary)_0%,var(--bg-surface)_45%,var(--bg-primary)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.08] [background-image:linear-gradient(var(--text-main)_1px,transparent_1px),linear-gradient(90deg,var(--text-main)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-bg-primary to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-9 px-4 pb-10 sm:gap-10 sm:px-6 md:pb-12 lg:min-h-[calc(100svh-2rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
        <motion.div
          className="relative z-10 flex w-fit flex-col items-center text-center lg:mx-0 mx-auto mt-12 sm:mt-16 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 overflow-hidden sm:mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-text-muted sm:text-xs sm:tracking-[0.45em] md:text-sm">
              The New Standard
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="w-fit text-center font-heading text-[2.72rem] font-extrabold uppercase leading-[0.92] tracking-normal text-text-main max-[380px]:text-[2.42rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem]"
          >
            Defining
            <br />
            Time &
            <br />
            <span className="bg-gradient-to-b from-text-main via-text-main to-text-main/25 bg-clip-text text-transparent">
              Style
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-6 h-[1px] w-14 bg-text-main/70 sm:mt-8 sm:w-16" />

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-full lg:whitespace-nowrap text-sm font-light leading-7 text-text-muted sm:text-base md:text-lg md:leading-8"
          >
            Premium apparel, engineered footwear, and elevated essentials designed for the modern trailblazer.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-9 sm:gap-5">
            <Link
              to="/shop"
              className="group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-full border border-text-main bg-text-main px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-bg-primary shadow-xl shadow-black/10 transition duration-300 hover:bg-bg-primary hover:text-text-main sm:min-h-14 sm:w-auto sm:gap-4 sm:px-9 sm:text-xs sm:tracking-[0.22em]"
            >
              Explore Collection
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="max-w-full text-[10px] uppercase leading-5 tracking-[0.22em] text-text-muted opacity-75 sm:text-xs sm:tracking-[0.28em]">
              Apparel / Footwear / Accessories
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative ml-auto aspect-[3/4] min-h-[360px] max-[380px]:min-h-[320px] sm:aspect-[5/4] sm:min-h-[440px] md:min-h-[520px] lg:aspect-[4/5] lg:max-h-[720px]">
            <video
              src={agDogVideoDark}
              autoPlay
              loop
              muted
              playsInline
              className="hidden h-full w-full object-cover object-center dark:block"
            />
            <video
              src={agDogVideo}
              autoPlay
              loop
              muted
              playsInline
              className="block h-full w-full object-cover object-center dark:hidden"
            />
            <div className="absolute left-4 top-4 flex flex-col justify-center rounded-xl border border-white/20 bg-black/40 px-3 py-1.5 text-white shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:left-6 sm:top-6 sm:px-3.5 sm:py-2.5">
              <p className="text-[8px] font-bold uppercase leading-tight tracking-[0.2em] text-white/70 sm:text-[9px] sm:tracking-[0.24em]">New Season</p>
              <p className="mt-0.5 font-heading text-xs font-bold uppercase leading-tight tracking-wider sm:text-sm">Alpha Goods</p>
            </div>
            <div className="group absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-2xl border border-white/15 bg-black/40 p-4 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black/50 hover:shadow-2xl hover:border-white/25 sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4 md:bottom-8 md:left-8 md:right-8">
              <div className="min-w-0">
                <p className="whitespace-nowrap text-[9px] font-bold uppercase leading-4 tracking-[0.24em] text-white/70 sm:text-[10px] sm:tracking-[0.32em]">Welcome From AG Dog</p>
                <p className="mt-1.5 max-w-sm text-xs font-light leading-5 text-white/90 sm:text-sm sm:leading-6">
                  Step in, stay sharp, and let me guide you through the new collection.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors group-hover:bg-white/20 sm:text-xs sm:tracking-[0.18em]">
                <ShieldCheck size={14} className="sm:h-4 sm:w-4" />
                Verified
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-text-muted lg:flex">
        Scroll
        <ChevronDown size={15} />
      </div>
    </section>
  );
}
