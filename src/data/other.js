// articles.js
export const other = [
  {
    href: "#",
    description: "testing",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
  {
    href: "#",
    description: "Article description will appear on hover",
    icon: "fa fa-folder-open",
  },
];

// Render function
export function renderOther(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = other
    .map(
      (article) => `
      <a href="${article.href}" class="article-card">
        <div class="article-placeholder">
          <i class="${article.icon}"></i>
        </div>
        <div class="article-overlay">
          <h3>${article.description}</h3>
        </div>
      </a>
    `
    )
    .join("");
}
