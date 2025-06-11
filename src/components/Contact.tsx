
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import WorkingHours from './WorkingHours';
import QuickStats from './QuickStats';
import { Phone, Calendar, Rocket, Target } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-purple-200 text-purple-800 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Target className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our experts for a free consultation 
            and discover how we can help you achieve your digital goals.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <ContactInfo />
            <WorkingHours />
            <QuickStats />
          </div>
        </div>

        
        {/* <div className="grid md:grid-cols-2 gap-6 mb-16"> 
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Call us now for urgent consultations or technical support
            </p>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📞 Call Now: +91 98765 43210
            </a>
          </div>

          
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Schedule a Meeting</h3>
            </div>
            <p className="text-orange-100 mb-6">
              Book a free consultation with our business experts
            </p>
            <button className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              📅 Schedule Meeting
            </button>
          </div>
       
        </div> */}


          {/* Call to Action Card */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Need Immediate Help?
          </h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Call us now for urgent consultations or schedule a meeting with our experts
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919523181953" 
              className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📞 Call Now: +91 95231 81953
            </a>
            <button className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              📅 Schedule Meeting
            </button>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Scale Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of successful businesses that have transformed their digital presence with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
