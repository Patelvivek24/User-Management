'use client';

import { useState } from 'react';
import styles from './ContactDemo.module.scss';

export default function ContactDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Request a Demo</h2>
            <p className={styles.subtitle}>
              See how our platform can transform your user management process. 
              Schedule a personalized demo with our team.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@usermanagement.com</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>💬</div>
                <div>
                  <h4>Live Chat</h4>
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

