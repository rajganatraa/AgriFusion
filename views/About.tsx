import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto py-12 px-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          The mission of the team behind AgriFusion is to promote sustainability, waste reduction, and scientific learning through practical application. By creating furniture from agricultural waste, the team aims to reduce environmental pollution caused by open burning of rice husk while also lowering dependence on expensive raw materials. AgriFusion seeks to show that science can provide simple, affordable solutions to real-world problems.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Overall Impact</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {[
            {
                title: "Environmental",
                content: "Addresses environmental pollution by repurposing rice husk waste and reducing the need to cut down trees for wood furniture.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
            },
            {
                title: "Economic",
                content: "Reduces material costs by using waste products, promoting sustainable development and affordable solutions for schools.",
                image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop"
            },
            {
                title: "Educational",
                content: "Acts as a powerful educational model, demonstrating how physics, chemistry, and mathematics work together to solve real-life problems.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
            }
            ].map((item, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;