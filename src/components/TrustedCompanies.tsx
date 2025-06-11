
import React from 'react';

const TrustedCompanies = () => {
  const companies = [
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      color: 'text-orange-500'
    },
    { 
      name: 'Meesho', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQyc9yf7HXyFQr1XwCGvJ4hZgLt8JZqJgA&s',
      color: 'text-pink-500'
    },
    { 
      name: 'Tata Cliq', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQzuFDjKLcGaeMqJq8X7hELKE7h3vLGJLnA&s',
      color: 'text-red-600'
    },
    { 
      name: 'Visa', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
      color: 'text-blue-600'
    },
    { 
      name: 'Paytm', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP7nTf3Wt8FsQcrOhQC0Lm8QV4hFJ7JKPPw&s',
      color: 'text-blue-500'
    },
    { 
      
      name: 'Adobe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg',
      color: 'text-red-500'
    },
    { 
      name: 'Flipkart', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kJ5YZoSoC1wU7OaQN3G1ZO5r3ZJjKGYPPg&s',
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by companies of all sizes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful businesses that trust E-tailed India for their digital transformation journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <span className={`text-xl font-bold ${company.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            And many more companies across India trust our services
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;



