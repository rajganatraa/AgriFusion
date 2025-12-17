import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Organic Shape 1 - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-40 mix-blend-multiply filter"
      />
      
      {/* Organic Shape 2 - Bottom Right */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
         className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"
      />

      {/* Organic Shape 3 - Center Float */}
      <motion.div
        animate={{ 
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/3 w-[800px] h-[800px] bg-green-50/60 rounded-full blur-3xl opacity-30 -z-10 transform -translate-y-1/2"
      />

      {/* Stylized Leaf SVG Overlay */}
      <svg className="absolute top-0 right-0 w-96 h-96 text-green-500/5 opacity-20 transform translate-x-1/3 -translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.3C83.5,-26.9,87.6,-11.9,85.2,1.9C82.8,15.7,73.8,28.3,64.2,39.6C54.6,50.9,44.3,60.9,32.3,67.8C20.3,74.7,6.6,78.5,-6.6,77.7C-19.8,76.9,-32.5,71.5,-43.3,63.6C-54.1,55.7,-63,45.3,-69.5,33.4C-76,21.5,-80.1,8.1,-79.1,-5C-78.1,-18.1,-72,-30.9,-63,-41.7C-54,-52.5,-42.1,-61.3,-29.9,-69.1C-17.7,-76.9,-5.2,-83.7,8.2,-84.8C21.6,-85.9,43.2,-81.3,45.7,-76.3Z" transform="translate(100 100)" />
      </svg>
      
       <svg className="absolute bottom-0 left-0 w-[500px] h-[500px] text-emerald-600/5 opacity-20 transform -translate-x-1/4 translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M42.7,-72.6C56.3,-65.8,69.1,-57.8,78.4,-47.1C87.7,-36.4,93.5,-23,91.8,-10.1C90.1,2.8,81,15.2,71.6,26.1C62.2,37,52.5,46.5,41.9,53.8C31.3,61.1,19.8,66.2,7.3,68.6C-5.2,71,-15.8,70.7,-25.9,67.3C-36,63.9,-45.6,57.4,-53.8,49.1C-62,40.8,-68.8,30.7,-73.4,19.3C-78,7.9,-80.4,-4.8,-76.3,-15.8C-72.2,-26.8,-61.6,-36.1,-50.7,-43.8C-39.8,-51.5,-28.6,-57.6,-16.9,-61.5C-5.2,-65.4,7,-67.1,19.6,-68.8C32.2,-70.5,45.2,-72.2,42.7,-72.6Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};

export default Background;