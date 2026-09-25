import React from 'react';
import { whySenseiFeatures } from '../../data/whySensei';
import styles from './styles.module.css';

export default function WhySensei() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <div className={styles.sectionEyebrow}>
            <i className="fa-solid fa-star"></i>
            The Sensei Approach
          </div>
          <h2 className={styles.sectionTitle}>Why Learn With Godot Sensei</h2>
          <p className={styles.sectionSubtitle}>
            Built for creators who want to understand game development quickly and build real projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {whySenseiFeatures.map((item, idx) => (
            <div
              key={idx}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={styles.iconCircle}>
                <i className={item.icon}></i>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
