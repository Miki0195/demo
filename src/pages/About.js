import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Lightbulb, Target, Zap, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We live and breathe creativity, pouring our hearts into every project.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Always pushing boundaries and exploring new creative territories.'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Beautiful content that drives real business outcomes and engagement.'
    },
    {
      icon: Zap,
      title: 'Fast & Agile',
      description: 'Quick turnarounds without compromising on quality or creativity.'
    }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director',
      bio: 'Visual storyteller with 8+ years crafting viral content for top brands.',
      image: null
    },
    {
      name: 'Jordan Kim',
      role: 'Video Producer',
      bio: 'Award-winning filmmaker specializing in brand narratives and social video.',
      image: null
    },
    {
      name: 'Sam Chen',
      role: 'Social Media Strategist',
      bio: 'Data-driven content creator who knows what makes audiences engage.',
      image: null
    },
    {
      name: 'Maya Patel',
      role: 'Motion Designer',
      bio: 'Animation wizard bringing static brands to life with dynamic motion.',
      image: null
    }
  ];

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
                We're Creative Studio
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                A young, passionate team of creators, storytellers, and strategists 
                dedicated to helping brands connect with their audience through compelling content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2020 by a group of passionate creatives who believed that 
                    every brand has a unique story waiting to be told. We started in a 
                    small studio with big dreams and an unwavering commitment to quality.
                  </p>
                  <p>
                    Today, we've grown into a dynamic team that has helped hundreds of 
                    brands—from ambitious startups to established companies—create content 
                    that not only looks amazing but drives real results.
                  </p>
                  <p>
                    What sets us apart is our fresh perspective, agile approach, and deep 
                    understanding of how modern audiences consume content across different platforms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-700">Global Impact</p>
                    <p className="text-sm text-gray-500">Content reaching millions</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 gradient-bg rounded-2xl opacity-80"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-500/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we create and every relationship we build
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The creative minds behind every successful project
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center">
                    {/* Profile Image Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-12 h-12 text-primary-600" />
                    </div>
                    
                    <h3 className="text-lg font-display font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 gradient-bg">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                To empower brands with creative content that doesn't just capture attention—
                it creates meaningful connections, drives engagement, and delivers measurable results 
                in an increasingly crowded digital landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  Authentic Storytelling
                </span>
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  Data-Driven Creativity
                </span>
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  Results-Oriented
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
