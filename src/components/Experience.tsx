import React from 'react';
import { experience } from '../data';
import { Briefcase, Calendar, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold gradient-text mb-2">Work Experience</motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My professional journey and responsibilities.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-600"></div>
            
            <div className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-indigo-100 dark:border-indigo-900">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">{experience.role}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">{experience.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-8 ml-1">
                <Calendar size={18} className="text-indigo-500 dark:text-indigo-400 mr-2" />
                <span className="text-slate-600 dark:text-slate-400">{experience.duration}</span>
              </div>
              
              <h4 className="text-lg font-medium gradient-text mb-4">Key Responsibilities:</h4>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start group"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                        <Check size={14} />
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {responsibility}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;