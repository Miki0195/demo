import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building, Play, ExternalLink } from 'lucide-react';
import PortfolioCard from '../components/PortfolioCard';
import PageTransition from '../components/PageTransition';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('individuals');

  const individualsProjects = [
    {
      title: 'Personal Brand Launch',
      description: 'Complete social media makeover for lifestyle influencer including brand guidelines, content templates, and launch campaign.',
      category: 'Personal Branding',
      isVideo: true
    },
    {
      title: 'Fitness Journey Series',
      description: 'Monthly video series documenting transformation journey with before/after comparisons and workout highlights.',
      category: 'Fitness Content',
      isVideo: true
    },
    {
      title: 'Recipe Reels Collection',
      description: 'Set of 20 vertical recipe videos optimized for Instagram Reels and TikTok with trending audio and quick cuts.',
      category: 'Food Content',
      isVideo: true
    },
    {
      title: 'Travel Vlog Series',
      description: 'Cinematic travel videos capturing adventures across Europe with drone footage and local culture highlights.',
      category: 'Travel',
      isVideo: true
    },
    {
      title: 'DIY Tutorial Campaign',
      description: 'Step-by-step home improvement tutorials with clear instructions and professional product placement.',
      category: 'DIY/Lifestyle',
      isVideo: true
    },
    {
      title: 'Fashion Lookbook',
      description: 'Seasonal fashion content featuring outfit combinations with transition effects and styling tips.',
      category: 'Fashion',
      isVideo: false
    }
  ];

  const companiesProjects = [
    {
      title: 'Tech Startup Launch',
      description: 'Full brand identity and launch campaign for SaaS platform including explainer videos, social content, and PR materials.',
      category: 'Technology',
      isVideo: true
    },
    {
      title: 'Restaurant Chain Rebrand',
      description: 'Complete visual rebrand with new logo, menu design, social templates, and promotional video content.',
      category: 'Food & Beverage',
      isVideo: false
    },
    {
      title: 'E-commerce Product Launch',
      description: 'Product demonstration videos, lifestyle photography, and social media campaign for new skincare line.',
      category: 'Beauty & Wellness',
      isVideo: true
    },
    {
      title: 'Corporate Training Videos',
      description: 'Series of professional training modules with animations, graphics, and interactive elements for global team.',
      category: 'Corporate',
      isVideo: true
    },
    {
      title: 'Nonprofit Awareness Campaign',
      description: 'Emotional storytelling campaign including donor testimonials, impact videos, and social media content.',
      category: 'Nonprofit',
      isVideo: true
    },
    {
      title: 'Real Estate Marketing',
      description: 'Virtual property tours, drone footage, and social media content for luxury real estate developments.',
      category: 'Real Estate',
      isVideo: true
    },
    {
      title: 'Fashion Brand Campaign',
      description: 'Seasonal lookbook photography, behind-the-scenes content, and influencer collaboration videos.',
      category: 'Fashion',
      isVideo: false
    },
    {
      title: 'Fintech App Promotion',
      description: 'App demo videos, user testimonials, and social media content explaining complex financial concepts simply.',
      category: 'Financial Services',
      isVideo: true
    }
  ];

  const tabs = [
    {
      id: 'individuals',
      label: 'Individuals',
      icon: Users,
      description: 'Personal brands, influencers, and content creators'
    },
    {
      id: 'companies',
      label: 'Companies',
      icon: Building,
      description: 'Businesses, startups, and established brands'
    }
  ];

  const currentProjects = activeTab === 'individuals' ? individualsProjects : companiesProjects;

  return (
    <PageTransition>
      <div className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Our Work
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                Explore our portfolio of creative projects that have helped individuals and businesses 
                connect with their audiences and achieve their goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-2 flex">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    className={`relative px-8 py-4 rounded-xl font-medium transition-colors duration-200 flex items-center space-x-3 ${
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl"
                        layoutId="activeTabBg"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center space-x-3">
                      <tab.icon className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-semibold">{tab.label}</div>
                        <div className={`text-xs ${activeTab === tab.id ? 'text-white/80' : 'text-gray-500'}`}>
                          {tab.description}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProjects.map((project, index) => (
                    <PortfolioCard
                      key={`${activeTab}-${index}`}
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      isVideo={project.isVideo}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  500+
                </div>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  50M+
                </div>
                <p className="text-gray-600 font-medium">Views Generated</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  98%
                </div>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  24h
                </div>
                <p className="text-gray-600 font-medium">Average Turnaround</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Whether you're an individual or a company, our process ensures amazing results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Understanding Your Vision
                      </h3>
                      <p className="text-gray-600">
                        We start by understanding your goals, target audience, and brand personality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Creative Development
                      </h3>
                      <p className="text-gray-600">
                        Our team develops concepts and creates content that aligns with your objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Delivery & Optimization
                      </h3>
                      <p className="text-gray-600">
                        We deliver polished content and provide ongoing optimization based on performance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Play className="w-10 h-10 text-primary-600" />
                    </motion.div>
                    <motion.div
                      className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                      <ExternalLink className="w-10 h-10 text-accent-600" />
                    </motion.div>
                    <motion.div
                      className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    >
                      <Users className="w-10 h-10 text-primary-600" />
                    </motion.div>
                    <motion.div
                      className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    >
                      <Building className="w-10 h-10 text-accent-600" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Ready to Create Your Next Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful individuals and companies who've elevated their brand with our creative solutions.
              </p>
              <motion.a
                href="/contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
