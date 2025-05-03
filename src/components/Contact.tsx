import React, { useState } from 'react';
import { contactInfo } from '../data';
import { Mail, Phone, Linkedin, Github, Check, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg font-medium"
              >
                Send Message
              </button>
            </form>
            
            {formStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-lg flex items-center">
                <Check size={20} className="mr-2" />
                <span>Your message has been sent successfully!</span>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg flex items-center">
                <AlertCircle size={20} className="mr-2" />
                <span>There was an error sending your message. Please try again.</span>
              </div>
            )}
          </div>
          
          <div className="bg-indigo-600 text-white rounded-xl p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">
                Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                      +91 {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm">LinkedIn</p>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Gagandeep
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm">GitHub</p>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      gagansodlan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;