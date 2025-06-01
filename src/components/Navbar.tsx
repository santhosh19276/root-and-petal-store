
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>📞 Toll-Free (94296 93909)</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span>Hello, {user?.name}</span>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login" className="hover:text-green-600">
                Sign In or Register
              </Link>
            )}
            <Heart className="h-4 w-4 cursor-pointer hover:text-red-500" />
            <Link to="/cart" className="relative hover:text-green-600">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌿</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-600">Herbal Store</h1>
              <p className="text-xs text-gray-500">THE PURE HERBAL FACTORY</p>
            </div>
          </Link>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-6 py-3 border-t">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium">
            All Categories
          </div>
          <Link to="/shop" className="text-green-600 hover:text-green-700 font-medium">
            Shop
          </Link>
          <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">
            Contact
          </Link>
          <Link to="/about" className="text-green-600 hover:text-green-700 font-medium">
            About Us
          </Link>
          <Link to="/blog" className="text-green-600 hover:text-green-700 font-medium">
            Blog
          </Link>
          {user?.isAdmin && (
            <Link to="/admin" className="text-green-600 hover:text-green-700 font-medium">
              Admin
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
