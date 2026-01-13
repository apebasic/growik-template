/**
 * CubicText3D - 3D Rotating Text Cube Component
 * 
 * Creates a 4-sided text cube that rotates to show different words.
 * Used in Hero section (auto-rotating) and section titles (scroll-triggered).
 * 
 * Based on Claude's exact specifications:
 * - Hero: 6rem (96px) depth, auto-rotates with pauses
 * - Sections: 5rem (80px) depth, scroll-triggered rotation
 * 
 * @param {string[]} words - Array of 4 words for each face
 * @param {string} size - 'hero' or 'section'
 * @param {boolean} autoRotate - Auto-rotate or scroll-triggered
 */

import React, { useEffect, useRef } from 'react';
import { createCubicRotation } from '../animations/gsapUtils';
import styles from './CubicText3D.module.css';

export default function CubicText3D({ 
  words = ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
  size = 'hero',
  autoRotate = false 
}) {
  const boxRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (boxRef.current) {
      // Create animation
      animationRef.current = createCubicRotation(boxRef.current, {
        autoRotate,
        pauseDuration: 1,
        rotateDuration: 0.6
      });
    }
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [autoRotate]);
  
  return (
    <div className={`${styles.block} ${styles[size]}`}>
      <div className={styles.box} ref={boxRef}>
        {/* Front Face */}
        <div className={`${styles.face} ${styles.front}`}>
          <h2>{words[0]}</h2>
        </div>
        
        {/* Back Face */}
        <div className={`${styles.face} ${styles.back}`}>
          <h2>{words[1]}</h2>
        </div>
        
        {/* Top Face */}
        <div className={`${styles.face} ${styles.top}`}>
          <h2>{words[2]}</h2>
        </div>
        
        {/* Bottom Face */}
        <div className={`${styles.face} ${styles.bottom}`}>
          <h2>{words[3]}</h2>
        </div>
      </div>
    </div>
  );
}
