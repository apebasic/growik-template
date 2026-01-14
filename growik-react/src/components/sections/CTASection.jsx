import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeText from '../ui/MarqueeText';
import Button from '../ui/Button';
import styles from './CTASection.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * CTASection Component
 * Call-to-action section with marquee text and expanding circles
 */
const CTASection = () => {
  const sectionRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    if (circlesRef.current.length === 0) return;

    // Expanding circles animation
    circlesRef.current.forEach((circle, index) => {
      if (!circle) return;

      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          duration: 1.5,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            once: true
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.cta} id="cta">
      {/* Background Circles */}
      <div className={styles.circlesWrapper}>
        <div 
          ref={el => circlesRef.current[0] = el}
          className={`${styles.circle} ${styles.circleOrange}`}
        ></div>
        <div 
          ref={el => circlesRef.current[1] = el}
          className={`${styles.circle} ${styles.circleBlack}`}
        ></div>
        <div 
          ref={el => circlesRef.current[2] = el}
          className={`${styles.circle} ${styles.circleOrange}`}
        ></div>
      </div>

      <div className={styles.content}>
        <div className={styles.label}>Keep Scrolling</div>
        
        <h2 className={styles.title}>Boost Your</h2>
        
        {/* Marquee Text */}
        <div className={styles.marqueeWrapper}>
          <MarqueeText speed={25} direction="left">
            <span className={styles.marqueeText}>
              Marketing Marketing Marketing Marketing Marketing Marketing 
            </span>
          </MarqueeText>
        </div>
        
        <h2 className={styles.title}>Strategy Today</h2>
        
        <Button variant="primary" size="large" href="#contact">
          GET STARTED
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
