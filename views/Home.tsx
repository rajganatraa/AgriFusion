import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PageState } from '../types';
import { ArrowRight, Recycle, School, Sprout } from 'lucide-react';

interface HomeProps {
  setPage: (page: PageState) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold tracking-wider border border-green-100 mb-6">
          ISPC 2025-26
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight leading-none mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-800">Agri</span>
          <span>Fusion.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
          Transforming agricultural waste into durable and useful furniture by applying scientific principles.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-8">
        <button 
          onClick={() => setPage(PageState.PROJECT)}
          className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-900/10"
        >
          Explore Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button 
          onClick={() => setPage(PageState.TEAM)}
          className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all hover:border-gray-300"
        >
          Meet the Team
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl">
        {[
          { icon: Recycle, title: "Waste to Wealth", desc: "Converting discarded rice husk into valuable furniture." },
          { icon: Sprout, title: "Eco-Friendly", desc: "Reducing pollution from open burning and saving trees." },
          { icon: School, title: "Scientific Learning", desc: "Understanding material science through hands-on innovation." }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-50 rounded-full text-green-600 mb-4">
              <feature.icon size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;