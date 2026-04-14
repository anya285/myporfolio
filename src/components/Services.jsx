import React from 'react';
import { Target, Clapperboard, Smartphone, Zap } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    icon: Target,
    title: 'Content Strategy',
    subtitle: 'Clarity before content',
    desc: 'I help brands define what to create, what works, and what doesn’t, so every piece of content has a clear purpose and drives results.'
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    subtitle: 'Scroll-stopping visuals',
    desc: 'I craft high-impact video edits designed to grab attention instantly, keep viewers engaged, and increase watch time.'
  },
  {
    icon: Smartphone,
    title: 'Social Media Management',
    subtitle: 'Growth-focused execution',
    desc: 'From posting to optimization, I manage your content to ensure consistency, engagement, and steady audience growth.'
  },
  {
    icon: Zap,
    title: 'Optimization & Testing',
    subtitle: 'Refine, improve, scale',
    desc: 'I analyze performance and refine content strategies to improve reach, engagement, and overall results over time.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="services-main-title">How I Turn Content Into Growth</h2>
        </div>

        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card glass-card">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <service.icon size={120} strokeWidth={1} className="red-icon" />
                </div>
                <div className="service-header-text">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-subtitle-text">{service.subtitle}</span>
                </div>
              </div>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
