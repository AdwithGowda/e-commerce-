import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
const { products: allProducts } = data;

export default function ProductGrid({
  limit = null,
  title = 'New Arrivals',
  subtitle = 'Modern essentials selected for texture, proportion, and presence.',
  products = allProducts,
  showHeader = true,
}) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-12 flex flex-col gap-4 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
                Latest Drop
              </p>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight md:text-5xl">
                {title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55 md:text-right">
              {subtitle}
            </p>
          </div>
        )}

        <div className="mb-8 flex items-center justify-between border-y border-white/10 py-4 text-xs uppercase tracking-[0.25em] text-white/40">
          <span>{displayProducts.length} products</span>
          <span>Limited seasonal edit</span>
        </div>

        <div className="grid grid-cols-1 gap-x-9 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {displayProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: 'easeOut' }}
              className="group relative flex flex-col h-full"
            >
              <Link
                to={`/product/${product.id}`}
                className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/8 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:border-white/22"
              >
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                />

                <img
                  src={product.secondaryImage || product.primaryImage}
                  alt={`${product.name} detail`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80" />

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                  Atelier Pick
                </div>

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={17} />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-offwhite">
                    <ShoppingBag size={16} /> Quick Add
                  </button>
                </div>
              </Link>

              <div className="flex items-start justify-between gap-4 flex-1">
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    {product.category}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-heading font-bold leading-tight transition-colors hover:text-white/70 truncate">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-white/45 line-clamp-2">{product.description}</p>
                </div>
                <span className="shrink-0 text-lg font-semibold text-white">${product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
