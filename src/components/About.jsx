import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-col">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" 
              alt="Profile" 
              className="about-portrait"
            />
          </div>
          
          <div className="about-text-col">
            <h2 className="about-heading">About Me</h2>
            <p className="bio-text">
              I'm a passionate video editor with over 5 years of experience crafting compelling visual stories. My approach combines technical expertise with creative vision to deliver content that resonates with audiences and achieves your goals.
            </p>
            <p className="bio-text">
              Whether it's a high-energy commercial, an intimate documentary, or complex motion graphics, I bring the same level of dedication and attention to detail to every project. I believe that great editing is invisible - it serves the story and enhances the emotional impact.
            </p>
            
            <h3 className="skills-heading">Skills & Software</h3>
            <div className="software-stack">
              <span className="software-pill">Adobe Premiere Pro</span>
              <span className="software-pill">After Effects</span>
              <span className="software-pill">DaVinci Resolve</span>
              <span className="software-pill">Final Cut Pro</span>
              <span className="software-pill">Photoshop</span>
              <span className="software-pill">Motion Graphics</span>
              <span className="software-pill">Sound Design</span>
              <span className="software-pill">Video Compression</span>
              <span className="software-pill">Color Grading</span>
              <span className="software-pill">Audio Mixing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
