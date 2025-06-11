
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Globe, Award, Users, Target, ArrowRight } from 'lucide-react';

const EducationConsultant = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description: "Professional career counseling to help students choose the right path"
    },
    {
      icon: BookOpen,
      title: "Course Selection",
      description: "Expert guidance on course selection based on interests and market demand"
    },
    {
      icon: Globe,
      title: "Study Abroad",
      description: "Complete assistance for studying abroad including university selection"
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description: "Help students find and apply for scholarships and financial aid"
    },
    {
      icon: Users,
      title: "Admission Support",
      description: "End-to-end admission support for colleges and universities"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Identify and develop skills needed for future career success"
    }
  ];

  const specializations = [
    "Engineering & Technical Courses",
    "Medical & Healthcare Programs",
    "Management & Business Studies",
    "Arts & Humanities",
    "Study Abroad Programs",
    "Professional Certification Courses"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Education
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Consultant Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert educational guidance to help students make informed decisions about their academic 
              and career paths. From course selection to study abroad assistance.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
              Get Guidance <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Education Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational consulting services to guide students towards success.
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

      {/* Specializations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Specializations
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We provide expert guidance across various educational fields and career paths.
                </p>
                <ul className="space-y-4">
                  {specializations.map((specialization, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{specialization}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Journey</h3>
                <p className="text-gray-600 mb-6">
                  Ready to take the next step in your educational journey? Our expert consultants are here to guide you every step of the way.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300">
                  Book Free Consultation
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Personalized guidance • Expert advice • Success-oriented approach
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

export default EducationConsultant;
