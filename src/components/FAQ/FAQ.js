import React, { useState } from 'react';
import styles from './styles.module.css';

const faqItems = [
  {
    q: 'Do I need prior programming or game engine experience?',
    a: 'No prior experience is required. The beginner course starts from scratch, guiding you through Godot interface navigation, nodes, and basic GDScript step by step.',
  },
  {
    q: 'Why choose Godot 4?',
    a: 'Godot 4 is completely free and open-source under the MIT license with zero royalties or fees. It is lightweight, launches in seconds, and uses GDScript, which is fast and intuitive to write.',
  },
  {
    q: 'How do I use the written docs with YouTube videos?',
    a: 'Watch the video to understand the visual workflow, and reference the written documentation to copy exact code snippets and check node settings without pausing the video.',
  },
  {
    q: 'Are all tutorials and documentation free?',
    a: 'Yes. All YouTube tutorials, project guides, and companion documentation on this site are 100% free.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className={styles.sectionWrapper} id="faq">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            <i className="fa-solid fa-circle-question"></i>
            Questions &amp; Answers
          </div>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Common questions about learning with Godot Sensei.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <i
                    className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} ${styles.arrowIcon}`}
                  ></i>
                </button>
                {isOpen && (
                  <div className={styles.answerWrapper}>
                    <p className={styles.answerText}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
