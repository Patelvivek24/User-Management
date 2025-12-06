'use client';

import { useParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.scss';

// Feature data - in a real app, this would come from a database or API
const allFeatures = {
  // Platform Features
  'unified-authentication-system': {
    type: 'platform',
    icon: 'mdi:lock',
    title: 'Unified Authentication System',
    description:
      'Complete mobile app authentication and web app login solution with passwordless authentication, OAuth integration, OTP verification, token management, cross-platform identity sync, and AI-powered fraud detection.',
    highlights: [
      'Passwordless login flows',
      'OAuth 2.0 & social login',
      'OTP & 2FA support',
      'Token lifecycle management',
      'AI fraud detection',
    ],
    accentColor: '#0EEAFF',
    fullDescription: `
      Our Unified Authentication System provides a comprehensive solution for managing user identity across all your applications. Whether you're building mobile apps, web platforms, or enterprise solutions, our authentication system handles everything from passwordless login to advanced security features.

      With support for OAuth 2.0, social logins, and multi-factor authentication, you can provide your users with secure and convenient access to your applications. Our AI-powered fraud detection system continuously monitors for suspicious activity, protecting your users and your business.

      The system includes complete token lifecycle management, ensuring secure session handling and seamless cross-platform identity synchronization. This means users can authenticate once and access all your connected applications without repeated logins.
    `,
  },
  'super-admin-dashboard': {
    type: 'platform',
    icon: 'mdi:speedometer',
    title: 'Super Admin Dashboard',
    description:
      'Unified admin panel for apps with comprehensive user management, role assignment, permission mapping, multi-app analytics dashboard, and complete audit logs across all platforms.',
    highlights: [
      'Cross-app user management',
      'Dynamic role assignment',
      'Permission visualizer',
      'Multi-app analytics',
      'Complete audit trails',
    ],
    accentColor: '#7A3FF0',
    fullDescription: `
      The Super Admin Dashboard is your central command center for managing all aspects of your application ecosystem. From a single interface, you can manage users, assign roles, configure permissions, and monitor activity across all your connected applications.

      Our dynamic role assignment system allows you to create custom roles with granular permissions, making it easy to implement complex access control scenarios. The permission visualizer helps you understand and manage the relationships between roles, permissions, and resources.

      With comprehensive analytics and complete audit trails, you'll have full visibility into user activity, system performance, and security events. This makes it easy to identify trends, troubleshoot issues, and maintain compliance.
    `,
  },
  'ai-insights-automation': {
    type: 'platform',
    icon: 'mdi:brain',
    title: 'AI Insights & Automation',
    description:
      'AI admin tools with predictive analytics, anomaly detection, and intelligent automation. Get churn prediction, suspicious access alerts, usage insights, and permission overreach detection.',
    highlights: [
      'Churn prediction models',
      'Real-time threat detection',
      'Usage pattern analysis',
      'Permission auditing',
      'Automated workflows',
    ],
    accentColor: '#FF8A2A',
    fullDescription: `
      Leverage the power of AI to gain deep insights into your application usage and automate routine administrative tasks. Our AI-powered system continuously analyzes user behavior, system patterns, and security events to provide actionable insights.

      Churn prediction models help you identify users at risk of leaving, allowing you to take proactive measures to retain them. Real-time threat detection monitors for suspicious access patterns and potential security breaches, alerting you immediately when anomalies are detected.

      Usage pattern analysis reveals how your applications are being used, helping you optimize features and improve user experience. Permission auditing ensures that users have appropriate access levels, while automated workflows reduce manual administrative overhead.
    `,
  },
  'billing-engine': {
    type: 'platform',
    icon: 'mdi:credit-card',
    title: 'Billing Engine for Apps',
    description:
      'Complete billing engine for apps supporting subscriptions, usage-based billing, credit systems, auto-upgrades, with Stripe, Razorpay, and App Store Connect integration.',
    highlights: [
      'Flexible subscription plans',
      'Usage-based metering',
      'Credit & wallet systems',
      'Auto-upgrade logic',
      'Multi-payment gateway',
    ],
    accentColor: '#0EEAFF',
    fullDescription: `
      Our comprehensive billing engine supports every monetization model you need. From simple subscriptions to complex usage-based billing, you can configure pricing plans that match your business model.

      The system includes flexible subscription management with support for trials, discounts, and upgrades. Usage-based metering tracks consumption and automatically calculates charges based on your defined pricing tiers.

      Credit and wallet systems allow you to offer prepaid options and manage account balances. Auto-upgrade logic automatically moves users to higher tiers when they exceed their current plan limits, maximizing revenue opportunities.

      With integrations for Stripe, Razorpay, and App Store Connect, you can accept payments from customers worldwide using their preferred payment methods.
    `,
  },
  'advanced-permissions': {
    type: 'platform',
    icon: 'mdi:key',
    title: 'Advanced Permissions (RBAC/ABAC)',
    description:
      'Enterprise-grade RBAC for web apps with dynamic roles, attribute-based access control, organization-level permissions, and inheritance models for complex access control scenarios.',
    highlights: [
      'Dynamic role creation',
      'Attribute-based rules',
      'Org-level hierarchies',
      'Permission inheritance',
      'Real-time sync',
    ],
    accentColor: '#7A3FF0',
    fullDescription: `
      Implement enterprise-grade access control with our advanced permissions system. Support for both Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) gives you the flexibility to implement complex security policies.

      Dynamic role creation allows you to define custom roles with specific permissions, making it easy to implement fine-grained access control. Attribute-based rules enable you to create policies based on user attributes, resource properties, and environmental conditions.

      Organization-level hierarchies support multi-tenant scenarios where users belong to organizations with their own permission structures. Permission inheritance ensures that child resources automatically inherit permissions from their parents, reducing configuration overhead.

      Real-time synchronization ensures that permission changes are immediately reflected across all applications, maintaining security and consistency.
    `,
  },
  // Key Benefits
  'launch-products-faster': {
    type: 'benefit',
    icon: 'mdi:rocket',
    title: 'Launch Products 10x Faster',
    audience: 'Founders & Product Teams',
    description:
      'Skip months of authentication and admin infrastructure. Ship new mobile apps, web platforms, and SaaS products with enterprise-grade identity from day one.',
    highlights: [
      'Reduce time-to-market by 80%',
      'Focus on core product features',
      'Enterprise security out of the box',
      'Scale without rebuilding infrastructure',
    ],
    color: '#FF8A2A',
    fullDescription: `
      As a founder or product team, you know that every day counts when bringing a product to market. Our platform eliminates the months of development time typically required to build authentication and admin infrastructure.

      Instead of spending weeks implementing OAuth, passwordless login, user management, and admin dashboards, you can integrate our platform in hours and focus on building the features that make your product unique.

      Enterprise-grade security is built-in from day one, so you don't have to worry about implementing best practices for authentication, session management, or data protection. As your product grows, our infrastructure scales automatically, so you never have to rebuild your authentication system.
    `,
  },
  'build-features-not-boilerplate': {
    type: 'benefit',
    icon: 'mdi:code-tags',
    title: 'Build Features, Not Boilerplate',
    audience: 'Developers',
    description:
      'Stop duplicating authentication code. Our unified app identity platform provides SDKs, APIs, and documentation so you can integrate in hours, not weeks.',
    highlights: [
      'Simple SDK integration',
      'Webhook support',
      'Test mode',
      'Clean API docs',
    ],
    color: '#0EEAFF',
    fullDescription: `
      Developers love our platform because it eliminates the repetitive work of building authentication systems. Our SDKs are designed to be simple and intuitive, with comprehensive documentation and examples for every use case.

      Webhook support allows you to react to authentication events in real-time, enabling you to build custom workflows and integrations. Test mode provides a safe environment for development and testing, with realistic data and scenarios.

      Our API is RESTful and follows industry best practices, making it easy to integrate with any technology stack. Comprehensive documentation includes code examples, API references, and guides for common scenarios.
    `,
  },
  'seamless-experience': {
    type: 'benefit',
    icon: 'mdi:account-group',
    title: 'Seamless Experience Across Apps',
    audience: 'End Users',
    description:
      'Single sign-on across all products. Users authenticate once and access everything.',
    highlights: [
      'One account everywhere',
      'Passwordless login',
      'Privacy-first',
      'Consistent UX',
    ],
    color: '#7A3FF0',
    fullDescription: `
      Your users will love the seamless experience provided by our platform. Single sign-on means they authenticate once and can access all your connected applications without repeated logins.

      Passwordless login options, including magic links and biometric authentication, make it easier and more secure for users to access your applications. No more forgotten passwords or account lockouts.

      Privacy is built into every aspect of our platform. We follow industry best practices for data protection and give users control over their personal information. Consistent UX across all applications ensures that users feel at home no matter which app they're using.
    `,
  },
  'ai-powered-growth': {
    type: 'benefit',
    icon: 'mdi:trending-up',
    title: 'AI-Powered Growth',
    audience: 'Ops & Revenue Teams',
    description:
      'Predict churn, automate billing, and unlock expansion insights using AI.',
    highlights: [
      'Churn prediction',
      'Revenue analytics',
      'Usage billing',
      'Growth insights',
    ],
    color: '#FF8A2A',
    fullDescription: `
      Operations and revenue teams can leverage AI-powered insights to drive growth and optimize revenue. Churn prediction models identify users at risk of leaving, allowing you to take proactive retention measures.

      Revenue analytics provide deep insights into your monetization strategies, helping you understand which features drive revenue and which users are most valuable. Usage billing automatically tracks consumption and calculates charges, reducing manual billing overhead.

      Growth insights reveal opportunities for expansion, such as users who might benefit from upgrades or additional features. Automated workflows can trigger actions based on these insights, such as sending targeted offers or recommendations.
    `,
  },
};

export default function FeatureDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const feature = allFeatures[slug as keyof typeof allFeatures];

  if (!feature) {
    return (
      <div className={styles.notFound}>
        <h1>Feature Not Found</h1>
        <p>The feature you're looking for doesn't exist.</p>
        <Link href="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <Icon icon="mdi:arrow-left" width={20} height={20} />
          Back to Home
        </Link>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={styles.iconWrapper}
              style={{
                background: `linear-gradient(135deg, ${feature.accentColor || feature.color}20, transparent)`,
              }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon
                icon={feature.icon}
                width={64}
                height={64}
                style={{ color: feature.accentColor || feature.color }}
              />
            </motion.div>

            {feature.audience && (
              <span className={styles.audience} style={{ color: feature.color }}>
                {feature.audience}
              </span>
            )}

            <h1 className={styles.title}>{feature.title}</h1>
            <p className={styles.subtitle}>{feature.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2>Overview</h2>
                <div className={styles.fullDescription}>
                  {feature.fullDescription?.split('\n').map((para, idx) => (
                    <p key={idx}>{para.trim()}</p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <motion.div
                className={styles.highlightsCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3>Key Features</h3>
                <ul className={styles.highlightsList}>
                  {feature.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <Icon
                        icon="mdi:check-circle"
                        width={20}
                        height={20}
                        style={{ color: feature.accentColor || feature.color }}
                      />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
