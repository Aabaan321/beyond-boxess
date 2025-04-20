import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Star, Truck, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import CategoryCard from '../components/ui/CategoryCard';
import { getFeaturedProducts } from '../data/products';
import categories from '../data/categories';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const highlightedCategories = categories.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-amber-900 to-amber-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5693016/pexels-photo-5693016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Elegant gift hamper" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-700/80"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Gifts that go <span className="text-amber-300">Beyond</span> the Ordinary
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              Exquisite gift hampers crafted with care for every occasion. Discover our premium collections and make your celebrations truly special.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-amber-900 font-bold"
                onClick={() => window.location.href = '/categories'}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/custom'}
              >
                Create Custom Hamper
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight size={24} className="transform rotate-90" />
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900">Shop by Category</h2>
            <Link 
              to="/categories" 
              className="flex items-center text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span className="mr-2">View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900">Featured Products</h2>
            <Link 
              to="/featured" 
              className="flex items-center text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span className="mr-2">View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
            Why Choose Beyond Boxes?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We source only the finest products to create exquisite hampers that delight and impress.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Thoughtfully Curated</h3>
              <p className="text-gray-600">
                Each hamper is carefully designed with complementary items that create a perfect gift experience.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Customizable Options</h3>
              <p className="text-gray-600">
                Create your perfect gift with our custom hamper service, tailored to your preferences.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">
                We ensure your gifts arrive on time and in perfect condition for every special occasion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The birthday hamper I ordered was absolutely stunning. The presentation was beautiful and the products inside were of exceptional quality. Will definitely order again!"
              </p>
              <p className="font-medium text-amber-900">— Sarah T.</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Our corporate clients were thrilled with the gift hampers. The ordering process was smooth, and the team at Beyond Boxes was incredibly helpful with our custom requirements."
              </p>
              <p className="font-medium text-amber-900">— Michael R., Business Development</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The wellness hamper was the perfect gift for my friend who needed some self-care time. The products were high quality and beautifully packaged. Excellent service!"
              </p>
              <p className="font-medium text-amber-900">— Emily L.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to gift something special?
          </h2>
          <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
            Browse our collections or create your own custom hamper. Perfect for any occasion and recipient.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-100"
              onClick={() => window.location.href = '/categories'}
            >
              Shop Collections
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/custom'}
            >
              Create Custom Hamper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;