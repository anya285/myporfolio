import React from 'react';
import { Scissors, Zap, Share2, TrendingUp, MonitorPlay, BarChart3 } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="services-subtitle">Services</h2>
          <h3 className="services-main-title">What I Do for Clients</h3>
          <div className="title-underline"></div>
        </div>
        
        <div className="services-grid">
          <div className="service-card glass-card">
            <div className="service-header">
              <div className="service-icon-wrapper">
                <Scissors size={28} className="purple-text" />
              </div>
              <h3>Video Editing</h3>
            </div>
            <p className="service-desc">
              High-impact editing designed for maximum retention on platforms like TikTok, Reels, and Shorts.
            </p>
            <ul className="service-features">
              <li><Zap size={16} /> Short-form content</li>
              <li><MonitorPlay size={16} /> Motion graphics & subtitles</li>
              <li><TrendingUp size={16} /> Storytelling edits</li>
            </ul>
          </div>
          
          <div className="service-card glass-card">
            <div className="service-header">
              <div className="service-icon-wrapper">
                <Share2 size={28} className="purple-text" />
              </div>
              <h3>Social Media Management</h3>
            </div>
            <p className="service-desc">
              End-to-end management of your social channels so you can focus on building your business.
            </p>
            <ul className="service-features">
              <li><BarChart3 size={16} /> Content strategy</li>
              <li><Zap size={16} /> Posting & scheduling</li>
              <li><TrendingUp size={16} /> Growth optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
