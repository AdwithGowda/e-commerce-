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
    <section className="px-6 pt-16 pb-4 md:pt-24 md:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-baseline justify-between border-b border-black/10 dark:border-white/10 pb-5">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-tight text-text-main md:text-3xl">
            Shop By Category
          </h2>
          <Link to="/shop" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-text-main transition-opacity hover:opacity-70">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        {/* Category Scroll/Grid */}
        <div className="flex w-full gap-6 overflow-x-auto pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-6 md:gap-8 md:overflow-visible lg:flex lg:justify-between lg:gap-10">
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.id];
            return (
              <Link 
                key={cat.id} 
                to={cat.link}
                className="group flex flex-shrink-0 flex-col items-center gap-6 md:flex-shrink lg:min-w-[140px]"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative flex aspect-square w-20 sm:w-24 md:w-28 lg:w-32 items-center justify-center overflow-hidden rounded-full transition-all duration-500 group-hover:-translate-y-1.5 bg-transparent shadow-[0_0_20px_rgba(79,70,229,0.25)] dark:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                >
                  {IconComponent ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent transition-transform duration-500 group-hover:scale-110">
                      <IconComponent size={48} strokeWidth={1.5} className="text-text-main opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  ) : cat.image ? (
                    <>
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0 dark:bg-black/20" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F5F5F0] dark:bg-zinc-800 transition-colors duration-500 group-hover:bg-[#EBEBE6] dark:group-hover:bg-zinc-700">
                      <span className="font-serif text-3xl italic text-text-muted transition-colors duration-500 group-hover:text-text-main">
                        {cat.name}
                      </span>
                    </div>
                  )}
                </motion.div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-main transition duration-300">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
