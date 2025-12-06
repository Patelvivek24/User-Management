'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with AI-Powered Authentication',
      excerpt: 'Learn how to integrate our AI-powered authentication system into your application in just minutes.',
      author: 'Alex Chen',
      date: 'March 15, 2025',
      category: 'Tutorial',
      readTime: '5 min read',
      color: '#0EEAFF',
      icon: 'mdi:lock',
    },
    {
      id: 2,
      title: 'Best Practices for Role-Based Access Control',
      excerpt: 'A comprehensive guide to implementing RBAC that scales with your application and team.',
      author: 'Sarah Johnson',
      date: 'March 10, 2025',
      category: 'Guide',
      readTime: '8 min read',
      color: '#7A3FF0',
      icon: 'mdi:key',
    },
    {
      id: 3,
      title: 'Building Multi-Tenant Applications with Super Admin',
      excerpt: 'Discover how to leverage our platform to build secure, scalable multi-tenant applications.',
      author: 'Michael Park',
      date: 'March 5, 2025',
      category: 'Case Study',
      readTime: '12 min read',
      color: '#FF8A2A',
      icon: 'mdi:office-building',
    },
    {
      id: 4,
      title: 'The Future of Authentication: Passwordless and Beyond',
      excerpt: "Exploring emerging authentication technologies and how they're changing the security landscape.",
      author: 'Alex Chen',
      date: 'February 28, 2025',
      category: 'Insights',
      readTime: '6 min read',
      color: '#0EEAFF',
      icon: 'mdi:shield-check',
    },
    {
      id: 5,
      title: 'Scaling Your Authentication Infrastructure',
      excerpt: 'Learn how to handle millions of users without breaking a sweat using our platform.',
      author: 'Sarah Johnson',
      date: 'February 20, 2025',
      category: 'Technical',
      readTime: '10 min read',
      color: '#7A3FF0',
      icon: 'mdi:chart-line',
    },
    {
      id: 6,
      title: 'Security Best Practices for Modern Applications',
      excerpt: 'Essential security practices every developer should know when building authentication systems.',
      author: 'Michael Park',
      date: 'February 15, 2025',
      category: 'Security',
      readTime: '7 min read',
      color: '#FF8A2A',
      icon: 'mdi:shield-lock',
    },
  ];

  const categories = ['All', 'Tutorial', 'Guide', 'Case Study', 'Insights', 'Technical', 'Security'];

  return (
    <>
      <Header />
      <section className={styles.section}>
        {/* Background Elements */}
        <div className={styles.background} />
        <motion.div
          className={styles.orb}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <Container style={{ position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badgeWrapper}>
              <motion.div
                className={styles.badgeGlow}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className={styles.badge}>
                <Icon icon="mdi:book-open" width={20} height={20} className={styles.badgeIcon} />
                <span>Latest Articles</span>
              </div>
            </div>

            <h1 className={styles.title}>
              Blog & <span className={styles.gradientText}>Resources</span>
            </h1>
            <p className={styles.subtitle}>
              Stay updated with the latest insights, tutorials, and best practices in authentication, security, and developer tools.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className={styles.categories}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={styles.categoryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <Row className="g-4">
            {blogPosts.map((post, index) => (
              <Col key={post.id} md={6} lg={4}>
                <motion.div
                  className={styles.postCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={styles.postGlow}
                    style={{ backgroundColor: post.color }}
                  />
                  <div className={styles.postContent}>
                    <div className={styles.postHeader}>
                      <motion.div
                        className={styles.postIcon}
                        style={{
                          background: `linear-gradient(135deg, ${post.color}20, transparent)`,
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        <Icon icon={post.icon} width={24} height={24} style={{ color: post.color }} />
                      </motion.div>
                      <span
                        className={styles.postCategory}
                        style={{ color: post.color }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>

                    <div className={styles.postMeta}>
                      <div className={styles.postAuthor}>
                        <Icon icon="mdi:account" width={16} height={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className={styles.postDate}>
                        <Icon icon="mdi:calendar" width={16} height={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className={styles.postReadTime}>
                        <Icon icon="mdi:clock-outline" width={16} height={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <motion.div
                      className={styles.postLink}
                      whileHover={{ x: 5 }}
                    >
                      <Link href={`/blog/${post.id}`} style={{ color: post.color }}>
                        Read More
                        <Icon icon="mdi:arrow-right" width={20} height={20} />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
