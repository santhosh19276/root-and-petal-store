
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { Star } from 'lucide-react';

const Index = () => {
  const featuredProducts = products.slice(0, 8);
  const bestSellers = products.filter(p => p.rating && p.rating >= 4.5).slice(0, 4);
  const onSaleProducts = products.filter(p => p.discount).slice(0, 4);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Customer Testimonials */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Here's what our happy customers are saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Customer"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Delia Fernandes</h4>
                    <p className="text-sm text-green-200">Instagram</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm">
                  "Hello Akka, I have a small yet interesting story... We have been using your products for a long time... the products are so good! Just by my kids, Her hair has become silky and smooth...she was scared to share this pic with u... Thanks to your hair oils"
                </p>
              </div>
              
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Customer"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Anisha Singh</h4>
                    <p className="text-sm text-green-200">Instagram</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm">
                  "Hey, vaseegrah CM mask work blssomed to my hair. This mask does such a great thing so that not even an imperfection can be found. I can't believe how beautiful my roots look, Thanks for being part of my journey."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Best Seller</h3>
              <div className="space-y-4">
                {bestSellers.map(product => (
                  <div key={product.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-medium text-sm">{product.name}</h4>
                      <p className="text-green-600 font-semibold">₹{product.price}.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Top Rated</h3>
              <div className="space-y-4">
                {bestSellers.map(product => (
                  <div key={product.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-medium text-sm">{product.name}</h4>
                      <p className="text-green-600 font-semibold">₹{product.price}.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">On Sale Products</h3>
              <div className="space-y-4">
                {onSaleProducts.map(product => (
                  <div key={product.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-medium text-sm">{product.name}</h4>
                      <p className="text-green-600 font-semibold">₹{product.price}.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid products={featuredProducts} title="Featured Products" />
    </div>
  );
};

export default Index;
