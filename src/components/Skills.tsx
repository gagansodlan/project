import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const languages = skills.filter(skill => skill.category === 'language');
  const frameworks = skills.filter(skill => skill.category === 'framework');
  const tools = skills.filter(skill => skill.category === 'tool');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const renderSkillBar = (skill: { name: string; level: number }) => (
    <motion.div 
      key={skill.name} 
      variants={itemVariants}
      className="mb-6 group"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-indigo-50/50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold gradient-text mb-2">
            Skills & Expertise
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My technical skills and proficiency levels in various technologies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Languages', skills: languages },
            { title: 'Frameworks & Libraries', skills: frameworks },
            { title: 'Tools & Platforms', skills: tools }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-indigo-100 dark:border-indigo-900"
            >
              <h3 className="text-xl font-bold gradient-text mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
                {category.title}
              </h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {category.skills.map(renderSkillBar)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;