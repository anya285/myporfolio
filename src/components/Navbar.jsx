import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
           M-Edits
        </a>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#work" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Service</a></li>
          <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-nav-contact">Contact</a>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} color="#fafafa" /> : <Menu size={24} color="#fafafa" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
