import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header 
        className={`fixed w-full z-30 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amber-800">
            Beyond Boxes
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link to="/categories" className="font-medium hover:text-amber-600 transition-colors">
              Categories
            </Link>
            <Link to="/featured" className="font-medium hover:text-amber-600 transition-colors">
              Featured
            </Link>
            <Link to="/about" className="font-medium hover:text-amber-600 transition-colors">
              About Us
            </Link>
          </nav>
          
          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 hover:bg-amber-50 rounded-full transition-colors">
              <Search size={20} />
            </Link>
            <button 
              className="p-2 hover:bg-amber-50 rounded-full transition-colors relative"
              onClick={toggleCart}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-amber-50 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg absolute w-full left-0 top-full">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <Link to="/" className="py-2 font-medium hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link to="/categories" className="py-2 font-medium hover:text-amber-600 transition-colors">
                Categories
              </Link>
              <Link to="/featured" className="py-2 font-medium hover:text-amber-600 transition-colors">
                Featured
              </Link>
              <Link to="/about" className="py-2 font-medium hover:text-amber-600 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;