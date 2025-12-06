import styles from './DashboardHighlights.module.scss';

export default function DashboardHighlights() {
  const highlights = [
    {
      metric: '10,000+',
      label: 'Active Users',
      description: 'Manage thousands of users seamlessly',
    },
    {
      metric: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on',
    },
    {
      metric: '50+',
      label: 'Integrations',
      description: 'Connect with your favorite tools',
    },
    {
      metric: '24/7',
      label: 'Support',
      description: 'Expert help whenever you need it',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Dashboard Highlights</h2>
          <p className={styles.subtitle}>
            Powerful insights at your fingertips
          </p>
        </div>
        
        <div className={styles.dashboardPreview}>
          <div className={styles.dashboardMockup}>
            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardHeaderItem}></div>
              <div className={styles.dashboardHeaderItem}></div>
              <div className={styles.dashboardHeaderItem}></div>
            </div>
            <div className={styles.dashboardContent}>
              <div className={styles.dashboardSidebar}></div>
              <div className={styles.dashboardMain}>
                <div className={styles.dashboardCard}></div>
                <div className={styles.dashboardCard}></div>
                <div className={styles.dashboardCard}></div>
                <div className={styles.dashboardCard}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.metricsGrid}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metric}>{highlight.metric}</div>
              <div className={styles.metricLabel}>{highlight.label}</div>
              <div className={styles.metricDescription}>{highlight.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

