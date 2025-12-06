'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import styles from "./PlatformFeatures.module.scss";

export default function PlatformFeatures() {
  const features = [
    {
      slug: 'unified-authentication-system',
      icon: 'mdi:lock',
      title: "Unified Authentication System",
      description:
        "Complete mobile app authentication and web app login solution with passwordless authentication, OAuth integration, OTP verification, token management, cross-platform identity sync, and AI-powered fraud detection.",
      highlights: [
        "Passwordless login flows",
        "OAuth 2.0 & social login",
        "OTP & 2FA support",
        "Token lifecycle management",
        "AI fraud detection",
      ],
      accentColor: "#0EEAFF",
    },
    {
      slug: 'super-admin-dashboard',
      icon: 'mdi:speedometer',
      title: "Super Admin Dashboard",
      description:
        "Unified admin panel for apps with comprehensive user management, role assignment, permission mapping, multi-app analytics dashboard, and complete audit logs across all platforms.",
      highlights: [
        "Cross-app user management",
        "Dynamic role assignment",
        "Permission visualizer",
        "Multi-app analytics",
        "Complete audit trails",
      ],
      accentColor: "#7A3FF0",
    },
    {
      slug: 'ai-insights-automation',
      icon: 'mdi:brain',
      title: "AI Insights & Automation",
      description:
        "AI admin tools with predictive analytics, anomaly detection, and intelligent automation. Get churn prediction, suspicious access alerts, usage insights, and permission overreach detection.",
      highlights: [
        "Churn prediction models",
        "Real-time threat detection",
        "Usage pattern analysis",
        "Permission auditing",
        "Automated workflows",
      ],
      accentColor: "#FF8A2A",
    },
    {
      slug: 'billing-engine',
      icon: 'mdi:credit-card',
      title: "Billing Engine for Apps",
      description:
        "Complete billing engine for apps supporting subscriptions, usage-based billing, credit systems, auto-upgrades, with Stripe, Razorpay, and App Store Connect integration.",
      highlights: [
        "Flexible subscription plans",
        "Usage-based metering",
        "Credit & wallet systems",
        "Auto-upgrade logic",
        "Multi-payment gateway",
      ],
      accentColor: "#0EEAFF",
    },
    {
      slug: 'advanced-permissions',
      icon: 'mdi:key',
      title: "Advanced Permissions (RBAC/ABAC)",
      description:
        "Enterprise-grade RBAC for web apps with dynamic roles, attribute-based access control, organization-level permissions, and inheritance models for complex access control scenarios.",
      highlights: [
        "Dynamic role creation",
        "Attribute-based rules",
        "Org-level hierarchies",
        "Permission inheritance",
        "Real-time sync",
      ],
      accentColor: "#7A3FF0",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.backgroundGrid} />

      <Container>
        {/* Section Header */}
        <motion.div
          className={`section-header ${styles.header}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionBadgeWrapper}>
            <motion.div
              className={styles.badgeGlow}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className={styles.sectionBadge}>
              <Icon icon="mdi:sparkles" width={20} height={20} className={styles.badgeIcon} />
              <span>Platform Features</span>
            </div>
          </div>

          <h2 className="section-title">
            Everything You Need,{" "}
            <span className="section-gradient-text">Unified & Intelligent</span>
          </h2>

          <p className="section-description">
            A complete authentication for mobile apps, identity management setup,
            and admin platform for developers. Built for scale, security, and
            AI-powered intelligence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <Row>
          {features.map((feature, index) => (
            <Col md={6} key={index} className="mb-4">
              <Link href={`/features/${feature.slug}`} style={{ textDecoration: 'none' }}>
                <motion.div
                  className={styles.featureCardWrapper}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={styles.featureGlow}
                    style={{
                      background: `linear-gradient(135deg, ${feature.accentColor}, transparent)`,
                    }}
                  />

                  <div className={styles.featureCard}>
                  <div
                    className={styles.featureAccent}
                    style={{
                      background: `radial-gradient(circle, ${feature.accentColor}, transparent)`,
                    }}
                  />

                  <motion.div
                    className={styles.featureIconWrapper}
                    style={{
                      background: `linear-gradient(135deg, ${feature.accentColor}20, transparent)`,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={styles.featureIconBlur}
                      style={{ backgroundColor: feature.accentColor }}
                    />
                    <Icon
                      icon={feature.icon}
                      width={36}
                      height={36}
                      className={styles.featureIcon}
                      style={{ color: feature.accentColor }}
                    />
                  </motion.div>

                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>

                  <div className={styles.highlights}>
                    {feature.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className={styles.highlightItem}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className={styles.bullet}
                          style={{ backgroundColor: feature.accentColor }}
                        />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
