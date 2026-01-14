import { forwardRef } from 'react';
import styles from './Button.module.css';

/**
 * Button Component
 * Reusable button with multiple variants matching Growik design
 */
const Button = forwardRef(({ 
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  disabled = false,
  ...props
}, ref) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  // Render as link if href provided
  if (href) {
    return (
      <a 
        ref={ref}
        href={href} 
        className={classes}
        {...props}
      >
        <span className={styles.text}>{children}</span>
      </a>
    );
  }

  // Render as button
  return (
    <button
      ref={ref}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
