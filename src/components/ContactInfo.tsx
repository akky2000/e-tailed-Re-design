
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@e-tailedindia.com",
      subDetails: "support@e-tailedindia.com",
      color: "text-blue-600 bg-blue-100",
      hoverColor: "hover:bg-blue-50 hover:border-blue-300"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subDetails: "+91 87654 32109",
      color: "text-green-600 bg-green-100",
      hoverColor: "hover:bg-green-50 hover:border-green-300"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business Park",
      subDetails: "Mumbai, Maharashtra 400001",
      color: "text-orange-600 bg-orange-100",
      hoverColor: "hover:bg-orange-50 hover:border-orange-300"
    }
  ];

  return (
    <div className="space-y-4">
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;
        return (
          <Card key={index} className={`group p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 rounded-2xl ${info.hoverColor} cursor-pointer hover:scale-105`}>
            <CardContent className="flex items-start space-x-4 p-0">
              <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.details}</p>
                <p className="text-gray-500 text-sm">{info.subDetails}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactInfo;
