import React, { useState } from 'react';
import { X } from 'lucide-react';
import LazyVideo from '../components/LazyVideo';
import ContactCTA from '../components/ContactCTA';
import './WorksPage.css';

const allProjects = [
  { id: 1, title: 'Talking Head Series', videoUrl: '/talkinghead.mp4', category: 'Content Strategy', type: 'landscape' },
  { id: 2, title: 'Commercial Advertisement', videoUrl: '/commercialad.mp4', category: 'Ads', type: 'portrait' },
  { id: 3, title: 'YouTube Highlight', videoUrl: '/youtubclip.mp4', category: 'Retention', type: 'portrait' },
  { id: 4, title: 'Church Event Edit', videoUrl: '/ChurchEdit.mp4', category: 'Event', type: 'portrait' },
  { id: 5, title: 'Motion Design Reel', videoUrl: '/motiondesin1.mp4', category: 'Motion', type: 'portrait' },
  { id: 6, title: 'Movie Clip Tribute', videoUrl: '/movieclip.mp4', category: 'Creative', type: 'landscape' },
  { id: 7, title: 'Swychr Motion Intro', videoUrl: '/swychr motion design intro.mp4', category: 'Motion', type: 'portrait' },
];

const WorksPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="works-page">
      <section className="works-hero section-padding">
        <div className="container">
          <h1 className="works-title">Selected <span className="accent-text">Portfolio</span></h1>
          <p className="works-subtitle">A deep dive into the projects that define my creative output and strategy.</p>
        </div>
      </section>

      <section className="works-grid-section section-padding">
        <div className="container">
          <div className="works-grid">
            {allProjects.map((project, index) => (
              <div key={project.id} className={`works-card glass-card ${project.type}`} onClick={() => setActiveVideo(project)}>
                <div className="works-video-wrapper">
                  <LazyVideo 
                    src={project.videoUrl} 
                    autoPlay
                    muted
                    loop
                    playsInline 
                    className="works-video"
                    eager={index < 2}
                  />
                </div>
                <div className="works-info">
                  <span className="works-category">{project.category}</span>
                  <h3 className="works-item-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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

      <ContactCTA />
    </div>
  );
};

export default WorksPage;
