import styles from './PlatformFeatures.module.scss';

export default function PlatformFeatures() {
  const features = [
    {
      icon: '👥',
      title: 'Centralized User Management',
      description: 'Manage all users from a single, intuitive dashboard with real-time synchronization across all platforms.',
    },
    {
      icon: '🔐',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with multi-factor authentication, role-based access control, and audit logs.',
    },
    {
      icon: '⚡',
      title: 'Automated Workflows',
      description: 'Automate user onboarding, offboarding, and role assignments to save time and reduce errors.',
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and customizable reports to track user engagement and system performance.',
    },
    {
      icon: '🔗',
      title: 'API Integration',
      description: 'Seamlessly integrate with your existing tools and systems through our robust REST API.',
    },
    {
      icon: '🌐',
      title: 'Multi-Platform Support',
      description: 'Support for web, mobile, and desktop applications with consistent user experience across all platforms.',
    },
  ];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Platform Features</h2>
          <p className={styles.subtitle}>
            Everything you need to manage users efficiently and securely
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

