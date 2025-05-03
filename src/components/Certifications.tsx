import React from 'react';
import { certifications } from '../data';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 shadow-sm">
            {certifications.map((certification, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1">
                  <Award className="text-indigo-600 dark:text-indigo-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {certification.title}
                  </h3>
                  {certification.issuer && (
                    <p className="text-indigo-600 dark:text-indigo-400">
                      {certification.issuer}
                    </p>
                  )}
                  {certification.date && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      {certification.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;