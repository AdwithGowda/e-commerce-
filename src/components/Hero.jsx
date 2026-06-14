import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

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
  const heroProduct = data.products.find((product) => product.category === 'Shoes');

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-bg-primary pt-20">
      <div className="absolute inset-0 -z-20 dark:bg-[radial-gradient(circle_at_24%_38%,rgba(45,45,52,0.9)_0%,rgba(11,12,16,0.72)_34%,rgba(0,0,0,1)_72%)] bg-[radial-gradient(circle_at_24%_38%,rgba(250,250,250,1)_0%,rgba(240,240,245,0.8)_34%,rgba(230,230,235,1)_72%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-5 [background-image:linear-gradient(var(--text-main)_1px,transparent_1px),linear-gradient(90deg,var(--text-main)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      
      {/* Ambient glows */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-text-main opacity-[0.03] blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-text-main opacity-[0.02] blur-[100px]" />
      
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-16 lg:px-8 lg:py-20 text-center">
        <motion.div 
          className="relative z-10 max-w-4xl flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-5 overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-[0.45em] text-text-muted md:text-sm">
              The New Standard
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-5xl sm:text-7xl font-heading font-extrabold uppercase leading-[0.96] tracking-tight md:text-8xl lg:text-9xl text-text-main"
          >
            DEFINING <br />
            <span className="bg-gradient-to-r from-text-main via-text-muted to-transparent bg-clip-text text-transparent opacity-90">
              TIME & STYLE
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-2xl text-base font-light leading-8 text-text-muted md:text-xl"
          >
            Premium apparel, engineered footwear, and precision timepieces designed for the modern trailblazer.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center">
            <Link
              to="/shop"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-border-subtle bg-bg-surface px-8 py-4 text-xs sm:px-10 sm:py-5 sm:text-sm font-bold uppercase tracking-[0.22em] text-text-main backdrop-blur transition duration-500 hover:border-text-main hover:bg-text-main hover:text-bg-primary"
            >
              <span className="relative flex items-center gap-3 transition duration-300 group-hover:gap-4">
                EXPLORE COLLECTION
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-text-muted opacity-70 text-center">
              Watches / Apparel / Footwear
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
