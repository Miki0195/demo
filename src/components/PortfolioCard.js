import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const PortfolioCard = ({ title, description, category, image, videoUrl, isVideo = false, delay = 0 }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Image/Video Preview */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
          style={{ 
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {!image && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400 text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  {isVideo ? <Play className="w-8 h-8" /> : <ExternalLink className="w-8 h-8" />}
                </div>
                <p className="text-sm">{isVideo ? 'Video Content' : 'Project Preview'}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isVideo ? (
              <motion.button
                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-gray-900 ml-1" />
              </motion.button>
            ) : (
              <motion.button
                className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-6 h-6 text-gray-900" />
              </motion.button>
            )}
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
