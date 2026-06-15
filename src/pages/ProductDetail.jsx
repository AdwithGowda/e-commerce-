import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';
const { products } = data;
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [activeImage, setActiveImage] = useState(product?.primaryImage);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowError(true);
    } else {
      setShowError(false);
      // Proceed to cart
    }
  };

  const sizes = ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'];

  if (!product) {
    return <div className="pt-32 text-center text-xl">Product not found</div>;
  }

  // To support switching thumbnails, we gather the available images and deduplicate them
  const images = [...new Set([product.primaryImage, product.secondaryImage].filter(Boolean))];

  return (
    <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto min-h-screen">
      <Link to="/shop" className="inline-flex items-center gap-2 text-text-muted hover:text-text-main mt-6 mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Images */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4 h-[60vh] lg:h-[80vh]">
          


          {/* Main Image */}
          <motion.div 
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-bg-surface rounded-none overflow-hidden order-1 md:order-2"
          >
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-1 text-text-main">{product.name}</h1>
            <p className="text-text-muted font-medium mb-4 uppercase tracking-wider text-sm">{product.category}</p>

            <p className="text-text-muted leading-relaxed text-sm mb-8">
              {product.description}
            </p>

            <div className="mb-8 text-text-main">
              <p className="text-xl font-bold mb-1">₹{product.price}.00</p>
              <p className="text-text-muted text-sm leading-relaxed">
                incl. of taxes<br/>
                (Also includes all applicable duties)
              </p>
            </div>
            
            {/* Size Selector */}
            <div className="mb-8 text-text-main">
              <div className="flex justify-between items-center mb-4 text-sm font-bold">
                <span>Select Size</span>
                <button className="text-text-muted hover:text-text-main transition-colors underline decoration-border-subtle underline-offset-4">Size Guide</button>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setShowError(false);
                    }}
                    className={`py-3 rounded-none border text-sm font-bold transition-all duration-200 ${
                      selectedSize === size 
                        ? 'border-text-main bg-text-main text-bg-primary' 
                        : 'border-border-subtle text-text-main hover:border-text-main'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              <p className={`text-amber-600/90 text-sm mt-3 font-medium transition-opacity duration-300 ${showError && !selectedSize ? 'opacity-100' : 'opacity-0'}`}>
                Size selection is required
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mb-10">
              <button 
                className="w-full bg-text-main text-bg-primary font-bold uppercase tracking-[0.2em] py-4 rounded-none flex justify-center items-center hover:opacity-90 transition-opacity"
              >
                BUY NOW
              </button>
              <div className="grid grid-cols-2 gap-4 w-full">
                <button 
                  onClick={handleAddToCart}
                  className="w-full border border-border-subtle text-text-main font-bold uppercase tracking-[0.1em] py-4 rounded-none flex justify-center items-center hover:border-text-main transition-colors text-xs sm:text-sm"
                >
                  ADD TO CART
                </button>
                <button className="w-full border border-border-subtle text-text-main font-bold uppercase tracking-[0.1em] py-4 rounded-none flex justify-center items-center hover:border-text-main transition-colors text-xs sm:text-sm">
                  WISHLIST
                </button>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </main>
  );
}
