import { useState } from 'react';
import Button from '../ui/Button';
import styles from './Header.module.css';

/**
 * Header Component
 * Main navigation header with logo, nav links, and social icons
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
    { label: 'CASE STUDIES', href: '#projects' }
  ];

  const socialLinks = [
    { 
      name: 'Twitter', 
      icon: 'X',
      href: 'https://twitter.com',
      ariaLabel: 'Follow us on Twitter'
    },
    { 
      name: 'Instagram', 
      icon: 'IG',
      href: 'https://instagram.com',
      ariaLabel: 'Follow us on Instagram'
    },
    { 
      name: 'YouTube', 
      icon: 'YT',
      href: 'https://youtube.com',
      ariaLabel: 'Follow us on YouTube'
    }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoText}>GROWIK</span>
          <span className={styles.logoSubtext}>MARKETING AGENCY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              href={item.href}
              variant="nav"
              className={styles.navLink}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className={styles.social}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={styles.socialIcon}
              aria-label={social.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileSocial}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={styles.mobileSocialIcon}
              aria-label={social.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
