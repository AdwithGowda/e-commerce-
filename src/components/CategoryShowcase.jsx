import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import agw2 from '../assets/agw2.png';
import agb2 from '../assets/agb2.png';
import videoSrc1 from '../assets/AG_ads.mp4';
import videoSrc2 from '../assets/AG_ads2.mp4';
import videoSrc3 from '../assets/AG_ads3.mp4';

const backgroundVideos = [videoSrc1, videoSrc2, videoSrc3];

const { categories, products } = data;


const promoBanners = [
  {
    id: 1,
    eyebrow: 'Technical weave / zero gravity',
    title: 'The Aero-Knit Drop',
    subtitle: 'Breathable, hyper-light engineered runners built for movement and minimalist styling.',
    image: '/images/ag_showcase_shoe.png',
    link: '/shop?category=shoes',
    showBanks: false,
  },
  {
    id: 2,
    eyebrow: 'Matte black / precision objects',
    title: 'Obsidian Chronograph',
    subtitle: 'Matte black titanium with a sapphire crystal face.',
    image: '/images/ag_prod_watch1_pri.png', 
    link: '/shop?category=watches',
    showBanks: false,
  },
  {
    id: 3,
    eyebrow: 'Everyday comfort / relaxed fit',
    title: 'Essential Tee',
    subtitle: 'Ultra-soft cotton blend t-shirt with a relaxed fit.',
    image: '/images/ag_apparel.png',
    link: '/shop?category=clothing',
    showBanks: false,
  }
];

export default function CategoryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % promoBanners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev === 0 ? promoBanners.length - 1 : prev - 1));
  };

  const handleVideoEnded = () => {
    nextBanner();
  };

  return (
    <section id="collections" className="relative px-6 pt-24 pb-8 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-30 h-full w-full">
        <video
          key={backgroundVideos[currentIndex % backgroundVideos.length]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="h-full w-full object-cover object-center"
          src={backgroundVideos[currentIndex % backgroundVideos.length]}
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 -z-20 bg-black/60" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* Promotional Showcase Layout */}
        <div className="mt-16 md:mt-24 relative w-full flex flex-col justify-center min-h-[400px]">
          
          {/* Top Area: Animated Text & Details */}
          <div className="w-full relative min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-2xl"
              >
                <p className="text-sm md:text-xl text-white/70 font-light uppercase tracking-widest drop-shadow-sm">
                  {promoBanners[currentIndex].eyebrow}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                  {promoBanners[currentIndex].title}
                </h2>
                <p className="text-base md:text-lg text-white/80 max-w-md font-light leading-relaxed drop-shadow-sm">
                  {promoBanners[currentIndex].subtitle}
                </p>
                
                <div className="pt-2">
                  <Link 
                    to={promoBanners[currentIndex].link}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs sm:text-sm transition-all duration-300 backdrop-blur-md rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.1)]"
                  >
                    View Details 
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Area: Logo and Thumbnails */}
        <div className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-12 md:mt-24">
          
          {/* Spacer for perfect center alignment on desktop */}
          <div className="hidden md:block flex-1"></div>

          {/* Small Brand Logo/Image (Centered) */}
          <div className="flex-1 flex justify-center items-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative h-[80px] w-[80px] md:h-[100px] md:w-[100px]"
            >
              <img
                src={agw2}
                alt="Brand Showcase"
                className="absolute inset-0 h-full w-full object-contain transition-all duration-500 hover:scale-110 drop-shadow-lg"
              />
            </motion.div>
          </div>

          {/* Right Side: Horizontal Image Thumbnails */}
          <div className="flex-1 flex justify-center md:justify-end gap-3 md:gap-4 lg:gap-6 z-10 w-full -mr-12 md:-mr-16 lg:-mr-24">
            {promoBanners.map((banner, idx) => (
              <button
                key={banner.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative overflow-hidden w-20 h-32 md:w-28 md:h-40 lg:w-36 lg:h-52 transition-all duration-500 rounded-lg group ${
                  currentIndex === idx 
                    ? 'ring-2 ring-white scale-105 shadow-2xl opacity-100 z-10' 
                    : 'opacity-50 hover:opacity-100 hover:scale-100 scale-95 hover:z-20 cursor-pointer'
                }`}
              >
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                {currentIndex === idx && (
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                )}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
