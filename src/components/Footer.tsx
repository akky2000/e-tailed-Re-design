
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: "E-commerce Development", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
      { name: "CRM Solutions", href: "#services" },
      { name: "Business Analytics", href: "#services" },
      { name: "Marketplace Integration", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Portfolio", href: "#portfolio" },
      { name: "Business Associates", href: "/business-associate" },
      { name: "Careers", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Contact", href: "#contact" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Community Forum", href: "#" },
      { name: "Partner Program", href: "/business-associate" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600", bg: "hover:bg-blue-50" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500", bg: "hover:bg-sky-50" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700", bg: "hover:bg-blue-50" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600", bg: "hover:bg-pink-50" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/20"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold">E-tailed India</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Empowering businesses with cutting-edge digital solutions that drive growth, 
              enhance customer experience, and create sustainable competitive advantages.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <span className="text-gray-300">info@e-tailedindia.com</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <span className="text-gray-300">+91 95231 81953</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit Us</p>
                  <span className="text-gray-300">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-base hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Connected</h3>
            <p className="text-gray-300 mb-6 text-base">
              Subscribe to our newsletter for the latest updates, insights, and exclusive offers.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-r-lg hover:from-blue-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Social Links */}
              <div>
                <p className="text-gray-400 mb-3 text-sm">Follow us on social media</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        className={`w-10 h-10 ${social.bg} rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Support Links */}
              <div>
                <p className="text-gray-400 mb-3 text-sm">Quick Support</p>
                <div className="space-y-2">
                  {footerLinks.support.slice(0, 3).map((link, index) => (
                    <a key={index} href={link.href} className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-center lg:text-left">
              <p className="text-base">© 2025 E-tailed India. All rights reserved.</p>
              <p className="text-sm mt-1">Designed By Akash Kashyap</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover:underline">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover:underline">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover:underline">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors hover:underline">Sitemap</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
