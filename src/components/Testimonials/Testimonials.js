import React, { useState, useEffect } from 'react';
import { youtubeTestimonials } from '../../data/testimonials';
import styles from './styles.module.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = youtubeTestimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Gentle 6-second auto-advance, paused on mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const current = youtubeTestimonials[currentIndex];

  return (
    <section className={styles.sectionWrapper} id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <div className={styles.sectionEyebrow}>
            <i className="fa-brands fa-youtube"></i>
            YouTube Comments
          </div>
          <h2 className={styles.sectionTitle}>Learner Feedback</h2>
          <p className={styles.sectionSubtitle}>
            Real comments from students learning Godot with our YouTube tutorials and written guides.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Desktop Previous Arrow Button */}
          <button
            type="button"
            className={`${styles.navButton} ${styles.desktopNavBtn}`}
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Single Focused Review Card */}
          <div className={styles.cardWrapper}>
            <div key={current.id} className={styles.commentCard}>
              {/* Header: Author + Video Context */}
              <div className={styles.cardHeader}>
                <div className={styles.authorGroup}>
                  {/* Author Avatar Link */}
                  <a
                    href={current.authorChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.avatarLink}
                    title={`View ${current.authorName} on YouTube`}
                  >
                    {current.authorAvatarUrl ? (
                      <img
                        src={current.authorAvatarUrl}
                        alt={current.authorName}
                        className={styles.avatarImg}
                      />
                    ) : (
                      <div
                        className={styles.avatarCircle}
                        style={{ backgroundColor: current.avatarColor }}
                      >
                        {current.authorInitials}
                      </div>
                    )}
                  </a>

                  {/* Author Details */}
                  <div className={styles.authorMeta}>
                    <div className={styles.nameRow}>
                      <a
                        href={current.authorChannelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.authorName}
                      >
                        {current.authorName}
                      </a>
                      <span className={styles.timeAgo}>{current.timeAgo}</span>
                    </div>

                    {/* Video Context Link */}
                    <div className={styles.videoLinkRow}>
                      <span className={styles.onText}>on</span>
                      <a
                        href={current.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.videoTitleLink}
                      >
                        <i className="fa-solid fa-play"></i>
                        {current.videoTitle}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Badge */}
                {/* <div className={styles.topRightBadge}>
                  <i className="fa-brands fa-youtube fa-lg" title="YouTube Comment"></i>
                </div> */}
              </div>

              {/* Comment Content */}
              <blockquote className={styles.commentQuote}>
                &ldquo;{current.comment}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Desktop Next Arrow Button */}
          <button
            type="button"
            className={`${styles.navButton} ${styles.desktopNavBtn}`}
            onClick={nextSlide}
            aria-label="Next review"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Mobile Navigation Row (Left & Right arrows adjacent together) */}
        <div className={styles.mobileNavRow}>
          <button
            type="button"
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next review"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsRow}>
          {youtubeTestimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
