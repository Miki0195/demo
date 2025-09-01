import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {features && (
        <div className="space-y-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (index * 0.1), duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
