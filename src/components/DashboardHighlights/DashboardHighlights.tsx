'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './DashboardHighlights.module.scss';

export default function DashboardHighlights() {
  const highlights = [
    {
      icon: 'mdi:view-grid',
      title: 'Multi-App Overview',
      description:
        'Unified product dashboard showing all connected applications, user metrics, and system health',
      stats: '10+ Apps',
      color: '#0EEAFF',
    },
    {
      icon: 'mdi:source-branch',
      title: 'Permissions Visualizer',
      description:
        'Interactive permission management UI with role hierarchy and access mapping',
      stats: '500+ Roles',
      color: '#7A3FF0',
    },
    {
      icon: 'mdi:pulse',
      title: 'Activity Heatmaps',
      description:
        'Real-time usage patterns and engagement analytics across all platforms',
      stats: 'Live Data',
      color: '#FF8A2A',
    },
    {
      icon: 'mdi:brain',
      title: 'AI Insights',
      description:
        'Predictive analytics, anomaly detection, and intelligent recommendations',
      stats: '24/7 Active',
      color: '#0EEAFF',
    },
    {
      icon: 'mdi:currency-usd',
      title: 'Billing Analytics',
      description:
        'Revenue tracking, subscription metrics, and payment intelligence',
      stats: '$2M+ Processed',
      color: '#7A3FF0',
    },
    {
      icon: 'mdi:shield',
      title: 'Audit Logs',
      description:
        'Complete activity trail with filtering, search, and compliance reporting',
      stats: '100% Coverage',
      color: '#FF8A2A',
    },
  ];

  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.background} />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          className={`section-header ${styles.header}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.badgeWrapper}>
            <motion.div
              className={styles.badgeGlow}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className={styles.badge}>
              <Icon icon="mdi:view-grid" width={20} height={20} className={styles.badgeIcon} />
              <span>Dashboard Preview</span>
            </div>
          </div>

          <h2 className="section-title">
            Unified{' '}
            <span className="section-gradient-text">Admin Platform</span>{' '}
            for Developers
          </h2>

          <p className="section-description">
            A comprehensive admin platform for developers with powerful
            permission management UI, analytics, and real-time insights across
            all your applications.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          className={styles.mockupWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.mockupGlow} />

          <div className={styles.mockupCard}>
            {/* Browser Header */}
            <div className={styles.browserBar}>
              <span className={`${styles.dot} ${styles.orange}`} />
              <span className={`${styles.dot} ${styles.cyan}`} />
              <span className={`${styles.dot} ${styles.purple}`} />
              <div className={styles.addressBar}>
                dashboard.superadmin.io
              </div>
            </div>

            {/* Image */}
            <div className={styles.imageWrapper}>
              <img
                src="/Dashboard-preview-image.jpg"
                alt="SuperAdmin Dashboard Preview"
                width={1200}
                height={675}
              />
              <div className={styles.overlay} />

              {/* Floating Stats */}
              <div className={styles.stats}>
                {[
                  { label: 'Users', value: '50M', color: '#0EEAFF' },
                  { label: 'Apps', value: '10K', color: '#7A3FF0' },
                  { label: 'Uptime', value: '99.99%', color: '#FF8A2A' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className={styles.statCard}
                    style={{ borderColor: `${stat.color}30` }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div style={{ color: stat.color }} className={styles.statValue}>
                      {stat.value}
                    </div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <Row className="g-4">
          {highlights.map((item, index) => (
            <Col key={index} sm={6} lg={4}>
              <motion.div
                className={styles.cardWrapper}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
              <div
                className={styles.cardGlow}
                style={{ backgroundColor: item.color }}
              />

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <motion.div
                    className={styles.icon}
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, transparent)`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <Icon icon={item.icon} width={28} height={28} style={{ color: item.color }} />
                  </motion.div>

                  <div
                    className={styles.statsBadge}
                    style={{
                      borderColor: `${item.color}30`,
                      background: `${item.color}10`,
                      color: item.color,
                    }}
                  >
                    {item.stats}
                  </div>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <motion.div
                  className={styles.corner}
                  style={{
                    background: `linear-gradient(135deg, transparent, ${item.color})`,
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
