import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CommunityBanner() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        <div className={styles.bannerCard}>
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.badge}>
              <i className="fa-brands fa-youtube"></i>
              YouTube Channel
            </div>

            <h2 className={styles.title}>
              Subscribe to Godot Sensei
            </h2>

            <p className={styles.description}>
              Regular Godot 4 tutorials, devlogs, stylized shaders, and practical mechanics to level up your game development.
            </p>

            <div className={styles.perksRow}>
              <div className={styles.perk}>
                <i className="fa-solid fa-video"></i>
                <span>4K Video Lessons</span>
              </div>
              <div className={styles.perk}>
                <i className="fa-solid fa-code"></i>
                <span>Free Companion Code</span>
              </div>
              <div className={styles.perk}>
                <i className="fa-solid fa-comments"></i>
                <span>Active Q&amp;A Community</span>
              </div>
            </div>

            <div className={styles.btnRow}>
              <a
                href="https://www.youtube.com/@godotsensei?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ytSubscribeBtn}
              >
                <i className="fa-brands fa-youtube"></i>
                Subscribe on YouTube
              </a>

              <Link to="/docs/intro" className={styles.exploreDocsBtn}>
                <i className="fa-solid fa-book-open"></i>
                Explore Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
