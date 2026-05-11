import React, { useRef, useEffect, useState } from 'react';

const LazyVideo = ({ src, eager = false, ...rest }) => {
  const videoRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(eager);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observer for early loading (fetching metadata)
    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
        }
      },
      { 
        rootMargin: '800px', 
        threshold: 0
      }
    );

    // Strict observer for playing/pausing (only when actually in viewport)
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        rootMargin: '0px', 
        threshold: 0.1 
      }
    );

    if (videoRef.current) {
      loadObserver.observe(videoRef.current);
      playObserver.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        loadObserver.unobserve(videoRef.current);
        playObserver.unobserve(videoRef.current);
      }
    };
  }, [hasLoaded]);

  // Pause videos that are out of strict view to save CPU/GPU/Network
  useEffect(() => {
    if (hasLoaded && videoRef.current) {
        if (isVisible && rest.autoPlay) {
            videoRef.current.play().catch(() => {}); 
        } else {
            videoRef.current.pause();
        }
    }
  }, [isVisible, hasLoaded, rest.autoPlay]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'inherit' }}>
      {!hasLoaded && <div className="video-placeholder" />}
      <video
        ref={videoRef}
        src={hasLoaded ? src : undefined}
        preload="metadata"
        onLoadedData={() => {
            // Optional: Hide placeholder once data is loaded
        }}
        {...rest}
      />
    </div>
  );
};

export default LazyVideo;
