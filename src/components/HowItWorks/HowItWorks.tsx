import styles from './HowItWorks.module.scss';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Setup',
      description: 'Create your account and connect your existing systems through our secure integration process.',
    },
    {
      number: '02',
      title: 'Configure Your Settings',
      description: 'Customize user roles, permissions, and workflows to match your organization\'s needs.',
    },
    {
      number: '03',
      title: 'Import & Sync Users',
      description: 'Import your existing user data and set up automatic synchronization across all platforms.',
    },
    {
      number: '04',
      title: 'Start Managing',
      description: 'Begin managing users efficiently with automated workflows and real-time insights.',
    },
  ];

  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>
            Get started in four simple steps
          </p>
        </div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine}></div>
                  <div className={styles.connectorArrow}>↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

