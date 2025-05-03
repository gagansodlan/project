import React from "react";
import { ArrowDown, Code, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:order-1 order-2"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-indigo-600 dark:text-indigo-400 font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text"
              >
                Gagandeep
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl font-medium text-slate-700 dark:text-slate-300"
              >
                Full Stack Web and App Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-600 dark:text-slate-400 text-lg max-w-xl"
            >
              A passionate and results-driven Full Stack Developer with
              experience building scalable web and mobile applications using
              ReactJS, React Native, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center gap-2 transform hover:translate-y-[-2px]"
              >
                <Code size={18} />
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow font-medium flex items-center gap-2 transform hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 pt-4"
            >
              {socialLinks.map((link) => {
                let Icon;
                switch (link.icon) {
                  case "Github":
                    Icon = Github;
                    break;
                  case "Linkedin":
                    Icon = Linkedin;
                    break;
                  case "Mail":
                    Icon = Mail;
                    break;
                  default:
                    Icon = Github;
                }

                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.platform}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative md:order-2 order-1"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-2xl animate-float">
              <img
                src="/images/gaganpic.jpg"
                alt="Gagandeep"
                 className=" object-cover "
              />
            </div>
            <div
              className="absolute -z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-500 dark:from-indigo-800 dark:to-indigo-600 -bottom-4 -right-4 animate-float"
              style={{ animationDelay: "-3s" }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown
              className="text-indigo-600 dark:text-indigo-400"
              size={28}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
