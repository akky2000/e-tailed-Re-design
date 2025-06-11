
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Code, Shield, Cloud, Database, Smartphone, ArrowRight } from 'lucide-react';

const ITConsultant = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Strategy & Planning",
      description: "Strategic IT planning and digital transformation consulting for businesses"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software development solutions tailored to your business needs"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration, implementation, and management services"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Database design, implementation, and data analytics solutions"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Mobile app development and mobile-first digital solutions"
    }
  ];

  const technologies = [
    "Web Development (React, Node.js, Python)",
    "Mobile Development (iOS, Android, React Native)",
    "Cloud Platforms (AWS, Azure, Google Cloud)",
    "Database Systems (MySQL, PostgreSQL, MongoDB)",
    "DevOps & CI/CD Implementation",
    "AI/ML Integration & Consulting"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              IT Consultant
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert IT consulting services to help businesses leverage technology for growth. 
              From digital transformation to custom software development.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
              Get IT Solutions <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions to digitize and optimize your business operations.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Technologies We Use
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We work with cutting-edge technologies to deliver modern, scalable, and secure IT solutions.
                </p>
                <ul className="space-y-4">
                  {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Transform Your Business</h3>
                <p className="text-gray-600 mb-6">
                  Ready to digitize your business? Our IT experts will help you leverage technology for growth and efficiency.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300">
                  Start Your Project
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Custom solutions • Modern technology • Expert support
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

export default ITConsultant;
