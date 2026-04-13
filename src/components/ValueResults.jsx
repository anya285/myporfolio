import React from 'react';
import './ValueResults.css';

const ValueResults = () => {
  return (
    <section className="section-padding value-section">
      <div className="container">
        <div className="value-grid">
          <div className="value-content">
            <h2 className="section-heading">Why Choose My <span className="accent-text">Edits?</span></h2>
            <p className="value-desc">
              I don't just put clips together. I engineer viewer retention. Every frame is optimized to play into the algorithms of modern social media platforms.
            </p>
            
            <div className="value-stats">
              <div className="stat-item">
                <h4 className="stat-number gradient-text">3s</h4>
                <p>Powerful Hooks</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number gradient-text">80%</h4>
                <p>Avg Retention Increase</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number gradient-text">10x</h4>
                <p>Algorithm Reach</p>
              </div>
            </div>
          </div>
          
          <div className="value-visual glass-card">
            <div className="retention-chart">
              <div className="chart-line"></div>
              <div className="chart-bar bar-1"></div>
              <div className="chart-bar bar-2"></div>
              <div className="chart-bar bar-3"></div>
              <div className="chart-bar bar-4"></div>
              <div className="chart-bar bar-5"></div>
              <div className="chart-point">
                <span>Higher Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueResults;
