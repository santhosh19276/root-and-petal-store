
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 font-medium mb-4">THE PURE HERBAL FACTORY by</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              An Army of Hustling Homemakers
            </h1>
            <p className="text-xl text-gray-600 mb-2">100% Plant Based</p>
            <p className="text-2xl text-yellow-500 font-bold mb-8">Raw Herbal Formulation</p>
            <Link to="/shop">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg">
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <img
                  src="/lovable-uploads/57e68a08-6999-433f-950e-ca85cdf08f07.png"
                  alt="Anti-Aging Herb"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-green-600">The Anti-Aging Herb</h3>
                <p className="text-sm text-gray-600">Hibiscus-Rosa-Sinensis</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <img
                  src="/lovable-uploads/95db5c3f-a58e-41d5-8d1d-02500634de3e.png"
                  alt="Facial Oils"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-green-600">Facial Oils</h3>
                <p className="text-sm text-gray-600">Shop Now - 35ml</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <img
                  src="/lovable-uploads/80a6ff04-9dd4-49b7-a16a-9efaf86f9562.png"
                  alt="Curly Mask"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-green-600">Curly Mask</h3>
                <p className="text-sm text-gray-600">once a week</p>
                <p className="text-xs text-gray-500">FOR GORGEOUS CURLS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
