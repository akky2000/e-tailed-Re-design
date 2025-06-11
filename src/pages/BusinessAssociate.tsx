
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, TrendingUp, Shield, Award, ArrowRight } from 'lucide-react';

const BusinessAssociate = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Earn Commissions",
      description: "Get commissions on every sale and regular incentives plus additional earnings with delivery services."
    },
    {
      icon: Users,
      title: "Business Support",
      description: "We help local entrepreneurs to set up business with complete guidance and support."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Join a network of trusted partners and grow your business with our proven strategies."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Get recognized for your achievements and receive exclusive rewards and bonuses."
    }
  ];

  const features = [
    "Low Investment Business Opportunity",
    "Complete Training & Support",
    "Marketing Materials Provided",
    "Ongoing Business Guidance",
    "Multiple Revenue Streams",
    "Flexible Working Hours",
    "Territory Protection",
    "Regular Incentives & Bonuses"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              🤝 Partnership Opportunity
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Become An Authorised
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Associate With Us</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help local entrepreneurs to set up business. Earn commissions on every sale, 
              regular incentives plus additional earnings with delivery services.
            </p>

            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
              BECOME A BUSINESS ASSOCIATE
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our growing network of successful business associates and unlock unlimited earning potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What You Get As Our
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Business Partner</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Apply Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership Benefits</h3>
                    <p className="text-gray-600">Start earning from day one</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-800">Commission Rate</span>
                      <span className="font-bold text-blue-600">Up to 25%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-800">Monthly Bonus</span>
                      <span className="font-bold text-orange-600">₹10,000+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-800">Annual Incentive</span>
                      <span className="font-bold text-green-600">₹50,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of successful entrepreneurs who have transformed their lives with our partnership program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Download Brochure
            </Button>
            <Button variant="outline" className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAssociate;
