import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Video, 
  Edit, 
  Camera, 
  Palette, 
  TrendingUp,
  MessageCircle,
  BarChart3
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import PageTransition from '../components/PageTransition';

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: 'Social Media Content',
      description: 'Eye-catching posts, stories, and reels that stop the scroll and drive engagement across all major platforms.',
      features: [
        'Custom graphics and animations',
        'Story templates and highlights',
        'Carousel posts and infographics',
        'Platform-specific optimization',
        'Content calendar planning'
      ]
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'From concept to final cut, we create compelling video content that tells your brand story and captivates audiences.',
      features: [
        'Brand commercials and promos',
        'Product demonstration videos',
        'Behind-the-scenes content',
        'Testimonial and case studies',
        'Live event coverage'
      ]
    },
    {
      icon: Edit,
      title: 'Video Editing',
      description: 'Professional post-production services that transform raw footage into polished, engaging content.',
      features: [
        'Color grading and correction',
        'Motion graphics and titles',
        'Sound design and mixing',
        'Multi-camera editing',
        'Format optimization'
      ]
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for products, lifestyle, and brand storytelling across digital platforms.',
      features: [
        'Product photography',
        'Lifestyle and brand shoots',
        'Event photography',
        'Portrait sessions',
        'Stock content creation'
      ]
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Complete visual identity solutions that make your brand memorable and instantly recognizable.',
      features: [
        'Logo design and branding',
        'Brand guidelines',
        'Marketing materials',
        'Social media templates',
        'Web graphics'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Data-driven strategies that align your content with business goals and audience preferences.',
      features: [
        'Content audits and analysis',
        'Audience research',
        'Content calendars',
        'Performance tracking',
        'Strategy optimization'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your brand, goals, and audience to understand what makes you unique.',
      icon: MessageCircle
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive content strategy tailored to your objectives and platforms.',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Creation',
      description: 'Our team brings your content to life with creativity, precision, and attention to detail.',
      icon: Palette
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We analyze performance and continuously refine our approach for maximum impact.',
      icon: TrendingUp
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
                Our Services
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                From viral social content to cinematic brand stories, we offer comprehensive 
                creative services that help your brand stand out and connect with audiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
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
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive creative solutions designed to elevate your brand and engage your audience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven approach that ensures every project delivers maximum impact
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-30 z-0" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center mx-auto mb-6 group hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-gradient mb-2">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                  Why Choose Us?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fresh Perspective
                      </h3>
                      <p className="text-gray-600">
                        Our young team brings innovative ideas and stays ahead of the latest trends.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Turnaround
                      </h3>
                      <p className="text-gray-600">
                        We understand the pace of digital marketing and deliver quality content quickly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Data-Driven Results
                      </h3>
                      <p className="text-gray-600">
                        Every creative decision is backed by insights and optimized for performance.
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
                <div className="aspect-square bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Instagram className="w-12 h-12 text-primary-600" />
                    </div>
                    <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Video className="w-12 h-12 text-accent-600" />
                    </div>
                    <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Camera className="w-12 h-12 text-primary-600" />
                    </div>
                    <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Palette className="w-12 h-12 text-accent-600" />
                    </div>
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
                Ready to Elevate Your Content?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help your brand stand out and achieve its goals.
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

export default Services;
