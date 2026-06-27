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
                className="group relative flex aspect-[2/3] w-[30vw] min-w-[120px] flex-shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] sm:w-[180px] sm:min-w-[180px] lg:w-full lg:min-w-0 lg:snap-align-none"
              >
                {/* Background Image & Gradient */}
                {cat.image && (
                  <>
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient fading from transparent to black at the bottom for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />
                  </>
                )}

                {/* Content */}
                <div className="relative z-10 flex w-full flex-col items-start p-4 md:p-5">
                  {/* Icon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="mb-3"
                  >
                    {IconComponent && (
                      <IconComponent size={24} strokeWidth={1.5} className="text-white" />
                    )}
                  </motion.div>

                  <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-white md:text-base">
                    {cat.name}
                  </h3>
                  
                  <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
