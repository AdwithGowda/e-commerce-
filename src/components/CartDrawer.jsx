import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-2xl border-l border-gray-200 dark:border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase flex items-center gap-2">
                <ShoppingBag size={20} />
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-gray-100 dark:bg-white/5 rounded-full"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} className="opacity-50" />
                  <p className="text-sm font-medium uppercase tracking-widest">Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    {/* Item Image */}
                    <div className="w-20 h-24 bg-gray-100 dark:bg-black rounded-lg overflow-hidden border border-gray-200 dark:border-white/5 flex-shrink-0">
                      <img
                        src={item.primaryImage}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-white/5 rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            <Minus size={14} strokeWidth={2} />
                          </button>
                          <span className="text-sm font-medium text-gray-900 dark:text-white w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            <Plus size={14} strokeWidth={2} />
                          </button>
                        </div>
                        
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-gray-50 dark:bg-black/50 border-t border-gray-200 dark:border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">₹{cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-xl">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
