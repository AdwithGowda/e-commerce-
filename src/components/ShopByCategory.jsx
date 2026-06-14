import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const shopCategories = [
  { name: 'SNEAKERS', image: '/images/ag_sneaker.png' },
  { name: 'APPAREL', image: '/images/ag_apparel.png' },
  { name: 'BAGS', image: '/images/ag_bag.png' },
  { name: 'ACCESSORIES', image: '/images/ag_accessory.png' }, 
  { name: 'OUTERWEAR', image: '/images/ag_outerwear.png' },
  { name: 'EYEWEAR', image: '/images/ag_eyewear.png' },
];

export default function ShopByCategory() {
  return (
    <section className="px-6 py-16 md:py-24">
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
          {shopCategories.map((cat, idx) => {
            const displayName = cat.name === 'ACCESSORIES' ? 'GEAR' : cat.name;
            return (
              <Link 
                key={cat.name} 
                to="/shop"
                className="group flex flex-shrink-0 flex-col items-center gap-6 md:flex-shrink lg:min-w-[140px]"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative flex aspect-[4/5] w-32 sm:w-36 md:w-full lg:w-44 items-center justify-center overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-[#FAFAFA] dark:bg-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_12px_32px_rgba(255,255,255,0.05)]"
                >
                  {cat.image ? (
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
                        {displayName}
                      </span>
                    </div>
                  )}
                </motion.div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-main transition duration-300">
                  {displayName}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
