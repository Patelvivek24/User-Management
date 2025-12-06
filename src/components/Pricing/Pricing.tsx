import styles from './Pricing.module.scss';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 100 users',
        'Basic user management',
        'Email support',
        'Standard integrations',
        'Basic analytics',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1,000 users',
        'Advanced user management',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Custom workflows',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Enterprise-grade security',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantee',
        'On-premise option',
        'Custom training',
      ],
      popular: false,
    },
  ];

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Pricing</h2>
          <p className={styles.subtitle}>
            Choose the plan that's right for you
          </p>
        </div>
        
        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              <div className={styles.planPrice}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && <span className={styles.period}>{plan.period}</span>}
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`${styles.ctaButton} ${plan.popular ? styles.ctaButtonPrimary : styles.ctaButtonSecondary}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

