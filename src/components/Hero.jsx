import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import agDogVideo from '../assets/AG_dog.webm';
import agDogVideoDark from '../assets/AG_dog2.webm';

const showcaseItems = [
  { src: "/images/ag_horizon_watch.png", alt: "Watch" },
  { src: "/images/ag_silk_shirt.png", alt: "Shirt" },
  { src: "/images/ag_showcase_shoe.png", alt: "Shoe" },
  { src: "/images/ag_duffel_bag.png", alt: "Bag" },
  { src: "/images/ag_aviators.png", alt: "Eyewear" },
  { src: "/images/ag_ring.png", alt: "Ring" },
  { src: "/images/ag_carabiner.png", alt: "Carabiner" },
  { src: "/images/ag_leather_jacket.png", alt: "Jacket" },
  { src: "/images/ag_stealth_backpack.png", alt: "Backpack" },
  { src: "/images/ag_accessory.png", alt: "Accessory" },
];

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
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="relative isolate w-full overflow-hidden bg-bg-primary dark:bg-black pt-28 text-text-main sm:pt-32 lg:pt-20">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,var(--bg-primary)_0%,var(--bg-surface)_45%,var(--bg-primary)_100%)] dark:hidden" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-bg-primary dark:from-black to-transparent" />

      <div className="relative mx-auto grid max-w-[90rem] grid-cols-1 items-center justify-items-center gap-9 px-4 pb-10 sm:gap-10 sm:px-6 md:pb-12 lg:min-h-[calc(100svh-2rem)] lg:grid-cols-1 lg:grid-rows-1 lg:justify-items-start lg:px-10 xl:px-12">
        <motion.div
          className="relative z-10 mx-auto flex w-full flex-col items-center text-center mt-12 sm:mt-16 lg:mx-0 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:items-start lg:text-left"
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
            className="mx-auto w-full text-center font-heading text-[clamp(1.5rem,8vw,8.5rem)] font-extrabold uppercase leading-[1.05] tracking-normal text-text-main px-4 sm:px-6 lg:mx-0 lg:w-fit lg:px-0 lg:text-left"
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
            className="mt-5 max-w-full lg:whitespace-nowrap text-sm font-light leading-7 text-text-muted sm:text-base md:text-lg md:leading-8"
          >
            Premium apparel, engineered footwear, and elevated essentials designed for the modern trailblazer.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-9 sm:gap-5 lg:items-start">
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

        <motion.div
          className="relative z-20 -mt-6 w-full sm:-mt-8 lg:col-start-1 lg:row-start-1 lg:mt-32 lg:w-[40%] lg:justify-self-end lg:-mr-10 xl:-mr-12"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative mx-auto w-[85%] max-w-[300px] aspect-[3/4] sm:w-[75%] sm:max-w-[400px] sm:aspect-[4/5] md:w-[65%] md:max-w-[480px] lg:w-full lg:max-w-none lg:mx-0 lg:ml-auto lg:aspect-[4/5] xl:aspect-[3/4]">
            
            {/* Moving Items Div Lowered & Scaled Down */}
            <div 
              className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full group"
              onMouseLeave={() => setHoveredItem(null)}
            >
              <AnimatePresence>
                {hoveredItem && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 5, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-12 left-1/2 flex items-center gap-2.5 bg-black dark:bg-white backdrop-blur-xl text-white dark:text-black px-4 py-2 rounded-full shadow-2xl z-50 pointer-events-none border border-white/20 dark:border-black/20"
                  >
                    <img src={hoveredItem.src} className="w-5 h-5 object-contain drop-shadow-sm" alt="" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{hoveredItem.alt}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-full h-20 bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden flex items-center shadow-2xl cursor-pointer">
                {/* First Set */}
                <div className="flex items-center gap-6 pr-6 w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
                  {showcaseItems.map((item, idx) => (
                    <div 
                      key={`set1-${idx}`} 
                      onMouseEnter={() => setHoveredItem(item)}
                      className="h-16 w-16 rounded-full bg-white/20 dark:bg-black/40 border border-white/30 dark:border-white/10 flex items-center justify-center shadow-sm overflow-hidden transition-all duration-300 hover:border-white/60 dark:hover:border-white/30 hover:bg-white/30 dark:hover:bg-black/60 hover:shadow-lg"
                    >
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover drop-shadow-md hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
                {/* Second Set (Seamless Loop) */}
                <div className="flex items-center gap-6 pr-6 w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
                  {showcaseItems.map((item, idx) => (
                    <div 
                      key={`set2-${idx}`} 
                      onMouseEnter={() => setHoveredItem(item)}
                      className="h-16 w-16 rounded-full bg-white/20 dark:bg-black/40 border border-white/30 dark:border-white/10 flex items-center justify-center shadow-sm overflow-hidden transition-all duration-300 hover:border-white/60 dark:hover:border-white/30 hover:bg-white/30 dark:hover:bg-black/60 hover:shadow-lg"
                    >
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover drop-shadow-md hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-6 -z-10 sm:left-6 sm:top-8 lg:hidden">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-black/90 drop-shadow-sm dark:drop-shadow-md dark:text-white/90 sm:text-[11px] sm:tracking-[0.28em]">
                AG Fashion
              </p>
              <div className="mt-2 flex flex-col items-start sm:mt-4">
                <p className="flex flex-col font-heading font-extrabold uppercase leading-none tracking-tight text-black/90 drop-shadow-sm dark:drop-shadow-lg dark:text-white/90">
                  <span className="text-2xl sm:text-4xl">ALPHA</span>
                  <span className=" text-xl sm:text-2xl">GOODS</span>
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
