'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function AboutPage() {
  const values = [
    {
      icon: 'mdi:shield-check',
      title: 'Security First',
      description: 'We prioritize the security and privacy of our users above all else.',
      color: '#0EEAFF',
    },
    {
      icon: 'mdi:rocket-launch',
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
      color: '#7A3FF0',
    },
    {
      icon: 'mdi:account-group',
      title: 'Customer Focus',
      description: 'Your success is our success. We build with you in mind.',
      color: '#FF8A2A',
    },
    {
      icon: 'mdi:lightbulb-on',
      title: 'Transparency',
      description: 'Open communication and honest partnerships drive everything we do.',
      color: '#0EEAFF',
    },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      description: 'Former lead architect at major tech companies',
      color: '#0EEAFF',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-Founder',
      description: 'Expert in authentication and security systems',
      color: '#7A3FF0',
    },
    {
      name: 'Michael Park',
      role: 'Head of Product',
      description: 'Passionate about building developer-first tools',
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
                <Icon icon="mdi:information" width={20} height={20} className={styles.badgeIcon} />
                <span>Our Story</span>
              </div>
            </div>

            <h1 className={styles.title}>
              About <span className={styles.gradientText}>Us</span>
            </h1>
            <p className={styles.subtitle}>
              We're building the future of authentication and identity management, making it easier for developers to focus on what matters most—building great products.
            </p>
          </motion.div>

          {/* Mission Section */}
          <Row className="g-4 mb-5">
            <Col lg={12}>
              <motion.div
                className={styles.missionCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.missionGlow} />
                <div className={styles.missionContent}>
                  <h2 className={styles.missionTitle}>Our Mission</h2>
                  <p className={styles.missionText}>
                    To empower developers and businesses with a unified, AI-powered platform that simplifies authentication, 
                    access control, and user management. We believe that every team should be able to launch secure, scalable 
                    applications without spending months building infrastructure from scratch.
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Values Section */}
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>The principles that guide everything we do</p>
          </motion.div>

          <Row className="g-4 mb-5">
            {values.map((value, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className={styles.valueIcon}
                    style={{
                      background: `linear-gradient(135deg, ${value.color}20, transparent)`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <Icon icon={value.icon} width={32} height={32} style={{ color: value.color }} />
                  </motion.div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Team Section */}
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <p className={styles.sectionSubtitle}>Meet the people building the future</p>
          </motion.div>

          <Row className="g-4 mb-5">
            {team.map((member, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  className={styles.teamCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={styles.teamGlow}
                    style={{ backgroundColor: member.color }}
                  />
                  <div className={styles.teamContent}>
                    <div
                      className={styles.teamAvatar}
                      style={{
                        background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
                      }}
                    >
                      <Icon icon="mdi:account" width={48} height={48} style={{ color: member.color }} />
                    </div>
                    <h3 className={styles.teamName}>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <p className={styles.teamDescription}>{member.description}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
