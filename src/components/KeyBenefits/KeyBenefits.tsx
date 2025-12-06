import styles from './KeyBenefits.module.scss';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: '💰',
      title: 'Save Time & Money',
      description: 'Reduce administrative overhead by up to 80% with automated workflows and centralized management.',
    },
    {
      icon: '🛡️',
      title: 'Enhanced Security',
      description: 'Protect your organization with enterprise-grade security features and compliance certifications.',
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive analytics and real-time reporting capabilities.',
    },
    {
      icon: '🚀',
      title: 'Scale Effortlessly',
      description: 'Grow your user base without worrying about infrastructure - we handle the complexity.',
    },
    {
      icon: '🤝',
      title: 'Better User Experience',
      description: 'Provide seamless experiences for your users with fast, intuitive interfaces and processes.',
    },
    {
      icon: '⚙️',
      title: 'Easy Integration',
      description: 'Connect with your existing tools and systems in minutes, not weeks.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Key Benefits</h2>
          <p className={styles.subtitle}>
            Why thousands of organizations trust our platform
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{benefit.icon}</div>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

