import React from 'react';
import LazyVideo from '../components/LazyVideo';
import ContactCTA from '../components/ContactCTA';
import './WorksPage.css';

const allProjects = [
  { id: 1, title: 'Talking Head Series', videoUrl: '/talkinghead.mp4', category: 'Content Strategy' },
  { id: 2, title: 'Commercial Advertisement', videoUrl: '/commercialad.mp4', category: 'Ads' },
  { id: 3, title: 'YouTube Highlight', videoUrl: '/youtubclip.mp4', category: 'Retention' },
  { id: 4, title: 'Church Event Edit', videoUrl: '/ChurchEdit.mp4', category: 'Event' },
  { id: 5, title: 'Motion Design Reel', videoUrl: '/motiondesin1.mp4', category: 'Motion' },
  { id: 6, title: 'Movie Clip Tribute', videoUrl: '/movieclip.mp4', category: 'Creative' },
];

const WorksPage = () => {
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
            {allProjects.map(project => (
              <div key={project.id} className="works-card glass-card">
                <div className="works-video-wrapper">
                  <LazyVideo 
                    src={project.videoUrl} 
                    controls
                    playsInline 
                    className="works-video"
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
      
      <ContactCTA />
    </div>
  );
};

export default WorksPage;
