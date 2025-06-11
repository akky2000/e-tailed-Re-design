
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Search, Users, BarChart3, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Custom e-commerce solutions built with latest technologies for maximum performance and user experience.",
      features: ["Custom Store Development", "Payment Gateway Integration", "Inventory Management", "Multi-vendor Support"],
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Marketing"],
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Data-driven insights and analytics to help you make informed decisions and optimize performance.",
      features: ["Performance Tracking", "Customer Analytics", "Sales Reporting", "ROI Analysis"],
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Mobile-first approach with responsive design and native app development for better reach.",
      features: ["Mobile App Development", "Responsive Design", "Progressive Web Apps", "Cross-platform Solutions"],
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600"
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Customer relationship management systems to help you build stronger relationships with clients.",
      features: ["Lead Management", "Customer Segmentation", "Automated Workflows", "Communication Tools"],
      gradient: "from-indigo-500 to-purple-500",
      hoverGradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Globe,
      title: "Marketplace Integration",
      description: "Seamless integration with popular marketplaces to expand your reach and increase sales.",
      features: ["Amazon Integration", "Flipkart Integration", "Multi-channel Selling", "Inventory Sync"],
      gradient: "from-teal-500 to-blue-500",
      hoverGradient: "from-teal-600 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 hover:scale-105 transition-transform duration-300">
            ✨ Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Digital Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From e-commerce development to digital marketing, we provide end-to-end solutions 
            that drive results and help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="space-y-4 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} group-hover:bg-gradient-to-r group-hover:${service.hoverGradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <button className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold hover:scale-105 transition-all duration-300 group-hover:translate-x-2 transform inline-flex items-center group-hover:shadow-lg px-2 py-1 rounded`}>
                      Learn More 
                      <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
                Let's discuss how our services can help you achieve your digital goals and drive measurable results.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl group-hover:animate-pulse">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
