import React, { useState } from 'react';
import { X } from 'lucide-react';
import LazyVideo from './LazyVideo';
import './FeaturedWork.css';

const projects = [
  { id: 1, videoUrl: '/ChurchEdit.mp4', type: 'portrait' },
  { id: 2, videoUrl: '/commercialad.mp4', type: 'portrait' },
  { id: 3, videoUrl: '/youtubclip.mp4', type: 'portrait' },
  { id: 4, videoUrl: '/swychr motion design intro.mp4', type: 'portrait' },
  { id: 5, videoUrl: '/talkinghead.mp4', type: 'landscape' },
];

const FeaturedWork = () => {
  const [activeVideo, setActiveVideo] = useState(null);

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
            <div key={idx} className="project-slide" onClick={() => setActiveVideo(project)} style={{ cursor: 'pointer' }}>
              <div className={`video-frame ${project.type}`}>
                <LazyVideo 
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

export default FeaturedWork;
