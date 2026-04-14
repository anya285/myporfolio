import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter, FaDribbble } from 'react-icons/fa';
import { Link as LinkIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Bio Column */}
          <div className="footer-col footer-branding">
            <div className="footer-logo-wrapper">
              <LinkIcon className="accent-text" size={24} />
              <h2 className="footer-logo">Emmanuel <span className="accent-text">Anya</span></h2>
            </div>
            <p className="footer-bio">
              I help brands grow through scroll-stopping video content and strategic social media management—creating visuals that engage, convert, and leave a lasting impact.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-icon" aria-label="Behance"><FaBehance /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-icon" aria-label="Dribbble"><FaDribbble /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col footer-links">
            <h3 className="footer-col-title">⚡ Quick <span className="accent-text">Links</span></h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col footer-newsletter">
            <h3 className="footer-col-title">📩 Stay <span className="accent-text">Connected</span></h3>
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
