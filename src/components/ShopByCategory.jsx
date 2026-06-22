import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shirt, Watch, Footprints, Briefcase, Settings, Glasses } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

const { categories } = data;

const iconMap = {
  clothing: Shirt,
  watches: Watch,
  shoes: Footprints,
  bags: Briefcase,
  gear: Settings,
  eyewear: Glasses
};

export default function ShopByCategory() {
  return (
    <section className="bg-bg-primary dark:bg-[#050505] px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-[90rem] xl:px-12">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
              Explore Our Collection
            </span>
            <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-text-main md:text-5xl lg:text-[3.5rem]">
              Shop By Category
            </h2>
            <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-text-muted md:text-base">
              Discover premium apparel, accessories, and essentials crafted for timeless style and performance.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="group flex flex-shrink-0 items-center gap-3 rounded-full border border-black/10 dark:border-white/10 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-text-main transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            View All Categories 
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Cards */}
        <div className="flex w-full gap-4 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.id];

            return (
              <Link 
                key={cat.id} 
                to={cat.link}
                className="group relative flex aspect-[2/3] w-[30vw] min-w-[120px] flex-shrink-0 snap-start flex-col items-center justify-end overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] sm:w-[180px] sm:min-w-[180px] lg:w-full lg:min-w-0 lg:snap-align-none"
              >
                {/* Background Image & Gradient */}
                {cat.image && (
                  <>
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="absolute inset-0 h-full w-full object-cover opacity-40 dark:opacity-60 mix-blend-multiply dark:mix-blend-normal grayscale transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* The gradient fading from transparent to the card's background color */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-[#0a0a0a]/90 dark:to-[#0a0a0a] transition-opacity duration-500" />
                  </>
                )}

                {/* Bottom Glow effect */}
                <div className="absolute bottom-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/15 dark:via-white/40 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100 group-hover:via-black/30 dark:group-hover:via-white/80" />
                <div className="absolute bottom-0 left-1/2 h-8 w-3/4 -translate-x-1/2 bg-black/5 dark:bg-white/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 flex w-full flex-col items-center pb-8">
                  {/* Icon Circle */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-black/40 dark:group-hover:border-white/40 group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    {/* Inner subtle glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-text-main opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-20" />
                    {IconComponent && (
                      <IconComponent size={30} strokeWidth={1.5} className="relative z-10 text-text-main" />
                    )}
                  </motion.div>

                  <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-text-main">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
