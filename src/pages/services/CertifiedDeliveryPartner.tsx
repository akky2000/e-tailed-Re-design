
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const CertifiedDeliveryPartner = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Certified Quality",
      description: "Get certified as a trusted delivery partner with our comprehensive training program"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Work according to your schedule with flexible delivery time slots"
    },
    {
      icon: Users,
      title: "Network Access",
      description: "Join our extensive network of delivery partners across India"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Maintain high service standards with our quality assurance program"
    }
  ];

  const requirements = [
    "Valid driving license",
    "Own vehicle (bike/car)",
    "Smartphone with internet",
    "Minimum 18 years of age",
    "Local area knowledge",
    "Professional attitude"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Certified Delivery
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Partner Program</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our certified delivery partner network and become part of India's fastest-growing logistics ecosystem. 
              Earn while you deliver with complete training and support.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
              Apply Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get certified, earn better, and grow your delivery business with our comprehensive support system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Requirements to Join
              </h2>
              <p className="text-xl text-gray-600">
                Simple requirements to get started as a certified delivery partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Requirements</h3>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Apply now and join thousands of successful delivery partners earning with E-tailed India.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300">
                  Start Application Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertifiedDeliveryPartner;
