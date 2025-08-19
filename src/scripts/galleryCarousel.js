const CYCLE_INTERVAL = 5000; // 3 seconds

// Function to create a carousel for a given gallery
function createGalleryCarousel(gallerySelector, itemSelector) {
  const gallery = document.querySelector(gallerySelector);
  if (!gallery) return;

  const carouselContainer = gallery.querySelector('.carousel-container');
  if (!carouselContainer) return;

  const carouselTrack = carouselContainer.querySelector('.carousel-track');
  if (!carouselTrack) return;

  const slides = carouselTrack.querySelectorAll(itemSelector);
  if (slides.length === 0) return;

  const totalSlides = slides.length;
  let currentIndex = 0;

  // Initially hide all slides except the first one
  slides.forEach((slide, index) => {
    if (index !== 0) {
      slide.style.display = 'none';
    }
  });

  // Start cycling if there are multiple slides
  if (totalSlides > 1) {
    setInterval(() => {
      // Hide the current slide
      slides[currentIndex].style.display = 'none';

      // Move to the next slide
      currentIndex = (currentIndex + 1) % totalSlides;

      // Show the next slide
      slides[currentIndex].style.display = 'block'; // Assuming block display for slides
    }, CYCLE_INTERVAL);
  }
}

// Function to initialize all gallery carousels
function initGalleryCarousels() {
  // Initialize Project Carousels
  // For Articles Project
  createGalleryCarousel('#projects .project-wrapper:nth-of-type(1)', '.carousel-slide');

  // For Social Media Project
  createGalleryCarousel('#projects .project-wrapper:nth-of-type(2)', '.carousel-slide');

  // For Other Project
  createGalleryCarousel('#projects .project-wrapper:nth-of-type(3)', '.carousel-slide');
}

export { initGalleryCarousels };