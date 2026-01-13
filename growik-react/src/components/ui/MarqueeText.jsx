/**
 * MarqueeText - Infinite Scrolling Text Component
 * 
 * Creates seamless infinite horizontal scrolling text.
 * Used in Hero line 2, Brand logos, Service cards, CTA section.
 * 
 * @param {string|React.Node} children - Content to scroll
 * @param {number} duration - Duration for one complete loop (seconds)
 * @param {string} direction - 'left' or 'right'
 * @param {boolean} pauseOnHover - Pause animation on hover
 */

import React, { useEffect, useRef } from 'react';
import { createMarquee } from '../animations/gsapUtils';
import styles from './MarqueeText.module.css';

export default function MarqueeText({ 
  children,
  duration = 30,
  direction = 'left',
  pauseOnHover = false
}) {
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (wrapperRef.current) {
      // Create animation
      animationRef.current = createMarquee(wrapperRef.current, {
        duration,
        direction
      });
      
      // Pause on hover if enabled
      if (pauseOnHover && wrapperRef.current) {
        const element = wrapperRef.current;
        
        element.addEventListener('mouseenter', () => {
          animationRef.current?.pause();
        });
        
        element.addEventListener('mouseleave', () => {
          animationRef.current?.play();
        });
      }
    }
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [duration, direction, pauseOnHover]);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={wrapperRef}>
        {/* Duplicate content for seamless loop */}
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.content} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
