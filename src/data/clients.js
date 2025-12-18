// Using existing assets for client examples
const revivedlogo = new URL("../assets/clients/revived/logo.jpg", import.meta.url).href;
const clientLogo2 = new URL("../assets/profile.jpg", import.meta.url).href;

// Grid pictures for client headers (keeping only used assets)

//Guided:
const guided_grid= new URL("../assets/clients/guidedbyg/guided_grid.jpg", import.meta.url).href;
const guided_logo = new URL("../assets/clients/guidedbyg/guided_logo.jpg", import.meta.url).href;
//Revived
const rev_grid = new URL("../assets/clients/revived/rev_grid.png", import.meta.url).href;
const november= new URL("../assets/clients/revived/november.png", import.meta.url).href;
const thisweek = new URL("../assets/clients/revived/thisweek.png", import.meta.url).href;
// Ignite
const ignite_grid = new URL("../assets/clients/ignite/ignite_grid.jpg", import.meta.url).href;
const ignite_logo = new URL("../assets/clients/ignite/ignite_logo.jpg", import.meta.url).href;

export const clients = [

  //Guided
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

  //Revived
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
        description: "Created engaging Facebook content focusing on health education and community engagement. Posts averaged 150+ likes with strong conversion to booking inquiries. Created engaging Facebook content focusing on health education and community engagement. Posts averaged 150+ likes with strong conversion to booking inquiries. Created engaging Facebook content focusing on health education and community engagement. Posts averaged 150+ likes with strong conversion to booking inquiries.",
        link: "https://www.instagram.com/p/DQwtvEvjut4/",
        previewImage: thisweek,
        authorName: "revIVed Kansas", 
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "Revived + ready, KS! All of our injections are available this Tuesday, 4:30–7 at our IM Pop-Up Bar. Stop by and support our friends @healthsolutionskc 🤍💉#injections #IMtherapy #RevIVed #wellness #kansascity #popupbar"
      },
      {
        type: "social-media",
        platform: "linkedin",
        title: "LinkedIn Professional Networking",
        description: "Strategic LinkedIn content highlighting wellness industry expertise and business growth. Generated 25+ business inquiries and established thought leadership in mobile IV therapy space.",
        link: "https://www.linkedin.com/posts/revived-kansas-example",
        previewImage: "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        postText: "The mobile wellness industry is rapidly evolving. As healthcare professionals, we're seeing increased demand for convenient, personalized treatments. Our IV therapy services have helped over 500 clients improve their wellness routines. Key insights from our first year..."
      },
      {
        type: "social-media",
        platform: "tiktok",
        title: "TikTok Viral Health Tips",
        description: "Educational TikTok content about IV therapy benefits and wellness tips. One video achieved 150K+ views, significantly boosting brand awareness among target demographic.",
        link: "https://www.tiktok.com/@revivedkansas/video/7570579861958348046",
        previewImage: "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "POV: You're getting IV therapy for the first time 💧✨ The process is so relaxing and the energy boost is REAL! #IVTherapy #Wellness #SelfCare #Kansas #Health"
      },
      {
        type: "marketing-result",
        title: "Google Ads Campaign Results",
        description: "Targeted Google Ads focusing on 'IV therapy Kansas City' and related keywords. Achieved 4.2% CTR with 85% conversion rate from ad clicks to bookings.",
        link: "https://ads.google.com/campaign-example",
        metrics: {
          "Click-through Rate": "4.2%",
          "Conversion Rate": "85%", 
          "Total Clicks": "1,847",
          "Cost per Conversion": "$23.50"
        }
      },
      {
        type: "marketing-result", 
        title: "Email Marketing Automation",
        description: "Automated email sequences for new customers, follow-ups, and wellness education. Maintained 42% open rate and 8.5% click-through rate, well above industry average.",
        link: "https://mailchimp.com/campaign-example",
        metrics: {
          "Open Rate": "42%",
          "Click Rate": "8.5%",
          "Total Subscribers": "2,341",
          "Revenue Generated": "$15,670"
        }
      },    
    ]
  },
  //Ignite
  {
    id: "Ignite",
    name: "Ignite Chiropractic and Wellness Clinic",
    logo: ignite_logo,
    gridPicture: ignite_grid,
    description: "Developed and executed a multi-channel digital marketing strategy for a chiropractic and wellness clinic in Kansas City.",
    services: ["Social Media Management", "Content Creation", "Paid Advertising", "Email Marketing"],
    duration: "Ongoing",
    results: "Generated __ social impressions, increased overall following by over __%.",
    portfolio: []

  }
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