import React from 'react';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-layout">
          {/* Left Column: Info */}
          <div className="contact-info-col">
            <h2 className="contact-heading">Start Your Next<br />Project</h2>
            <p className="contact-desc">
              Looking to elevate your content and stand out online? Let’s create something impactful together.
            </p>
            
            <div className="contact-links">
              <a href="mailto:emmanuelanya285@gmail.com" className="contact-link-item">
                <span className="contact-label">emmanuelanya285@gmail.com</span>
                <ArrowUpRight size={20} className="accent-text" />
              </a>
              <a href="tel:+2349072389416" className="contact-link-item">
                <span className="contact-label">+234 907 238 9416</span>
                <ArrowUpRight size={20} className="accent-text" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell me about your project" className="form-input form-textarea" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
