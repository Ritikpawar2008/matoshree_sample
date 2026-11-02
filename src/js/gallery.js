/**
 * MATOSHREE LAWNS — MASONRY GALLERY & LIGHTBOX CONTROLLER
 */
import { SECTION_IMAGES } from '../config/images.config.js';

let activeCategory = 'all';
let currentLightboxIndex = 0;
let filteredItems = [];

/**
 * Initializes the Gallery and Lightbox
 */
export function initGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  
  if (!galleryGrid) return;

  // Render all items initially
  renderGallery(SECTION_IMAGES.gallery);

  // Filter Buttons Event Listeners
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.filter;
      if (category === activeCategory) return;

      filterButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeCategory = category;

      applyFilter(category);
    });
  });

  // Setup Lightbox Controls
  setupLightboxControls(lightboxModal);
}

/**
 * Renders gallery items into masonry container
 */
function renderGallery(items) {
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = '';
  filteredItems = [...items];

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `gallery-item ${item.aspectRatio || 'landscape'}`;
    card.dataset.category = item.category;
    card.dataset.index = index;

    card.innerHTML = `
      <div class="gallery-thumb-wrap">
        <img 
          src="${item.thumbnail || item.url}" 
          alt="${item.title} — Matoshree Lawns" 
          loading="lazy" 
          decoding="async"
        />
      </div>
      <div class="gallery-item-overlay">
        <span class="overlay-cat-tag">${item.categoryLabel}</span>
        <h4 class="overlay-title">${item.title}</h4>
        <div class="overlay-view-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>View Fullscreen</span>
        </div>
      </div>
    `;

    // Click to open lightbox
    card.addEventListener('click', () => {
      const itemIndexInFiltered = filteredItems.findIndex(i => i.id === item.id);
      openLightbox(itemIndexInFiltered !== -1 ? itemIndexInFiltered : 0);
    });

    galleryGrid.appendChild(card);
  });
}

/**
 * Filters the displayed gallery items
 */
function applyFilter(category) {
  const cards = document.querySelectorAll('.gallery-item');
  
  if (category === 'all') {
    filteredItems = [...SECTION_IMAGES.gallery];
    cards.forEach(card => card.classList.remove('filtered-out'));
  } else {
    filteredItems = SECTION_IMAGES.gallery.filter(item => item.category === category);
    cards.forEach(card => {
      if (card.dataset.category === category) {
        card.classList.remove('filtered-out');
      } else {
        card.classList.add('filtered-out');
      }
    });
  }
}

/**
 * Opens Lightbox at specific index
 */
function openLightbox(index) {
  const lightboxModal = document.getElementById('lightboxModal');
  if (!lightboxModal || filteredItems.length === 0) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Updates image and captions inside lightbox
 */
function updateLightboxContent() {
  const item = filteredItems[currentLightboxIndex];
  if (!item) return;

  const lbImg = document.getElementById('lightboxImg');
  const lbCounter = document.getElementById('lightboxCounter');
  const lbCategory = document.getElementById('lightboxCategory');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbDesc = document.getElementById('lightboxDesc');

  if (lbImg) {
    lbImg.style.opacity = '0';
    lbImg.src = item.url;
    lbImg.alt = item.title;
    lbImg.onload = () => {
      lbImg.style.opacity = '1';
    };
  }

  if (lbCounter) {
    lbCounter.textContent = `${currentLightboxIndex + 1} of ${filteredItems.length}`;
  }
  if (lbCategory) {
    lbCategory.textContent = item.categoryLabel;
  }
  if (lbTitle) {
    lbTitle.textContent = item.title;
  }
  if (lbDesc) {
    lbDesc.textContent = item.description || '';
  }
}

/**
 * Closes the Lightbox
 */
function closeLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  if (!lightboxModal) return;

  lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Setup navigation listeners
 */
function setupLightboxControls(lightboxModal) {
  if (!lightboxModal) return;

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });

  // Click outside image stage to close
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });
}

function showNextImage() {
  if (filteredItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
  updateLightboxContent();
}

function showPrevImage() {
  if (filteredItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
  updateLightboxContent();
}
