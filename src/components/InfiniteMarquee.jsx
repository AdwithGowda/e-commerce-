import { motion } from 'framer-motion';

export default function InfiniteMarquee() {
  const marqueeText = "AG APPAREL • PREMIUM TIMEPIECES • ENGINEERED FOOTWEAR • ";
  // Repeat enough times to ensure it overflows the screen twice over
  const textArray = new Array(8).fill(marqueeText); 

  return (
    <div className="w-full bg-accent py-5 overflow-hidden border-y border-white/10 flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {textArray.map((text, i) => (
          <span 
            key={i} 
            className="text-white font-heading font-bold text-xl md:text-2xl tracking-[0.2em] px-4"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
