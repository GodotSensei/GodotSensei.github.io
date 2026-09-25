import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses/FeaturedCourses';
import WhySensei from '../components/WhySensei/WhySensei';
import Testimonials from '../components/Testimonials/Testimonials';
import CommunityBanner from '../components/CommunityBanner/CommunityBanner';
import FAQ from '../components/FAQ/FAQ';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: false,
          offset: 60,
        });
        window.AOS.refresh();
      }
    };

    if (typeof window !== 'undefined') {
      if (window.AOS) {
        initAOS();
      } else {
        const timer = setInterval(() => {
          if (window.AOS) {
            initAOS();
            clearInterval(timer);
          }
        }, 100);
        return () => clearInterval(timer);
      }
    }
  }, []);

  return (
    <Layout
      title="Level Up in Godot • Tutorials and Companion Docs"
      description="Practical Godot tutorials and step-by-step companion documentation. Learn game development with hands-on video lessons and clean code guides."
    >
      <main>
        <HeroSection />
        <FeaturedCourses />
        <WhySensei />
        <Testimonials />
        <CommunityBanner />
        <FAQ />
      </main>
    </Layout>
  );
}