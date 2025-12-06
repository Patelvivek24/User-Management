import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Streamline User Management
            <span className={styles.highlight}> Like Never Before</span>
          </h1>
          <p className={styles.subtitle}>
            The complete platform for managing users across all your systems. 
            Automate workflows, enhance security, and gain powerful insights.
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryButton}>Start Free Trial</button>
            <button className={styles.secondaryButton}>Watch Demo</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>Active Users</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Companies</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

