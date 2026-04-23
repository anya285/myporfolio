import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Bio Column */}
          <div className="footer-col footer-branding">
            <div className="footer-logo-wrapper">
              <h2 className="footer-logo">Emmanuel <span className="accent-text">Anya</span></h2>
            </div>
            <p className="footer-bio">
              I help brands grow through scroll-stopping video content and strategic social media management—creating visuals that engage, convert, and leave a lasting impact.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/emmanuel-miracle-5b6652255" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://x.com/emmanuelanya285" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="https://www.instagram.com/m_edits285?igsh=bDBmbjRxeWg0bXVy" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@depydev?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col footer-links">
            <h3 className="footer-col-title">Quick <span className="accent-text">Links</span></h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/works">Work</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col footer-newsletter">
            <h3 className="footer-col-title">Stay <span className="accent-text">Connected</span></h3>
            <p className="newsletter-text">
              Get insights on video editing, content strategy, and social media growth.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input" 
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe <span className="arrow-icon">↗</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>© 2026 Emmanuel Anya. All rights reserved.</p>
            <div className="footer-bottom-right">
              <p className="footer-tagline">Crafted with creativity and a focus on performance.</p>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="back-to-top" aria-label="Back to Top">
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
