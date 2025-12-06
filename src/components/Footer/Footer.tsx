'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
    Developers: ['Documentation', 'API Reference', 'SDKs', 'GitHub'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    Legal: ['GDPR', 'Security'],
  };

  const getLinkHref = (link: string) => {
    if (link === 'Contact') return '/contact';
    return '#';
  };

  const socialLinks = [
    { icon: 'mdi:twitter', href: '#', label: 'Twitter', color: '#0EEAFF' },
    { icon: 'mdi:github', href: '#', label: 'GitHub', color: '#7A3FF0' },
    { icon: 'mdi:linkedin', href: '#', label: 'LinkedIn', color: '#FF8A2A' },
    { icon: 'mdi:email', href: '#', label: 'Email', color: '#0EEAFF' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Gradient Orb */}
      <motion.div
        className={styles.gradientOrb}
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <Container>
        <Row className={styles.mainRow}>
          {/* Brand Column */}
          <Col lg={4} md={6} className={styles.brandCol}>
            <motion.div
              className={styles.brandLogo}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.logoWrapper}>
                <div className={styles.logoGlow} />
                <div className={styles.logoBox}>
                  <div className={styles.logoInner} />
                </div>
              </div>
              <div>
                <div className={styles.brandName}>Super Admin</div>
                <div className={styles.brandTagline}>Auth as a Service</div>
              </div>
            </motion.div>

            <p className={styles.brandDesc}>
              The unified AI-powered control plane for authentication, roles, permissions, billing, and multi-application management.
            </p>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => {
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={styles.socialItem}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <motion.div
                      className={styles.socialGlow}
                      style={{ background: `linear-gradient(135deg, ${social.color}20, transparent)` }}
                    />
                    <Icon icon={social.icon} className={styles.socialIcon} width={20} height={20} />
                  </motion.a>
                );
              })}
            </div>
          </Col>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Col key={category} lg={2} md={6} sm={6} className={styles.linkCol}>
              <motion.h4
                className={styles.linkCategory}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.h4>
              <ul className={styles.linkList}>
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link href={getLinkHref(link)} className={styles.linkItem}>
                      <motion.span className={styles.dot} whileHover={{ x: 5 }} />
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        {/* Bottom Bar */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span>© 2025 Neophoniex - Super Admin & Auth as a Service. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Icon icon="mdi:heart" width={16} height={16} className={styles.heart} />
              </motion.div>
            </div>

            <div className={styles.bottomLinks}>
              {['Privacy', 'Terms', 'Cookies'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className={styles.bottomLink}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {link}
                  <span className={styles.underline} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative Bottom Orbs */}
        <motion.div
          className={styles.bottomOrbLeft}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={styles.bottomOrbRight}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </Container>
    </footer>
  );
}
