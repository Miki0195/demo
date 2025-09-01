import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('individual');
  const [formData, setFormData] = useState({
    // Common fields
    name: '',
    email: '',
    phone: '',
    message: '',
    // Individual specific
    projectType: '',
    budget: '',
    // Company specific
    companyName: '',
    position: '',
    companySize: '',
    industry: '',
    projectScope: '',
    timeline: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll get back to you soon.');
  };

  const projectTypes = [
    'Social Media Content',
    'Video Production',
    'Photography',
    'Brand Design',
    'Content Strategy',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const companySizes = [
    'Startup (1-10 employees)',
    'Small Business (11-50 employees)',
    'Medium Business (51-200 employees)',
    'Large Enterprise (200+ employees)'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail/E-commerce',
    'Food & Beverage',
    'Fashion',
    'Real Estate',
    'Education',
    'Nonprofit',
    'Other'
  ];

  const timelines = [
    'ASAP',
    'Within 2 weeks',
    'Within 1 month',
    'Within 3 months',
    'Flexible'
  ];

  const formTypes = [
    {
      id: 'individual',
      label: 'Individual',
      icon: User,
      description: 'Content creators, influencers, personal brands'
    },
    {
      id: 'company',
      label: 'Company',
      icon: Building,
      description: 'Businesses, startups, organizations'
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
                Let's Create Together
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                Ready to elevate your content and connect with your audience? 
                Let's discuss your project and bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Form Type Selector */}
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-100 rounded-2xl p-2 flex">
                  {formTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      className={`relative px-8 py-4 rounded-xl font-medium transition-colors duration-200 flex items-center space-x-3 ${
                        activeForm === type.id
                          ? 'text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      onClick={() => setActiveForm(type.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeForm === type.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl"
                          layoutId="activeFormBg"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                      <div className="relative z-10 flex items-center space-x-3">
                        <type.icon className="w-5 h-5" />
                        <div className="text-left">
                          <div className="font-semibold">{type.label}</div>
                          <div className={`text-xs ${activeForm === type.id ? 'text-white/80' : 'text-gray-500'}`}>
                            {type.description}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Dynamic Form */}
              <motion.div
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AnimatePresence mode="wait">
                  <motion.form
                    key={activeForm}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {activeForm === 'individual' ? 'Full Name' : 'Contact Name'}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Company-specific fields */}
                    {activeForm === 'company' && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Your company name"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Position
                          </label>
                          <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            placeholder="e.g., Marketing Manager"
                          />
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Project Type / Company Size */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {activeForm === 'individual' ? 'Project Type' : 'Company Size'}
                        </label>
                        <select
                          name={activeForm === 'individual' ? 'projectType' : 'companySize'}
                          value={activeForm === 'individual' ? formData.projectType : formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Select an option</option>
                          {(activeForm === 'individual' ? projectTypes : companySizes).map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Individual Budget / Company Industry & Timeline */}
                    {activeForm === 'individual' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Industry
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          >
                            <option value="">Select industry</option>
                            {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline}>
                                {timeline}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {activeForm === 'individual' ? 'Tell us about your project' : 'Project Details'}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder={
                          activeForm === 'individual'
                            ? 'Describe your project, goals, and any specific requirements...'
                            : 'Tell us about your project scope, goals, and any specific requirements...'
                        }
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </motion.form>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600">hello@creativestudio.com</p>
                <p className="text-gray-600">projects@creativestudio.com</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600">New York, NY</p>
                <p className="text-gray-600">Remote team worldwide</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Common Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get quick answers to frequently asked questions about our services and process
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: 'How long does a typical project take?',
                  answer: 'Project timelines vary based on scope and complexity. Simple social media content can be delivered within 24-48 hours, while comprehensive video production may take 1-2 weeks.'
                },
                {
                  question: 'Do you work with both individuals and companies?',
                  answer: 'Yes! We work with content creators, influencers, small businesses, startups, and established companies. Our approach is tailored to each client\'s specific needs and goals.'
                },
                {
                  question: 'What\'s included in your content packages?',
                  answer: 'Our packages typically include concept development, creation, editing, and optimization for your chosen platforms. We also provide source files and usage rights for all content.'
                },
                {
                  question: 'Can you help with content strategy?',
                  answer: 'Absolutely! We offer comprehensive content strategy services including audience analysis, content planning, platform optimization, and performance tracking.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
