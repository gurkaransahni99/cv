import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gurkaran Sahni",
  initials: "GS",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Experienced Backend and Blockchain Engineer with a focus on building scalable products. Skilled in Blockchain security, implementation, and smart contracts",
  summary:
    "I have over 4 years of experience in backend and blockchain, working remotely with companies all around the world. Successfully developed and lead teams on products which have gone on to raise more than $1 Million",
  avatarUrl: "https://avatars.githubusercontent.com/u/38098896?v=4", // Replace with Gurkaran's avatar URL
  personalWebsiteUrl: "https://github.com/gurkaransahni99",
  contact: {
    email: "gurkaran.sahni@gmail.com",
    tel: "+91-9791444025",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/gurkaran-sahni-923721129",
        icon: LinkedInIcon, // Replace with the appropriate icon component
      },
      {
        name: "GitHub",
        url: "https://github.com/gurkaransahni99",
        icon: GitHubIcon, // Replace with the appropriate icon component
      },
      {
        name: "X",
        url: "https://twitter.com/gurkaran_sahni",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      start: "2016",
      end: "2020",
      gpa: 3.5,
    },
  ],
  work: [
    {
      company: "Freelancer",
      link: "https://www.upwork.com/freelancers/~010ecfc738af7e39df",
      badges: ["Remote"],
      title: "",
      start: "2022",
      end: "2024",
      description:
        "Worked on 20 different products, with multiple teams across the globe. Audited and secured smart contracts with TVL in millions",
    },
    {
      company: "Bitbns",
      link: "https://bitbns.com",
      badges: [],
      title: "Software Engineer",
      logo: "BitbnsLogo", // Replace with the appropriate logo
      start: "2020",
      end: "2023",
      description:
        "Lead Blockchain development team. Created industry-first blockchain-based fantasy gaming startup. Developed decentralized digital asset management platform. Worked on various projects, from arbitrage and snipe bots to DeFi and NFTs.",
    },
    {
      company: "Buyhatke",
      link: "https://chromewebstore.google.com/detail/price-history-tracker-aut/ojplmecpdpgccookcobabopnaifgidhf",
      badges: [],
      title: "Intern",
      start: "2019",
      end: "2020",
      description:
        "Created and developed the autocoupon component for the buyhatke chrome extension. Developed backend for extension’s wallet. Refactored backend apis for buyhatke app",
    },
    {
      company: "GAP Inc.",
      link: "https://www.gap.com/",
      badges: [],
      title: "Intern",
      start: "2019",
      end: "2019",
      description:
        "Created a hydration tool for the Business Intelligence Team. The tool takes real time data as input from Kafka. This data is sent to Spark for furtehr processing. Worked on various frameworks like Spark, Spring and Kafka",
    },
    {
      company: "Healthmir",
      link: "https://ichelon-consulting-group.business.site/",
      badges: [],
      title: "Intern",
      start: "2018",
      end: "2018",
      description:
        "Created a MVP for a Saas product used by pharmaceutical companies to track their dealings with hospitals. Also Worked on company’s internal CRM",
    },
    // Add more work experience as needed
  ],
  skills: [
    "Solidity",
    "Node.js",
    "Foundry",
    "Hardhat",
    "Go",
    "Python",
    "Spring",
    "Spark",
    "Kafka",
    "Maya",
    // Add more skills as needed
  ],
  projects: [
    {
      title: "Vakya.ai",
      techStack: ["Node.js", "OpenAI"],
      description: "AI assistant that helps users create content.",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "vakya.ai",
        href: "https://vakya.ai/",
      },
    },
    {
      title: "Playota",
      techStack: ["Node.js", "Solidity"],
      description: "Industry first blockhain based fantasy gaming startup",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "Playota",
        href: "https://playota.app/",
      },
    },
    {
      title: "Meinstein.ai",
      techStack: ["Node.js", "Solidity"],
      description: "Community driven AI & decentralised data sharing platform.",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "meinstein.ai",
        href: "https://meinstein.ai/",
      },
    },
    {
      title: "Follows",
      techStack: ["Solidity"],
      description: "Follows is a decentralized social media platform.",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "follows.app",
        href: "https://follows.app/",
      },
    },
    {
      title: "Ascent",
      techStack: ["Node.js", "Solidity"],
      description: "Ascent is a decentralised token launchpad platform",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "ascent",
        href: "https://launchonascent.com/#/",
      },
    },
    {
      title: "Mintera",
      techStack: ["Solidity"],
      description: "Mintera offers stable and secure yields in USDT",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "mintera",
        href: "https://mintera.co/",
      },
    },
    {
      title: "Bitdroplet dapp",
      techStack: ["Node.js", "Solidity"],
      description: "Decentralised SIP platform for crypto",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "bitdroplet",
        href: "https://bitdroplet.com/dapp/",
      },
    },
    {
      title: "Kotia",
      techStack: ["Node.js", "Solidity"],
      description: "Kotia is an independent blockchain with POS consensus",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "kotia",
        href: "https://kotia.cash/",
      },
    },
    {
      title: "Avocado",
      techStack: ["Solidity"],
      description: "Avocado is an NFT marketplace, rewarding users for holding NFTs",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "avocado",
        href: "https://avocadotoken.io/",
      },
    },
    {
      title: "BuyToken",
      techStack: ["Node.js", "Solidity"],
      description: "Blockchain based solutions serving logistics and the medical industry",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "buying",
        href: "https://buying.com/",
      },
    },
    {
      title: "DCA tool",
      techStack: ["Node.js", "Solidity"],
      description: "Created a sip bot using bitbns and binance for users to invest in crypto",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "DCA tool",
        href: "",
      },
    },
    {
      title: "Trading Bot",
      techStack: ["Node.js"],
      description: "Created a bot which will choose the stocks to buy",
      logo: "VakyaLogo", // Replace with the appropriate logo
      link: {
        label: "Trading Bot",
        href: "",
      },
    },
    // Add more projects as needed
  ],
  interests: ["Reading", "Chess", "Travelling", "White hacking crypto projects"],
} as const;

// export const RESUME_DATA = {
//   name: "Bartosz Jarocki",
//   initials: "BJ",
//   location: "Wrocław, Poland, CET",
//   locationLink: "https://www.google.com/maps/place/Wrocław",
//   about:
//     "Full Stack Engineer focused on building products with extra attention to detail",
//   summary:
//     "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
//   avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
//   personalWebsiteUrl: "https://jarocki.me",
//   contact: {
//     email: "bartosz.jarocki@hey.com",
//     tel: "+48530213401",
//     social: [
//       {
//         name: "GitHub",
//         url: "https://github.com/BartoszJarocki",
//         icon: GitHubIcon,
//       },
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/bjarocki/",
//         icon: LinkedInIcon,
//       },
//       {
//         name: "X",
//         url: "https://x.com/BartoszJarocki",
//         icon: XIcon,
//       },
//     ],
//   },
//   education: [
//     {
//       school: "Wrocław University of Technology",
//       degree: "Bachelor's Degree in Control systems engineering and Robotics",
//       start: "2007",
//       end: "2010",
//     },
//   ],
//   work: [
//     {
//       company: "Parabol",
//       link: "https://parabol.co",
//       badges: ["Remote"],
//       title: "Senior Full Stack Developer",
//       logo: ParabolLogo,
//       start: "2021",
//       end: "2024",
//       description:
//         "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
//     },
//     {
//       company: "Clevertech",
//       link: "https://clevertech.biz",
//       badges: ["Remote"],
//       title: "Lead Android Developer → Full Stack Developer",
//       logo: ClevertechLogo,
//       start: "2015",
//       end: "2021",
//       description:
//         "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
//     },
//     {
//       company: "Jojo Mobile",
//       link: "https://bsgroup.eu/",
//       badges: [],
//       title: "Android Developer → Lead Android Developer",
//       logo: JojoMobileLogo,
//       start: "2012",
//       end: "2015",
//       description:
//         "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
//     },
//     {
//       company: "Nokia Siemens Networks",
//       link: "https://www.nokia.com",
//       badges: [],
//       title: "C/C++ Developer",
//       logo: NSNLogo,
//       start: "2010",
//       end: "2012",
//       description: "Creating and testing software for LTE base stations",
//     },
//   ],
//   skills: [
//     "JavaScript",
//     "TypeScript",
//     "React/Next.js/Remix",
//     "Node.js",
//     "GraphQL",
//     "Relay",
//     "WebRTC",
//   ],
//   projects: [
//     {
//       title: "Consultly",
//       techStack: [
//         "Side Project",
//         "TypeScript",
//         "Next.js",
//         "Vite",
//         "GraphQL",
//         "WebRTC",
//       ],
//       description: "A platform to build and grow your online business",
//       logo: ConsultlyLogo,
//       link: {
//         label: "consultly.com",
//         href: "https://consultly.com/",
//       },
//     },
//     {
//       title: "Monito",
//       techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
//       description:
//         "Browser extension that records everything happening in a web application",
//       logo: MonitoLogo,
//       link: {
//         label: "monito.dev",
//         href: "https://monito.dev/",
//       },
//     },
//     {
//       title: "Jarocki.me",
//       techStack: ["Side Project", "Next.js", "MDX"],
//       description:
//         "My personal website and blog. Built with Next.js and Notion API",
//       logo: JarockiMeLogo,
//       link: {
//         label: "github.com",
//         href: "https://jarocki.me/",
//       },
//     },
//     {
//       title: "Minimal",
//       techStack: ["Side Project", "Next.js", "Puppeteer"],
//       description:
//         "Minimalist calendars, habit trackers and planners generator",
//       logo: Minimal,
//       link: {
//         label: "useminimal.com",
//         href: "https://useminimal.com/",
//       },
//     },
//     {
//       title: "Barepapers",
//       techStack: ["Side Project", "Next.js", "Puppeteer"],
//       description:
//         "Generates beautiful wallpapers using random shapes and gradients",
//       logo: BarepapersLogo,
//       link: {
//         label: "barepapers.com",
//         href: "https://barepapers.com/",
//       },
//     },
//     {
//       title: "Year progress",
//       techStack: ["Side Project", "TypeScript", "Next.js"],
//       description: "Tracks current year progress and displays a countdown",
//       logo: YearProgressLogo,
//       link: {
//         label: "getyearprogress.com",
//         href: "https://getyearprogress.com/",
//       },
//     },
//     {
//       title: "Parabol",
//       techStack: [
//         "Full Stack Developer",
//         "TypeScript",
//         "React",
//         "Node.js",
//         "GraphQL",
//       ],
//       description:
//         "The Agile meeting co-pilot that delivers better meetings with less effort",
//       logo: ParabolLogo,
//       link: {
//         label: "github.com",
//         href: "https://parabol.co/",
//       },
//     },
//     {
//       title: "Evercast",
//       techStack: [
//         "Lead Frontend Developer",

//         "TypeScript",
//         "React",
//         "Node.js",
//         "GraphQL",
//       ],
//       description:
//         "Creative collaboration platform that combines video conferencing and HD media streaming",
//       logo: EvercastLogo,
//       link: {
//         label: "evercast.us",
//         href: "https://www.evercast.us/",
//       },
//     },
//     {
//       title: "Mobile Vikings",
//       techStack: ["Lead Android Developer", "Android", "Kotlin"],
//       description:
//         "Android application for leading virtual mobile operator in Poland",
//       logo: MobileVikingsLogo,
//       link: {
//         label: "mobilevikings.pl",
//         href: "https://mobilevikings.pl/",
//       },
//     },
//     {
//       title: "Howdy",
//       techStack: ["Lead Android Developer", "Android", "Kotlin"],
//       description:
//         "Howdy is a place for you to join communities you care about",
//       logo: Howdy,
//       link: {
//         label: "play.google.com",
//         href: "https://howdy.co/",
//       },
//     },
//     {
//       title: "Tastycloud",
//       techStack: ["Lead Android Developer", "Android", "Kotlin"],
//       description:
//         "Android application for managing and displaying restaurant menus in kiosk mode",
//       logo: TastyCloudLogo,
//       link: {
//         label: "tastycloud.fr",
//         href: "https://www.tastycloud.fr/",
//       },
//     },
//     {
//       title: "Ambit",
//       techStack: ["Lead Android Developer", "Android", "Kotlin"],
//       description:
//         "Android application that helps with sharing your contact details",
//       logo: AmbitLogo,
//     },
//     {
//       title: "Bim",
//       techStack: ["Lead Android Developer", "Android", "Kotlin"],
//       description:
//         "Android application that helps with booking a table in a restaurants",
//       logo: BimLogo,
//     },
//     {
//       title: "Canal Digital GO",
//       techStack: ["Lead Android Developer", "Android", "Kotlin"],
//       description:
//         "Video streaming mobile application for Canal Digital subscribers",
//       logo: CDGOLogo,
//     },
//   ],
// } as const;
