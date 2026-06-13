import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
const { categories, products } = data;

const collectionNarratives = [
  {
    id: 'obsidian-series',
    name: 'The Obsidian Series',
    eyebrow: 'Matte black / precision objects',
    description: 'Stealth textures, dark titanium, and high-contrast pieces made for after-dark utility.',
    image: products[0].primaryImage,
    link: '/shop?category=watches',
  },
  {
    id: 'monolith-edit',
    name: 'The Monolith Edit',
    eyebrow: 'Structured wool / sharp silhouettes',
    description: 'Weight, proportion, and architectural tailoring built around a quieter winter uniform.',
    image: products[1].secondaryImage,
    link: '/shop?category=clothing',
  },
  {
    id: 'kinetic-aero',
    name: 'Kinetic / Aero Movement',
    eyebrow: 'Engineered footwear / urban motion',
    description: 'Technical footwear and movement-led essentials for the modern trailblazer.',
    image: products[2].primaryImage,
    link: '/shop?category=shoes',
  },
];

export default function CategoryShowcase() {
  return (
    <section id="collections" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 border-y border-white/10 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-white/40">
              Capsule Studies
            </p>
            <h2 className="text-4xl font-heading font-bold uppercase tracking-tight md:text-6xl">
              Curated <br />
              <span className="text-white/38">Collections</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55 md:text-right">
            Seasonal edits organized by material, silhouette, and motion instead of ordinary storefront categories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {collectionNarratives.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
            >
              <Link
                to={collection.link}
                className="group relative block h-[520px] overflow-hidden rounded-lg border border-white/10 bg-surface shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:h-[640px]"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover opacity-78 grayscale-[12%] saturate-75 transition duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-transparent" />
                </motion.div>

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/62 backdrop-blur">
                  0{index + 1}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">
                    {collection.eyebrow}
                  </p>
                  <h3 className="text-3xl font-heading font-bold leading-none md:text-4xl">
                    {collection.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/56">
                    {collection.description}
                  </p>

                  <div className="mt-7 overflow-hidden">
                    <p className="flex translate-y-[140%] items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      Explore Edit <ArrowRight size={15} />
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:border-white/40 hover:text-white"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <Link to="/shop" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/70 transition hover:text-white">
            View All Collections <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
