
// Grid pictures for client headers (keeping only used assets)

import { post } from "jquery";
import { type } from "os";

//Guided:
const guided_grid= new URL("../assets/clients/guidedbyg/guided_grid.jpg", import.meta.url).href;
const guided_logo = new URL("../assets/clients/guidedbyg/guided_logo.jpg", import.meta.url).href;
const guided_post1 = new URL("../assets/clients/guidedbyg/guided_post1.png", import.meta.url).href;
const guided_post2 = new URL("../assets/clients/guidedbyg/guided_post2.png", import.meta.url).href;
const guided_post3 = new URL("../assets/clients/guidedbyg/guided_post3.png", import.meta.url).href;
const guided_post4 = new URL("../assets/clients/guidedbyg/guided_post4.png", import.meta.url).href;
const guided_post5 = new URL("../assets/clients/guidedbyg/guided_post5.png", import.meta.url).href;
const guided_post6 = new URL("../assets/clients/guidedbyg/guided_post6.png", import.meta.url).href;
const guided_post7 = new URL("../assets/clients/guidedbyg/guided_post7.png", import.meta.url).href;
const guided_post8 = new URL("../assets/clients/guidedbyg/guided_post8.png", import.meta.url).href;
const guided_post9 = new URL("../assets/clients/guidedbyg/guided_post9.png", import.meta.url).href;
const guided_post10 = new URL("../assets/clients/guidedbyg/guided_post10.png", import.meta.url).href;

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
const ign_post3 = new URL("../assets/clients/ignite/ign_post3.png", import.meta.url).href;
const ign_post4 = new URL("../assets/clients/ignite/ign_post4.png", import.meta.url).href;
const ign_post5 = new URL("../assets/clients/ignite/ign_post5.png", import.meta.url).href;
const ign_post6 = new URL("../assets/clients/ignite/ign_post6.png", import.meta.url).href;
const ign_post7 = new URL("../assets/clients/ignite/ign_post7.png", import.meta.url).href;
const ign_post8 = new URL("../assets/clients/ignite/ign_post8.png", import.meta.url).href;
const ign_post9 = new URL("../assets/clients/ignite/ign_post9.png", import.meta.url).href;
const ign_post10 = new URL("../assets/clients/ignite/ign_post10.png", import.meta.url).href;

//Pulse
const pulse_logo = new URL("../assets/clients/pulse/pulse_logo.png", import.meta.url).href;
const pulse_post1 = new URL("../assets/clients/pulse/pulse_post1.png", import.meta.url).href;
const pulse_post2 = new URL("../assets/clients/pulse/pulse_post2.png", import.meta.url).href;
const pulse_post3 = new URL("../assets/clients/pulse/pulse_post3.png", import.meta.url).href;
const pulse_post4 = new URL("../assets/clients/pulse/pulse_post4.png", import.meta.url).href;
const pulse_post5 = new URL("../assets/clients/pulse/pulse_post5.png", import.meta.url).href;
const pulse_post6 = new URL("../assets/clients/pulse/pulse_post6.png", import.meta.url).href;
const pulse_post7 = new URL("../assets/clients/pulse/pulse_post7.png", import.meta.url).href;
const pulse_post8 = new URL("../assets/clients/pulse/pulse_post8.png", import.meta.url).href;

//Seville
const seville_logo = new URL("../assets/clients/seville/seville_logo.png", import.meta.url).href;
const sev_post1 = new URL("../assets/clients/seville/sev_post1.png", import.meta.url).href;
const sev_post2 = new URL("../assets/clients/seville/sev_post2.png", import.meta.url).href;
const sev_post3 = new URL("../assets/clients/seville/sev_post3.png", import.meta.url).href;
const sev_post4 = new URL("../assets/clients/seville/sev_post4.png", import.meta.url).href;
const sev_post5 = new URL("../assets/clients/seville/sev_post5.png", import.meta.url).href;
const sev_post6 = new URL("../assets/clients/seville/sev_post6.png", import.meta.url).href;
const sev_post7 = new URL("../assets/clients/seville/sev_post7.png", import.meta.url).href;
const sev_post8 = new URL("../assets/clients/seville/sev_post8.png", import.meta.url).href;
const sev_post9 = new URL("../assets/clients/seville/sev_post9.png", import.meta.url).href;
const sev_post10 = new URL("../assets/clients/seville/sev_post10.png", import.meta.url).href;

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
    portfolio:[
      {
        type: "social-media",
        platform: "instagram",
        title: "post1",
        description: "",
        link: "https://www.instagram.com/p/DSsGMDsDaMj/?img_index=1",
        previewImage: guided_post1,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "Guided’s Digital Christmas Card 🎄🤍✨",
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post2",
        description: "",
        link: "https://www.instagram.com/p/DSBAPMyDxG4/",
        previewImage: guided_post2,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "So proud that Justin Reid’s My Cause My Cleats were custom designed by Guided By G’s very own Kasten Green. Seeing such meaningful cleats on Justin’s feet representing @jreidindeed AND watching him get a pick six in them. Couldn’t ask for a cooler moment for our team.",
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post3",
        description: "",
        link: "https://www.instagram.com/reel/DRiHVQbDvGs/",
        previewImage: guided_post3,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "A glimpse with @doctoranna_wilson 📸🦷💄"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post4",
        description: "",
        link: "https://www.instagram.com/p/DSF-0ARj5e4/?img_index=1",
        previewImage: guided_post4,
        postText: "From a full November to an even bigger December. Let’s keep the momentum going."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post5",
        description: "",
        link: "https://www.instagram.com/p/DQuvSw9DVLz/?img_index=1",
        previewImage: guided_post5,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "Three more years in KC!! 🤍🙌  Huge congrats to @lomomma on re-signing with the @kccurrent! From the USWNT to leading the Current to another record-breaking season, watching you continue to make history has been such a privilege. We are so proud to be just a little part of the journey."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post6",
        description: "",
        link: "https://www.instagram.com/p/DQZ_qpMD3MJ/?img_index=1",
        previewImage: guided_post6,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "You’ve seen the flyer. Now let’s get started so you can see the results. We specialize in branding for athletes and businesses ready to transform their ideas into impact. As the year comes to a close, it’s the perfect time to start thinking about how you can grow in the new year."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post7",
        description: "",
        link: "https://www.instagram.com/p/DPe2Fb0D_OD/?img_index=1",
        previewImage: guided_post7,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "This is your sign to stop waiting and start building💌 We’re now taking on new business clients!!!"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post8",
        description: "",
        link: "https://www.instagram.com/p/DOymTyODRzi/",
        previewImage: guided_post8,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "Gratitude fuels growth. Thankful for every step as we bring our guided vision to life. 🤍"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post9",
        description: "",
        link: "https://www.instagram.com/p/DP6v9_pDRYp/?img_index=1",
        previewImage: guided_post9,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "Officially bringing our portfolio to the gram!! At Guided, we bridge athletes and brands to build organic, meaningful partnerships, and we want to share that with you. We’re kicking things off strong with one of our favorites: Kansas City Current’s own celly queen, Lo’eau LaBonta, in collaboration with Fabletics. Celebrating strong, active women who lead with movement, confidence, and authenticity. 🙌 🤍"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post10",
        description: "",
        link: "https://www.instagram.com/p/DP1c1Gija2U/",
        previewImage: guided_post10,
        authorName: "Guided By G Agency",
        authorUsername: "@guidedbygagency",
        postText: "Yes, @trent_mcduffie and HCA seriously had this much fun at their 75th Anniversary Gala!!"
      }
      
    ]
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
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post3",
        description: "",
        link: "https://www.instagram.com/p/DRNfpWiD6YH/",
        previewImage: ign_post3,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Our very own Dr. Elika Izadyar was featured in @boldjourneymag, sharing more about her philosophy, her path to chiropractic care, and the impact she strives to make in our community every day. "
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post4",
        description: "",
        link: "https://www.instagram.com/p/DQw0m8ODsi6/?img_index=1",
        previewImage: ign_post4,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Athletes, don’t let injuries bench you! Our chiropractic treatments help prevent injuries, speed recovery, and improve performance. Swipe to learn more, and remember, these therapies aren’t limited to just the injuries shown! 🏅✨"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post5",
        description: "",
        link: "https://www.instagram.com/p/DQUuXluj0Xz/?img_index=1",
        previewImage: ign_post5,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Winter can make it hard to stick to your normal routine, including chiropractor appointments. But keeping up with care this time of year is more important than ever! 💪"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post6",
        description: "",
        link: "https://www.instagram.com/p/DPWl_aljl4K/",
        previewImage: ign_post6,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Happy Friday! Let’s set next week up for success.🌿 Book your readjustment and keep your wellness on track."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post7",
        description: "",
        link: "https://www.instagram.com/p/DPw-n6aj98W/",
        previewImage: ign_post7,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Not just workouts. Not just adjustments. Chiropractic care is progress toward the best version of you at Ignite. 🙌 🤍"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post8",
        description: "",
        link: "https://www.instagram.com/p/DQZry8REUer/",
        previewImage: ign_post8,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Introducing our Exercise Education Series 💪 We’re going to be breaking down some of the most common gym mistakes, starting off with posture during rows."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post9",
        description: "",
        link: "https://www.instagram.com/p/DRpcae1jlVg/?img_index=1",
        previewImage: ign_post9,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Think chiropractic is just cracking and popping? Swipe to see what really sets it apart. 💆‍♂️➡️"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post10",
        description: "",
        link: "https://www.instagram.com/p/DPo8JhYjqnb/",
        previewImage: ign_post10,
        authorName: "Ignite chiro and wellness clinic",
        authorUsername: "@ignitechiroandwellness",
        postText: "Prevention > reaction. Stay ahead of pain with proactive chiropractic care at Ignite. 🌿🤍"
      }
    ]
  },
  // #endregion
  
  // #region Pulse
  { id: "Pulse",
    name: "Phoenix Pulse FC",
    logo: pulse_logo,
    description: "Maintaining and updating the instagram account for a professional soccer club based in Phoenix, AZ.",
    services: ["Social Media Management", "Weekly Content Creation","Photo and Video Editing", "Overseeing Post Insights"],
    duration:["Ongoing"],
    results: "Feuled consistent growth in follower engagement and brand visibility. Specifically, __% growth in interactions and __% increase in follower count.",
    portfolio:[
      {
        type: "social-media",
        platform: "instagram",
        title: "post1",
        description: "",
        link: "https://www.instagram.com/p/DSf54f-EoPC/",
        previewImage: pulse_post1,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "Christmas came early!! ⚽🔥 Here’s our full 2026 schedule. Get ready for an exciting season ahead!"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post2",
        description: "",
        link: "https://www.instagram.com/p/DSSxqcvDxhT/",
        previewImage: pulse_post2,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "We can’t stop talking about this schedule drop… and honestly, we don’t want to. Hope you’re as excited as we are — it’s almost time. 🕑🔥"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post3",
        description: "",
        link: "https://www.instagram.com/p/DSVRqYXD0H5/",
        previewImage: pulse_post3,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "Hopefully you’ve heard by now, but if not, here’s your reminder. MLIS Men’s & Women’s Finals are headed to the Orleans Arena in Las Vegas, March 28-29, 2026. ✨🏆"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post4",
        description: "",
        link: "https://www.instagram.com/p/DSK5CHJjzRG/",
        previewImage: pulse_post4,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "Locked in… every session pushes us closer to January. 🔒"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post5",
        description: "",
        link: "https://www.instagram.com/p/DSsQjFgFRQz/",
        previewImage: pulse_post5,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "From our Pulse family to yours, Happy Holidays! 🎄⚽️"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post6",
        description: "",
        link: "https://www.instagram.com/p/DSIiTGTkjT7/",
        previewImage: pulse_post6,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "Here’s the 2026–27 landscape. The WMLIS is stacked, competitive, and full of talent. These are the teams we’ll battle all year long."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post7",
        description: "",
        link: "https://www.instagram.com/p/DR5BTZHjwtk/",
        previewImage: pulse_post7,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "Official Partnership Announcement! Phoenix Pulse FC is proud to welcome @zonarehab as an official partner this season! Together, we’re supporting our athletes and building a stronger, healthier soccer community."
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post8",
        description: "",
        link: "https://www.instagram.com/p/DR2PRw7kSky/",
        previewImage: pulse_post8,
        authorName: "Phoenix Pulse FC",
        authorUsername: "@phxpulsefc",
        postText: "The work has started. The season is almost here. January can’t come soon enough. 🌵⚽️"
      }
    ]
  },
  // #endregion

  // #region Seville
  { id: "Seville",
    name: "Seville Dental Aesthetics",
    logo: seville_logo,
    description: "Maintaining and updating the instagram account for this Kansas City-based dental aesthetics business.",
    services: ["Social Media Management", "Weekly Content Creation","Photo and Video Editing", "Overseeing Post Insights"],
    duration:["Ongoing"],
    results: "Feuled consistent growth in follower engagement and brand visibility. Specifically, __% growth in interactions and __% increase in follower count.",
    portfolio:[
      {
        type: "social-media",
        platform: "instagram",
        title: "post1",
        description: "",
        link: "https://www.instagram.com/p/DOeyXLXkfOc/?img_index=1",
        previewImage: sev_post1,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Let’s chat cavities 🦷🪥",
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post2",
        description: "",
        link: "https://www.instagram.com/p/DObK-Z0jgFS/",
        previewImage: sev_post2,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Be confident in your smile 🤍 you’re just a call away ✨"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post3",
        description: "",
        link: "https://www.instagram.com/p/DRDADqfjvQa/",
        previewImage: sev_post3,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Busy doing what I love 💁🏻‍♀️"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post4",
        description: "",
        link: "https://www.instagram.com/p/DR4nPBZDiRF/?img_index=1",
        previewImage: sev_post4,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "In case you needed more reasons to book for your dream smile 😉"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post5",
        description: "",
        link: "https://www.instagram.com/p/DRApwpXEW28/?img_index=1",
        previewImage: sev_post5,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "What are Veneers and Implants? 🦷✨"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post6",
        description: "",
        link: "https://www.instagram.com/p/DRsbkQBEsjQ/?img_index=1",
        previewImage: sev_post6,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "A great holiday stocking stuffer idea… professional whitening. One for you, one for your partner 🎁🦷 "
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post7",
        description: "",
        link: "https://www.instagram.com/p/DSaz8zukVUM/?img_index=1",
        previewImage: sev_post7,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Treat yourself and whoever else you love with the gift of Seville✨🦷🎁"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post8",
        description: "",
        link: "https://www.instagram.com/p/DSVYsJxjlke/?img_index=1",
        previewImage: sev_post8,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Doing what we love for people we love 🦷🫶🏼"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post9",
        description: "",
        link: "https://www.instagram.com/p/DO6MqGIDokY/?img_index=1",
        previewImage: sev_post9,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Part one of why dental plants are beneficial for your smile ✨🦷"
      },
      {
        type: "social-media",
        platform: "instagram",
        title: "post10",
        description: "",
        link: "https://www.instagram.com/p/DPl3CoiEdyK/",
        previewImage: sev_post10,
        authorName: "Seville Dental Aesthetics",
        authorUsername: "@seville_dental_aesthetics",
        postText: "Doing what I love daily 🤍✨"
      }
    ]
  },
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