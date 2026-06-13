import Hero from '../components/Hero';
import InfiniteMarquee from '../components/InfiniteMarquee';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductGrid from '../components/ProductGrid';
import JournalSection from '../components/JournalSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <InfiniteMarquee />
      <CategoryShowcase />
      <ProductGrid limit={6} title="Latest Drop" />
      <JournalSection />
      
      {/* Footer Placeholder */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AG Fashion. Defining Time & Style.</p>
      </footer>
    </main>
  );
}
