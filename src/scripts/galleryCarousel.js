const CYCLE_INTERVAL = 4000; // 3 seconds

/**
 * Create a carousel for a given gallery
 * @param {string} gallerySelector - The CSS selector for the gallery
 * @param {string} itemSelector - The CSS selector for the slides inside the gallery
 * @param {number} offset - Delay in ms before the carousel starts cycling
 */
function createGalleryCarousel(gallerySelector, itemSelector, offset = 0) {
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

  // Hide all slides except the first one
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });

  // Start cycling if there are multiple slides
  if (totalSlides > 1) {
    setTimeout(() => {
      setInterval(() => {
        // Hide current slide
        slides[currentIndex].style.display = 'none';

        // Move to the next slide
        currentIndex = (currentIndex + 1) % totalSlides;

        // Show the next slide
        slides[currentIndex].style.display = 'block'; // Default block display
      }, CYCLE_INTERVAL);
    }, offset);
  }
}

/**
 * Initialize all gallery carousels
 */
function initGalleryCarousels() {
  // Articles Project (starts immediately)
  createGalleryCarousel(
    '#projects .project-wrapper:nth-of-type(1)',
    '.carousel-slide',
    0
  );

  // Social Media Project (starts halfway through the cycle)
  createGalleryCarousel(
    '#projects .project-wrapper:nth-of-type(2)',
    '.carousel-slide',
    CYCLE_INTERVAL / 2
  );

  // Example: Another project with custom offset
  // createGalleryCarousel(
  //   '#projects .project-wrapper:nth-of-type(3)',
  //   '.carousel-slide',
  //   1000
  // );
}

export { initGalleryCarousels };
