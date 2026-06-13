import ProductGrid from '../components/ProductGrid';
import data from '../data/data.json';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Shop() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');
  const normalizedCategory = categoryFilter?.toLowerCase();
  const { products, categories } = data;

  const filteredProducts = normalizedCategory
    ? products.filter((product) => product.category.toLowerCase() === normalizedCategory)
    : products;

  const activeCategory = categories.find((category) => category.id === normalizedCategory);
  const title = activeCategory ? `${activeCategory.name} Collection` : 'All Products';
  const heroImage = activeCategory?.image || products[4]?.primaryImage;

  return (
    <main className="min-h-screen bg-primary">
      <section className="relative isolate min-h-[62vh] overflow-hidden px-6 pt-32 pb-16">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,12,16,0.96)_0%,rgba(11,12,16,0.72)_45%,rgba(11,12,16,0.35)_100%)]" />
        <div className="absolute left-0 top-20 -z-10 h-[34rem] w-[48rem] bg-[radial-gradient(circle,rgba(0,0,0,0.82)_0%,rgba(11,12,16,0.58)_42%,transparent_72%)] blur-sm" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-primary to-transparent" />
        <div className="absolute bottom-16 right-6 top-32 hidden items-center xl:flex">
          <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-white/28 [writing-mode:vertical-rl]">
            Est. 2026 // Spring-Summer Edit
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.62fr]"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              AG Private Edit
            </p>
            <h1 className="text-5xl font-bold uppercase leading-[0.98] tracking-tight md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 tracking-normal text-white/72 md:text-lg">
              Precision-cut essentials, sculptural accessories, and after-dark pieces selected for a quieter kind of luxury.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-8 lg:items-end">
            <div className="grid w-full grid-cols-3 gap-5 border-y border-white/10 py-6 text-left lg:max-w-md lg:text-right">
              <div>
                <p className="text-2xl font-heading font-bold">{filteredProducts.length}</p>
                <p className="text-xs uppercase tracking-widest text-white/45">Pieces</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-bold">48h</p>
                <p className="text-xs uppercase tracking-widest text-white/45">Dispatch</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-bold">14d</p>
                <p className="text-xs uppercase tracking-widest text-white/45">Returns</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  !normalizedCategory
                    ? 'border-white/35 bg-white/12 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.35)]'
                    : 'border-white/15 bg-white/5 text-white/70 hover:border-white/40 hover:text-white'
                }`}
              >
                All
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.link}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    normalizedCategory === category.id
                      ? 'border-white/35 bg-white/12 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.35)]'
                      : 'border-white/15 bg-white/5 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <ProductGrid
        title={title}
        subtitle="Curated from the AG atelier: elevated materials, strong silhouettes, and everyday pieces with collector-level presence."
        products={filteredProducts}
        showHeader={false}
      />
    </main>
  );
}
