import { forwardRef } from 'react';
import styles from './Card.module.css';

/**
 * Card Component
 * Reusable card container with multiple variants
 * Used for services, projects, testimonials, and pricing
 */
const Card = forwardRef(({ 
  children,
  variant = 'default', // 'default', 'service', 'project', 'testimonial', 'pricing'
  className = '',
  onClick,
  ...props
}, ref) => {
  const classes = [
    styles.card,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={ref}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
