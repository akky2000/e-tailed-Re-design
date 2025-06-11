
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, Shield, TrendingDown, Users, Clock, ArrowRight } from 'lucide-react';

const TaxConsultant = () => {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description: "Professional income tax return filing for individuals and businesses"
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your tax liability legally"
    },
    {
      icon: Shield,
      title: "Tax Compliance",
      description: "Ensure full compliance with all tax regulations and requirements"
    },
    {
      icon: TrendingDown,
      title: "Tax Optimization",
      description: "Optimize your tax structure for maximum savings and efficiency"
    },
    {
      icon: Users,
      title: "Business Tax Advisory",
      description: "Comprehensive tax advisory services for businesses of all sizes"
    },
    {
      icon: Clock,
      title: "Year-round Support",
      description: "Continuous tax support and consultation throughout the year"
    }
  ];

  const expertise = [
    "Individual Income Tax Returns",
    "Business Tax Planning & Filing",
    "GST Registration & Compliance",
    "TDS/TCS Returns & Advisory",
    "Tax Notice Handling",
    "Investment Tax Planning"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tax Consultant
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert tax consultation and filing services to help you save money and stay compliant 
              with all tax regulations. Professional guidance for individuals and businesses.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
              Get Tax Help <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax solutions to help you navigate complex tax regulations with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Tax Expertise
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our certified tax professionals have extensive experience in handling all aspects of taxation for individuals and businesses.
                </p>
                <ul className="space-y-4">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Tax Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  Don't let tax complexities stress you out. Our expert tax consultants are here to help you every step of the way.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300">
                  Schedule Consultation
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Expert advice • Maximum savings • Full compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaxConsultant;
