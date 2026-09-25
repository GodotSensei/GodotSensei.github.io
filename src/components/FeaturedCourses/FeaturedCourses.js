import React from 'react';
import Link from '@docusaurus/Link';
import { featuredCourses } from '../../data/featuredCourses';
import styles from './styles.module.css';

export default function FeaturedCourses() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <div className={styles.sectionEyebrow}>
            <i className="fa-solid fa-gamepad"></i>
            Hands-on Projects
          </div>
          <h2 className={styles.sectionTitle}>Featured Tutorials</h2>
          <p className={styles.sectionSubtitle}>
            Complete playable games and stylized environments you can build step by step.
          </p>
        </div>

        {/* Courses List */}
        <div className={styles.coursesList}>
          {featuredCourses.map((course, idx) => (
            <div
              key={course.id}
              className={`${styles.courseRow} ${course.reverse ? styles.courseRowReverse : ''}`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Text Side */}
              <div className={styles.textColumn}>
                <span className={styles.badge}>
                  <i className={course.badgeIcon}></i>
                  {course.badge}
                </span>

                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDesc}>{course.description}</p>

                {/* CTA buttons */}
                <div className={styles.ctaGroup}>
                  <Link
                    to={course.primaryLink}
                    className={styles.primaryLinkBtn}
                  >
                    {course.primaryLabel}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  {course.secondaryLink && (
                    <a
                      href={course.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryLinkBtn}
                    >
                      <i className="fa-solid fa-play"></i>
                      {course.secondaryLabel}
                    </a>
                  )}
                </div>
              </div>

              {/* Image Side */}
              <div className={styles.imageColumn}>
                <div className={styles.imageCard}>
                  <img
                    src={course.imageSrc}
                    alt={course.imageAlt}
                    className={styles.courseImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
