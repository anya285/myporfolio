import React, { useRef, useEffect, useState } from 'react';

const LazyVideo = ({ src, ...rest }) => {
  const videoRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
        }
      },
      { 
        rootMargin: '0px', 
        threshold: 0.25 // Trigger when 25% of the video is visible
      }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [hasLoaded]);

  // Pause videos that are out of view to save CPU/GPU resources
  useEffect(() => {
    if (hasLoaded && videoRef.current) {
        if (isIntersecting && rest.autoPlay) {
            videoRef.current.play().catch(() => {}); 
        } else {
            videoRef.current.pause();
        }
    }
  }, [isIntersecting, hasLoaded, rest.autoPlay]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'inherit' }}>
      {!hasLoaded && <div className="video-placeholder" />}
      <video
        ref={videoRef}
        src={hasLoaded ? src : undefined}
        preload="none"
        onLoadedData={() => {
            // Optional: Hide placeholder once data is loaded if we wanted to be more precise
        }}
        {...rest}
      />
    </div>
  );
};

export default LazyVideo;
