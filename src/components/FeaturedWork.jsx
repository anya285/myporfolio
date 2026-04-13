import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import './FeaturedWork.css';

const projects = [
  {
    id: 1,
    title: 'High-Retention TikTok Edit',
    category: 'Short-Form Video',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80',
  },
  {
    id: 2,
    title: 'Brand Story Commercial',
    category: 'Documentary Style',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&q=80',
  },
  {
    id: 3,
    title: 'Dynamic Product Teaser',
    category: 'Creative Edit',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=500&q=80',
  },
  {
    id: 4,
    title: 'Podcast Highlights',
    category: 'Social Media',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80',
  }
];

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="project-card glass-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-container">
        <img 
          src={project.posterUrl} 
          alt={project.title} 
          className={`poster ${isHovered ? 'hidden' : ''}`}
        />
        <video 
          ref={videoRef}
          src={project.videoUrl} 
          muted 
          loop 
          playsInline
          className={`preview-video ${isHovered ? 'visible' : ''}`}
        />
        {!isHovered && (
          <div className="play-overlay">
             <Play size={32} color="#fff" fill="#fff" />
          </div>
        )}
      </div>
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">Featured <span className="accent-text">Work</span></h2>
          <p className="section-subheading">
            A showcase of recent edits designed to grab attention and hold it. Hover to preview.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
