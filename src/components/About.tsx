import React from 'react';
import { CodeSquare, Clock, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50/50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold gradient-text mb-2">About Me</motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            I'm a dedicated full-stack developer passionate about creating elegant solutions to complex problems.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Professional Summary</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              A passionate and results-driven Full Stack Developer with experience building scalable web and 
              mobile applications using ReactJS, React Native, and Node.js. Currently working at Leavecode 
              Technologies, I've delivered high-impact projects across multiple platforms, with a focus on 
              performance, usability, and clean code.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I approach each project with a meticulous eye for detail and commitment to writing maintainable, 
              efficient code. My goal is to create solutions that not only meet current requirements but can 
              also scale and adapt to future needs.
            </p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {[
                { icon: CodeSquare, title: 'Clean Code', subtitle: 'Maintainable & efficient' },
                { icon: Users, title: 'Collaborative', subtitle: 'Team player' },
                { icon: Clock, title: 'Timely Delivery', subtitle: 'Efficient workflows' },
                { icon: Zap, title: 'Performance', subtitle: 'Optimized solutions' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Developer working"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-700 dark:to-indigo-900 rounded-2xl -bottom-4 -right-4 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;