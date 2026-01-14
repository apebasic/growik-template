import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CounterNumber.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * CounterNumber Component
 * Animated count-up number with scroll trigger
 * Used in Stats section and Service cards
 */
const CounterNumber = ({ 
  start = 0,
  end,
  duration = 2,
  format = 'number', // 'number', 'padded' (00), 'decimal'
  suffix = '',
  prefix = '',
  trigger = 'scroll', // 'scroll' or 'immediate'
  className = '',
  onComplete
}) => {
  const [displayValue, setDisplayValue] = useState(start);
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || end === undefined) return;

    const counter = { value: start };

    const updateDisplay = () => {
      let formatted;
      
      switch (format) {
        case 'padded':
          formatted = Math.floor(counter.value).toString().padStart(2, '0');
          break;
        case 'decimal':
          formatted = counter.value.toFixed(1);
          break;
        default:
          formatted = Math.floor(counter.value);
      }
      
      setDisplayValue(formatted);
    };

    if (trigger === 'scroll') {
      // Animate on scroll into view
      animationRef.current = gsap.to(counter, {
        value: end,
        duration: duration,
        ease: 'power2.out',
        onUpdate: updateDisplay,
        onComplete: onComplete,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          once: true
        }
      });
    } else {
      // Animate immediately
      animationRef.current = gsap.to(counter, {
        value: end,
        duration: duration,
        ease: 'power2.out',
        onUpdate: updateDisplay,
        onComplete: onComplete
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [start, end, duration, format, trigger, onComplete]);

  return (
    <span ref={elementRef} className={`${styles.counter} ${className}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default CounterNumber;
