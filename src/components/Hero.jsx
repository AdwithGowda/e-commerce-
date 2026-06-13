import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import agw1 from '../assets/agw1.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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
  const heroProduct = data.products.find((product) => product.name === 'Obsidian Chronograph');

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#050506] pt-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_24%_38%,rgba(45,45,52,0.9)_0%,rgba(11,12,16,0.72)_34%,rgba(0,0,0,1)_72%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <motion.div 
          className="relative z-10 max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-5 overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-[0.45em] text-white/55 md:text-sm">
              The New Standard
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-6xl font-heading font-extrabold uppercase leading-[0.96] tracking-tight md:text-7xl lg:text-8xl"
          >
            DEFINING <br />
            <span className="bg-gradient-to-r from-white via-white to-white/38 bg-clip-text text-transparent">
              TIME & STYLE
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-xl text-base font-light leading-8 text-white/62 md:text-xl"
          >
            Premium apparel, engineered footwear, and precision timepieces designed for the modern trailblazer.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/18 bg-white/8 px-9 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur transition duration-500 hover:border-white hover:bg-white hover:text-black"
            >
              <span className="relative flex items-center gap-3 transition duration-300 group-hover:gap-4">
                EXPLORE COLLECTION
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <span className="text-xs uppercase tracking-[0.28em] text-white/35">
              Watches / Apparel / Footwear
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
          className="relative min-h-[420px] overflow-hidden rounded-lg bg-surface shadow-[0_34px_120px_rgba(0,0,0,0.45)] md:min-h-[560px]"
        >
          <img
            src={agw1}
            alt={heroProduct?.name || 'Luxury chronograph watch'}
            className="absolute inset-0 h-full w-full object-cover grayscale-[20%] saturate-75 transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
