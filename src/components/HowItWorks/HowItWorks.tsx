'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import styles from './HowItWorks.module.scss';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: 'mdi:power-plug',
      title: 'Connect Your Apps',
      description:
        'Integrate your web, mobile, and enterprise applications using our SDKs or REST APIs. App backend integration takes minutes with our documentation.',
      color: '#0EEAFF',
    },
    {
      number: '02',
      icon: 'mdi:account-group',
      title: 'Import Users & Roles',
      description:
        'Migrate existing users or start fresh. Role syncing auto-maps your permission structures across all applications.',
      color: '#7A3FF0',
    },
    {
      number: '03',
      icon: 'mdi:speedometer',
      title: 'Manage in One Dashboard',
      description:
        'Control authentication, permissions, billing, and analytics from one unified admin panel.',
      color: '#FF8A2A',
    },
    {
      number: '04',
      icon: 'mdi:sparkles',
      title: 'AI Automates the Rest',
      description:
        'AI handles monitoring, predictions, optimization, and alerts — letting you focus on building.',
      color: '#0EEAFF',
    },
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      {/* Background */}
      <div className={styles.background} />

      {/* Floating Orb */}
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
          className={`section-header ${styles.header}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.badgeWrapper}>
            <div className={styles.badgeGlow} />
            <div className={styles.badge}>
              <Icon icon="mdi:sparkles" width={20} height={20} className={styles.badgeIcon} />
              <span>Simple Setup</span>
            </div>
          </div>

          <h2 className="section-title">
            Get Started in{' '}
            <span className="section-gradient-text">4 Simple Steps</span>
          </h2>

          <p className="section-description">
            Identity management setup in minutes. From backend integration to AI
            automation — transform your auth infrastructure instantly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className={styles.stepsWrapper}>
          <div className={styles.centerLine} />

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`${styles.step} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Card */}
                <motion.div
                  className={styles.card}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className={styles.cardGlow}
                    style={{ backgroundColor: step.color }}
                  />

                  <div className={styles.cardInner}>
                    {/* Step Number Badge */}
                    <motion.div
                      className={styles.stepBadge}
                      style={{
                        borderColor: step.color,
                        background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span style={{ color: step.color }}>{step.number}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={styles.iconWrapper}
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <Icon icon={step.icon} width={32} height={32} style={{ color: step.color }} />
                    </motion.div>

                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>

                    {/* Decorative corner */}
                    <motion.div
                      className={styles.corner}
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, transparent)`,
                      }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Connector Dot */}
                <motion.div
                  className={styles.centerDot}
                  style={{ backgroundColor: step.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={styles.centerDotPulse}
                    style={{ backgroundColor: step.color }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.button
            className={styles.ctaButton}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(255, 138, 42, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={styles.ctaButtonAnim}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className={styles.ctaText}>
              Start Integration in Minutes
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
