import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutSection Component
 * About section with fade-in animation
 */
const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.container}>
        {/* Section Decorator */}
        <div className={styles.decorator}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z" fill="currentColor"/>
          </svg>
        </div>

        <div ref={contentRef} className={styles.content}>
          <h2 className={styles.title}>Marketing Meets Creativity</h2>
          
          <div className={styles.description}>
            <p>
              We craft digital experiences that help brands connect with their audience 
              through creativity and grow with purpose. Our focus is on strategy-driven 
              design and marketing that delivers measurable results.
            </p>
            <p>
              From startups to global brands, we help our clients stand out in a 
              fast-changing digital world.
            </p>
          </div>

          <Button variant="primary" href="#contact">
            ABOUT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
