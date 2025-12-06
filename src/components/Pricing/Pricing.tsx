'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.scss';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      icon: 'mdi:rocket',
      price: '$49',
      period: '/month',
      description: 'Perfect for startups and small teams testing the platform',
      features: [
        'Up to 1,000 monthly active users',
        'Basic authentication & OAuth',
        'Role-based access control',
        'Standard support',
        'Community access',
        '99.9% uptime SLA',
      ],
      limitations: [
        'Limited to 2 connected apps',
        'Basic analytics only',
        'No AI insights',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
      color: '#0EEAFF',
    },
    {
      name: 'Pro',
      icon: 'mdi:lightning-bolt',
      price: '$299',
      period: '/month',
      description: 'For growing companies managing multiple applications',
      features: [
        'Up to 25,000 monthly active users',
        'Advanced authentication (passwordless, 2FA)',
        'RBAC + ABAC permissions',
        'Full billing engine integration',
        'AI insights & automation',
        'Multi-app analytics dashboard',
        'Audit logs & compliance',
        'Priority support',
        '99.95% uptime SLA',
      ],
      limitations: [
        'Up to 10 connected apps',
      ],
      cta: 'Start Pro Trial',
      highlighted: true,
      color: '#FF8A2A',
    },
    {
      name: 'Enterprise',
      icon: 'mdi:office-building',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited monthly active users',
        'White-label options',
        'Custom authentication flows',
        'Advanced AI anomaly detection',
        'Dedicated infrastructure',
        'On-premise deployment option',
        'Custom SLA agreements',
        'Dedicated account manager',
        '24/7 premium support',
        'Custom integrations',
        'Security audits & compliance',
      ],
      limitations: [],
      cta: 'Contact Sales',
      highlighted: false,
      color: '#7A3FF0',
    },
  ];

  return (
    <section className={styles.section} id="pricing">
      {/* Background grid */}
      <motion.div
        className={styles.gridBackground}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            <Icon icon="mdi:lightning-bolt" width={18} height={18} /> Flexible Pricing
          </span>
          <h2>
            Choose Your <span>Perfect Plan</span>
          </h2>
          <p>
            Scale as you grow. All plans include core authentication features and can be upgraded anytime.
          </p>
        </motion.div>

        {/* Plans */}
        <Row className="g-4">
          {plans.map((plan, index) => {
            return (
              <Col lg={4} key={index}>
                <motion.div
                  className={styles.card}
                  style={{ '--accent': plan.color } as React.CSSProperties & { '--accent': string }}
                  whileHover={{ y: plan.highlighted ? -5 : -10, scale: plan.highlighted ? 1 : 1.02 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Highlight badge */}
                  {plan.highlighted && (
                    <motion.div className={styles.highlightBadge}>
                      <Icon icon="mdi:star" width={16} height={16} style={{ fill: 'white' }} />
                      Most Popular
                    </motion.div>
                  )}

                  <div className={styles.cardInner}>
                    {/* Icon & Name */}
                    <div className={styles.cardHeader}>
                      <motion.div className={styles.icon} whileHover={{ rotate: 360 }}>
                        <Icon icon={plan.icon} width={32} height={32} style={{ color: plan.color }} />
                      </motion.div>
                      <h3>{plan.name}</h3>
                    </div>

                    {/* Price */}
                    <div className={styles.price}>
                      <motion.span>{plan.price}</motion.span>
                      {plan.period && <span>{plan.period}</span>}
                    </div>

                    <p className={styles.description}>{plan.description}</p>

                    <motion.button className={plan.highlighted ? styles.ctaHighlighted : styles.cta}>
                      {plan.cta}
                    </motion.button>

                    {/* Features */}
                    <ul className={styles.features}>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <Icon icon="mdi:check" width={18} height={18} style={{ color: plan.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <ul className={styles.limitations}>
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx}>{limitation}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
