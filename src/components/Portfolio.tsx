
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "FashionHub E-commerce Platform",
      category: "E-commerce Development",
      description: "Complete e-commerce solution with advanced filtering, wishlist, and multi-vendor support.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      results: [
        "300% increase in online sales",
        "50% improvement in user engagement",
        "25% reduction in cart abandonment"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "TechGear Marketplace",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing campaign resulting in massive brand awareness and sales growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      results: [
        "500% increase in organic traffic",
        "200% boost in conversion rate",
        "150% growth in social media following"
      ],
      technologies: ["SEO", "Google Ads", "Social Media", "Analytics"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "FoodDelight Restaurant Chain",
      category: "Mobile App Development",
      description: "Cross-platform mobile app with online ordering, loyalty program, and real-time tracking.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      results: [
        "40% increase in order frequency",
        "60% improvement in customer retention",
        "35% boost in average order value"
      ],
      technologies: ["React Native", "Firebase", "Payment Gateway", "Push Notifications"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "HealthCare Plus Platform",
      category: "CRM Solutions",
      description: "Complete healthcare management system with patient portal, appointment booking, and analytics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      results: [
        "80% reduction in appointment scheduling time",
        "90% improvement in patient satisfaction",
        "45% increase in operational efficiency"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "AutoParts Marketplace",
      category: "Marketplace Integration",
      description: "Multi-channel selling platform with inventory sync across Amazon, Flipkart, and own website.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&h=300&fit=crop",
      results: [
        "250% increase in marketplace sales",
        "70% reduction in inventory management time",
        "100% improvement in order fulfillment"
      ],
      technologies: ["API Integration", "Inventory Management", "Order Sync", "Analytics"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "EduTech Learning Platform",
      category: "Full Stack Development",
      description: "Comprehensive online learning platform with video streaming, progress tracking, and assessments.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      results: [
        "1000+ active students enrolled",
        "95% course completion rate",
        "85% student satisfaction score"
      ],
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Video Streaming"],
      color: "from-teal-500 to-green-600"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Mehta",
      company: "FashionHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "E-tailed India transformed our business completely. Our online sales increased by 300% within 6 months!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      company: "TechGear",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Their digital marketing expertise is unmatched. We saw incredible growth in our online presence.",
      rating: 5
    },
    {
      name: "Rahul Singh",
      company: "FoodDelight",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "The mobile app they developed exceeded our expectations. Customer engagement has skyrocketed!",
      rating: 5
    }
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            🎯 Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories That
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Inspire</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across various industries achieve remarkable 
            digital transformation and measurable growth.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white animate-fade-in overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <Badge className="absolute top-4 left-4 bg-white text-gray-800 hover:bg-white text-xs">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-4 lg:p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    Key Results
                  </h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="text-xs text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                        <span className="leading-tight">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about 
              working with E-tailed India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-4 lg:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic leading-relaxed text-sm">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
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

export default Portfolio;
