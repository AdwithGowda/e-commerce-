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
    <section className="relative isolate w-full overflow-hidden bg-bg-primary dark:bg-black pt-20 text-text-main sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,var(--bg-primary)_0%,var(--bg-surface)_45%,var(--bg-primary)_100%)] dark:hidden" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-bg-primary dark:from-black to-transparent" />

      <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-9 px-4 pb-10 sm:gap-10 sm:px-6 md:pb-12 lg:min-h-[calc(100svh-2rem)] lg:grid-cols-[max-content_1fr] lg:gap-12 lg:px-10 xl:px-12">
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
            className="w-fit text-center font-heading text-[2.72rem] font-extrabold uppercase leading-[1.05] tracking-normal text-text-main max-[380px]:text-[2.42rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem]"
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
              className="group inline-flex min-h-[2.75rem] w-full items-center justify-center gap-3 rounded-full border border-text-main bg-text-main px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-bg-primary shadow-xl shadow-black/10 transition duration-300 hover:bg-bg-primary hover:text-text-main sm:min-h-14 sm:w-auto sm:gap-4 sm:px-9 sm:text-xs sm:tracking-[0.22em]"
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
          <div className="relative mx-auto w-[85%] max-w-[320px] aspect-[3/4] sm:w-[75%] sm:max-w-[400px] sm:aspect-[4/5] md:w-[65%] md:max-w-[480px] lg:w-full lg:max-w-none lg:mx-0 lg:ml-auto lg:aspect-[4/5] xl:aspect-[3/4]">
            <div className="absolute left-4 top-10 -z-10 flex flex-col items-start gap-1.5 sm:left-6 sm:top-20 sm:gap-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-black/90 dark:drop-shadow-md dark:text-white/90 sm:text-[11px] sm:tracking-[0.28em]">
                AG Fashion
              </p>
              <div className="mt-2 flex flex-col items-start sm:mt-4">
                <p className="flex flex-col font-heading font-extrabold uppercase leading-none tracking-tight text-black/90 dark:drop-shadow-lg dark:text-white/90">
                  <span className="text-2xl sm:text-4xl">ALPHA</span>
                  <span className="text-xl sm:text-2xl">GOODS</span>
                </p>
                <p className="mt-1.5 text-[10px] font-medium leading-snug text-black/70 dark:drop-shadow-md dark:text-white/80 sm:mt-2 sm:text-xs">
                  Built for every<br />adventure
                </p>
              </div>
            </div>
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
            <div className="group absolute bottom-4 left-4 right-4 flex flex-col items-center gap-1.5 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-center text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black/50 sm:bottom-6 sm:left-6 sm:right-6 sm:px-6 sm:py-4">
              <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-white/70 sm:text-[10px] sm:tracking-[0.32em]">
                Welcome From AG Dog
              </p>
              <p className="text-[10px] font-light leading-snug text-white/90 sm:text-xs sm:leading-relaxed">
                Step in, stay sharp, and let me guide you through the new collection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
