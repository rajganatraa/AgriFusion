import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Scale, Calculator } from 'lucide-react';

const Science: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, rotateX: -10 }}
      animate={{ opacity: 1, rotateX: 0 }}
      exit={{ opacity: 0, rotateX: 10 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto py-10 px-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Scientific Principles</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">How we apply core scientific concepts to create value from waste.</p>
      </div>

      <div className="space-y-12">
        {/* Physics Section - Teal (Mechanics/Structure) */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow duration-300">
            <div className="p-4 bg-teal-50 text-teal-600 rounded-2xl shrink-0">
                <Scale size={40} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Physics Concepts</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    AgriFusion applies several physics concepts related to mechanics and material properties. The furniture boards experience compressive and bending forces when load is applied, especially in stools and shelves.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                        Load distribution & Stress analysis
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                        Density & Weight optimization
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                        Porosity & Water absorption
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                        Durability testing
                    </div>
                </div>
            </div>
        </div>

        {/* Chemistry Section - Emerald (Organic/Reaction) */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
                <Atom size={40} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemistry Concepts</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Chemistry is central to AgriFusion, particularly cement chemistry and pozzolanic reactions. When cement reacts with water, it undergoes hydration to form calcium silicate hydrate (C-S-H), which gives strength to the material.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Rice husk ash contains amorphous silica, which reacts with calcium hydroxide produced during cement hydration. This pozzolanic reaction forms additional C-S-H, improving strength and durability when used in correct proportions.
                </p>
            </div>
        </div>

        {/* Mathematics Section - Cyan (Calculation/Precision) */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl shadow-sm border border-cyan-100 hover:shadow-md transition-shadow duration-300">
            <div className="p-4 bg-cyan-50 text-cyan-600 rounded-2xl shrink-0">
                <Calculator size={40} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics & Measurement</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    AgriFusion makes extensive use of mathematics and scientific measurements. Precise mix ratios are calculated by weight to ensure consistency and strength. Volume and area calculations are used to design molds and furniture dimensions.
                </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Mass-to-volume density calculations
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Percentage replacement formulas
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Statistical data analysis (Tables/Graphs)
                    </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Science;