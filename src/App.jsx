import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import CartDrawer from './components/CartDrawer';
import ProfileSection from './components/ProfileSection';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  
  return null;
}

import { ThemeProvider } from './components/ThemeProvider';
import IntroSplash from './components/IntroSplash';

function App() {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>
          <IntroSplash />
          <Router>
            <ScrollToTop />
            <Navbar />
            <CartDrawer />
            <div className="min-h-screen font-body selection:bg-accent selection:text-white">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/profile" element={<ProfileSection />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;
