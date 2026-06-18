import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { useCart } from '../contexts/CartContext';
import agw2 from '../assets/agw2.png';
import agb2 from '../assets/agb2.png';
import data from '../data/data.json';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/#collections' },
    { label: 'Journal', to: '/#journal' },
  ];

  const searchResults = searchQuery 
    ? data.products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300">
      <div className="glass-nav rounded-full px-6 md:px-10 h-16 md:h-20 flex items-center justify-between border border-border-subtle shadow-2xl">
        
        {/* Left Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname + location.hash === item.to || (item.to !== '/' && location.pathname.startsWith(item.to) && !item.to.includes('#'));
            return (
              <Link 
                key={item.label}
                to={item.to}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-text-main transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Logo */}
        <Link to="/" className="relative h-7 sm:h-8 w-14 sm:w-16 flex items-center justify-center transition-transform hover:scale-105">
          <img
            src={agb2}
            alt="AG Logo"
            className="absolute inset-0 h-full w-full object-contain dark:hidden"
          />
          <img
            src={agw2}
            alt="AG Logo"
            className="absolute inset-0 h-full w-full object-contain hidden dark:block"
          />
        </Link>

        {/* Right Icons & Mobile Controls */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          <button onClick={toggleTheme} className="hidden md:block text-text-muted hover:text-text-main transition-colors">
            {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button 
            className={`transition-colors ${isSearchOpen ? 'text-text-main' : 'text-text-muted hover:text-text-main'}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link 
            to="/profile" 
            className={`transition-colors ${location.pathname.startsWith('/profile') ? 'text-text-main' : 'text-text-muted hover:text-text-main'}`}
          >
            <User size={20} strokeWidth={1.5} />
          </Link>
          <button 
            className="text-text-muted hover:text-text-main transition-colors relative"
            onClick={toggleCart}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button 
            className={`md:hidden transition-colors ml-1 ${isMobileMenuOpen ? 'text-text-main' : 'text-text-muted hover:text-text-main'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-4 glass-nav rounded-3xl border border-border-subtle shadow-2xl overflow-hidden p-6"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search products, collections..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-primary text-text-main placeholder:text-text-muted border border-border-subtle rounded-2xl py-4 pl-14 pr-12 focus:outline-none focus:border-text-main transition-colors shadow-inner"
                autoFocus
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                >
                  <X size={18} strokeWidth={2} />
                </button>
              )}
            </div>
            
            {/* Quick Links / Suggestions when empty */}
            {!searchQuery && (
              <div className="mt-6">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4 px-1">Popular Categories</p>
                <div className="flex flex-wrap gap-2.5">
                  {['Clothing', 'Watches', 'Bags', 'Shoes'].map(term => (
                    <button 
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-5 py-2.5 rounded-full bg-bg-surface border border-border-subtle text-sm text-text-muted hover:text-text-main hover:border-text-main hover:shadow-sm transition-all duration-300"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {searchQuery && searchResults.length > 0 && (
              <div className="mt-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex items-center justify-between mb-6 px-1">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} for "{searchQuery}"
                  </p>
                  <Link to={`/shop?search=${searchQuery}`} onClick={() => setIsSearchOpen(false)} className="text-xs font-semibold text-text-main hover:underline">
                    View All
                  </Link>
                </div>
                
                <div className="flex flex-col gap-2">
                  {searchResults.slice(0, 8).map(product => (
                    <Link 
                      key={product.id} 
                      to={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-bg-primary cursor-pointer transition-all border border-transparent hover:border-border-subtle group"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-bg-primary border border-border-subtle rounded-xl overflow-hidden flex-shrink-0 relative">
                        <img 
                          src={product.primaryImage} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-text-main transition-colors truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-text-muted mt-0.5">{product.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {searchQuery && searchResults.length === 0 && (
              <div className="mt-12 text-center pb-8">
                <div className="w-16 h-16 bg-bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5 border border-border-subtle shadow-sm">
                  <Search className="w-6 h-6 text-text-muted" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-main mb-2">No results found</h3>
                <p className="text-text-muted font-light max-w-sm mx-auto">We couldn't find anything matching "{searchQuery}". Try different keywords or check out our popular categories.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden glass-nav rounded-3xl border border-border-subtle shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  to={item.to}
                  className="text-lg font-medium text-text-muted hover:text-text-main"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-3 text-lg font-medium text-text-muted hover:text-text-main mt-2 pt-6 border-t border-border-subtle"
              >
                {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
