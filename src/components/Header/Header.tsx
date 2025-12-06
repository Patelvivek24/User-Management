"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Logo */}
          <motion.div
            className={styles.logoWrapper}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className={styles.logoBox}>
              <div className={styles.logoGlow} />
              <div className={styles.logoInner}>
                <Icon icon="mdi:sparkles" width={24} height={24} className={styles.logoIcon} />
              </div>
            </div>

            <div>
              <div className={styles.logoText}>Super Admin</div>
              <div className={styles.logoSubtext}>Auth as a Service</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.desktopMenu}>
            {["Features", "How It Works", "Benefits", "Pricing"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className={styles.navLink}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <span className={styles.underline}></span>
                </motion.a>
              )
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaBtn}
          >
            <span className={styles.ctaBg} />
            <span className={styles.ctaContent}>
              Start Free <Icon icon="mdi:sparkles" width={16} height={16} />
            </span>
          </motion.button>

          {/* Mobile Button */}
          <motion.button
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <Icon icon="mdi:close" width={24} height={24} /> : <Icon icon="mdi:menu" width={24} height={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.mobileMenu}
            >
              {["Features", "How It Works", "Benefits", "Pricing"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className={styles.mobileLink}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                )
              )}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className={styles.mobileCta}
              >
                Start Free
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
