document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Header Behavior ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- Navigation & Header ---

  // --- Custom Interactive Cursor (Floating "VIEW" badge on project hover) ---
  const cursor = document.querySelector('.custom-cursor');
  const cursorText = cursor ? cursor.querySelector('.cursor-text') : null;
  const interactiveCards = document.querySelectorAll('.work-card, .work-slot-card');

  // Instant zero-lag cursor follow
  window.addEventListener('mousemove', (e) => {
    if (!cursor.classList.contains('active')) {
      cursor.classList.add('active');
    }
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });

  // Card hover mode transitions
  interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursor.classList.remove('default-mode');
      cursor.classList.add('hover-mode');
      if (cursorText) cursorText.textContent = 'VIEW';
    });

    card.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover-mode');
      cursor.classList.add('default-mode');
    });
  });

  // Default cursor mode on general elements
  cursor.classList.add('default-mode');

  // --- Intersection Observer for Scroll Animations ---
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- High-Performance Video Lazy Loader & Viewport Management ---
  const lazyVideos = document.querySelectorAll('video.lazy-video');
  if ('IntersectionObserver' in window && lazyVideos.length > 0) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          if (!vid.src && vid.dataset.src) {
            vid.src = vid.dataset.src;
            vid.load();
          }
          const playPromise = vid.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          if (vid.src) {
            vid.pause();
          }
        }
      });
    }, {
      rootMargin: '250px 0px 250px 0px',
      threshold: 0.05
    });

    lazyVideos.forEach(v => videoObserver.observe(v));
  } else {
    lazyVideos.forEach(v => {
      if (v.dataset.src) {
        v.src = v.dataset.src;
        v.play().catch(() => {});
      }
    });
  }

  // --- Modal Preview for Projects ---
  const modal = document.querySelector('.preview-modal');
  const modalVideo = modal ? modal.querySelector('.modal-video') : null;
  const modalImage = modal ? modal.querySelector('.modal-image') : null;
  const modalTitle = modal ? modal.querySelector('.modal-title') : null;
  const modalCategory = modal ? modal.querySelector('.modal-category') : null;
  const modalClose = modal ? modal.querySelector('.modal-close-btn') : null;

  interactiveCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = card.getAttribute('data-video-src');
      const imgSrc = card.getAttribute('data-full-img');
      const title = card.getAttribute('data-title');
      const category = card.getAttribute('data-category');

      if (!videoSrc && !imgSrc) return;

      if (modalTitle) modalTitle.textContent = title || '';
      if (modalCategory) modalCategory.textContent = category || '';

      if (videoSrc) {
        modalVideo.src = videoSrc;
        modalVideo.style.display = 'block';
        if (modalImage) modalImage.style.display = 'none';
        modalVideo.play().catch(() => {});
      } else if (imgSrc) {
        modalImage.src = imgSrc;
        modalImage.style.display = 'block';
        if (modalVideo) {
          modalVideo.style.display = 'none';
          modalVideo.pause();
        }
      }

      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.src = '';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

});
