
import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnershipSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
            Partner with Flipkart Logistics
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expand your business with India's most trusted logistics network
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We are proud to announce our partnership with Flipkart Logistics Services, enabling us 
                to provide efficient and reliable delivery solutions. Through this partnership, we extend 
                our franchise, delivery, and distributor services, allowing you to become part of a robust 
                network. Whether you're looking to run a franchise or become a distributor, we offer a 
                comprehensive support system to help you succeed.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our delivery services ensure that products reach customers promptly and safely, 
                backed by Flipkart's trusted logistics infrastructure. As a franchise or distributor, you will 
                have access to this system, ensuring seamless operations and the opportunity to grow 
                your business with a leading logistics partner.
              </p>
              
              <p className="text-gray-700 leading-relaxed font-medium">
                Join us today, and leverage our partnership with Flipkart to build a thriving business!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick & reliable service</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trusted Network</h4>
                  <p className="text-sm text-gray-600">Secure & safe delivery</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Growth</h4>
                  <p className="text-sm text-gray-600">Scalable solutions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Support System</h4>
                  <p className="text-sm text-gray-600">24/7 assistance</p>
                </div>
              </div>
            </div>

            {/* <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              ABOUT US & AGREEMENTS
            </Button> */}

<Link to="/about">
  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
    ABOUT US & AGREEMENTS
  </Button>
</Link>


          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop" 
                alt="Logistics and Delivery Network" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
