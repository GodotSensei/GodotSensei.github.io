import React from 'react';
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
  return (
    <Layout
      title="Level Up in Godot 4 • Tutorials and Companion Docs"
      description="Practical Godot 4 tutorials and step-by-step companion documentation. Learn game development with hands-on video lessons and clean code guides."
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