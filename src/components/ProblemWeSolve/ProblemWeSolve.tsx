import styles from './ProblemWeSolve.module.scss';

export default function ProblemWeSolve() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            The Problem We Solve: Streamlining User Management for Modern Businesses
          </h2>
          <p className={styles.subtitle}>
            Managing users across multiple platforms and systems is complex, time-consuming, and error-prone. 
            Our platform eliminates these challenges with intelligent automation and unified control.
          </p>
          
          <div className={styles.problemsGrid}>
            <div className={styles.problemCard}>
              <div className={styles.icon}>⚠️</div>
              <h3>Fragmented User Data</h3>
              <p>
                User information scattered across different systems makes it impossible to get a complete view 
                of your user base, leading to poor decision-making and missed opportunities.
              </p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.icon}>⏱️</div>
              <h3>Time-Consuming Manual Processes</h3>
              <p>
                Repetitive tasks like onboarding, role assignments, and access management consume hours 
                of your team's time that could be spent on strategic initiatives.
              </p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.icon}>🔒</div>
              <h3>Security & Compliance Risks</h3>
              <p>
                Manual user management increases the risk of security breaches, compliance violations, 
                and unauthorized access due to human error and inconsistent processes.
              </p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.icon}>📊</div>
              <h3>Lack of Visibility</h3>
              <p>
                Without proper analytics and reporting, you can't track user engagement, identify trends, 
                or make data-driven decisions about your user management strategy.
              </p>
            </div>
          </div>

          <div className={styles.solution}>
            <h3 className={styles.solutionTitle}>Our Solution</h3>
            <p className={styles.solutionText}>
              We provide a comprehensive, automated user management platform that centralizes all user data, 
              streamlines workflows, ensures security compliance, and delivers actionable insights. 
              Transform your user management from a burden into a competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

