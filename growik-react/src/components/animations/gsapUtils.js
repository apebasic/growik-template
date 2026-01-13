/**
 * GSAP Animation Utilities
 * Centralized animation configurations and helpers
 */

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize GSAP with global settings
 */
export const initGSAP = () => {
  // Set default ease
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8
  });
  
  // Refresh ScrollTrigger on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
};

/**
 * 3D Cubic Text Rotation Animation
 * Based on Claude's exact specifications
 * 
 * @param {HTMLElement} element - The container element to animate
 * @param {Object} options - Animation options
 * @param {boolean} options.autoRotate - Auto-rotate (hero) or scroll-triggered (sections)
 * @param {number} options.pauseDuration - Pause duration at each face (seconds)
 * @param {number} options.rotateDuration - Rotation duration between faces (seconds)
 */
export const createCubicRotation = (element, options = {}) => {
  const {
    autoRotate = true,
    pauseDuration = 1,
    rotateDuration = 0.6
  } = options;
  
  if (autoRotate) {
    // Hero: Auto-rotating with pauses
    const timeline = gsap.timeline({ repeat: -1 });
    
    // Rotate through all 4 faces
    [90, 180, 270, 360].forEach((angle) => {
      timeline
        .to(element, {
          rotateX: -angle,
          duration: rotateDuration,
          ease: 'back.out(2)' // Resistance then release effect
        })
        .to({}, { duration: pauseDuration }); // Pause
    });
    
    return timeline;
  } else {
    // Section titles: Scroll-triggered
    return gsap.to(element, {
      rotateX: -90,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      }
    });
  }
};

/**
 * Infinite Marquee Scroll Animation
 * 
 * @param {HTMLElement} element - The scrolling element
 * @param {Object} options - Animation options
 * @param {number} options.duration - Duration for one complete loop (seconds)
 * @param {string} options.direction - 'left' or 'right'
 */
export const createMarquee = (element, options = {}) => {
  const {
    duration = 30,
    direction = 'left'
  } = options;
  
  const distance = element.scrollWidth / 2;
  const xValue = direction === 'left' ? -distance : distance;
  
  return gsap.to(element, {
    x: xValue,
    duration: duration,
    ease: 'none',
    repeat: -1
  });
};

/**
 * Count-Up Number Animation
 * 
 * @param {HTMLElement} element - The number element
 * @param {Object} options - Animation options
 * @param {number} options.start - Starting number
 * @param {number} options.end - Ending number
 * @param {number} options.duration - Animation duration (seconds)
 * @param {string} options.format - Number format ('00' for padded, '###' for normal)
 */
export const createCountUp = (element, options = {}) => {
  const {
    start = 0,
    end = 100,
    duration = 2,
    format = '###'
  } = options;
  
  const obj = { value: start };
  
  return gsap.to(obj, {
    value: end,
    duration: duration,
    ease: 'power2.out',
    onUpdate: () => {
      const value = Math.round(obj.value);
      element.textContent = format === '00' 
        ? value.toString().padStart(2, '0')
        : value.toString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true
    }
  });
};

/**
 * Stacking Cards Animation
 * 
 * @param {HTMLElement[]} cards - Array of card elements
 */
export const createStackingCards = (cards) => {
  cards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top top',
        end: `+=${window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: 1
      }
    });
    
    // Scale down previous cards
    if (index > 0) {
      gsap.to(cards[index - 1], {
        scale: 0.95,
        opacity: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      });
    }
  });
};

/**
 * Fade In on Scroll Animation
 * 
 * @param {HTMLElement} element - Element to fade in
 * @param {Object} options - Animation options
 */
export const createFadeIn = (element, options = {}) => {
  const {
    y = 50,
    duration = 0.8
  } = options;
  
  return gsap.from(element, {
    opacity: 0,
    y: y,
    duration: duration,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true
    }
  });
};

/**
 * Expanding Circles Animation
 * 
 * @param {HTMLElement[]} circles - Array of circle elements
 */
export const createExpandingCircles = (circles) => {
  circles.forEach((circle, index) => {
    gsap.from(circle, {
      scale: 0,
      duration: 0.6,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: circle,
        start: 'top 80%',
        once: true
      },
      delay: index * 0.1
    });
  });
};

/**
 * Cleanup all ScrollTrigger instances
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export default {
  initGSAP,
  createCubicRotation,
  createMarquee,
  createCountUp,
  createStackingCards,
  createFadeIn,
  createExpandingCircles,
  cleanupScrollTriggers
};
