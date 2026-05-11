import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import LazyVideo from './LazyVideo';
import './SelectedProjects.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Talking Head Series',
    tags: ['Short-Form', 'Content Strategy'],
    videoUrl: '/talkinghead.mp4',
    fullWidth: true,
  },
  {
    id: 2,
    title: 'Commercial Advertisement',
    tags: ['Ads', 'Motion Design'],
    videoUrl: '/commercialad.mp4',
    fullWidth: false,
  },
  {
    id: 3,
    title: 'YouTube Highlight',
    tags: ['Long-Form', 'Retention'],
    videoUrl: '/youtubclip.mp4',
    fullWidth: false,
  },
  {
    id: 4,
    title: 'Church Event Edit',
    tags: ['Social Media', 'Events'],
    videoUrl: '/ChurchEdit.mp4',
    fullWidth: false,
  }
];

const SelectedProjects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="selected-projects-section section-padding" id="portfolio">
      <div className="container">
        <div className="selected-projects-layout">
          <div className="sp-left">
            <div className="sp-sticky-content">
              <h2 className="sp-heading">Selected<br />Projects</h2>
              <a href="#contact" className="btn btn-primary sp-btn">
                See More <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="sp-right">
            <div className="sp-grid">
              {portfolioItems.map(item => (
                <div key={item.id} className={`sp-card glass-card ${item.fullWidth ? 'full-width' : ''}`} onClick={() => setActiveVideo(item)} style={{ cursor: 'pointer' }}>
                  <div className="sp-image-wrapper">
                    <LazyVideo src={item.videoUrl} className="sp-image" autoPlay loop muted playsInline />
                  </div>
                  <div className="sp-info">
                    <h3 className="sp-title">{item.title}</h3>
                    <div className="sp-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="sp-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
              <X size={24} /> Close
            </button>
            <video 
              src={activeVideo.videoUrl} 
              className="video-modal-video"
              controls 
              autoPlay 
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedProjects;
