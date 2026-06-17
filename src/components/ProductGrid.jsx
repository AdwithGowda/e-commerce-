import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import data from '../data/data.json';
const { products: allProducts } = data;

export default function ProductGrid({
  limit = null,
  title = 'New Arrivals',
  subtitle = 'Modern essentials selected for texture, proportion, and presence.',
  products = allProducts,
  showHeader = true,
}) {
  const { addToCart } = useCart();
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="px-6 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-12 flex flex-col gap-4 border-t border-border-subtle pt-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-text-muted">
                Latest Drop
              </p>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight md:text-5xl text-text-main">
                {title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-text-muted md:text-right">
              {subtitle}
            </p>
          </div>
        )}

        <div className="mb-8 flex items-center justify-between border-y border-border-subtle py-4 text-xs uppercase tracking-[0.25em] text-text-muted">
          <span>{displayProducts.length} products</span>
          <span>Limited seasonal edit</span>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-9 sm:gap-y-16 lg:grid-cols-3 lg:gap-y-20">
          {displayProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: 'easeOut' }}
              className="group relative flex flex-col h-full"
            >
              <div className="flex flex-col h-full">
                <Link
                  to={`/product/${product.id}`}
                  className="relative mb-3 sm:mb-5 aspect-[4/5] w-full overflow-hidden rounded-lg border border-border-subtle bg-bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:border-text-muted"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80" />
                  <div className="absolute left-2 top-2 sm:left-4 sm:top-4 rounded-full border border-white/20 bg-black/35 px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                    Atelier Pick
                  </div>
                  <div className="absolute right-2 top-2 sm:right-4 sm:top-4 flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition group-hover:bg-text-main group-hover:text-bg-primary">
                    <ArrowUpRight className="h-3 w-3 sm:h-[17px] sm:w-[17px]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 translate-y-3 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 hidden sm:block">
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-text-main px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-bg-primary transition hover:opacity-90"
                    >
                      <ShoppingBag size={16} /> Quick Add
                    </button>
                  </div>
                </Link>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 sm:mb-2 gap-2">
                    <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted truncate">
                      {product.category}
                    </p>
                    <span className="shrink-0 text-sm sm:text-lg font-semibold text-text-main">
                      ₹{product.price}
                    </span>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm sm:text-xl font-heading font-bold leading-tight transition-colors hover:text-text-muted truncate text-text-main">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-text-muted line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
