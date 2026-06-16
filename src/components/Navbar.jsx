import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { useCart } from '../contexts/CartContext';
import agw2 from '../assets/agw2.png';
import agb2 from '../assets/agb2.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { cartCount, toggleCart } = useCart();
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/#collections' },
    { label: 'Journal', to: '/#journal' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300">
      <div className="glass-nav rounded-full px-6 md:px-10 h-16 md:h-20 flex items-center justify-between border border-border-subtle shadow-2xl">
        
        {/* Left Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.to}
              className="text-sm font-medium tracking-wide text-text-muted hover:text-text-main transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-text-main transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
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
          <button className="text-text-muted hover:text-text-main transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-text-muted hover:text-text-main transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
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
            className="md:hidden text-text-muted hover:text-text-main transition-colors ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

      </div>

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
