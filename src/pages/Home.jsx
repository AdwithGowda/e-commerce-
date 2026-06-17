import Hero from '../components/Hero';
import InfiniteMarquee from '../components/InfiniteMarquee';
import CategoryShowcase from '../components/CategoryShowcase';
import ShopByCategory from '../components/ShopByCategory';
import ProductGrid from '../components/ProductGrid';
import JournalSection from '../components/JournalSection';
import FooterAnimation from '../components/FooterAnimation';

export default function Home() {
  return (
    <main>
      <Hero />
      <InfiniteMarquee />
      <CategoryShowcase />
      <ShopByCategory />
      <ProductGrid limit={6} title="Latest Drop" />
      <JournalSection />
      
      <FooterAnimation />
      {/* Footer Placeholder */}
      <footer className="py-12 border-t border-border-subtle text-center text-text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} AG Fashion. Defining Time & Style.</p>
      </footer>
    </main>
  );
}
