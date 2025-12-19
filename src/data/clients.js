
// Grid pictures for client headers (keeping only used assets)

//Guided:
const guided_grid= new URL("../assets/clients/guidedbyg/guided_grid.jpg", import.meta.url).href;
const guided_logo = new URL("../assets/clients/guidedbyg/guided_logo.jpg", import.meta.url).href;
//Revived
const rev_grid = new URL("../assets/clients/revived/rev_grid.png", import.meta.url).href;
const revivedlogo = new URL("../assets/clients/revived/logo.jpg", import.meta.url).href;
const november= new URL("../assets/clients/revived/november.png", import.meta.url).href;
const thisweek = new URL("../assets/clients/revived/thisweek.png", import.meta.url).href;
const rev_post3 = new URL("../assets/clients/revived/rev_post3.png", import.meta.url).href;
const rev_post4 = new URL("../assets/clients/revived/rev_post4.png", import.meta.url).href;
const rev_post5 = new URL("../assets/clients/revived/rev_post5.png", import.meta.url).href;
const rev_post6 = new URL("../assets/clients/revived/rev_post6.png", import.meta.url).href;
const rev_post7 = new URL("../assets/clients/revived/rev_post7.png", import.meta.url).href;
const rev_post8 = new URL("../assets/clients/revived/rev_post8.png", import.meta.url).href;
const rev_post9 = new URL("../assets/clients/revived/rev_post9.png", import.meta.url).href;
const rev_post10 = new URL("../assets/clients/revived/rev_post10.png", import.meta.url).href;

// Ignite
const ignite_grid = new URL("../assets/clients/ignite/ignite_grid.jpg", import.meta.url).href;
const ignite_logo = new URL("../assets/clients/ignite/ignite_logo.jpg", import.meta.url).href;
const ign_post1 = new URL("../assets/clients/ignite/ign_post1.png", import.meta.url).href;
const ign_post2 = new URL("../assets/clients/ignite/ign_post2.png", import.meta.url).href;

export const clients = [

  // #region Guided
  { id: "guidedbyg",
    name: "Guided By G",
    logo: guided_logo,
    gridPicture: guided_grid,
    description: "Maintaining and updating the instagram account for this Kansas City-based marketing agency.",
    services: ["Social Media Management", "Weekly Content Creation","Photo and Video Editing", "Overseeing Post Insights"],
    duration:["Ongoing"],
    results: "Feuled consistent growth in follower engagement and brand visibility. Specifically, __% growth in interactions and __% increase in follower count.",
    portfolio:[]
  },
  // #endregion
  // #region Revived
  {
    id: "Revived",
    name: "revIVed Kansas - Mobile IV & IM Therapy ",
    logo: revivedlogo,
    gridPicture: rev_grid,
    description: "Comprehensive digital marketing campaign for an IV therapy business based in Kansas City.",
    services: ["Social Media Strategy", "Content Creation", "Brand Development", "Paid Advertising", "Email Marketing", "4 posts a week"],
    duration: "8 months",
    results: "Generated 2.3M+ social impressions, 4,500 qualified leads, increased overall following by over 250%",
    portfolio: [
      {
        type: "social-media",
        platform: "instagram",
        title: "Instagram Brand Awareness Campaign", 
        description: "Comprehensive Instagram strategy featuring lifestyle content, IV therapy education, and customer testimonials. Achieved 89% engagement rate increase and 340% follower growth over 4 months.",
        link: "https://www.instagram.com/p/DQ4m4J5j1wo/?img_index=1",
        previewImage: november,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "It’s “No”vember at RevIVed. A month to say no to stress and yes to steady wellness that fits your schedule. Comment below what you’re saying no to this November to feel your best. 👇 #RevIVed #November #fall #imtherapy #kansascity #mobileivetherapy",
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post2",
        description: "",
        link: "https://www.instagram.com/p/DQwtvEvjut4/",
        previewImage: thisweek,
        authorName: "revIVed Kansas", 
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "Revived + ready, KS! All of our injections are available this Tuesday, 4:30–7 at our IM Pop-Up Bar. Stop by and support our friends @healthsolutionskc 🤍💉#injections #IMtherapy #RevIVed #wellness #kansascity #popupbar"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post3",
        description: "",
        link: "https://www.instagram.com/p/DPebLRdkVa4/?img_index=1",
        previewImage: rev_post3,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "Glowy skin, yes. But also: immune support, protection against oxidative stress, detox, and anti-aging. This little IM shot packs a big punch. ✨💉",
      },    
      {
        type: "social-media",
        platform: "instagram",
        title: "post4",
        description: "",
        link: "https://www.instagram.com/p/DQM4bQgEa4x/?img_index=1",
        previewImage: rev_post4,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "More coffee isn’t gonna cut it. ☕ Your body needs nutrients. Let RevIVed get you back to your energized self. Click the link in our bio to book today! 🤍"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post5",
        description: "",
        link: "https://www.instagram.com/p/DQuYY_GDgRz/?img_index=1",
        previewImage: rev_post5,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "Our fall favorite IM pick is the Tri-Immune Blend. Your go-to boost to fight off those seasonal sniffles.🤍✨🤧"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post6",
        description: "",
        link: "https://www.instagram.com/p/DObfJrojlk2/",
        previewImage: rev_post6,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "The 5 R’s of wellness: Rehydrate. Refresh. Recover. Recharge… and finally, get RevIVed. We’ll bring the IV straight to you so you can get to feeling your best — fast. Click the link in our bio to book today & let’s get you RevIVed! 🐝💧🤍"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post7",
        description: "",
        link: "https://www.instagram.com/p/DP1fdCBkfuK/",
        previewImage: rev_post7,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "No commute needed. Experience the same wellness as a spa without leaving home. Try Revived’s home healing! 🤍🌿"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post8",
        description: "",
        link: "https://www.instagram.com/p/DP62x-MkVAp/?img_index=1",
        previewImage: rev_post8,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "Pumpkin spice is great, but our IVs are the real fall essential. Stay glowing all season long with our fall favorites! 🍂"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post9",
        description: "",
        link: "https://www.instagram.com/p/DQHkg4XkWXi/",
        previewImage: rev_post9,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "The perfect shot take precision — both behind the camera and with IM injections. 📸💉 "
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post10",
        description: "",
        link: "https://www.instagram.com/p/DPUIEVEEZpq/?img_index=1",
        previewImage: rev_post10,
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "Just booked your IV infusion with us? Here’s the inside scoop on what to do after!📝💧"
      }
    ]
  },
  // #endregion

  // #region Ignite
  {
    id: "Ignite",
    name: "Ignite Chiropractic and Wellness Clinic",
    logo: ignite_logo,
    gridPicture: ignite_grid,
    description: "Developed and executed a multi-channel digital marketing strategy for a chiropractic and wellness clinic in Kansas City.",
    services: ["Social Media Management", "Content Creation", "Paid Advertising", "Email Marketing"],
    duration: "Ongoing",
    results: "Generated __ social impressions, increased overall following by over __%.",
    portfolio: [
      {
        type: "social-media",
        platform: "instagram",
        title: "post1",
        description: "",
        link: "https://www.instagram.com/p/DQ_-BAjjoR0/?img_index=1",
        previewImage: ign_post1,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "We’re excited to introduce a few more familiar faces you might be seeing around Ignite, starting off with our Head of Marketing, Mariah! ✨"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post2",
        description: "",
        link: "https://www.instagram.com/p/DRCvXKPD4gn/",
        previewImage: ign_post2,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Fascia is the connective tissue that holds your muscles together… and sometimes it holds tension too. Our hands-on myofascial release therapy eases that and helps your body move more freely. 💆‍♀️✨"
      }
    ]

  }
  // #endregion
];

// Render function for clients gallery
export function renderClientsGallery(containerSelector, maxItems = 10) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = clients
    .slice(0, maxItems)
    .map((client) => {
      const media = client.logo
        ? `<img src="${client.logo}" alt="${client.name} logo" />`
        : `<div class="client-placeholder">${client.name.charAt(0)}</div>`;

      return `
        <div class="client-card" data-client-id="${client.id}">
          <div class="client-logo">
            ${media}
          </div>
          <div class="client-overlay">
            <h3>${client.name}</h3>
            <p>${client.description}</p>
            <div class="client-services">
              ${client.services.slice(0, 2).map(service => `<span class="service-tag">${service}</span>`).join('')}
              ${client.services.length > 2 ? `<span class="service-tag">+${client.services.length - 2} more</span>` : ''}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// Function to get client by ID
export function getClientById(id) {
  return clients.find(client => client.id === id);
}

// Function to open client detail page (will be defined in the HTML where window exists)