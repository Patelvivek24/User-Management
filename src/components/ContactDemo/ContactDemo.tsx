'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from './ContactDemo.module.scss';

export default function ContactDemo() {
  const featureItems = [
    { icon: 'mdi:shield', label: 'Enterprise Security', color: '#0EEAFF' },
    { icon: 'mdi:lightning-bolt', label: '5-Min Setup', color: '#FF8A2A' },
    { icon: 'mdi:account-group', label: '10K+ Teams', color: '#7A3FF0' },
  ];

  const infoCards = [
    { title: 'Need Help Getting Started?', subtitle: 'Our team is here to guide you', link: 'Contact Support', color: '#0EEAFF' },
    { title: 'Enterprise Solutions', subtitle: 'Custom pricing and on-prem options', link: 'Talk to Sales', color: '#7A3FF0' },
    { title: 'Developer Resources', subtitle: 'Docs, SDKs, and API references', link: 'View Documentation', color: '#FF8A2A' },
  ];

  return (
    <section className={styles.section}>
      {/* Background orbs */}
      <motion.div
        className={styles.orb}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className={styles.container}>
        {/* Main CTA Card */}
        <motion.div
          className={styles.ctaCardWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.outerGlow}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className={styles.ctaCard}>
            {/* Animated background pattern */}
            <motion.div
              className={styles.pattern}
              animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Decorative corners */}
            {[
              { corner: 'top-left', from: '#0EEAFF', rotate: 0 },
              { corner: 'top-right', from: '#FF8A2A', rotate: 90 },
              { corner: 'bottom-left', from: '#7A3FF0', rotate: 270 },
              { corner: 'bottom-right', from: '#0EEAFF', rotate: 180 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.corner} ${styles[item.corner]}`}
                style={{
                  background: `linear-gradient(${item.rotate}deg, ${item.from}, transparent)`,
                }}
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
            ))}

            {/* Content */}
            <div className={styles.ctaContent}>
              {/* Badge */}
              <motion.div
                className={styles.badgeWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.badge}>
                  <Icon icon="mdi:sparkles" width={20} height={20} />
                  Ready to Transform Your Auth Stack?
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                className={styles.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2>
                  Start Your Free Trial{' '}
                  <span>Today</span>
                </h2>
                <p>
                  Join thousands of developers and product teams using our unified app identity platform. No credit card required for app authentication demo and AI admin system trial.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className={styles.featuresRow}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {featureItems.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={styles.featureItem}
                      style={{
                        borderColor: `${item.color}30`,
                        backgroundColor: `${item.color}10`,
                      }}
                      whileHover={{ scale: 1.05, borderColor: item.color }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Icon icon={item.icon} width={20} height={20} style={{ color: item.color }} />
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className={styles.ctaButtons}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.button className={styles.primaryButton}>
                  <span>
                    Start Your Free Trial — No Credit Card Required
                    <Icon icon="mdi:arrow-right" width={24} height={24} />
                  </span>
                </motion.button>

                <motion.button className={styles.secondaryButton}>
                  Schedule a Demo
                </motion.button>
              </motion.div>

              {/* Trust Line */}
              <motion.p
                className={styles.trustLine}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                14-day free trial • No credit card required • Cancel anytime
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info Cards */}
        <Row className={styles.infoCardsRow}>
          {infoCards.map((item, index) => (
            <Col md={4} key={index}>
              <motion.div
                className={styles.infoCard}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
                <motion.a
                  href="#"
                  style={{ color: item.color }}
                  whileHover={{ x: 5 }}
                >
                  {item.link} <Icon icon="mdi:arrow-right" width={16} height={16} />
                </motion.a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
