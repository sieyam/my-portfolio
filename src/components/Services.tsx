import React from 'react';
import { Box, Video, Building, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: <Box size={48} />,
    title: '3D Modeling',
    description: 'Create detailed and accurate 3D models for various applications.',
  },
  {
    icon: <Video size={48} />,
    title: '3D Animation',
    description: 'Bring characters and objects to life with fluid and expressive animations.',
  },
  {
    icon: <Building size={48} />,
    title: 'Architectural Visualization',
    description: 'Produce photorealistic renders of architectural designs and interiors.',
  },
  {
    icon: <ShoppingCart size={48} />,
    title: 'Product Visualization',
    description: 'Showcase products in stunning 3D for marketing and e-commerce.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 shadow-lg border border-blue-600 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(32,_42,_69,_0.7),_0_0_25px_rgba(32,_42,_69,_0.6),_0_0_35px_rgba(32,_42,_69,_0.5)]">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;