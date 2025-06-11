
import React from 'react';
import { TrendingUp, Zap, BarChart3 } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Increased Revenue",
      description: "Our digital services boost your earnings by optimizing operations and expanding market reach with innovative technology.",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Enhanced Efficiency", 
      description: "Streamline your business processes and reduce costs with our cutting-edge solutions, ensuring higher productivity and profitability.",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Scalable Growth",
      description: "Our flexible digital platforms and tools support your business growth, adapting to your needs and driving long-term success.",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6">
            Advantages
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the key benefits that set us apart and drive your business success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group text-center hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-20 h-20 ${advantage.bgColor} ${advantage.hoverColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:rotate-6`}>
                {advantage.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
