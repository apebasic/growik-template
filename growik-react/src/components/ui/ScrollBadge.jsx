import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './ScrollBadge.module.css';

/**
 * ScrollBadge Component
 * Circular rotating badge with "SCROLL DOWN" text
 * Speeds up rotation on scroll
 */
const ScrollBadge = ({ text = 'SCROLL DOWN', className = '' }) => {
  const badgeRef = useRef(null);
  const rotationRef = useRef({ speed: 1 });

  useEffect(() => {
    if (!badgeRef.current) return;

    // Continuous rotation animation
    const rotation = gsap.to(badgeRef.current, {
      rotation: 360,
      duration: 10,
      ease: 'none',
      repeat: -1,
      onUpdate: function() {
        // Adjust speed based on scroll
        this.timeScale(rotationRef.current.speed);
      }
    });

    // Speed up on scroll
    const handleScroll = () => {
      rotationRef.current.speed = 3;
      
      // Reset speed after scroll stops
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        rotationRef.current.speed = 1;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      rotation.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create circular text path
  const textArray = text.split('');
  const angleStep = 360 / textArray.length;

  return (
    <div className={`${styles.scrollBadge} ${className}`}>
      <div ref={badgeRef} className={styles.badgeInner}>
        {/* Circular text */}
        <div className={styles.circularText}>
          {textArray.map((char, index) => (
            <span
              key={index}
              className={styles.char}
              style={{
                transform: `rotate(${index * angleStep}deg) translateY(-50px)`
              }}
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Center arrow icon */}
        <div className={styles.arrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollBadge;
