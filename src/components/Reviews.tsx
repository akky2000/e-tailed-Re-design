
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Akash Kashyap",
      role: "E-commerce Store Owner",
      rating: 5,
      comment: "E-tailed India transformed my business completely. Their digital solutions increased my revenue by 300% in just 6 months!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Delivery Partner",
      rating: 5,
      comment: "Working with their logistics network has been amazing. Great support system and reliable income through their partnership program.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9567c3e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      role: "Digital Consultant",
      rating: 5,
      comment: "The training and tools provided are top-notch. I've successfully helped 50+ businesses go digital using their platform.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sneha Gupta",
      role: "Financial Advisor",
      rating: 5,
      comment: "Their financial consultancy services helped me expand my client base significantly. Professional and reliable partnership.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Partners Say</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real success stories from our valued business partners across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                "{review.comment}"
              </p>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
