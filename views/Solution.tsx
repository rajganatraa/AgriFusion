import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto py-12 px-6"
    >
      <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Problem Section */}
        <div className="bg-red-50 p-12 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-400" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 transition-transform group-hover:scale-110" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Problems Faced</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Before AgriFusion, rice husk was largely treated as useless waste. Large quantities were openly burnt, contributing to air pollution and health hazards. At the same time, affordable and durable furniture was difficult to access for many rural schools and low-budget institutions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 text-sm">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                Air pollution from open burning
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                High cost of wooden furniture
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                Deforestation and termite susceptibility
              </li>
            </ul>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-emerald-50 p-12 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-50 transition-transform group-hover:scale-110" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              AgriFusion provides a sustainable solution by converting rice husk into ash and using it as a partial replacement in cement composites. This reduces waste, minimizes pollution, and creates strong, termite-resistant furniture suitable for schools and small workshops.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 text-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                Waste-to-Value Conversion
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                Termite & Fire Resistant
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                Scalable & Low-Cost Production
              </li>
            </ul>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Solution;