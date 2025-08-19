import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initGalleryCarousels } from "./scripts/galleryCarousel";
import { articles } from "./data/articles.js";
import { SocialMedia } from "./data/socialmedia.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Function to populate Articles carousel
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

// Function to populate Social Media carousel
function initSocialMediaCarousel() {
  const maxItems = 2;
  const track = document.querySelector(
    "#projects .project-wrapper:nth-of-type(2) .carousel-track"
  );
  if (!track) return;

  SocialMedia.slice(0, maxItems).forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const media = item.img
      ? `<div style="width:100%; aspect-ratio:3520/1980; overflow:hidden;">
           <img src="${item.img}" alt="${item.description}" style="width:100%; height:100%; object-fit:cover;" />
         </div>`
      : `<i class="${item.icon}"></i>`;

    slide.innerHTML = `
      <a href="${item.href}" class="article-card" target="_blank" rel="noreferrer">
        <div class="article-placeholder">
          ${media}
        </div>
        <div class="article-overlay">
          <h3 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${item.description}
          </h3>
        </div>
      </a>
    `;
    track.appendChild(slide);
  });

  initGalleryCarousels(track);
}

// Initialize both carousels
initArticlesCarousel();
initSocialMediaCarousel();

