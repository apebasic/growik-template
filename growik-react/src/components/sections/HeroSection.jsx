import { useEffect, useRef } from 'react';
import CubicText3D from '../ui/CubicText3D';
import MarqueeText from '../ui/MarqueeText';
import VideoShape from '../ui/VideoShape';
import ScrollBadge from '../ui/ScrollBadge';
import styles from './HeroSection.module.css';

/**
 * HeroSection Component
 * Main hero section with 3D rotating text, marquee, and video shapes
 */
const HeroSection = () => {
  const heroRef = useRef(null);

  const line1Words = ['MARKETING', 'STRATEGY', 'CONSULTING', 'BRANDING'];
  
  const line2Content = [
    { type: 'text', content: 'MADE SIMPLE' },
    { type: 'video', src: '/videos/shape-01.mp4' },
    { type: 'text', content: 'THAT WORKS' },
    { type: 'video', src: '/videos/shape-02.mp4' }
  ];

  return (
    <section ref={heroRef} className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Tagline */}
        <div className={styles.tagline}>
          <span className={styles.taglineText}>marketing Agency</span>
        </div>

        {/* Line 1: 3D Cubic Text */}
        <div className={styles.line1}>
          <CubicText3D 
            words={line1Words}
            size="hero"
            autoRotate={true}
          />
        </div>

        {/* Line 2: Marquee with Video Shapes */}
        <div className={styles.line2}>
          <MarqueeText speed={20} direction="left">
            {line2Content.map((item, index) => (
              <div key={index} className={styles.marqueeItem}>
                {item.type === 'text' ? (
                  <span className={styles.marqueeText}>{item.content}</span>
                ) : (
                  <VideoShape 
                    src={item.src}
                    size="medium"
                    className={styles.marqueeVideo}
                  />
                )}
              </div>
            ))}
          </MarqueeText>
        </div>

        {/* Subtitle */}
        <div className={styles.subtitle}>
          <span className={styles.subtitleText}>Partners in Growth</span>
        </div>

        {/* Location Badge */}
        <div className={styles.location}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Based in New York</span>
        </div>

        {/* Section Label */}
        <div className={styles.sectionLabel}>
          <span>Marketing Solutions</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Scroll Badge */}
      <ScrollBadge text="SCROLL DOWN - SCROLL DOWN - " />
    </section>
  );
};

export default HeroSection;
