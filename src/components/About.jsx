import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-col">
            <div className="portrait-wrapper glass-card">
              <img
                src="/WT6A9140.JPG"
                alt="Emmanuel Anya"
                className="about-portrait"
              />
            </div>
          </div>

          <div className="about-text-col">
            <h2 className="about-heading">About <span className="accent-text">Me</span></h2>
            <div className="bio-container">
              <p className="bio-text">
                I'm a passionate video editor, motion designer, and social media manager focused on creating engaging, high-impact visual content. My approach combines technical skill with creative storytelling to produce videos that capture attention, connect with audiences, and deliver results.
              </p>
              <p className="bio-text">
                I specialize in short-form content, motion graphics, and performance-driven edits tailored for platforms like TikTok, Instagram, and YouTube. Whether it’s a fast-paced social media video or a creative visual piece, I bring the same level of dedication and attention to detail to every project.
              </p>
              <p className="bio-text italic-text">
                "I believe great editing goes beyond visuals, it should enhance the message, hold attention, and leave a lasting impression."
              </p>
            </div>

            <div className="skills-grid-about">
              <div className="skills-group">
                <h3>Video Editing</h3>
                <ul>
                  <li>Short-form video editing (Reels, TikTok, Shorts)</li>
                  <li>Storytelling & pacing</li>
                  <li>Color grading & correction</li>
                  <li>Audio editing & sound design</li>
                </ul>
              </div>

              <div className="skills-group">
                <h3>Motion & Design</h3>
                <ul>
                  <li>Text animations & subtitles</li>
                  <li>Visual effects (VFX)</li>
                  <li>Content strategy</li>
                  <li>Engagement-focused editing</li>
                  <li>Trend-based content creation</li>
                </ul>
              </div>
            </div>

            <div className="software-section-about">
              <h3>Software</h3>
              <div className="software-stack">
                <span className="software-pill">CapCut</span>
                <span className="software-pill">Alight Motion</span>
                <span className="software-pill">Adobe After Effects</span>
                <span className="software-pill">Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
