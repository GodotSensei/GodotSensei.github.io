import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroBackgroundGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent} data-aos="fade-up">

          {/* Top Banner Image */}
          <div className={styles.topImageContainer}>
            <img
              src="/img/HomePage/hero.webp"
              alt="Godot Sensei"
              className={styles.topBannerImage}
            />
          </div>

          {/* Minimal, punchy heading */}
          <h1 className={styles.heroTitle}>
            Learn Godot by <br />
            <span className={styles.titleGradient}>Building Real Games</span>
          </h1>

          {/* Short 1-sentence subtitle */}
          <p className={styles.heroSubtitle}>
            Practical YouTube video lessons backed by step-by-step written documentation.
          </p>

          {/* Action Buttons (Dual clean CTAs, no red button) */}
          <div className={styles.buttonGroup}>
            <Link
              to="/docs/category/walking-sim"
              className={styles.primaryButton}
            >
              Start Beginner Course
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to="/docs/intro"
              className={styles.secondaryButton}
            >
              <i className="fa-solid fa-book-open"></i>
              Browse Docs
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
