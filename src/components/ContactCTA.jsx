import React, { useState } from 'react';
import { Send, ArrowUpRight, CheckCircle } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "ac6fc62c-fc48-4348-8e38-f4182ed82b01");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

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
              {isSuccess ? (
                <div className="success-message">
                  <CheckCircle size={48} color="var(--color-accent-primary)" />
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out, Emmanuel will get back to you shortly.</p>
                  <button className="btn btn-secondary" onClick={() => setIsSuccess(false)}>Send another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Tell me about your project" className="form-input form-textarea" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
