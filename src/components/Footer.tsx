
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Truck, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Curated Products</h3>
                <p className="text-sm text-gray-600">Growing herbs on our farm enables us to process them freshly without losing their efficacy.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Handmade</h3>
                <p className="text-sm text-gray-600">Made with precision by a 52-member homemakers team.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">100% Natural</h3>
                <p className="text-sm text-gray-600">Zero synthetic chemicals, Zero preservatives. Only THE RAW herbs.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-600">Free shipping in India on orders above ₹ 499.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🌿</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Herbal Store</h3>
                  <p className="text-sm text-gray-400">THE PURE HERBAL FACTORY</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your trusted partner for 100% natural herbal products crafted with love by homemakers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/shop?category=face-care" className="hover:text-white">Face Care</Link></li>
                <li><Link to="/shop?category=hair-care" className="hover:text-white">Hair Care</Link></li>
                <li><Link to="/shop?category=facial-oils" className="hover:text-white">Facial Oils</Link></li>
                <li><Link to="/shop?category=hydrosols" className="hover:text-white">Hydrosols</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 Toll-Free: (94296 93909)</li>
                <li>✉️ info@herbalstore.com</li>
                <li>📍 123 Herbal Street, Natural City</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Herbal Store. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
