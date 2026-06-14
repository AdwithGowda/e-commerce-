import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navItems = [
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
        <Link to="/" className="text-3xl font-heading font-bold tracking-tighter text-text-main">
          AG
        </Link>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleTheme} className="text-text-muted hover:text-text-main transition-colors">
            {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button className="text-text-muted hover:text-text-main transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-text-muted hover:text-text-main transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="text-text-muted hover:text-text-main transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-highlight text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-muted hover:text-text-main flex items-center gap-4"
        >
          <div onClick={(e) => { e.preventDefault(); toggleTheme(); }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </div>
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
