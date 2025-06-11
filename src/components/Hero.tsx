
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Star, Users, Award, TrendingUp, Eye, Sparkles } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import { useToast } from '@/hooks/use-toast';

// const Hero = () => {
//   const { isAuthenticated } = useAuth();
//   const { toast } = useToast();

//   const handleStartJourney = () => {
//     if (isAuthenticated) {
//       toast({
//         title: "Welcome aboard! 🚀",
//         description: "You're all set to explore our services. Let's get started!",
//       });
      
//       const servicesSection = document.getElementById('services');
//       if (servicesSection) {
//         servicesSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       toast({
//         title: "Ready to start? 🎯",
//         description: "Please log in or sign up to begin your journey with us.",
//         variant: "default",
//       });
      
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
//       {/* Interactive Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
//         <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
//         <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
        
//         {/* Floating Icons */}
//         <div className="absolute top-1/4 left-8 opacity-20 animate-bounce">
//           <Sparkles className="w-6 h-6 text-blue-500" />
//         </div>
//         <div className="absolute bottom-1/3 right-12 opacity-20 animate-bounce delay-1000">
//           <Award className="w-5 h-5 text-orange-500" />
//         </div>
//       </div>

//       <div className="container mx-auto px-4 lg:px-6 pt-20 pb-16 relative z-10">
//         <div className="text-center max-w-5xl mx-auto">
//           {/* Trust Badge */}
//           <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-green-200 text-green-800 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
//             <Award className="w-4 h-4 mr-2" />
//             <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold">
//               Trusted by 10,000+ Businesses Across India
//             </span>
//           </div>

//           {/* Main Heading with Enhanced Typography */}
//           <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//             Transform Your Business with
//             <span className="block mt-2 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
//               Digital Excellence
//             </span>
//           </h1>

//           {/* Enhanced Subheading */}
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
//             From e-commerce solutions to digital marketing, we provide comprehensive services 
//             to help your business thrive in the digital age. Join thousands of successful entrepreneurs.
//           </p>

//           {/* Interactive Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
//             <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-blue-100">
//               <div className="flex items-center justify-center space-x-3 mb-2">
//                 <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
//                   <Users className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">10,000+</div>
//               </div>
//               <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
//             </div>
            
//             <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-green-100">
//               <div className="flex items-center justify-center space-x-3 mb-2">
//                 <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
//                   <TrendingUp className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">500+</div>
//               </div>
//               <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
//             </div>
            
//             <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-yellow-100">
//               <div className="flex items-center justify-center space-x-3 mb-2">
//                 <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
//                   <Star className="w-6 h-6 text-yellow-500" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">4.9/5</div>
//               </div>
//               <div className="text-sm text-gray-600 font-medium">Client Rating</div>
//             </div>
//           </div>

//           {/* Enhanced CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//             <Button 
//               onClick={handleStartJourney}
//               className="group bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
//             >
//               <span className="relative z-10">Start Your Journey</span>
//               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Button>
            
//             <Link to="/portfolio">
//               <Button 
//                 variant="outline" 
//                 className="group border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-4 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
//               >
//                 <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 View Our Portfolio
//               </Button>
//             </Link>
//           </div>

//           {/* Interactive Features Showcase */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
//             {[
//               { text: "E-commerce", icon: "🛒" },
//               { text: "Marketing", icon: "📈" },
//               { text: "Analytics", icon: "📊" },
//               { text: "Mobile Apps", icon: "📱" }
//             ].map((feature, index) => (
//               <div 
//                 key={index}
//                 className="group bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200 hover:border-blue-300"
//               >
//                 <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{feature.icon}</div>
//                 <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{feature.text}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award, TrendingUp, Eye, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const handleStartJourney = () => {
    if (isAuthenticated) {
      toast({
        title: "Welcome aboard! 🚀",
        description: "You're all set to explore our services. Let's get started!",
      });
      
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      toast({
        title: "Ready to start? 🎯",
        description: "Please log in or sign up to begin your journey with us.",
        variant: "default",
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const features = [
    "24/7 Customer Support",
    "Expert Consultation", 
    "Proven Track Record",
    "Affordable Solutions"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 pt-20 pb-16 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 text-green-700 rounded-full text-sm font-medium mb-8 animate-fade-in hover:bg-green-200 transition-all duration-300 cursor-pointer group">
            <Award className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span>Trusted by 10,000+ Businesses Across India</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
              Digital Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            From e-commerce solutions to digital marketing, we provide comprehensive services 
            to help your business <span className="text-blue-600 font-semibold">thrive in the digital age</span>. 
            Join thousands of successful entrepreneurs.
          </p>

          {/* Features checklist */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 group cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto animate-fade-in">
            {[
              { icon: Users, value: "10,000+", label: "Happy Clients", color: "text-blue-600 bg-blue-100" },
              { icon: TrendingUp, value: "500+", label: "Projects Delivered", color: "text-green-600 bg-green-100" },
              { icon: Star, value: "4.9/5", label: "Client Rating", color: "text-orange-600 bg-orange-100" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 animate-fade-in">
            <Button 
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Our Portfolio
              </Button>
            </Link>
          </div>

          {/* Demo preview */}
          {/* <div className="relative max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl h-48 md:h-64 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">Watch Our Success Stories</p>
                  <p className="text-gray-500 text-sm mt-2">See how we've transformed businesses like yours</p>
                </div>
              </div>
            </div>
          </div> */}

          
        </div>
      </div>
    </section>
  );
};

export default Hero;