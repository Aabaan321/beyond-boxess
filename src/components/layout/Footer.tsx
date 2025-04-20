import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white">
              Beyond Boxes
            </Link>
            <p className="mt-4 text-amber-200">
              Exquisite gift hampers for every occasion. Our premium selections go beyond the ordinary to create memorable moments.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-amber-200 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-amber-200 hover:text-white transition-colors">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-amber-200 hover:text-white transition-colors">
                  Custom Hampers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/birthday" className="text-amber-200 hover:text-white transition-colors">
                  Birthday
                </Link>
              </li>
              <li>
                <Link to="/category/anniversary" className="text-amber-200 hover:text-white transition-colors">
                  Anniversary
                </Link>
              </li>
              <li>
                <Link to="/category/corporate" className="text-amber-200 hover:text-white transition-colors">
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="/category/festive" className="text-amber-200 hover:text-white transition-colors">
                  Festive
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-amber-200 mb-2">Email: info@beyondboxes.com</p>
            <p className="text-amber-200 mb-4">Phone: +1 (234) 567-8901</p>
            
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} Beyond Boxes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;