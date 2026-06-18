import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { 
  User, 
  Settings, 
  ShoppingBag, 
  MapPin, 
  Heart,
  CreditCard,
  LogOut, 
  Camera,
  ChevronRight,
  ShieldCheck,
  Package,
  X
} from 'lucide-react';

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const menuItems = [
    { id: 'profile', icon: <User className="w-5 h-5" />, label: 'Profile Details', mobileLabel: 'Profile' },
    { id: 'orders', icon: <ShoppingBag className="w-5 h-5" />, label: 'My Orders', mobileLabel: 'Orders' },
    { id: 'wishlist', icon: <Heart className="w-5 h-5" />, label: 'Wishlist', mobileLabel: 'Wishlist' },
    { id: 'address', icon: <MapPin className="w-5 h-5" />, label: 'Saved Addresses', mobileLabel: 'Saved' },
    { id: 'payment', icon: <CreditCard className="w-5 h-5" />, label: 'Payment Methods', mobileLabel: 'Payment' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Account Settings', mobileLabel: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-32 lg:pb-16 px-4 sm:px-6 lg:px-8 font-body text-text-main transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-heading font-bold tracking-tight text-text-main">My Account</h1>
            <p className="text-text-muted mt-2 text-[15px] font-light">Manage your orders, addresses and profile details.</p>
          </div>
          
          {/* Mobile Header Actions (Top Right) */}
          <div className="lg:hidden flex items-center gap-1 sm:gap-2">
            <button 
              onClick={() => setActiveTab('settings')}
              className="flex items-center justify-center p-2 sm:p-3 rounded-full border border-transparent text-text-muted hover:text-text-main transition-transform active:scale-95 hover:scale-110"
            >
              <Settings className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center p-2 sm:p-3 rounded-full border border-transparent text-text-muted hover:text-text-main transition-transform active:scale-95 hover:scale-110">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:h-[calc(100vh-230px)] lg:min-h-[600px]">
          
          {/* Sidebar Navigation (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-80 flex-shrink-0 flex-col">
            <div className="bg-bg-surface rounded-2xl shadow-sm border border-border-subtle overflow-hidden h-full flex flex-col transition-colors duration-300">
              
              {/* User Mini Profile */}
              <div className="p-6 border-b border-border-subtle flex items-center gap-4">
                <div className="relative group cursor-pointer">
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center text-text-muted group-hover:scale-110 transition-transform duration-300">
                    <User size={36} strokeWidth={1} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-text-main font-heading text-lg">Parves Ahamad</h3>
                  <p className="text-sm text-text-muted font-light">parves@example.com</p>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="p-4 flex flex-col gap-1.5 flex-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group overflow-hidden origin-left ${
                      activeTab === item.id 
                        ? 'text-text-main font-semibold scale-105' 
                        : 'text-text-muted hover:text-text-main hover:scale-[1.03]'
                    }`}
                  >
                    <div className="relative flex items-center gap-3.5 z-10">
                      <div className="transition-transform group-hover:scale-110 duration-300">
                        {item.icon}
                      </div>
                      <span className="font-medium text-[15px]">
                        {item.label}
                      </span>
                    </div>
                    {activeTab !== item.id && <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />}
                  </button>
                ))}
                
                <div className="mt-auto"></div>
                <div className="h-px bg-border-subtle my-4 mx-2"></div>
                
                <button className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-text-muted hover:text-text-main transition-all duration-300 font-medium text-[15px] origin-left hover:scale-[1.03] group">
                  <div className="transition-transform group-hover:scale-110 duration-300">
                    <LogOut className="w-5 h-5" />
                  </div>
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full min-w-0">
            <div className="bg-bg-surface rounded-2xl shadow-sm border border-border-subtle overflow-hidden h-full transition-colors duration-300">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full overflow-y-auto custom-scrollbar"
                >
                  {activeTab === 'profile' ? (
                    <div className="p-6 md:p-10">
                      
                      {/* Avatar & Verification */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-8 border-b border-border-subtle">
                        <div className="flex items-center gap-6">
                          <div className="relative group cursor-pointer">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-text-muted group-hover:scale-110 transition-transform duration-300">
                              <User size={64} strokeWidth={1} />
                            </div>
                            <button className="absolute bottom-0 right-0 bg-text-main text-bg-surface p-2 rounded-full shadow-lg hover:scale-110 transition-all border-2 border-bg-surface opacity-0 group-hover:opacity-100">
                              <Camera className="w-4 h-4" />
                            </button>
                          </div>
                          <div>
                            <h2 className="text-xl md:text-2xl font-heading font-bold mb-1 text-text-main">Parves Ahamad</h2>
                            <p className="text-sm text-text-muted leading-relaxed">parves@example.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-text-main bg-bg-primary border border-border-subtle px-4 py-2 rounded-full h-fit shadow-sm self-start sm:self-auto cursor-default hover:scale-105 transition-transform duration-300">
                          <ShieldCheck className="w-5 h-5" />
                          <span className="text-sm font-semibold tracking-wide">Verified Customer</span>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="max-w-3xl">
                        <h2 className="text-xl font-heading font-bold mb-6 text-text-main">Personal Details</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                          <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wide">First Name</label>
                            <input 
                              type="text" 
                              defaultValue="Parves"
                              className="w-full px-5 py-3.5 rounded-xl border border-border-subtle focus:border-text-main outline-none transition-all text-text-main bg-bg-primary focus:bg-bg-surface shadow-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wide">Last Name</label>
                            <input 
                              type="text" 
                              defaultValue="Ahamad"
                              className="w-full px-5 py-3.5 rounded-xl border border-border-subtle focus:border-text-main outline-none transition-all text-text-main bg-bg-primary focus:bg-bg-surface shadow-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wide">Email Address</label>
                            <input 
                              type="email" 
                              defaultValue="parves@example.com"
                              className="w-full px-5 py-3.5 rounded-xl border border-border-subtle focus:border-text-main outline-none transition-all text-text-main bg-bg-primary focus:bg-bg-surface shadow-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wide">Phone Number</label>
                            <input 
                              type="tel" 
                              defaultValue="+1 (555) 123-4567"
                              className="w-full px-5 py-3.5 rounded-xl border border-border-subtle focus:border-text-main outline-none transition-all text-text-main bg-bg-primary focus:bg-bg-surface shadow-sm"
                            />
                          </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
                          <p className="text-sm text-text-muted font-light order-2 sm:order-1">
                            Last updated: Just now
                          </p>
                          <div className="flex gap-4 w-full sm:w-auto order-1 sm:order-2">
                            <button className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-medium text-text-main bg-bg-primary border border-border-subtle hover:bg-border-subtle hover:scale-105 transition-all duration-300">
                              Cancel
                            </button>
                            <button className="flex-1 sm:flex-none px-8 py-3.5 rounded-xl font-medium bg-text-main text-bg-surface hover:opacity-90 shadow-lg transition-all duration-300 active:scale-95 hover:scale-105">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : activeTab === 'wishlist' && wishlistItems.length > 0 ? (
                    <div className="p-6 md:p-10">
                      <h2 className="text-2xl font-heading font-bold mb-8 text-text-main">My Wishlist</h2>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                        {wishlistItems.map((product) => (
                          <div key={product.id} className="group relative flex flex-col h-full border border-border-subtle rounded-2xl overflow-hidden bg-bg-surface hover:border-text-muted transition-colors">
                            <Link to={`/product/${product.id}`} className="aspect-square relative overflow-hidden bg-bg-primary">
                              <img src={product.primaryImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </Link>
                            
                            <button 
                              onClick={(e) => { e.preventDefault(); removeFromWishlist(product.id); }}
                              className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-bg-surface/80 backdrop-blur rounded-full border border-border-subtle text-text-muted hover:text-red-500 hover:border-red-500 transition-colors"
                            >
                              <X className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>

                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-text-muted truncate mr-1">{product.category}</p>
                                <span className="text-xs sm:text-sm font-semibold text-text-main shrink-0">₹{product.price}</span>
                              </div>
                              <Link to={`/product/${product.id}`}>
                                <h3 className="text-xs sm:text-base font-medium text-text-main group-hover:text-text-muted transition-colors truncate mb-3 sm:mb-4">{product.name}</h3>
                              </Link>
                              <div className="mt-auto">
                                <button 
                                  onClick={() => addToCart(product)}
                                  className="w-full py-2 sm:py-2.5 bg-bg-primary border border-border-subtle rounded-xl text-[10px] sm:text-sm font-bold uppercase tracking-wider text-text-main hover:bg-text-main hover:text-bg-primary transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
                                >
                                  <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">Add to Cart</span><span className="sm:hidden">Add</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 md:p-10 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                      <div className="text-center group cursor-pointer">
                        <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 text-text-muted group-hover:scale-125 transition-transform duration-500">
                          {React.cloneElement(menuItems.find(i => i.id === activeTab)?.icon, { size: 64, strokeWidth: 1 })}
                        </div>
                        <h2 className="text-2xl font-heading font-bold mb-3 tracking-wide text-text-main group-hover:scale-105 transition-transform duration-300">{menuItems.find(i => i.id === activeTab)?.label}</h2>
                        <p className="text-text-muted font-light max-w-sm mx-auto leading-relaxed">
                          This section is currently empty. Start exploring the store to fill it up.
                        </p>
                        
                        <button 
                          className="mt-8 px-8 py-3.5 rounded-xl bg-text-main text-bg-surface hover:opacity-90 transition-all duration-300 font-medium shadow-md active:scale-95 group-hover:scale-105"
                        >
                          Go to Shop
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 bg-bg-surface/75 backdrop-blur-xl border border-border-subtle/50 px-6 py-3 rounded-full flex justify-between items-center z-50 shadow-2xl">
        {menuItems.filter(item => item.id !== 'settings').map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1.5 p-2 transition-all duration-300 ${
              activeTab === item.id ? 'text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            <div className={`transition-transform duration-300 ${activeTab === item.id ? 'scale-125 -translate-y-1' : 'scale-100 hover:scale-110'}`}>
              {item.icon}
            </div>
            <span className={`text-[10px] font-medium tracking-wide transition-all duration-300 ${activeTab === item.id ? 'opacity-100 font-bold' : 'opacity-70'}`}>
              {item.mobileLabel}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProfileSection;
