import React from 'react';
import { Gift, Award, UserCheck, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-16 bg-amber-800 text-white mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6205893/pexels-photo-6205893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Gift hamper creation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/80"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Beyond Boxes
          </h1>
          <p className="max-w-2xl mx-auto text-amber-100 text-lg">
            Crafting extraordinary gift experiences that create lasting memories.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Beyond Boxes was founded in 2018 with a simple yet powerful vision: to transform gift-giving into an extraordinary experience. We believed that the perfect gift goes beyond the physical items—it creates a moment of joy, surprise, and connection.
            </p>
            <p>
              What started as a small home-based business has grown into a beloved brand known for its attention to detail, premium quality, and exceptional customer service. Our team of gift curators brings creativity and passion to every hamper we create.
            </p>
            <p>
              We carefully source products from both local artisans and renowned brands, ensuring that each item meets our high standards. Every hamper is thoughtfully designed to create a cohesive and delightful gift experience.
            </p>
            <p>
              Today, we continue to innovate and expand our collections, but our core mission remains the same: to help you celebrate life's special moments with gifts that go beyond the ordinary.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="bg-amber-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring each gift exceeds expectations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Craftsmanship</h3>
              <p className="text-gray-600">
                Every hamper is assembled with meticulous attention to detail and artistic presentation.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Personalization</h3>
              <p className="text-gray-600">
                We believe in creating gifts that reflect the uniqueness of both giver and recipient.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-amber-700" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new products, themes, and concepts to keep our offerings fresh and exciting.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-amber-200 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-amber-900">Sarah Johnson</h3>
            <p className="text-amber-700">Founder & Creative Director</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-amber-200 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Michael Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-amber-900">Michael Chen</h3>
            <p className="text-amber-700">Product Curator</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-amber-200 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Emma Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-amber-900">Emma Rodriguez</h3>
            <p className="text-amber-700">Customer Experience Manager</p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-amber-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Experience the Beyond Boxes Difference
          </h2>
          <p className="max-w-2xl mx-auto text-amber-100 mb-8">
            Browse our collections or create your custom hamper today, and discover why our customers keep coming back.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-amber-800 hover:bg-amber-100"
            onClick={() => window.location.href = '/categories'}
          >
            Shop Our Collections
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;