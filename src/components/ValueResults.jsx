import React, { useState, useEffect, useRef } from 'react';
import './ValueResults.css';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const endValue = parseInt(end);
    if (start === endValue) return;

    let timer = setInterval(() => {
      start += Math.ceil(endValue / 50);
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 50);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const ValueResults = () => {
  return (
    <section className="section-padding value-section">
      <div className="container centered-value">
        <div className="value-sticky-wrapper">
          <h2 className="section-heading">Why Choose My <span className="accent-text">Edits?</span></h2>
          <p className="value-desc">
            I don't just put clips together. I engineer viewer retention. Every frame is optimized to play into the algorithms of modern social media platforms.
          </p>
          
          <div className="value-stats-centered">
            <div className="stat-item-centered glass-card">
              <h4 className="stat-number-large gradient-text">
                <Counter end="3" suffix="s" />
              </h4>
              <p>Powerful Hooks</p>
            </div>
            <div className="stat-item-centered glass-card">
              <h4 className="stat-number-large gradient-text">
                <Counter end="80" suffix="%" />
              </h4>
              <p>Avg Retention Increase</p>
            </div>
            <div className="stat-item-centered glass-card">
              <h4 className="stat-number-large gradient-text">
                <Counter end="10" suffix="x" />
              </h4>
              <p>Algorithm Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueResults;
