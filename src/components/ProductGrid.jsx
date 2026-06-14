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
    <section className="px-6 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-12 flex flex-col gap-4 border-t border-border-subtle pt-8 md:flex-row md:items-end md:justify-between">
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

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-9 sm:gap-y-16 lg:grid-cols-3 lg:gap-y-20">
          {displayProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: 'easeOut' }}
              className="group relative flex flex-col h-full"
            >
              {/* --- DESKTOP VIEW --- */}
              <div className="hidden sm:flex flex-col h-full">
                <Link
                  to={`/product/${product.id}`}
                  className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-lg border border-border-subtle bg-bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:border-text-muted"
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
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition group-hover:bg-text-main group-hover:text-bg-primary">
                    <ArrowUpRight size={17} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-text-main px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-bg-primary transition hover:opacity-90">
                      <ShoppingBag size={16} /> Quick Add
                    </button>
                  </div>
                </Link>

                <div className="flex items-start justify-between gap-4 flex-1">
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">
                      {product.category}
                    </p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-heading font-bold leading-tight transition-colors hover:text-text-muted truncate text-text-main">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="mt-2 text-sm text-text-muted line-clamp-2">{product.description}</p>
                  </div>
                  <span className="shrink-0 text-lg font-semibold text-text-main">${product.price}</span>
                </div>
              </div>

              {/* --- MOBILE VIEW --- */}
              <Link
                to={`/product/${product.id}`}
                className="flex sm:hidden h-[180px] w-full flex-row overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:border-white/5 dark:bg-[#111] dark:shadow-none"
              >
                <div className="relative w-[130px] shrink-0 bg-[#F8F8F8] dark:bg-black">
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-0 top-0 rounded-br-[14px] bg-[#222] px-2.5 py-1 text-[9px] font-bold tracking-wide text-white dark:bg-[#333]">
                    {product.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-3">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-bold leading-tight text-gray-900 dark:text-white line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1 rounded bg-[#FFF7E6] px-1.5 py-0.5 text-[10px] font-bold text-[#F59E0B] dark:bg-yellow-900/20">
                      ★ 5.0
                    </div>
                  </div>

                  <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="mb-0.5 text-[8px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          Price
                        </p>
                        <p className="font-heading text-sm font-extrabold tracking-tight text-gray-900 dark:text-white">
                          ${product.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <button className="rounded-lg bg-[#F6F6F3] px-3 py-1.5 text-[10px] font-bold text-gray-800 dark:bg-[#222] dark:text-gray-200">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
