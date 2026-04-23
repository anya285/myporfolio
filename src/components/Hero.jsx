import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I create and manage content that doesn’t just look good. From viral short-form edits to full content strategies, I help brands and creators grow, engage, and stand out online.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 30); // Adjust typing speed here
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="overlay-texture"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text-col">
            <h2 className="hero-greeting">Hello, I’m Emmanuel Anya</h2>
            <h1 className="hero-headline roles-headline">
              Video Editor - Motion Designer - Social Media Manager
            </h1>
            <p className="hero-subtext typing-text">
              {typedText}<span className="cursor-blink">|</span>
            </p>
            <div className="hero-ctas">
              <a href="/EMMANUEL ANYA main resume.pdf" download className="btn btn-primary hero-btn">
                Download CV <ArrowRight size={20} />
              </a>
              <Link to="/works" className="btn btn-secondary hero-btn-outline">
                <Play size={20} /> Works
              </Link>
            </div>
          </div>
          
          <div className="hero-image-col">
            <div className="hero-profile-ring">
              <div className="rotating-glow"></div>
              <div className="icons-orbit">
                <div className="hero-icon-pos pos-cc"><div className="hero-icon cc"><img src="https://www.google.com/s2/favicons?domain=capcut.com&sz=128" alt="CapCut" style={{width: '60%', height: '60%', borderRadius: '4px'}} /></div></div>
                <div className="hero-icon-pos pos-am"><div className="hero-icon am"><img src="https://www.google.com/s2/favicons?domain=alightmotion.com&sz=128" alt="Alight Motion" style={{width: '60%', height: '60%', borderRadius: '4px'}} /></div></div>
                <div className="hero-icon-pos pos-ae"><div className="hero-icon ae"><img src="https://www.google.com/s2/favicons?domain=adobe.com&sz=128" alt="After Effects" style={{width: '60%', height: '60%', borderRadius: '4px'}} /></div></div>
                <div className="hero-icon-pos pos-fb"><div className="hero-icon fb"><FaFacebookF size={20} /></div></div>
                <div className="hero-icon-pos pos-tt"><div className="hero-icon tt"><FaTiktok size={20} /></div></div>
                <div className="hero-icon-pos pos-yt"><div className="hero-icon yt"><FaYoutube size={20} /></div></div>
                <div className="hero-icon-pos pos-ig"><div className="hero-icon ig"><FaInstagram size={20} /></div></div>
              </div>
              <div className="hero-img-wrapper">
                <img 
                  src="/WT6A9140.JPG" 
                  alt="Emmanuel Anya" 
                  className="hero-profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
