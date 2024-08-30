import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h4>About Us</h4>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant, offering a
              mix of traditional and modern dishes.
            </p>
          </div>
          <div className={styles.column}>
            <h4>Contact Us</h4>
            <p>123 Main Street, Chicago, IL</p>
            <p>Email: info@littlelemon.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className={styles.column}>
            <h4>Follow Us</h4>
            <ul className={styles.socialLinks}>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Links</h4>
            <ul className={styles.links}>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>&copy; 2024 Little Lemon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
