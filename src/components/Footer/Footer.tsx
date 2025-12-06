import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>UserManagement</h3>
            <p className={styles.footerDescription}>
              The complete solution for managing users across all your platforms.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="GitHub">💻</a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Product</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#contact">Demo</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} UserManagement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

