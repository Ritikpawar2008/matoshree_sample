/**
 * MATOSHREE LAWNS — PRIMARY APPLICATION CONTROLLER
 */
import { HERO_MEDIA_CONFIG, LOGO_CONFIG, SECTION_IMAGES } from '../config/images.config.js';
import { initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  initLogo();
  initHeroMedia();
  initHeaderScroll();
  initMobileMenu();
  initCelebrationsTabs();
  initCapacityCalculator();
  initModals();
  initGallery();
  initSmoothScroll();
});

/**
 * 1. Initialize Official Logo with graceful fallback
 */
function initLogo() {
  const logoElements = document.querySelectorAll('.brand-logo-img');
  logoElements.forEach(img => {
    // Attempt primary logo, fallback to SVG
    img.src = LOGO_CONFIG.primary;
    img.alt = LOGO_CONFIG.alt;
    img.onerror = () => {
      img.src = LOGO_CONFIG.svgFallback;
      img.onerror = null; // prevent infinite loop
    };
  });
}

/**
 * 2. Initialize Hero Media (Image-First with Video-Ready Architecture)
 */
function initHeroMedia() {
  const mediaContainer = document.getElementById('heroMediaWrapper');
  if (!mediaContainer) return;

  mediaContainer.innerHTML = '';

  if (HERO_MEDIA_CONFIG.type === 'video') {
    // Video Background Mode
    const video = document.createElement('video');
    video.className = 'hero-media hero-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.poster = HERO_MEDIA_CONFIG.posterSrc;

    const source = document.createElement('source');
    source.src = HERO_MEDIA_CONFIG.videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);

    // Fallback image if video fails to load
    video.onerror = () => {
      console.warn('Video failed to load, falling back to static hero image');
      loadHeroImage(mediaContainer);
    };

    mediaContainer.appendChild(video);
  } else {
    // Image-First Mode (as requested)
    loadHeroImage(mediaContainer);
  }
}

function loadHeroImage(container) {
  container.innerHTML = '';
  const img = document.createElement('img');
  img.className = `hero-media hero-image ${HERO_MEDIA_CONFIG.kenBurns ? 'ken-burns' : ''}`;
  img.src = HERO_MEDIA_CONFIG.imageSrc;
  img.alt = HERO_MEDIA_CONFIG.alt;
  img.loading = 'eager';
  img.decoding = 'async';

  container.appendChild(img);
}

/**
 * 3. Sticky Header Elevation on Scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 4. Mobile Drawer Navigation
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const links = drawer?.querySelectorAll('.nav-link');

  if (!hamburger || !drawer) return;

  const toggle = () => drawer.classList.toggle('open');
  const close = () => drawer.classList.remove('open');

  hamburger.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', close);
  links?.forEach(link => link.addEventListener('click', close));
}

/**
 * 5. Celebrations Tabs (Weddings, Receptions, Pre-Wedding)
 */
function initCelebrationsTabs() {
  const tabButtons = document.querySelectorAll('.celebration-tab-btn');
  const card = document.getElementById('celebrationCardDisplay');
  if (!card) return;

  const mediaImg = card.querySelector('.celebration-media-pane img');
  const badgePill = card.querySelector('.celebration-badge-pill');
  const titleElem = card.querySelector('.celebration-title');
  const taglineElem = card.querySelector('.celebration-tagline');
  const descElem = card.querySelector('.celebration-desc');
  const capElem = card.querySelector('.spec-capacity');
  const areaElem = card.querySelector('.spec-area');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.target;
      const data = SECTION_IMAGES.celebrations[key];
      if (!data) return;

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Subtle animation transition
      card.classList.add('animating');
      setTimeout(() => {
        if (mediaImg) {
          mediaImg.src = data.imageUrl;
          mediaImg.alt = data.alt;
        }
        if (badgePill) badgePill.textContent = data.badge;
        if (titleElem) titleElem.textContent = data.title;
        if (taglineElem) taglineElem.textContent = data.tagline;
        if (descElem) descElem.textContent = data.description;
        if (capElem) capElem.textContent = data.capacity;
        if (areaElem) areaElem.textContent = data.lawnArea;

        card.classList.remove('animating');
      }, 250);
    });
  });
}

/**
 * 6. Interactive Capacity & Venue Planner Calculator
 */
function initCapacityCalculator() {
  const guestSlider = document.getElementById('calcGuestSlider');
  const guestValDisplay = document.getElementById('calcGuestVal');
  const daysSlider = document.getElementById('calcDaysSlider');
  const daysValDisplay = document.getElementById('calcDaysVal');
  const checkboxes = document.querySelectorAll('.event-checkbox-grid input[type="checkbox"]');

  const venueResult = document.getElementById('calcRecommendedVenue');
  const specsResult = document.getElementById('calcSpecsResult');

  if (!guestSlider) return;

  function recalculate() {
    const guests = parseInt(guestSlider.value, 10);
    const days = parseInt(daysSlider?.value || '1', 10);
    
    if (guestValDisplay) guestValDisplay.textContent = `${guests.toLocaleString()} Guests`;
    if (daysValDisplay) daysValDisplay.textContent = `${days} ${days === 1 ? 'Day' : 'Days'}`;

    let recommendation = '';
    let details = '';

    if (guests <= 400) {
      recommendation = 'The Shivalaya Heritage Courtyard';
      details = `Ideal for intimate ceremonies, Sakhrapuda, and Haldi. Includes luxury AC preparation suites, traditional carved stone arch mandap setup, and dedicated guest parking.`;
    } else if (guests <= 1000) {
      recommendation = 'The Rajwada AC Palace & Courtyard';
      details = `Centrally air-conditioned grand banquet with acoustic engineering and open courtyard for outdoor dining, accompanied by luxury bridal suites and valet parking.`;
    } else {
      recommendation = 'The Sovereign Grand Lawn + Rajwada Palace';
      details = `Complete venue experience for your royal wedding. Expansive open-air lawn grounds, grand mandap court, luxury bridal suites, and full valet parking support.`;
    }

    if (venueResult) venueResult.textContent = recommendation;
    if (specsResult) specsResult.textContent = details;
  }

  guestSlider.addEventListener('input', recalculate);
  if (daysSlider) daysSlider.addEventListener('input', recalculate);
  checkboxes.forEach(cb => cb.addEventListener('change', recalculate));

  recalculate();
}

/**
 * 7. Modals (Tour Booking & 8s Cinematic Video Vision)
 */
function initModals() {
  // Tour Booking Modal
  const tourModal = document.getElementById('tourBookingModal');
  const openTourBtns = document.querySelectorAll('.trigger-tour-modal');
  const closeTourBtn = document.getElementById('closeTourModal');
  const bookingForm = document.getElementById('venueTourForm');

  openTourBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      tourModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeTour = () => {
    tourModal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeTourBtn?.addEventListener('click', closeTour);
  tourModal?.addEventListener('click', (e) => {
    if (e.target === tourModal) closeTour();
  });

  // Tour Form Submission
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('tourName')?.value || 'Guest';
    closeTour();
    showToast(`Dhanyawad, ${name}! Your private venue tour request has been confirmed. Our royal concierge will connect shortly.`);
    bookingForm.reset();
  });

  // 8s Cinematic Video Vision Modal
  const videoModal = document.getElementById('videoVisionModal');
  const openVideoBtns = document.querySelectorAll('.trigger-video-modal');
  const closeVideoBtn = document.getElementById('closeVideoModal');

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      videoModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeVideo = () => {
    videoModal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeVideoBtn?.addEventListener('click', closeVideo);
  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });
}

/**
 * 8. Interactive Toast Notifications
 */
export function showToast(message) {
  const toast = document.getElementById('siteToast');
  const msgElem = document.getElementById('toastMessage');
  if (!toast || !msgElem) return;

  msgElem.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 4500);
}

/**
 * 9. Smooth Scroll with Header Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
