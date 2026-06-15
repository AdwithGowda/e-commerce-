import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import agw2 from '../assets/agw2.png';
import agb2 from '../assets/agb2.png';

const { categories, products } = data;

const collectionNarratives = [
  {
    id: 'obsidian-series',
    name: 'The Obsidian Series',
    eyebrow: 'Matte black / precision objects',
    description: 'Stealth textures, dark titanium, and high-contrast pieces made for after-dark utility.',
    image: '/images/ag_showcase_watch.png',
    link: '/shop?category=watches',
  },
  {
    id: 'monolith-edit',
    name: 'The Monolith Edit',
    eyebrow: 'Structured wool / sharp silhouettes',
    description: 'Weight, proportion, and architectural tailoring built around a quieter winter uniform.',
    image: '/images/ag_showcase_clothing.png',
    link: '/shop?category=clothing',
  },
  {
    id: 'aero-knit',
    name: 'The Aero-Knit Drop',
    eyebrow: 'Technical weave / zero gravity',
    description: 'Breathable, hyper-light engineered runners built for movement and minimalist styling.',
    image: '/images/ag_showcase_shoe.png',
    link: '/shop?category=shoes',
  },
];

export default function CategoryShowcase() {
  return (
    <section id="collections" className="px-6 pt-24 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 border-y border-border-subtle py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-text-muted">
              Capsule Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-tight md:text-6xl text-text-main">
              Curated <br />
              <span className="text-text-muted">Collections</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-text-muted md:text-right">
            Seasonal edits organized by material, silhouette, and motion instead of ordinary storefront categories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-3">
          {collectionNarratives.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
              className="flex flex-col gap-6"
            >
              <Link
                to={collection.link}
                className="group relative block h-[420px] md:h-[560px] overflow-hidden bg-bg-surface transition-transform duration-500 hover:-translate-y-2"
                style={{ 
                  clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover opacity-85 grayscale-[15%] transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </motion.div>

                <div className="absolute right-6 top-6 text-xs font-bold tracking-[0.2em] text-white drop-shadow-md">
                  [0{index + 1}]
                </div>
              </Link>

              <div className="flex flex-col gap-3 px-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-text-muted">
                  {collection.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-heading font-bold leading-none md:text-3xl text-text-main">
                  {collection.name}
                </h3>
                <p className="text-sm leading-6 text-text-muted">
                  {collection.description}
                </p>
              </div>
            </motion.article>
          ))}
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
