import React from 'react';
import styles from './styles.module.css';

export default function CommunityBanner() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        <div className={styles.subscribeCard} data-aos="fade-up">
          <div className={styles.textContent}>
            <div className={styles.eyebrow}>
              <i className="fa-brands fa-youtube"></i>
              YouTube Channel
            </div>
            <h3 className={styles.title}>Subscribe to Godot Sensei</h3>
            <p className={styles.description}>
              Godot lessons, stylized shaders, and free companion project files.
            </p>
          </div>

          <div className={styles.actionContent}>
            <a
              href="https://www.youtube.com/@godotsensei?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subscribeBtn}
            >
              <i className="fa-brands fa-youtube"></i>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

