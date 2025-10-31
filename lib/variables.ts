/*
 This file contains the **static values** which are required to maintain consistency
 in the codebase.

 It contains:
  - URLs of social media accounts
  - Color codes
  - Image path
  - SEO values

 @author: SAKSHAM JOSHI (LinkedIn: /sakshamjoshi27)
*/

export const COLORS = {
  PRIMARY: '#0190d2'
} as const;

export const IMAGES = {
  PATH : {
    FULL_LOGO : '/images/logo/unitewings-full-bgremoved.svg',
    ONLY_LOGO : '/images/logo/unitewings-logo.svg'
  },
  SVG : {
    FAVICON: '',
    INSTAGRAM: '',
    X: '',
    YOUTUBE: '',
    FACEBOOK: '',
    GITHUB: '',
    REDDIT: '',
  }
} as const;

export const VALUES = {
  APP_FULL_NAME : 'Unite Wings Educational Confederation',
  APP_SHORT_NAME : 'Unite Wings',
  APP_SHORT_FORM : 'UW',
  APP_DESCRIPTION : 'Join Unite Wings, a non-profit transforming India\'s youth. Gain real-world experience with our hands-on leadership internships, skill bootcamps, and professional certifications. Explore our programs and launch your career with Youth Leadership.',
  CIN : "U85500UT2025NPL019683",

  URL : {
    WEB_URL : 'https://unitewings.com/',
    INSTAGRAM_URL : 'https://www.instagram.com/unite_wings',
    YOUTUBE_URL : 'https://www.youtube.com/@UniteWings',
    FACEBOOK_URL : '',
    X_URL : 'https://x.com/UniteWings',
    LINKEDIN_URL : 'https://www.linkedin.com/company/unite-wings/',
    GITHUB_URL: 'https://github.com/unitewings',
    REDDIT_URL: '',
  },

  EMAIL : {
    HELLO : 'hello@unitewings.com',
    PARTNER : 'Partner@unitewings.com',
    QUERY : 'HeyBuddy@unitewings.com'
  },
  
  /*
   Below are the name of the developers who creates a page to the site

   @format
    DEV_YOUR_NAME : {
      name: 'Your name',
      url: 'link to contributor's website/portfolio/linkedin/github/Email/X'
    }

    @author: Saksham Joshi
  */ 
  DEV_SAKSHAM_JOSHI : {
    name: 'Saksham Joshi',
    url: 'https://www.linkedin.com/in/sakshamjoshi27'
  }
  ,
  /*
  */
  SEO : {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  
    category: 'Education',

    referrer: 'origin-when-cross-origin',
    
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    keywords: 'youth leadership internship programs India skill development professional certification career bootcamps non-profit education student development leadership training',
  }
} as const;