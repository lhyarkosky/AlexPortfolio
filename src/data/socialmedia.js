const test = new URL("../assets/socialmedia/test.jpg", import.meta.url).href;
const test2 = new URL("../assets/socialmedia/test2.jpg", import.meta.url).href;

export const SocialMedia = [
  {
    href: "https://www.instagram.com/p/DNYN-9sRtwd/?img_index=1",
    description: "testing",
    img: test,
  },
  {
    href: "https://www.instagram.com/p/DJXEjj0xLbQ/?img_index=1",
    description: "testing2",
    img: test2,
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-instagram",
  },
  // ... other items
];

// Render function
export function renderSocialMedia(containerSelector, maxItems = 10) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = SocialMedia
    .slice(0, maxItems)
    .map((item) => {
      const media = item.img
        ? `<img src="${item.img}" alt="${item.description}" />`
        : `<i class="${item.icon}"></i>`;

      return `
        <a href="${item.href}" class="article-card">
          <div class="article-placeholder">
            ${media}
          </div>
          <div class="article-overlay">
            <h3 style="
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            ">
              ${item.description}
            </h3>
          </div>
        </a>
      `;
    })
    .join("");
}
