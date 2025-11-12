// Using existing assets for client examples
const revivedlogo = new URL("../assets/clients/revived/logo.jpg", import.meta.url).href;
const clientLogo2 = new URL("../assets/profile.jpg", import.meta.url).href;

// Grid pictures for client headers (keeping only used assets)
const client1Post1 = new URL("../assets/socialmedia/test.jpg", import.meta.url).href;
const client2Post1 = new URL("../assets/articles/dogdays.jpg", import.meta.url).href;

export const clients = [
  {
    id: "Revived",
    name: "revIVed Kansas - Mobile IV & IM Therapy ",
    logo: revivedlogo,
    gridPicture: client1Post1,
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
        previewImage: "https://scontent.cdninstagram.com/v/t51.82787-15/581669672_17897525235340672_6843791206914874445_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc2MjkyODQ2MTQxMDE5Mzc5NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=CeaOBiDgRVkQ7kNvwH2HYkG&_nc_oc=AdmVoKasp1_CpOMLPuiKSGfOnH3n2yj5o6hjGFgNgIC_KYPfftaayPgC1nFoXARI9p4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=z6DRrQ2uH6r4oefX0CFpwg&oh=00_Afgj-KXw_JnNEUjHp-K3SdoFp4zA3bq4xW9v8PijSQSkGQ&oe=691A907B",
        authorName: "revIVed Kansas",
        authorUsername: "@revivedks_mobileivtherapy",
        postText: "It’s “No”vember at RevIVed. A month to say no to stress and yes to steady wellness that fits your schedule. Comment below what you’re saying no to this November to feel your best. 👇 #RevIVed #November #fall #imtherapy #kansascity #mobileivetherapy",
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "Facebook Community Building",
        description: "Created engaging Facebook content focusing on health education and community engagement. Posts averaged 150+ likes with strong conversion to booking inquiries. Created engaging Facebook content focusing on health education and community engagement. Posts averaged 150+ likes with strong conversion to booking inquiries. Created engaging Facebook content focusing on health education and community engagement. Posts averaged 150+ likes with strong conversion to booking inquiries.",
        link: "https://www.instagram.com/p/DQwtvEvjut4/",
        previewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        authorName: "revIVed Kansas", 
        authorUsername: "@revivedkansas",
        postText: "🩺 Did you know IV therapy can help with hangovers, fatigue, and immune support? Our certified nurses use premium ingredients to help you feel your best. Questions about the process? Drop them below! 👇 #HealthEducation #IVTherapy #Hydration"
      },
      {
        type: "social-media",
        platform: "linkedin",
        title: "LinkedIn Professional Networking",
        description: "Strategic LinkedIn content highlighting wellness industry expertise and business growth. Generated 25+ business inquiries and established thought leadership in mobile IV therapy space.",
        link: "https://www.linkedin.com/posts/revived-kansas-example",
        previewImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        authorName: "Sarah Johnson",
        authorTitle: "Founder & CEO at revIVed Kansas",
        postText: "The mobile wellness industry is rapidly evolving. As healthcare professionals, we're seeing increased demand for convenient, personalized treatments. Our IV therapy services have helped over 500 clients improve their wellness routines. Key insights from our first year..."
      },
      {
        type: "social-media",
        platform: "tiktok",
        title: "TikTok Viral Health Tips",
        description: "Educational TikTok content about IV therapy benefits and wellness tips. One video achieved 150K+ views, significantly boosting brand awareness among target demographic.",
        link: "https://www.tiktok.com/@revivedkansas/video/7570579861958348046",
        previewImage: "https://images.unsplash.com/photo-1594824388853-c20594dcff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        authorName: "revIVed Kansas",
        authorUsername: "@revivedkansas",
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
  {
    id: "local-restaurant-chain",
    name: "Harvest & Hearth Restaurants",
    logo: clientLogo2,
    gridPicture: client2Post1,
    description: "Complete digital transformation for a farm-to-table restaurant group expanding from 2 to 7 locations across the metro area.",
    services: ["Social Media Management", "Professional Food Photography", "Local SEO", "Influencer Partnerships", "Event Marketing"],
    duration: "14 months",
    results: "65% increase in reservations, 120% growth in online ordering, successful launch of 5 new locations with avg. 40% higher opening week sales than projected",
    portfolio: [
      {
        type: "link-preview",
        title: "Seasonal Menu Launch Campaign",
        description: "Developed compelling visual storytelling for quarterly seasonal menu launches, highlighting local farm partnerships and ingredient sourcing. Each campaign generated 15,000+ social media engagements and drove 25% increase in new menu item sales within the first month.",
        link: "https://www.instagram.com/p/harvest-hearth-seasonal-menu"
      },
      {
        type: "link-preview", 
        title: "Chef's Table Documentary Series",
        description: "Created intimate behind-the-scenes content showcasing the chef's daily market visits, cooking process, and restaurant philosophy. This authentic storytelling approach built deep emotional connections with customers and positioned the restaurants as genuine farm-to-table destinations rather than just trendy spots.",
        link: "https://www.youtube.com/watch?v=chefs-table-documentary"
      }
    ]
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