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
      { rootMargin: '200px' } // Load slightly before it comes into view
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
            videoRef.current.play().catch(() => {}); // Catch play() errors (e.g., user hasn't interacted)
        } else {
            videoRef.current.pause();
        }
    }
  }, [isIntersecting, hasLoaded, rest.autoPlay]);

  return (
    <video
      ref={videoRef}
      src={hasLoaded ? src : undefined}
      preload="none"
      {...rest}
    />
  );
};

export default LazyVideo;
