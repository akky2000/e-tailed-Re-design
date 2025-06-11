
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, TrendingUp, Store, MapPin, ShoppingBag, UserCheck, Package, Wrench } from 'lucide-react';

const About = () => {
  const companyStats = [
    {
      icon: Store,
      number: "4K+",
      text: "Stores",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      number: "+1,500",
      text: "Towns In 15 States",
      color: "text-green-500"
    },
    {
      icon: Users,
      number: "1.2 CR",
      text: "Customers Walk Into All Our Stores Daily",
      color: "text-purple-500"
    },
    {
      icon: UserCheck,
      number: "5 CR",
      text: "Registered Customers",
      color: "text-orange-500"
    },
    {
      icon: Package,
      number: "+100 K",
      text: "SKU's Sold On Platform",
      color: "text-teal-500"
    },
    {
      icon: Wrench,
      number: "10+",
      text: "Digital Services Offered",
      color: "text-indigo-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "500+",
      text: "Successful Projects",
      color: "text-blue-600"
    },
    {
      icon: Users,
      number: "200+",
      text: "Happy Clients",
      color: "text-orange-500"
    },
    {
      icon: Target,
      number: "98%",
      text: "Client Retention",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      number: "300%",
      text: "Average ROI Increase",
      color: "text-purple-500"
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: "E-commerce Strategy & Digital Transformation"
    },
    {
      name: "Priya Sharma",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      expertise: "Full-stack Development & Technical Architecture"
    },
    {
      name: "Amit Patel",
      role: "Digital Marketing Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: "SEO, PPC & Social Media Marketing"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            🏢 About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Businesses Since
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> 2019</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate digital experts committed to helping businesses 
            navigate the complex world of e-commerce and digital transformation.
          </p>
        </div>

        {/* Company Stats - Based on provided image */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Nationwide Presence</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading the digital transformation across India with our extensive network and comprehensive services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in bg-gradient-to-br from-white to-gray-50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="space-y-4">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-xl flex items-center justify-center mx-auto`}>
                      <IconComponent className={`w-8 h-8 lg:w-10 lg:h-10 ${stat.color}`} />
                    </div>
                    <div className={`text-3xl lg:text-4xl font-bold ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm lg:text-base leading-tight">
                      {stat.text}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2019 with a vision to democratize e-commerce success, E-tailed India 
                has grown from a small startup to one of India's leading digital consultancy firms. 
                Our journey began when we realized that many businesses were struggling to establish 
                their online presence effectively.
              </p>
              <p>
                Today, we've helped over 500 businesses transform their digital operations, 
                generating millions in additional revenue and creating thousands of jobs across various industries. 
                Our success is measured not just by our growth, but by the success of our clients.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, 
                enhance customer experience, and create sustainable competitive advantages in the digital marketplace.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6 lg:p-8 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="text-center pb-4 border-b border-gray-200">
                    <h4 className="font-bold text-gray-800 text-lg">Growth Timeline</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">2019</span>
                      <span className="text-sm text-gray-800">Company Founded</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">2020</span>
                      <span className="text-sm text-gray-800">100+ Projects</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">2022</span>
                      <span className="text-sm text-gray-800">Team of 25+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">2024</span>
                      <span className="text-sm text-gray-800">500+ Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="text-center p-4 lg:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-3 lg:space-y-4">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 ${achievement.color.replace('text-', 'bg-').replace('600', '100')} rounded-xl flex items-center justify-center mx-auto`}>
                    <IconComponent className={`w-6 h-6 lg:w-8 lg:h-8 ${achievement.color}`} />
                  </div>
                  <div className={`text-2xl lg:text-3xl font-bold ${achievement.color}`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm lg:text-base">
                    {achievement.text}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team brings together decades of expertise in technology, 
              marketing, and business strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4">
                  <div className="relative mx-auto w-20 h-20 lg:w-24 lg:h-24">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">{member.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
