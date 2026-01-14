import Button from '../ui/Button';
import styles from './Footer.module.css';

/**
 * Footer Component
 * Site footer with navigation, contact info, and social links
 */
const Footer = () => {
  const navColumns = [
    {
      title: 'Pages',
      links: [
        { label: 'HOME', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SERVICES', href: '#services' },
        { label: 'CONTACT', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'BLOG', href: '#' },
        { label: 'CASE STUDIES', href: '#projects' },
        { label: 'COMING SOON', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'X', href: 'https://twitter.com' },
    { name: 'Instagram', icon: 'IG', href: 'https://instagram.com' },
    { name: 'YouTube', icon: 'YT', href: 'https://youtube.com' },
    { name: 'LinkedIn', icon: 'IN', href: 'https://linkedin.com' }
  ];

  const legalLinks = [
    { label: 'Flowaze', href: '#' },
    { label: 'Webflow', href: '#' },
    { label: 'Style Guide', href: '#' },
    { label: 'Licenses', href: '#' },
    { label: 'Changelog', href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          {/* Logo & Tagline */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>GROWIK</span>
              <span className={styles.logoSubtext}>MARKETING AGENCY</span>
            </div>
            <p className={styles.tagline}>Partners in Growth</p>
          </div>

          {/* Contact Info */}
          <div className={styles.contact}>
            <a href="tel:+12125555555" className={styles.contactLink}>
              +1 (212) 555-5555
            </a>
            <a href="mailto:hello@growik.com" className={styles.contactLink}>
              HELLO@GROWIK.COM
            </a>
          </div>

          {/* Navigation Columns */}
          {navColumns.map((column, index) => (
            <div key={index} className={styles.navColumn}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <nav className={styles.navList}>
                {column.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Social Links */}
          <div className={styles.socialColumn}>
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialIcon}
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.legal}>
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Growik. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
