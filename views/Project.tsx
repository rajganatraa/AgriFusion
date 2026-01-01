import React from 'react';
import { motion } from 'framer-motion';

const Project: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-5xl mx-auto py-12 px-6"
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About AgriFusion</h2>
        <div className="h-1 w-20 bg-green-500 rounded-full mb-8" />
        <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
          AgriFusion is an innovative initiative focused on transforming agricultural waste into durable and useful furniture by applying scientific principles. It uses rice husk, a by-product of rice milling that is usually discarded or burnt, and converts it into rice husk ash (RHA).
        </p>
        <p className="text-lg text-gray-500 leading-relaxed font-light">
          This ash is then combined with cement and sand to create strong composite boards that can be molded into furniture such as stools and shelves. AgriFusion demonstrates how locally available waste materials can be converted into value-added products using low-cost, low-technology methods, making it suitable for schools, rural areas, and small workshops.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
            <h3 className="text-2xl font-serif text-gray-800 mb-3">Key Material</h3>
            <p className="text-gray-600">
              <strong>Rice Husk Ash (RHA):</strong> A sustainable partial replacement for cement that improves durability and reduces environmental impact.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
            <h3 className="text-2xl font-serif text-gray-800 mb-3">Core Application</h3>
            <p className="text-gray-600">
              Creating composite boards for molding stools, shelves, and other small furniture items without using wood.
            </p>
          </div>
        </div>
        
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
            {/* Placeholder for furniture/ash image */}
            <img 
                src="https://drive.google.com/open?id=1jDxvxAo3k5nY3h1zSCaK-8AneLWX7Ob-&usp=drive_copy" 
                alt="Furniture Prototype" 
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="text-white font-medium text-lg">Sustainable Composite Furniture</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
