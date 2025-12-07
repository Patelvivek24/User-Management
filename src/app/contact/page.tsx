'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the data to your backend
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'mdi:email',
      title: 'Email',
      value: 'contact@superadmin.com',
      color: '#0EEAFF',
    },
    {
      icon: 'mdi:phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: '#7A3FF0',
    },
    {
      icon: 'mdi:map-marker',
      title: 'Address',
      value: '123 Tech Street, San Francisco, CA 94105',
      color: '#FF8A2A',
    },
  ];

  return (
    <>
      <Header />
      <section className={styles.section}>
        {/* Background Elements */}
        <div className={styles.background} />
        <motion.div
          className={styles.orb}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <Container style={{ position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badgeWrapper}>
              <motion.div
                className={styles.badgeGlow}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className={styles.badge}>
                <Icon icon="mdi:email" width={20} height={20} className={styles.badgeIcon} />
                <span>Get in Touch</span>
              </div>
            </div>

            <h1 className={styles.title}>
              Contact <span className={styles.gradientText}>Us</span>
            </h1>
            <p className={styles.subtitle}>
              Have a question or want to learn more? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <Row className={styles.contentRow}>
            {/* Contact Form */}
            <Col lg={7} className={styles.formCol}>
              <motion.div
                className={styles.formCard}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.formGlow} />
                <div className={styles.formInner}>
                  <h2 className={styles.formTitle}>Send us a Message</h2>
                  <p className={styles.formSubtitle}>Fill out the form below and we'll get back to you</p>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>
                        Subject <span className={styles.required}>*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${styles.select} ${errors.subject ? styles.inputError : ''}`}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Message <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && <span className={styles.error}>{errors.message}</span>}
                    </div>

                    {/* Submit Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        className={styles.successMessage}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Icon icon="mdi:check-circle" width={20} height={20} />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        className={styles.errorMessage}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Icon icon="mdi:alert-circle" width={20} height={20} />
                        <span>Something went wrong. Please try again later.</span>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Icon icon="mdi:loading" width={20} height={20} className={styles.spinner} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Icon icon="mdi:send" width={20} height={20} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </Col>

            {/* Contact Info */}
            <Col lg={5} className={styles.infoCol}>
              <motion.div
                className={styles.infoCard}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className={styles.infoTitle}>Other Ways to Reach Us</h3>
                <p className={styles.infoSubtitle}>
                  Prefer a different method? Use one of these options to get in touch.
                </p>

                <div className={styles.contactList}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className={styles.contactItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div
                        className={styles.contactIcon}
                        style={{
                          background: `linear-gradient(135deg, ${info.color}20, transparent)`,
                        }}
                      >
                        <Icon icon={info.icon} width={24} height={24} style={{ color: info.color }} />
                      </div>
                      <div className={styles.contactContent}>
                        <h4 className={styles.contactTitle}>{info.title}</h4>
                        <p className={styles.contactValue}>{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.socialSection}>
                  <h4 className={styles.socialTitle}>Follow Us</h4>
                  <div className={styles.socialLinks}>
                    {[
                      { icon: 'mdi:twitter', href: '#', color: '#0EEAFF' },
                      { icon: 'mdi:github', href: '#', color: '#7A3FF0' },
                      { icon: 'mdi:linkedin', href: '#', color: '#FF8A2A' },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={styles.socialLink}
                        style={{ borderColor: `${social.color}30` }}
                        whileHover={{ scale: 1.1, borderColor: social.color }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon icon={social.icon} width={20} height={20} style={{ color: social.color }} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
