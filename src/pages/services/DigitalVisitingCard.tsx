
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Share2, Globe, QrCode, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';

const DigitalVisitingCard = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Digital Business Cards",
      description: "Create stunning digital business cards that make a lasting impression"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your contact information instantly via QR codes, links, or NFC"
    },
    {
      icon: Globe,
      title: "Online Presence",
      description: "Build your professional online presence with customizable profiles"
    },
    {
      icon: QrCode,
      title: "QR Code Integration",
      description: "Generate unique QR codes for instant contact sharing"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfectly designed for mobile devices and social media"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Track views, shares, and engagement with detailed analytics"
    }
  ];

  const benefits = [
    "Eco-friendly alternative to paper cards",
    "Always up-to-date contact information",
    "Professional and modern appearance",
    "Cost-effective solution",
    "Easy to update and manage",
    "Integration with social media"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Digital Visiting
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Card Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your networking with smart digital business cards. Share your contact information 
              instantly and make memorable connections in the digital age.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
              Create Your Card <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create professional digital business cards that stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Go Digital?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Digital visiting cards offer numerous advantages over traditional paper cards.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Create your professional digital visiting card today and start networking smarter.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300">
                  Start Creating Now
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  No credit card required • Get started in minutes
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

export default DigitalVisitingCard;
