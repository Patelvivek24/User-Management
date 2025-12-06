'use client';

import { useParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

// Type definition for blog posts
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  color: string;
  icon: string;
  fullContent: string;
};

// Blog post data - in a real app, this would come from a database or API
const allBlogPosts: Record<number, BlogPost> = {
  1: {
    id: 1,
    title: 'Getting Started with AI-Powered Authentication',
    excerpt: 'Learn how to integrate our AI-powered authentication system into your application in just minutes.',
    author: 'Alex Chen',
    date: 'March 15, 2025',
    category: 'Tutorial',
    readTime: '5 min read',
    color: '#0EEAFF',
    icon: 'mdi:lock',
    fullContent: `
      AI-powered authentication is revolutionizing how we secure applications. In this comprehensive guide, we'll walk you through integrating our advanced authentication system into your application.

      ## Why AI-Powered Authentication?

      Traditional authentication systems rely on static rules and manual monitoring. AI-powered authentication, on the other hand, uses machine learning to detect patterns, identify anomalies, and adapt to new threats in real-time.

      ## Getting Started

      The integration process is straightforward. First, install our SDK using your preferred package manager. Then, configure your authentication settings through our intuitive dashboard.

      ### Step 1: Installation

      Our SDK is available for multiple platforms including React, Vue, Angular, and vanilla JavaScript. Choose the one that fits your stack.

      ### Step 2: Configuration

      Once installed, you'll need to configure your authentication endpoints and set up your API keys. Our documentation provides detailed examples for each platform.

      ### Step 3: Implementation

      With everything configured, you can start implementing authentication flows. Our SDK handles the complexity, allowing you to focus on building great user experiences.

      ## Best Practices

      - Always use HTTPS in production
      - Implement proper error handling
      - Monitor authentication events
      - Keep your SDK updated

      ## Conclusion

      AI-powered authentication provides a more secure and user-friendly experience. By following this guide, you'll have a robust authentication system up and running in no time.
    `,
  },
  2: {
    id: 2,
    title: 'Best Practices for Role-Based Access Control',
    excerpt: 'A comprehensive guide to implementing RBAC that scales with your application and team.',
    author: 'Sarah Johnson',
    date: 'March 10, 2025',
    category: 'Guide',
    readTime: '8 min read',
    color: '#7A3FF0',
    icon: 'mdi:key',
    fullContent: `
      Role-Based Access Control (RBAC) is a fundamental security model that restricts access based on user roles. This guide covers everything you need to know about implementing RBAC effectively.

      ## Understanding RBAC

      RBAC simplifies access management by grouping permissions into roles. Users are assigned roles, and roles are granted permissions. This creates a clear hierarchy that's easy to manage and audit.

      ## Core Concepts

      ### Roles
      Roles represent job functions or responsibilities within your organization. Examples include Admin, Manager, Developer, and Viewer.

      ### Permissions
      Permissions define what actions can be performed on specific resources. For example, "read:users" or "write:posts".

      ### Role Hierarchies
      Some roles inherit permissions from other roles. This reduces duplication and makes management easier.

      ## Implementation Strategies

      ### Flat Role Structure
      Simple applications may use a flat structure where each role is independent. This works well for small teams.

      ### Hierarchical Roles
      Larger organizations benefit from hierarchical roles where senior roles inherit permissions from junior roles.

      ### Attribute-Based Extensions
      For complex scenarios, combine RBAC with attribute-based access control (ABAC) for fine-grained control.

      ## Common Pitfalls

      Avoid these common mistakes when implementing RBAC:
      - Over-complicating the role structure
      - Not planning for growth
      - Ignoring audit requirements
      - Hardcoding permissions

      ## Best Practices

      1. Start simple and evolve
      2. Document your role structure
      3. Regular access reviews
      4. Use principle of least privilege
      5. Automate role assignment where possible

      ## Conclusion

      A well-implemented RBAC system provides security, scalability, and maintainability. Take time to design your role structure thoughtfully.
    `,
  },
  3: {
    id: 3,
    title: 'Building Multi-Tenant Applications with Super Admin',
    excerpt: 'Discover how to leverage our platform to build secure, scalable multi-tenant applications.',
    author: 'Michael Park',
    date: 'March 5, 2025',
    category: 'Case Study',
    readTime: '12 min read',
    color: '#FF8A2A',
    icon: 'mdi:office-building',
    fullContent: `
      Multi-tenant applications are becoming increasingly common as SaaS platforms grow. This case study explores how we built a scalable multi-tenant system using our platform.

      ## The Challenge

      Our client needed to support thousands of organizations, each with their own users, roles, and permissions. Traditional approaches wouldn't scale.

      ## Our Solution

      We leveraged our platform's built-in multi-tenancy features to create a solution that scales horizontally while maintaining strict data isolation.

      ## Architecture Overview

      ### Tenant Isolation
      Each tenant has completely isolated data. This ensures security and compliance with data protection regulations.

      ### Shared Infrastructure
      While data is isolated, infrastructure is shared. This provides cost efficiency while maintaining security.

      ### Scalable Design
      The architecture supports adding new tenants without impacting existing ones. Resources scale automatically based on demand.

      ## Implementation Details

      ### Data Model
      Every table includes a tenant_id column. This ensures queries automatically filter by tenant.

      ### Authentication
      Users authenticate within their tenant context. Cross-tenant access is prevented at the application level.

      ### Billing
      Each tenant has independent billing. Usage is tracked and billed separately.

      ## Results

      The solution successfully supports over 10,000 tenants with millions of users. Performance remains consistent, and security is maintained.

      ## Key Learnings

      - Proper tenant isolation is critical
      - Plan for scale from the beginning
      - Monitoring is essential
      - Regular security audits are necessary

      ## Conclusion

      Multi-tenant applications require careful planning, but with the right platform and architecture, they can scale effectively while maintaining security and performance.
    `,
  },
  4: {
    id: 4,
    title: 'The Future of Authentication: Passwordless and Beyond',
    excerpt: "Exploring emerging authentication technologies and how they're changing the security landscape.",
    author: 'Alex Chen',
    date: 'February 28, 2025',
    category: 'Insights',
    readTime: '6 min read',
    color: '#0EEAFF',
    icon: 'mdi:shield-check',
    fullContent: `
      The authentication landscape is evolving rapidly. Passwordless authentication, biometrics, and passkeys are reshaping how we think about security.

      ## The Password Problem

      Traditional passwords have significant weaknesses:
      - Users create weak passwords
      - Password reuse across sites
      - Phishing attacks
      - Credential stuffing

      These issues have led to the search for better authentication methods.

      ## Passwordless Authentication

      Passwordless authentication eliminates passwords entirely. Instead, users authenticate using:
      - Magic links sent via email
      - SMS codes
      - Biometric authentication
      - Hardware security keys

      ## WebAuthn and Passkeys

      WebAuthn is a web standard that enables passwordless authentication. Passkeys, built on WebAuthn, provide a more secure and user-friendly experience.

      ### How Passkeys Work

      Passkeys use public-key cryptography. Each device generates a key pair. The private key stays on the device, while the public key is stored on the server.

      ### Benefits

      - More secure than passwords
      - Faster authentication
      - Resistant to phishing
      - Works across devices

      ## Biometric Authentication

      Biometrics like fingerprint and face recognition are becoming standard on mobile devices. They provide convenience without sacrificing security.

      ## The Future

      We're moving toward a future where:
      - Passwords are obsolete
      - Multi-factor authentication is standard
      - Zero-trust architecture is the norm
      - Continuous authentication monitors sessions

      ## Adoption Challenges

      Despite benefits, adoption faces challenges:
      - User education needed
      - Legacy system compatibility
      - Device requirements
      - Standardization

      ## Conclusion

      The future of authentication is passwordless. Organizations that adopt these technologies early will have a competitive advantage in security and user experience.
    `,
  },
  5: {
    id: 5,
    title: 'Scaling Your Authentication Infrastructure',
    excerpt: 'Learn how to handle millions of users without breaking a sweat using our platform.',
    author: 'Sarah Johnson',
    date: 'February 20, 2025',
    category: 'Technical',
    readTime: '10 min read',
    color: '#7A3FF0',
    icon: 'mdi:chart-line',
    fullContent: `
      Scaling authentication infrastructure to handle millions of users requires careful planning and the right architecture. This technical deep-dive covers everything you need to know.

      ## Understanding Scale

      Authentication systems face unique scaling challenges:
      - High request volume during peak times
      - State management complexity
      - Security requirements
      - Low latency requirements

      ## Architecture Patterns

      ### Horizontal Scaling
      Distribute load across multiple servers. This requires stateless authentication tokens and shared session storage.

      ### Caching Strategies
      Implement multi-layer caching:
      - In-memory cache for hot data
      - Distributed cache for shared state
      - CDN for static assets

      ### Database Optimization
      - Use read replicas for queries
      - Implement connection pooling
      - Optimize indexes
      - Consider sharding for very large scale

      ## Performance Optimization

      ### Token Management
      Use JWT tokens for stateless authentication. Implement refresh tokens for security without sacrificing performance.

      ### Rate Limiting
      Protect your system from abuse:
      - Per-user rate limits
      - Per-IP rate limits
      - Adaptive rate limiting

      ### Load Balancing
      Distribute traffic evenly across servers. Use health checks to route away from unhealthy instances.

      ## Monitoring and Observability

      Track key metrics:
      - Authentication success/failure rates
      - Response times
      - Error rates
      - Resource utilization

      ## Scaling Strategies

      ### Vertical Scaling
      Increase server resources. This has limits but can be a quick solution.

      ### Horizontal Scaling
      Add more servers. This is more complex but provides better scalability.

      ### Auto-scaling
      Automatically adjust resources based on demand. This optimizes costs while maintaining performance.

      ## Best Practices

      1. Design for scale from day one
      2. Implement proper monitoring
      3. Use caching effectively
      4. Optimize database queries
      5. Plan for peak loads

      ## Conclusion

      Scaling authentication infrastructure requires careful planning, the right architecture, and continuous optimization. With proper design, you can handle millions of users efficiently.
    `,
  },
  6: {
    id: 6,
    title: 'Security Best Practices for Modern Applications',
    excerpt: 'Essential security practices every developer should know when building authentication systems.',
    author: 'Michael Park',
    date: 'February 15, 2025',
    category: 'Security',
    readTime: '7 min read',
    color: '#FF8A2A',
    icon: 'mdi:shield-lock',
    fullContent: `
      Security is not optional when building authentication systems. This guide covers essential practices every developer should implement.

      ## The Security Mindset

      Security should be built in, not bolted on. Every decision should consider security implications.

      ## Authentication Security

      ### Password Policies
      - Enforce strong passwords
      - Implement password history
      - Require regular changes
      - Use password strength meters

      ### Multi-Factor Authentication
      Always offer MFA. It significantly improves security even if not all users enable it.

      ### Session Management
      - Use secure, HttpOnly cookies
      - Implement session timeouts
      - Rotate session IDs
      - Invalidate on logout

      ## Data Protection

      ### Encryption
      - Encrypt data at rest
      - Use TLS for data in transit
      - Encrypt sensitive fields
      - Use strong encryption algorithms

      ### Data Minimization
      Only collect and store data you need. Less data means less risk.

      ## Common Vulnerabilities

      ### SQL Injection
      Use parameterized queries. Never concatenate user input into SQL.

      ### Cross-Site Scripting (XSS)
      Sanitize all user input. Use Content Security Policy headers.

      ### Cross-Site Request Forgery (CSRF)
      Implement CSRF tokens. Use SameSite cookie attributes.

      ### Authentication Bypass
      Never trust client-side validation. Always validate on the server.

      ## Security Headers

      Implement security headers:
      - Content-Security-Policy
      - X-Frame-Options
      - X-Content-Type-Options
      - Strict-Transport-Security

      ## Regular Audits

      - Code reviews
      - Security scans
      - Penetration testing
      - Dependency updates

      ## Incident Response

      Have a plan for security incidents:
      - Detection procedures
      - Response team
      - Communication plan
      - Recovery procedures

      ## Conclusion

      Security is an ongoing process. Stay informed about new threats and best practices. Regular audits and updates are essential.
    `,
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const postId = parseInt(params?.id as string, 10);
  const post = allBlogPosts[postId];

  if (!post) {
    return (
      <>
        <Header />
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">Go back to blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.page}>
        {/* Header */}
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            <Icon icon="mdi:arrow-left" width={20} height={20} />
            Back to Blog
          </Link>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <Container>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={styles.iconWrapper}
                style={{
                  background: `linear-gradient(135deg, ${post.color}20, transparent)`,
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon
                  icon={post.icon}
                  width={64}
                  height={64}
                  style={{ color: post.color }}
                />
              </motion.div>

              <span
                className={styles.category}
                style={{ color: post.color, borderColor: `${post.color}30` }}
              >
                {post.category}
              </span>

              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <Icon icon="mdi:account" width={18} height={18} />
                  <span>{post.author}</span>
                </div>
                <div className={styles.metaItem}>
                  <Icon icon="mdi:calendar" width={18} height={18} />
                  <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Icon icon="mdi:clock-outline" width={18} height={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Content Section */}
        <section className={styles.content}>
          <Container>
            <Row>
              <Col lg={8} className={styles.mainContent}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className={styles.articleContent}>
                    {post.fullContent.split('\n').map((para, idx) => {
                      if (para.trim() === '') return null;
                      if (para.startsWith('## ')) {
                        return (
                          <h2 key={idx} className={styles.heading2}>
                            {para.replace('## ', '')}
                          </h2>
                        );
                      }
                      if (para.startsWith('### ')) {
                        return (
                          <h3 key={idx} className={styles.heading3}>
                            {para.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (para.startsWith('- ')) {
                        return (
                          <li key={idx} className={styles.listItem}>
                            {para.replace('- ', '')}
                          </li>
                        );
                      }
                      return (
                        <p key={idx} className={styles.paragraph}>
                          {para.trim()}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              </Col>

              {/* Sidebar */}
              <Col lg={4} className={styles.sidebar}>
                <motion.div
                  className={styles.authorCard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div
                    className={styles.authorIcon}
                    style={{
                      background: `linear-gradient(135deg, ${post.color}20, transparent)`,
                    }}
                  >
                    <Icon icon="mdi:account" width={32} height={32} style={{ color: post.color }} />
                  </div>
                  <h3 className={styles.authorName}>{post.author}</h3>
                  <p className={styles.authorBio}>
                    Expert in authentication and security systems with years of experience building scalable solutions.
                  </p>
                </motion.div>

                <motion.div
                  className={styles.shareCard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className={styles.shareTitle}>Share this article</h4>
                  <div className={styles.shareButtons}>
                    {[
                      { icon: 'mdi:twitter', label: 'Twitter', color: '#0EEAFF' },
                      { icon: 'mdi:linkedin', label: 'LinkedIn', color: '#7A3FF0' },
                      { icon: 'mdi:facebook', label: 'Facebook', color: '#FF8A2A' },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        className={styles.shareButton}
                        style={{ borderColor: `${social.color}30` }}
                        whileHover={{ scale: 1.1, borderColor: social.color }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon icon={social.icon} width={20} height={20} style={{ color: social.color }} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
