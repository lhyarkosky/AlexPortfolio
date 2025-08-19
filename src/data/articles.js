
const fivesenses = new URL("../assets/articles/fivesenses.jpg", import.meta.url).href;
const dogdays = new URL("../assets/articles/dogdays.jpg", import.meta.url).href;
const fireworks = new URL("../assets/articles/fireworks.jpg", import.meta.url).href;
const jjs_patio = new URL("../assets/articles/JJs-patio.jpg", import.meta.url).href;
const margaritaville = new URL("../assets/articles/Margaritaville.jpg", import.meta.url).href;
const poolplayrecap = new URL("../assets/articles/poolplayrecap.jpg", import.meta.url).href;
const STLDAU19 = new URL("../assets/articles/STLDAU19.jpg", import.meta.url).href;
const regionidcamp = new URL("../assets/articles/regionidcamp.jpg", import.meta.url).href;
const regionidcamp2 = new URL("../assets/articles/regionidcamp2.jpg", import.meta.url).href;
const DEI = new URL("../assets/articles/DEI.jpg", import.meta.url).href;
const sedgewick = new URL("../assets/articles/sedgewick.jpg", import.meta.url).href;
const cartheft = new URL("../assets/articles/cartheft.jpg", import.meta.url).href;
const oncampushouse = new URL("../assets/articles/oncampushouse.jpg", import.meta.url).href;
const freshmanwya = new URL("../assets/articles/freshmanwya.jpg", import.meta.url).href;
const fallactivities = new URL("../assets/articles/fallactivities.jpg", import.meta.url).href;

// articles.js
export const articles = [
  {
    href: "https://kansascitymag.com/the-five-senses/",
    description: "Authored 'KU Med Students Learn to Treat With Food, Not Just Prescriptions' and 'Nelson-Atkins Brings Color to All With EnChroma Glasses' for Kansas City Magazine",
    img: fivesenses
  },
  {
    href: "https://kansascitymag.com/dog-days-of-summer-in-kc/",
    description: "Authored 'Celebrate the Dog Days of Summer in KC' for Kansas City Magazine",
    img: dogdays,
  },
  {
    href: "https://kansascitymag.com/here-are-7-spots-to-catch-fireworks-in-kc-this-weekend/",
    description: "Authored 'Here Are 7 Spots to Catch Fireworks in KC This Weekend' for Kansas City Magazine",
    img: fireworks,
  },
  {
    href: "https://kansascitymag.com/jjs-patio-open/",
    description: "Authored 'JJ's Patio Open' for Kansas City Magazine",
    img: jjs_patio,
  },
    {
    href: "https://kansascitymag.com/parrotheads-rejoice-margaritaville-kc-opens/",
    description: "Authored 'Parrotheads Rejoice: Margaritaville KC Opens' for Kansas City Magazine",
    img: margaritaville,
  },
  {
    href: "https://www.missourisoccer.org/news/2024/06/06/2024-state-cup-pool-play-recap/",
    description: "Authored '2024 Summer State Cup Pool Play Recap' for Missouri Youth Soccer Association",
    img: poolplayrecap,
  },
  {
    href: "https://www.missourisoccer.org/news/2024/06/20/stlda-u19-boys-capture-fourth-consecutive-state-title/",
    description: "Authored 'STLDA U19 Boys Capture Fourth Consecutive State Title' for Missouri Youth Soccer Association",
    img: STLDAU19,
  },
  {
    href: "https://www.missourisoccer.org/news/2024/07/02/mo-odp-announces-region-id-camp-nominees/",
    description: "Authored 'MO ODP Announces Region ID Camp Nominees (mens)' for Missouri Youth Soccer Association",
    img: regionidcamp,
  },
  {
    href: "https://www.missouriodp.org/news/mo-odp-announces-region-id-camp-nominees/13912",
    description: "Authored 'MO ODP Announces Region ID Camp Nominees (womens)' for Missouri Youth Soccer Association",
    img: regionidcamp2,
  },
  {
    href: "https://rusentinel.com/3919/campus/rockhurst-reinforces-commitment-to-dei-amid-leadership-transition/",
    description: "Authored 'Rockhurst Reinforces Commitment to DEI Amid Leadership Transition' for RU Sentinel",
    img: DEI,
  },
  {
    href: "https://rusentinel.com/3162/campus/rockhursts-renovations-in-sedgwick-hall-have-been-deemed-successful-by-nursing-students/",
    description: "Authored 'Rockhurst’s renovations in Sedgwick Hall receive widespread approval by nursing students' for RU Sentinel",
    img: sedgewick,
  },
  {
    href: "https://rusentinel.com/3124/campus/recent-spike-in-car-thefts-at-rockhurst-align-with-rising-numbers-in-the-united-states/",
    description: "Authored 'Recent Spike in Car Thefts at Rockhurst Align with Rising Numbers in the United States' for RU Sentinel",
    img: cartheft,
  },
  {
    href: "https://rusentinel.com/3102/campus/rockhurst-plans-to-close-on-campus-houses-students-share-exceedingly-different-opinions-on-the-matter/",
    description: "Authored 'Rockhurst Plans to Close On-Campus Houses: Students Share Exceedingly Different Opinions on the Matter' for RU Sentinel",
    img: oncampushouse,
  },
  {
    href: "https://rusentinel.com/3067/campus/freshman-wya/",
    description: "Authored 'Freshman WYA' for RU Sentinel",
    img: freshmanwya,
  },
  {
    href: "https://rusentinel.com/3016/kansas-city/fun-fall-activities-in-kc-to-try-out-this-season/",
    description: "Authored 'Fun Fall Activities in KC to Try Out This Season' for RU Sentinel",
    img: fallactivities,
  }
  // ...other articles
];

// Render function
export function renderArticles(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = articles
    .map((article) => {
    const media = article.img
        ? `<img src="${article.img}" alt="${article.img}" />`
        : `<i class="${article.icon}"></i>`;

      return `
        <a href="${article.href}" class="article-card">
          <div class="article-placeholder">
            ${media}
          </div>
          <div class="article-overlay">
            <h3>${article.description}</h3>
          </div>
        </a>
      `;
    })
    .join("");
}
