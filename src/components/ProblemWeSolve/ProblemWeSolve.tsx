'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProblemWeSolve.module.scss';

export default function ProblemWeSolve() {
  const problems = [
    {
      icon: 'mdi:shield',
      title: 'Authentication Systems',
      description: 'Building login flows, OAuth, passwordless auth from scratch for every app',
      gradient: 'gradient1',
    },
    {
      icon: 'mdi:account-group',
      title: 'Roles & Permissions',
      description: 'Complex RBAC/ABAC logic duplicated across mobile, web, and backend',
      gradient: 'gradient2',
    },
    {
      icon: 'mdi:chart-bar',
      title: 'User & Org Management',
      description: 'Separate admin panels for each product with no unified view',
      gradient: 'gradient3',
    },
    {
      icon: 'mdi:credit-card',
      title: 'Billing Logic',
      description: 'Payment integration, subscription management, usage tracking rebuilt per app',
      gradient: 'gradient4',
    },
    {
      icon: 'mdi:code-tags',
      title: 'Admin Panels',
      description: 'Custom dashboards for analytics, logs, and user operations',
      gradient: 'gradient5',
    },
    {
      icon: 'mdi:alert-triangle',
      title: 'Security & Anomaly Detection',
      description: 'Manual monitoring for suspicious activity and access violations',
      gradient: 'gradient6',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.section}>
      {/* Background Effects */}
      <div className={styles.backgroundLayer}>
        <div className={styles.darkGradient} />
        <motion.div
          className={styles.purpleBlob}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          className={`section-header ${styles.header}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.badgeWrapper}>
            <motion.div className={styles.badgeGlow}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className={styles.badge}>
              <Icon icon="mdi:alert-triangle" width={20} height={20} className={styles.badgeIcon} />
              <span>The Problem</span>
            </div>
          </div>

          <h2 className="section-title">
            Stop Wasting Months <span className="section-gradient-text">Rebuilding Infrastructure</span>
          </h2>

          <p className="section-description">
            Every new mobile app, web platform, or SaaS product forces teams to rebuild the same auth,
            user management, and billing systems—wasting months and creating security risks.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Row className="g-4" style={{ marginBottom: '5rem' }}>
            {problems.map((p, idx) => (
              <Col key={idx} md={6} lg={4}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={styles.cardWrapper}
                >
              <div className={`${styles.cardGlow} ${styles[p.gradient]}`} />

              <div className={styles.card}>
                <motion.div
                  className={`${styles.iconBox} ${styles[p.gradient]}`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  <div className={styles.iconOverlay} />
                  <Icon icon={p.icon} width={32} height={32} className={styles.icon} />
                </motion.div>

                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDescription}>{p.description}</p>

                <motion.div
                  className={styles.hoverIndicator}
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <Icon icon="mdi:lightning-bolt" width={20} height={20} />
                </motion.div>
              </div>
            </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className={styles.solutionWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.solutionGlow} />

          <div className={styles.solutionCard}>
            <motion.div
              className={styles.pattern}
              animate={{
                backgroundPosition: ['0px 0px', '30px 30px'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            <div className={styles.solutionContent}>
              <div className={styles.solutionBadge}>
                <Icon icon="mdi:lightning-bolt" width={18} height={18} />
                <span>The Solution</span>
              </div>

              <h3 className="section-title">
                Introducing the <span className="section-gradient-text">Centralized AI-Powered Solution</span>
              </h3>

              <p className="section-description">
                A unified identity platform for web apps, mobile apps, and enterprise software—
                bringing authentication, access control, org management, and billing together with AI automation.
              </p>

              <motion.div className={styles.featureRow}>
                {['10x Faster', 'Zero Maintenance', 'Enterprise Ready'].map((txt, i) => (
                  <motion.div key={i} className={styles.featurePill}>
                    {txt}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
