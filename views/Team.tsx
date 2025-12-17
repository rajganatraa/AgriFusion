import React from 'react';
import { motion } from 'framer-motion';
import { Member } from '../types';

const members: Member[] = [
  {
    name: "Yug Kotecha",
    bio: "Student of class 11A",
    imageUrl: "https://picsum.photos/300/300?random=10"
  },
  {
    name: "Dev Rupani",
    bio: "Student of class 11A",
    imageUrl: "https://picsum.photos/300/300?random=11"
  },
  {
    name: "Nandish Paladiya",
    bio: "Student of class 11A",
    imageUrl: "https://picsum.photos/300/300?random=12"
  },
  {
    name: "Krushna Harsoda",
    bio: "Student of class 11A",
    imageUrl: "https://picsum.photos/300/300?random=13"
  },
  {
    name: "Shivam Nandani",
    bio: "Student of class 11A",
    imageUrl: "https://picsum.photos/300/300?random=14"
  }
];

const Team: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto py-12 px-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Meet the Minds</h2>
        <p className="text-gray-500">The students behind AgriFusion.</p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" 
                />
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-3">{member.name}</h3>
            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
              {member.bio}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;