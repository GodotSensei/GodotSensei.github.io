import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroBackgroundGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>

          {/* Top Banner / Image Placeholder Area */}
          <div className={styles.topImageContainer}>
            {/* 
              To add your image, simply uncomment the img tag below and provide your image path:
              <img src="/img/HomePage/banner.png" alt="Godot Sensei" className={styles.topBannerImage} />
            */}
            <div className={styles.imagePlaceholder}>
              <i className="fa-solid fa-image fa-2x"></i>
              <span className={styles.placeholderTitle}>Top Banner Image Placeholder</span>
              <span className={styles.placeholderHint}>
                Place your image in static/img/ and link it here
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <i className="fa-solid fa-graduation-cap"></i>
              Godot 4 Tutorials and Docs
            </span>
          </div>

          {/* Minimal, punchy heading */}
          <h1 className={styles.heroTitle}>
            Learn Godot 4 by <br />
            <span className={styles.titleGradient}>Building Real Games</span>
          </h1>

          {/* Short 1-sentence subtitle */}
          <p className={styles.heroSubtitle}>
            Practical YouTube video lessons backed by step-by-step written documentation.
          </p>

          {/* Action Buttons with FontAwesome */}
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
            <a
              href="https://www.youtube.com/@godotsensei"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeButton}
            >
              <i className="fa-brands fa-youtube"></i>
              Watch on YouTube
            </a>
          </div>

          {/* Quick Value Chips (minimal, icon-focused) */}
          <div className={styles.heroChips}>
            <div className={styles.chip}>
              <i className="fa-solid fa-gamepad"></i>
              <span>Project-Based</span>
            </div>
            <div className={styles.chip}>
              <i className="fa-solid fa-bolt"></i>
              <span>Godot 4.x Ready</span>
            </div>
            <div className={styles.chip}>
              <i className="fa-solid fa-file-lines"></i>
              <span>Written Companion Code</span>
            </div>
            <div className={styles.chip}>
              <i className="fa-solid fa-circle-check"></i>
              <span>100% Free Forever</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
