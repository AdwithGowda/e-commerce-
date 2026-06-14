import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import data from '../data/data.json';

const { products } = data;

const journalPosts = [
  {
    id: 'engineering-monolith',
    label: 'Atelier Notes',
    title: 'Engineering the Monolith Overcoat',
    excerpt: 'Balancing geometric proportion, structured wool, and a silhouette that reads architectural without feeling rigid.',
    image: products[1].primaryImage,
    readTime: '04 min read',
  },
  {
    id: 'material-index',
    label: 'Material Index',
    title: 'From Tourbillons to Matte Titanium',
    excerpt: 'A short study in precision horology, dark metals, and the quiet power of mechanical restraint.',
    image: products[4].secondaryImage,
    readTime: '06 min read',
  },
  {
    id: 'kinetic-study',
    label: 'Movement Study',
    title: 'Deconstructing the Aero-Knit Runner',
    excerpt: 'Breathability, carbon support, and the design language of footwear built for urban speed.',
    image: products[2].secondaryImage,
    readTime: '05 min read',
  },
];

export default function JournalSection() {
  const [featurePost, ...supportingPosts] = journalPosts;

  return (
    <section id="journal" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-text-muted">
              Journal
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-tight md:text-6xl text-text-main">
              Notes from <br />
              <span className="text-text-muted">the Atelier</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-text-muted md:text-right">
            Design philosophy, material studies, and field notes from the AG world.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="group relative min-h-[560px] overflow-hidden rounded-lg border border-border-subtle bg-bg-surface"
          >
            <img
              src={featurePost.image}
              alt={featurePost.title}
              className="absolute inset-0 h-full w-full object-cover opacity-78 grayscale-[15%] saturate-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-white/70">
                <span>{featurePost.label}</span>
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span>{featurePost.readTime}</span>
              </div>
              <h3 className="max-w-2xl text-2xl sm:text-4xl font-heading font-bold leading-none md:text-5xl lg:text-6xl text-white">
                {featurePost.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
                {featurePost.excerpt}
              </p>
              <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                Read Feature <ArrowRight size={15} />
              </button>
            </div>
          </motion.article>

          <div className="grid gap-6">
            {supportingPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
                className="group grid min-h-[260px] grid-cols-1 sm:grid-cols-[0.8fr_1fr] overflow-hidden rounded-lg border border-border-subtle bg-bg-surface transition hover:border-text-muted"
              >
                <div className="relative h-56 sm:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover opacity-72 grayscale-[18%] saturate-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                <div className="flex flex-col justify-between p-5 md:p-7">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                      <span>{post.label}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold leading-tight text-text-main">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                  <button className="mt-6 flex items-center gap-2 text-left text-xs font-bold uppercase tracking-[0.22em] text-text-muted transition group-hover:text-text-main">
                    Read Note <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
