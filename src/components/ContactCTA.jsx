import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="cta-container glass-card text-center">
          <h2 className="cta-heading">
            Let’s grow your brand with <span className="accent-text">powerful content</span>
          </h2>
          <p className="cta-subtext">
            Ready to take your social media presence to the next level? Reach out today and let's discuss your project.
          </p>
          
          <div className="cta-buttons">
            <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn whatsapp">
               <MessageCircle size={20} /> WhatsApp
            </a>
            <a href="mailto:hello@example.com" className="btn btn-primary cta-btn email">
               <Mail size={20} /> Email Me
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn insta">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
