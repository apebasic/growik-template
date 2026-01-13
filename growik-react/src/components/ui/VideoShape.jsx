/**
 * VideoShape - Background Video Player Component
 * 
 * Displays autoplay, muted, looping video shapes.
 * Used in Hero, Service cards, Pricing cards.
 * 
 * @param {string} src - Video file path
 * @param {string} className - Additional CSS classes
 * @param {string} size - 'small', 'medium', or 'large'
 */

import React from 'react';
import styles from './VideoShape.module.css';

export default function VideoShape({ 
  src,
  className = '',
  size = 'medium'
}) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        src={src}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
