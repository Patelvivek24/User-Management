'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './KeyBenefits.module.scss';

export default function KeyBenefits() {
  const benefits = [
    {
      slug: 'launch-products-faster',
      icon: 'mdi:rocket',
      audience: 'Founders & Product Teams',
      title: 'Launch Products 10x Faster',
      description:
        'Skip months of authentication and admin infrastructure. Ship new mobile apps, web platforms, and SaaS products with enterprise-grade identity from day one.',
      points: [
        'Reduce time-to-market by 80%',
        'Focus on core product features',
        'Enterprise security out of the box',
        'Scale without rebuilding infrastructure',
      ],
      color: '#FF8A2A',
    },
    {
      slug: 'build-features-not-boilerplate',
      icon: 'mdi:code-tags',
      audience: 'Developers',
      title: 'Build Features, Not Boilerplate',
      description:
        'Stop duplicating authentication code. Our unified app identity platform provides SDKs, APIs, and documentation so you can integrate in hours, not weeks.',
      points: [
        'Simple SDK integration',
        'Webhook support',
        'Test mode',
        'Clean API docs',
      ],
      color: '#0EEAFF',
    },
    {
      slug: 'seamless-experience',
      icon: 'mdi:account-group',
      audience: 'End Users',
      title: 'Seamless Experience Across Apps',
      description:
        'Single sign-on across all products. Users authenticate once and access everything.',
      points: [
        'One account everywhere',
        'Passwordless login',
        'Privacy-first',
        'Consistent UX',
      ],
      color: '#7A3FF0',
    },
    {
      slug: 'ai-powered-growth',
      icon: 'mdi:trending-up',
      audience: 'Ops & Revenue Teams',
      title: 'AI-Powered Growth',
      description:
        'Predict churn, automate billing, and unlock expansion insights using AI.',
      points: [
        'Churn prediction',
        'Revenue analytics',
        'Usage billing',
        'Growth insights',
      ],
      color: '#FF8A2A',
    },
  ];

  return (
    <section className={styles.section} id="benefits">
      {/* animated background orb */}
      <motion.div
        className={styles.orb}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <Container className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            <Icon icon="mdi:trending-up" width={18} height={18} />
            Key Benefits
          </span>

          <h2>
            Built for <span>Every Stakeholder</span>
          </h2>

          <p>
            From demo to full production, our identity platform powers teams across
            the organization.
          </p>
        </motion.div>

        {/* Cards */}
        <Row className="g-4">
          {benefits.map((benefit, i) => {
            return (
              <Col lg={6} key={i}>
                <Link href={`/features/${benefit.slug}`} style={{ textDecoration: 'none' }}>
                  <motion.div
                    className={styles.card}
                    whileHover={{ y: -12 }}
                    style={{ '--accent': benefit.color } as React.CSSProperties & { '--accent': string }}
                  >
                    <div className={styles.cardInner}>
                    <div className={styles.cardHeader}>
                      <div className={styles.icon}>
                        <Icon icon={benefit.icon} width={34} height={34} style={{ color: benefit.color }} />
                      </div>

                      <div>
                        <small>{benefit.audience}</small>
                        <h3>{benefit.title}</h3>
                      </div>
                    </div>

                    <p className={styles.description}>{benefit.description}</p>

                    <ul className={styles.points}>
                      {benefit.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    <Icon icon="mdi:arrow-right" className={styles.arrow} />
                  </div>
                </motion.div>
                </Link>
              </Col>
            );
          })}
        </Row>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3>See the Benefits in Action</h3>
          <p>Join thousands of teams building faster with AI-powered identity</p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial <Icon icon="mdi:arrow-right" width={20} height={20} />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
