"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Hero.module.scss";

export default function Hero() {
  const floatingIcons = [
    { icon: "🔐", delay: 0, x: -20, y: -30 },
    { icon: "⚡", delay: 0.2, x: 20, y: -20 },
    { icon: "🚀", delay: 0.4, x: -30, y: 20 },
    { icon: "🎯", delay: 0.6, x: 30, y: 30 },
  ];

  return (
    <section className={styles.heroSection}>
      {/* Gradient background */}
      <div className={styles.gradientBg} />

      {/* Animated grid */}
      <motion.div
        className={styles.animatedGrid}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating orbs */}
      <motion.div
        className={`${styles.orb} ${styles.orbOrange}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`${styles.orb} ${styles.orbCyan}`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container fluid className={styles.contentWrapper}>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col lg={6}>
            {/* Badge */}
            <motion.div
              className={styles.badgeWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.badgeGlow}></div>
              <div className={styles.badge}>
                <motion.div
                  className={styles.badgeDot}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>AI-Powered Authentication Platform</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              className={styles.headlineGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className={styles.heroTitle}>
                Super Admin & Auth{" "}
                <span className={styles.gradientText}>as a Service</span>
              </h1>
              <h3 className={styles.heroSubtitle}>
                A Unified AI-Powered Control Plane for Authentication, Roles,
                Billing & Permissions
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              className={styles.supportingText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Centralize identity, access, permissioning, and product
              management—powered by AI automation and real-time insights.
            </motion.p>

            {/* Feature Chips */}
            <motion.div
              className={styles.featureList}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {["5-Min Setup", "99.99% Uptime", "SOC 2 Compliant", "AI-Powered"].map(
                (feature, i) => (
                  <div key={i} className={styles.featureChip}>
                    <Icon icon="mdi:check" width={16} height={16} className={styles.featureIcon} />
                    <span>{feature}</span>
                  </div>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className={styles.ctaGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className={styles.startBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>
                  Start Free <Icon icon="mdi:arrow-right" width={20} height={20} />
                </span>
              </motion.button>

              <motion.button
                className={styles.demoBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="mdi:play" width={20} height={20} />
                Book a Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className={styles.statsRow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { value: "10k+", label: "Apps Connected" },
                { value: "50M+", label: "Users Managed" },
                { value: "99.99%", label: "Uptime SLA" },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* Right visual */}
          <Col lg={6}>
            <motion.div
              className={styles.rightBox}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Floating Icons */}
              {floatingIcons.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.floatingIcon}
                  style={{ right: `${item.x}%`, top: `${item.y}%` }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              <div className={styles.flowBox}>
                {/* Flow Nodes */}
                {[
                  { title: "Users", subtitle: "Identity Management", color: "#0EEAFF", delay: 0 },
                  { title: "Roles", subtitle: "Access Control", color: "#7A3FF0", delay: 0.2 },
                  { title: "Permissions", subtitle: "Granular Control", color: "#FF8A2A", delay: 0.4 },
                  { title: "Apps", subtitle: "Multi-Platform Sync", color: "#0EEAFF", delay: 0.6 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className={styles.flowNodeWrapper}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: node.delay }}
                  >
                    <motion.div
                      className={styles.flowNode}
                      style={{
                        borderColor: node.color + "30",
                        background: `linear-gradient(90deg, ${node.color}15, transparent)`,
                      }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <motion.div
                        className={styles.flowDot}
                        style={{ backgroundColor: node.color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className={styles.flowText}>
                        <div style={{ color: node.color }}>{node.title}</div>
                        <div>{node.subtitle}</div>
                      </div>
                      <Icon icon="mdi:lightning-bolt" width={20} height={20} className={styles.zapIcon} />
                    </motion.div>

                    {i < 3 && (
                      <motion.div
                        className={styles.flowConnector}
                        style={{
                          background: `linear-gradient(to bottom, ${node.color}, transparent)`,
                        }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Decorative pulse dots */}
                <motion.div
                  className={styles.pulseOrange}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className={styles.pulseCyan}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
