import React from 'react';
import Link from '@docusaurus/Link';
import { learningPaths } from '../../data/learningPaths';
import styles from './styles.module.css';

export default function LearningTracks() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Structured Roadmaps</div>
          <h2 className={styles.sectionTitle}>
            Step-by-Step Learning Paths
          </h2>
          <p className={styles.sectionSubtitle}>
            Whether you’re writing your very first line of code or leveling up your 3D game art,
            follow a logical progression designed to build your confidence and skillset.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className={styles.tracksGrid}>
          {learningPaths.map((track, idx) => (
            <div key={idx} className={styles.trackCard}>
              <div className={styles.cardTop}>
                <div
                  className={styles.iconCircle}
                  style={{ borderColor: track.accentColor }}
                >
                  <span>{track.icon}</span>
                </div>
                <span className={styles.trackBadge}>{track.badge}</span>
              </div>

              <h3 className={styles.trackTitle}>{track.title}</h3>
              <p className={styles.trackDesc}>{track.description}</p>

              <div className={styles.topicList}>
                <span className={styles.topicLabel}>What you&apos;ll build &amp; learn:</span>
                <ul>
                  {track.topics.map((topic, tIdx) => (
                    <li key={tIdx}>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="16"
                        height="16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <Link
                  to={track.linkTo}
                  className={styles.trackLink}
                  target={track.linkTo.startsWith('http') ? '_blank' : '_self'}
                  rel={track.linkTo.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {track.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
