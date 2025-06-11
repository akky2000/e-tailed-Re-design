
import React from 'react';
import { Store, MapPin, Users, Package, UserCheck, Briefcase } from 'lucide-react';

const Achievements = () => {
  const stats = [
    {
      icon: <Store className="w-8 h-8 text-blue-600" />,
      number: "4K+",
      label: "Stores",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      number: "+1,500",
      label: "Towns in 15 States",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "1.2 CR",
      label: "Customers Walk Into All Our Stores Daily",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-orange-600" />,
      number: "5 CR",
      label: "Registered Customers",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      icon: <Package className="w-8 h-8 text-red-600" />,
      number: "+100 K",
      label: "SKU's Sold On Platform",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      number: "10+",
      label: "Digital Services Offered",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6">
            Our Appearance
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for our commitment and growth across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold ${stat.textColor} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
