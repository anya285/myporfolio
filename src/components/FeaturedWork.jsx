import React from 'react';
import './FeaturedWork.css';

const projects = [
  { id: 1, videoUrl: '/ChurchEdit.mp4', type: 'portrait' },
  { id: 2, videoUrl: '/commercialad.mp4', type: 'portrait' },
  { id: 3, videoUrl: '/youtubclip.mp4', type: 'portrait' },
  { id: 4, videoUrl: '/talkinghead.mp4', type: 'landscape' },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="section-padding featured-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">Featured <span className="accent-text">Work</span></h2>
          <p className="section-subheading">
            Strategic video edits designed to hook viewers, boost engagement, and maximize watch time.
          </p>
        </div>
      </div>
      
      <div className="slider-container">
        <div className="slider-track">
          {[...projects, ...projects, ...projects].map((project, idx) => (
            <div key={idx} className="project-slide">
              <div className={`video-frame ${project.type}`}>
                <video 
                  src={project.videoUrl} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="showcase-video"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
