
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Award, HandHeart, Shield, Gift } from 'lucide-react';

const BusinessAssociates = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-orange-200 text-orange-800 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <HandHeart className="w-4 h-4 mr-2" />
            Partnership Opportunity
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Become An Authorised
            <span className="block mt-2 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Associate With Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We help local entrepreneurs to set up business. Earn commissions on every sale, 
            regular incentives plus additional earnings with delivery services.
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">High Earnings</h3>
            <p className="text-gray-600 leading-relaxed">Earn commissions on every sale with regular incentives and bonuses</p>
            <div className="mt-4 text-2xl font-bold text-blue-600">Up to 25%</div>
          </div>
          
          <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Business Support</h3>
            <p className="text-gray-600 leading-relaxed">Complete training and ongoing business guidance from experts</p>
            <div className="mt-4 text-2xl font-bold text-green-600">24/7 Support</div>
          </div>
          
          <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Recognition</h3>
            <p className="text-gray-600 leading-relaxed">Get recognized with exclusive rewards and annual bonuses</p>
            <div className="mt-4 text-2xl font-bold text-orange-600">₹50,000+</div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Partnership?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Trusted Brand Recognition", color: "text-blue-600 bg-blue-100" },
                  { icon: Gift, text: "Exclusive Territory Rights", color: "text-green-600 bg-green-100" },
                  { icon: TrendingUp, text: "Proven Business Model", color: "text-orange-600 bg-orange-100" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl">
                <h4 className="text-xl font-bold mb-4">Start Your Journey Today</h4>
                <p className="text-blue-100 mb-6">Join our network of successful partners</p>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Active Partners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link to="/business-associate">
            <Button className="group bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-2 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="relative z-10">BECOME A BUSINESS ASSOCIATE</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessAssociates;
