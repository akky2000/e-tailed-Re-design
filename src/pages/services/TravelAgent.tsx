
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Map, Camera, Calendar, Globe2, Users, ArrowRight } from 'lucide-react';

const TravelAgent = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Best deals on domestic and international flights with 24/7 support"
    },
    {
      icon: Map,
      title: "Tour Packages",
      description: "Customized tour packages for families, couples, and corporate groups"
    },
    {
      icon: Camera,
      title: "Holiday Planning",
      description: "Complete holiday planning from accommodation to activities"
    },
    {
      icon: Calendar,
      title: "Event Travel",
      description: "Specialized travel arrangements for weddings, conferences, and events"
    },
    {
      icon: Globe2,
      title: "Visa Assistance",
      description: "Complete visa processing and documentation assistance"
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Exclusive group tour packages with experienced guides"
    }
  ];

  const destinations = [
    "Domestic: Goa, Kerala, Rajasthan, Himachal Pradesh",
    "International: Dubai, Singapore, Thailand, Europe",
    "Pilgrimage: Char Dham, Vaishno Devi, Tirupati",
    "Adventure: Leh-Ladakh, Rishikesh, Manali",
    "Beach: Maldives, Bali, Goa, Andaman",
    "Cultural: Japan, Egypt, Greece, Turkey"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Travel Agent
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted travel partner for unforgettable journeys. From flight bookings to 
              complete holiday packages, we make your travel dreams come true.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
              Plan Your Trip <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Travel Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel solutions for all your vacation and business travel needs.
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

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Popular Destinations
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Explore amazing destinations with our carefully curated travel packages.
                </p>
                <ul className="space-y-4">
                  {destinations.map((destination, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{destination}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Next Adventure</h3>
                <p className="text-gray-600 mb-6">
                  Let our travel experts create the perfect itinerary for your next vacation. Get personalized recommendations and best deals.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300">
                  Get Free Quote
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Customized packages • Best prices • 24/7 support
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

export default TravelAgent;
