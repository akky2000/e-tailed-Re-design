
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, X, ChevronDown, ShoppingCart, Search, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import AuthModal from './AuthModal';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Business Associates', href: '/business-associate' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceItems = [
    { name: 'Certified Delivery Partner Program', href: '/services/certified-delivery-partner' },
    { name: 'Digital Visiting Card', href: '/services/digital-visiting-card' },
    { name: 'Financial Consultant', href: '/services/financial-consultant' },
    { name: 'Travel Agent', href: '/services/travel-agent' },
    { name: 'Tax Consultant', href: '/services/tax-consultant' },
    { name: 'Education Consultant', href: '/services/education-consultant' },
    { name: 'IT Consultant', href: '/services/it-consultant' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-800 hidden sm:block">E-tailed India</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group text-sm xl:text-base hover:scale-105"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group text-sm xl:text-base hover:scale-105"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group flex items-center space-x-1 text-sm xl:text-base hover:scale-105">
                  <span>Our Services</span>
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 bg-white border shadow-xl rounded-lg">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link
                        to={service.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm hover:scale-105"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Search, Cart, and User Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <Input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-40 sm:w-48 h-9 text-sm"
                      autoFocus
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsSearchOpen(false)}
                      className="ml-1 hover:bg-gray-100 transition-colors hover:scale-105"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="hidden sm:flex hover:bg-gray-100 transition-colors hover:scale-105"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative hidden sm:flex hover:bg-gray-100 transition-colors hover:scale-105">
                <ShoppingCart className="w-4 h-4" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>

              {/* User Authentication */}
              <div className="hidden md:block">
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {user?.firstName}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                      <div className="px-2 py-1.5 text-sm">
                        <div className="font-medium">{user?.firstName} {user?.lastName}</div>
                        <div className="text-gray-500">{user?.email}</div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        My Orders
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-3 mt-4 px-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="flex items-center space-x-2 sm:hidden">
                  <Input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 h-9 text-sm"
                  />
                  <Button type="submit" size="sm" className="hover:bg-blue-600 transition-colors hover:scale-105">
                    <Search className="w-4 h-4" />
                  </Button>
                </form>

                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                
                {/* Mobile Services */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-gray-900 font-semibold">Our Services</span>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors pl-4 py-1 text-sm hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Cart */}
                <Button variant="outline" className="relative justify-start sm:hidden hover:bg-gray-50 transition-colors hover:scale-105">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart
                  {cartItems > 0 && (
                    <span className="ml-auto bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </Button>
                
                {/* Mobile Auth */}
                {isAuthenticated ? (
                  <>
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-sm text-gray-600 mb-2">
                        Welcome, {user?.firstName}!
                      </div>
                      <Button variant="outline" className="w-full justify-start mb-2 hover:scale-105">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleLogout}
                        className="w-full justify-start hover:scale-105"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button 
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 w-full hover:scale-105"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Header;
