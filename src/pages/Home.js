import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, Users, Award, Coffee } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Play, value: '1000+', label: 'Videos Created' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Coffee, value: '10000+', label: 'Cups of Coffee' },
  ];

  const services = [
    {
      title: 'Social Media Content',
      description: 'Engaging posts that stop the scroll',
      path: '/services'
    },
    {
      title: 'Video Production',
      description: 'Stories that move and inspire',
      path: '/services'
    },
    {
      title: 'Brand Strategy',
      description: 'Identity that stands out',
      path: '/services'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 gradient-bg opacity-10">
            <motion.div
              className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02,
              }}
              transition={{ type: 'spring', stiffness: 50, damping: 30 }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * -0.02,
                y: mousePosition.y * -0.02,
              }}
              transition={{ type: 'spring', stiffness: 50, damping: 30 }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <Sparkles className="w-4 h-4" />
                  <span>Creative Content Studio</span>
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-gradient">Create.</span>
                <br />
                <span className="text-gray-900">Captivate.</span>
                <br />
                <span className="text-gray-900">Convert.</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We're a young, dynamic creative studio that transforms brands through 
                compelling social media content, stunning video production, and strategic storytelling.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/contact" className="btn-primary group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link to="/portfolio" className="btn-secondary group">
                  <Play className="mr-2 w-5 h-5" />
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 gradient-bg rounded-2xl opacity-20"
            style={{ y: y1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent-500/20 rounded-full opacity-30"
            style={{ y: y2 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className="text-3xl font-display font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Services Preview */}
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
                What We Create
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From viral social content to cinematic brand stories, we bring your vision to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={service.path} className="block">
                    <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
                      <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <motion.div
                        className="mt-4 text-primary-600 font-medium flex items-center justify-center space-x-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
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
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's bring your brand to life with content that connects, engages, and converts.
              </p>
              <Link to="/contact" className="btn-secondary">
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
