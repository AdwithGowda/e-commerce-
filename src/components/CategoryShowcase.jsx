import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import agw2 from '../assets/agw2.png';
import agb2 from '../assets/agb2.png';

const { categories, products } = data;



const promoBanners = [
  {
    id: 1,
    eyebrow: 'Matte black / precision objects',
    title: 'The Obsidian Series',
    subtitle: 'Stealth textures, dark titanium, and high-contrast pieces made for after-dark utility.',
    image: '/images/ag_showcase_watch.png', 
    link: '/shop?category=watches',
    showBanks: false,
  },
  {
    id: 2,
    eyebrow: 'Structured wool / sharp silhouettes',
    title: 'The Monolith Edit',
    subtitle: 'Weight, proportion, and architectural tailoring built around a quieter winter uniform.',
    image: '/images/ag_showcase_clothing.png',
    link: '/shop?category=clothing',
    showBanks: false,
  },
  {
    id: 3,
    eyebrow: 'Technical weave / zero gravity',
    title: 'The Aero-Knit Drop',
    subtitle: 'Breathable, hyper-light engineered runners built for movement and minimalist styling.',
    image: '/images/ag_showcase_shoe.png',
    link: '/shop?category=shoes',
    showBanks: false,
  }
];

export default function CategoryShowcase() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % promoBanners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev === 0 ? promoBanners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % promoBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentBanner]);
  return (
    <section id="collections" className="px-6 pt-24 pb-8">
      <div className="mx-auto max-w-7xl">

        {/* Wide Promotional Banner Carousel */}
        <div className="my-24 relative w-full h-[650px] md:h-[450px] group flex items-center">

          <button 
            onClick={prevBanner}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full shadow-sm"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row"
            >
              <div className="flex-1 flex flex-col justify-center px-12 py-10 pt-16 md:p-16 lg:px-24 z-10 space-y-2 md:space-y-4 text-center md:text-left items-center md:items-start">
                <p className="text-sm md:text-xl text-gray-500 dark:text-gray-400 font-light uppercase tracking-widest">
                  {promoBanners[currentBanner].eyebrow}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-md">
                  {promoBanners[currentBanner].title}
                </h2>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md font-light leading-relaxed">
                  {promoBanners[currentBanner].subtitle}
                </p>
                
                {promoBanners[currentBanner].showBanks && (
                  <div className="pt-4 md:pt-6 flex flex-col md:flex-row items-center gap-3">
                    <div className="flex items-center gap-2 bg-white dark:bg-white/10 px-3 py-1.5 rounded-sm shadow-sm border border-gray-200 dark:border-white/20 text-xs font-bold text-gray-800 dark:text-white">
                      <span className="text-[#f16522]">BOBCARD</span>
                      <span className="text-gray-300 dark:text-gray-500">|</span>
                      <span className="text-[#db0011]">HSBC</span>
                    </div>
                    <div className="flex flex-col text-center md:text-left">
                      <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">Up to 10% Instant Discount*</span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">*T&C apply</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex-1 h-full flex items-center justify-center relative z-10 p-2 pb-16 md:py-2 md:pr-14 md:pl-4 lg:pr-16 lg:pl-6">
                <Link 
                  to={promoBanners[currentBanner].link}
                  className="w-full h-full relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-2xl block cursor-pointer"
                  style={{ clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)' }}
                >
                  <img 
                    src={promoBanners[currentBanner].image} 
                    alt={promoBanners[currentBanner].title}
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute right-6 top-6 text-xs font-bold tracking-[0.2em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mix-blend-overlay">
                    [0{currentBanner + 1}]
                  </div>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={nextBanner}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full shadow-sm"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* Small Brand Logo/Image */}
        <div className="flex justify-center w-full mt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative h-[100px] w-[100px] flex items-center justify-center"
          >
            <>
              <img
                src={agb2}
                alt="Brand Showcase"
                className="absolute inset-0 h-full w-full object-contain transition-all duration-500 hover:scale-110 dark:hidden"
              />
              <img
                src={agw2}
                alt="Brand Showcase"
                className="absolute inset-0 h-full w-full object-contain transition-all duration-500 hover:scale-110 hidden dark:block"
              />
            </>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
