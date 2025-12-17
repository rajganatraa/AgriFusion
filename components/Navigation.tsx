import React from 'react';
import { motion } from 'framer-motion';
import { PageState, NavItem } from '../types';
import { Leaf } from 'lucide-react';

interface NavigationProps {
  activePage: PageState;
  setPage: (page: PageState) => void;
}

const navItems: NavItem[] = [
  { id: PageState.HOME, label: 'Home' },
  { id: PageState.PROJECT, label: 'Project' },
  { id: PageState.ABOUT, label: 'About' },
  { id: PageState.SCIENCE, label: 'Science' },
  { id: PageState.SOLUTION, label: 'Solution' },
  { id: PageState.TEAM, label: 'Team' },
];

const Navigation: React.FC<NavigationProps> = ({ activePage, setPage }) => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <nav className="flex items-center gap-1 p-2 bg-white/70 backdrop-blur-md rounded-full border border-white/20 shadow-lg shadow-green-900/5 ring-1 ring-black/5">
        
        <div 
          className="flex items-center justify-center w-10 h-10 mr-4 bg-green-500 rounded-full text-white cursor-pointer hover:bg-green-600 transition-colors"
          onClick={() => setPage(PageState.HOME)}
        >
          <Leaf size={20} />
        </div>

        <div className="hidden md:flex gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive ? 'text-green-800' : 'text-gray-500 hover:text-green-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-green-100 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile simple menu for small screens */}
        <div className="md:hidden flex gap-2 overflow-x-auto max-w-[60vw] scrollbar-hide">
             {navItems.map((item) => (
               <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-full ${
                    activePage === item.id ? 'bg-green-100 text-green-800' : 'text-gray-500'
                  }`}
               >
                 {item.label}
               </button>
             ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navigation;