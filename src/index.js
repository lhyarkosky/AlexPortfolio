import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initGalleryCarousels } from "./scripts/galleryCarousel";
import { articles } from "./data/articles.js";
import { clients } from "./data/clients.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Function to populate Articles carousel
function enableResponsiveOverlayBehavior() {
  const mobileBreakpoint = 768; // px breakpoint for "phone"
  const articleCards = document.querySelectorAll(".article-card");

  articleCards.forEach(card => {
    const overlay = card.querySelector(".article-overlay");
    if (!overlay) return;

    let tappedOnce = false;

    card.addEventListener("click", (e) => {
      // Apply only on phone-sized screens
      if (window.innerWidth <= mobileBreakpoint) {
        if (!tappedOnce) {
          e.preventDefault(); // stop link on first tap
          overlay.style.opacity = "1"; // show overlay
          tappedOnce = true;

          // reset overlay if tapping outside card
          document.addEventListener("click", function reset(ev) {
            if (!card.contains(ev.target)) {
              overlay.style.opacity = "0";
              tappedOnce = false;
              document.removeEventListener("click", reset);
            }
          });
        } else {
          // second tap follows link naturally
          tappedOnce = false;
        }
      }
    });
  });
}

// Run once DOM is ready
document.addEventListener("DOMContentLoaded", enableResponsiveOverlayBehavior);

function initArticlesCarousel() {
  const maxArticles = 10;
  const track = document.querySelector(
    "#projects .project-wrapper:nth-of-type(1) .carousel-track"
  );
  if (!track) return;

  articles.slice(0, maxArticles).forEach((article) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const media = article.img
      ? `<div style="width:100%; aspect-ratio:3520/1980; overflow:hidden;">
           <img src="${article.img}" alt="${article.description}" style="width:100%; height:100%; object-fit:cover;" />
         </div>`
      : `<i class="${article.icon}"></i>`;

    slide.innerHTML = `
      <a href="${article.href}" class="article-card">
        <div class="article-placeholder">
          ${media}
        </div>
        <div class="article-overlay">
          <h3 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${article.description}
          </h3>
        </div>
      </a>
    `;
    track.appendChild(slide);
  });

  initGalleryCarousels(track);
}

// Function to populate Marketing Portfolio carousel
function initMarketingCarousel() {
  const maxItems = 3;
  const track = document.querySelector(
    "#projects .project-wrapper:nth-of-type(2) .carousel-track"
  );
  if (!track) return;

  clients.slice(0, maxItems).forEach((client) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const media = client.logo
      ? `<div style="width:100%; aspect-ratio:3520/1980; overflow:hidden; display:flex; align-items:center; justify-content:center; background:#f8f9fa;">
           <img src="${client.logo}" alt="${client.name} logo" style="max-width:80%; max-height:80%; object-fit:contain;" />
         </div>`
      : `<div style="width:100%; aspect-ratio:3520/1980; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:white; font-size:3rem; font-weight:bold;">
           ${client.name.charAt(0)}
         </div>`;

    slide.innerHTML = `
      <div class="article-card client-carousel-card" data-client-id="${client.id}" style="cursor:pointer;">
        <div class="article-placeholder">
          ${media}
        </div>
        <div class="article-overlay">
          <h3 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${client.name}
          </h3>
          <p style="font-size:0.9rem; margin-top:0.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${client.services.slice(0, 2).join(', ')}${client.services.length > 2 ? '...' : ''}
          </p>
        </div>
      </div>
    `;
    track.appendChild(slide);
  });

  initGalleryCarousels(track);
  
  // Add click event listeners to carousel client cards
  setTimeout(() => {
    const carouselCards = document.querySelectorAll('.client-carousel-card');
    carouselCards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const clientId = this.getAttribute('data-client-id');
        if (clientId) {
          window.location.href = `client-detail.html?client=${clientId}`;
        }
      });
    });
  }, 100);
}

// Function to open client detail page
window.openClientDetail = function(clientId) {
  // Navigate to client detail page with client ID as parameter
  window.location.href = `client-detail.html?client=${clientId}`;
};

// Initialize both carousels
initArticlesCarousel();
initMarketingCarousel();

