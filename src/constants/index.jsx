import heroImage from "../assets/Component9.png";
import DNA1 from "../assets/50-.svg";
import DNA2 from "../assets/20__.svg";
import DNA3 from "../assets/2__.svg";
import WEB1 from "../assets/framework.svg";
import WEB2 from "../assets/cloud.svg";
import WEB3 from "../assets/concierge.svg";
import IWTL1 from "../assets/Group 571.png";
import IWTL2 from "../assets/Screen Shot 2021-05-14 at 3.01.21 PM.png";
import IWTL3 from "../assets/Frame 15612.png";
import logo from "../assets/gatsby_icon.svg";
import WHY1 from "../assets/why_1.svg";
import WHY2 from "../assets/why_2.svg";
import WHY3 from "../assets/why_3.svg";
import WHY4 from "../assets/why_4.svg";
import OPEN1 from "../assets/open_1.svg";
import OPEN2 from "../assets/open_2.svg";
import OPEN3 from "../assets/open_3.svg";
import OPEN4 from "../assets/open_4.svg";
import OPEN5 from "../assets/open_5.svg";
import LEARN1 from "../assets/learn_1.svg";
import LEARN2 from "../assets/learn_2.svg";
import LEARN3 from "../assets/learn_3.svg";
import LEARN4 from "../assets/learn_4.svg";
import COMP1 from "../assets/company_1.svg";
import COMP2 from "../assets/company_2.svg";
import COMP3 from "../assets/company_3.svg";
import COMP4 from "../assets/company_4.svg";
import GATSBYIMG from "../assets/how_gatsby_works.png";
import {
  littlecaesars,
  business,
  clearlink,
  jaxxon,
  danielwellington,
  moneygeek,
  ibm,
  Github,
  Twitter,
  Discord,
  Instagram,
  Youtube,
  Twitch,
  Linkedin,
} from "../assets/icons";

export const hero = [
  {
    id: "hero-1",
    title: "The future is here with <b>Gatsby 5 and Valhalla Content Hub.</b>",
    text: "There’s a reason why the <b>world’s top-performing web development teams use Gatsby.</b> Whether your site has 100 pages or 100,000 pages—we’re obsessed with delivering dynamic web experiences with performance and security that scales.",
    links: [
      {
        text: "Create a free account",
        link: "/",
        type: "button",
      },
      {
        text: "Experience The Power of Valhalla",
        link: "/",
        type: "link",
      },
    ],
    img: heroImage,
  },
];

export const DNA = {
  id: "dna-1",
  title: "It's in our DNA to be <b>fast.</b>",
  valueProps: [
    {
      img: DNA1,
      title: "Faster Page Load Speed <br/><b>vs. competitors</b>",
    },
    {
      img: DNA2,
      title: "Faster Build Times <br><b>vs. competitors</b>",
    },
    {
      img: DNA3,
      title: "SEO Boost <br><b>vs. competitors</b>",
    },
  ],
};

export const webExp = {
  id: "webExp-1",
  title: "Start building <b>amazing web experiences.</b>",
  valueProps: [
    {
      img: WEB1,
      title: "Gatsby Framework",
      text: "Build a <b>fast, secure, and powerful website</b> using our React-based, open-source framework. <br/><br/>Want further flexibility? Achieve that with <b>SSR, DSG, and Cloud Functions</b>.",
      link_text: "Learn More",
    },
    {
      img: WEB2,
      title: "Gatsby Data Layer",
      text: "Integrate different <b>content, APIs, and services</b> seamlessly into one web experience. <br/><br/>Say goodbye to glue code, and hello to our <b>unified GraphQL data layer</b>!",
      link_text: "Discover How",
    },
    {
      img: WEB3,
      title: "Gatsby Cloud",
      text: "<b>Build, preview, and deploy</b> your Gatsby site in real-time on the fastest network available. <br/><br/>Building a <b>100K+ page site</b>? No problem!",
      link_text: "Check It Out",
    },
  ],
};

export const imageWithTextList = {
  id: "imageWithTextList-1",
  title: "We're <b>obsessed</b> with your success.",
  listItems: [
    {
      caption: "FAST TO BUILD",
      title:
        "<b>Skip the painful parts</b> of building a website. (Yes, you read that right).",
      text: "We did the hard work for you. Get up and running with free, optimized templates using Gatsby Starters. Take it one step further by customizing and adding functionality with industry-leading tools—we have a library of over 2000 plugins to choose from!",
      img: IWTL1,
      color: "purple",
    },
    {
      caption: "FAST TO RUN",
      title:
        "Get the fastest experience on the web—<b>right out-of-the-box.</b>",
      text: "Know the easiest way to boost your Core Web Vitals, Lighthouse scores, and website conversions? You guessed it—by switching over to Gatsby. We drastically improve your site’s performance by only loading critical parts of the page, ensuring your visitors have a blazingly fast experience, every time.",
      img: IWTL2,
      color: "blue",
    },
    {
      caption: "FAST TO DELIVER",
      title: "Deploy and manage your sites <b>instantaneously.</b>",
      text: "Want to deliver your next digital experience with a single click or command? We created Gatsby Cloud specifically for building, previewing, and deploying Gatsby sites quickly. Bonus: our dashboard also makes it simple to track client projects and see the latest build status! You’re welcome.",
      img: IWTL3,
      color: "green",
    },
  ],
};

export const JOIN = {
  id: "join-1",
  title: "It's time for <b>you</b> to join the roster",
  text: "Your site’s visitors will thank you.<br/>(So will your CEO.)",
  links: [
    {
      text: "Get Started For Free",
      link: "",
      type: "button",
    },
    {
      text: "Request Demo",
      link: "",
      type: "link",
    },
  ],
};

export const solutions = [
  {
    name: "Insightssss",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
    links: [
      "Developers",
      "WordPress",
      "Software & SaaS",
      "Marketers",
      "Shopify",
      "E-Commerce",
      "Content Creators",
      "Contentful",
      "Content & Media",
      "Finance",
      "Drupal",
      "Engineering Leaders",
    ],
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
];

export const NAVBAR = {
  id: "navbar-1",
  icon: logo,
  menuItems: [
    {
      title: "Why Gatsby",
      subItems: [
        {
          name: "Why Gatsby",
          description: "See why the world's top brands choose us",
          href: "##",
          icon: WHY1,
        },
        {
          name: "How It Works",
          description: "Learn how Gatsby works on the inside",
          href: "##",
          icon: WHY2,
        },
        {
          name: "Who Uses Gatsby",
          description: "See how our customers use Gatsby",
          href: "##",
          icon: WHY3,
        },
        {
          name: "Use Cases",
          description: "Explore how we can help you",
          href: "##",
          icon: WHY4,
          links: [
            "Developers",
            "WordPress",
            "Software & SaaS",
            "Marketers",
            "Shopify",
            "E-Commerce",
            "Content Creators",
            "Contentful",
            "Content & Media",
            "Finance",
            "Drupal",
            "Engineering Leaders",
          ],
        },
      ],
    },
    {
      title: "Open Source",
      subItems: [
        {
          name: "Documentation",
          description: "Start building with the Gatsby ecosystem",
          href: "##",
          icon: OPEN1,
          links: [
            "How-To Guides",
            "Reference Guides",
            "Concepts",
            "Quick Start",
            "Tutorial",
          ],
        },
        {
          name: "Gatsby Plugins",
          description:
            "Customize and add functionality with industry-leading tools",
          href: "##",
          icon: OPEN2,
          links: [
            "WordPress",
            "Contentful",
            "Shopify",
            "Algolia",
            "Google Analytics",
            "Segment",
          ],
        },
        {
          name: "Starters",
          description: "Get up and running with free, optimized templates",
          href: "##",
          icon: OPEN3,
        },
        {
          name: "Themes",
          description: "Gain centralized control over web projects",
          href: "##",
          icon: OPEN4,
        },
        {
          name: "Contributing",
          description: "Leave your legacy on the Gatsby project",
          href: "##",
          icon: OPEN5,
        },
      ],
    },
    {
      title: "Learn",
      subItems: [
        {
          name: "Gatsby Hall of Fame",
          description: "Check out what the community is building",
          href: "##",
          icon: LEARN1,
        },
        {
          name: "Webinars",
          description: "Learn more with live or on-demand webinars",
          href: "##",
          icon: LEARN2,
        },
        {
          name: "Blog",
          description: "Read the latest musings from Gatsby",
          href: "##",
          icon: LEARN3,
        },
        {
          name: "Community",
          description: "Explore and interact with our community",
          href: "##",
          icon: LEARN4,
          links: ["Twitter", "Twitch", "Discord", "YouTube", "Instagram"],
        },
      ],
    },
    {
      title: "Company",
      subItems: [
        {
          name: "About Us",
          description: "Meet the team and learn about our story",
          href: "##",
          icon: COMP1,
        },
        {
          name: "Partners",
          description:
            "Join our trusted partner community to unlock exclusive benefits",
          href: "##",
          icon: COMP2,
          links: ["Agency Directory", "Agency Partners", "Tech Partners"],
        },
        {
          name: "Design Labs",
          description: "Help shape the future of Gatsby",
          href: "##",
          icon: COMP3,
        },
        {
          name: "Careers",
          description: "Come work with us!",
          href: "##",
          icon: COMP4,
        },
      ],
    },
  ],
  links: [
    {
      text: "Contact",
      link: "/",
      type: "outline",
    },
    {
      text: "Sign up for free",
      link: "/",
      type: "button",
    },
  ],
};

export const featuredImage = {
  id: "featuredImage-1",
  title: "Buidling a website is hard. <br/><b>Gatsby makes it easy.</b>",
  img: GATSBYIMG,
};

export const TESTIMONIALS = {
  id: "testimonials-1",
  caption: "trusted by the world's top-performing website teams",
  list: [
    {
      icon: littlecaesars,
      text: "Traffic spiked immediately after our Super Bowl ad aired, and we saw a high number of simultaneous uses. I remember watching and seeing we had 3,000 simultaneous users, then 10,000, then a few seconds later it was 15,000 — and we didn’t have to worry. Because we built with Gatsby, we knew we had the performance to handle the traffic without even thinking about it!",
      name: "Andrew Smith",
      role: "Application Architect",
      company: "Little Caesars",
    },
    {
      icon: business,
      text: "We were so impressed with the developer experience with Gatsby, that the team pushed to move Business.com and Business News Daily over to Gatsby in order to improve our SEO and conversion. Our Lighthouse scores went from “low teens” to scores in the mid-60s! It helped foster a cultural change at our company where performance became a cross-cutting department concern, rather than just an engineering concern.",
      name: "Spencer Sanchez",
      role: "Tech Lead",
      company: "Business.com",
    },
    {
      icon: ibm,
      text: "With non-technical content writers and designers needing the ability to add content quickly to the site, Gatsby’s second to none onboarding made it easy for everyone, regardless of skill level, to be successful. This achieved one of the most important goals for the website: the documentation and process was there for the next person so they wouldn’t struggle. A home-grown system goes down when the people who created it leave. Gatsby doesn’t allow for that — it grows with whoever is at the controls — then seamlessly passes on to the next person.",
      name: "Alison Joseph",
      role: "Front-end Developer",
      company: "IBM",
    },
    {
      icon: clearlink,
      text: "Gatsby came at a time that we really needed to improve the speed of our sites in an easy way. Gatsby solved that issue by giving us a way to use a common library like React, but be able to statically generate our content to improve our speed. With the release of Gatsby Cloud, we are able to easily integrate with our headless CMS, Contentful, and be able to provide a fast way for our content editors to piece together pages and see previews of what they are creating in seconds.",
      name: "Taylor Dawson",
      role: "Director of Product Managemet",
      company: "Clearlink",
    },
    {
      icon: jaxxon,
      text: "As soon as we launched Jaxxon’s website on Gatsby, we saw really dramatic growth. Conversion went up from around 1% to over 2% and the bounce rate went from 40 to 50% to around 12%. Jaxxon has more than tripled their revenue and has now launched a women’s brand, too. Using Gatsby has been a huge step forward for all of us!",
      name: "Trevor Heath",
      role: "Project Tech Lead",
      company: "Novvum",
    },
    {
      icon: moneygeek,
      text: "I’m really glad we decided to go with Gatsby—it gives us a much stronger foundation than many of our competitors. The Gatsby Concierge service has been amazing at not only helping our team identify certain problems that we’ve been having, but also providing detailed, specific code to fit it. With their help, we’ve improved our Core Web Vitals scores drastically.",
      name: "Doug Jones",
      role: "CEO",
      company: "Moneygeek",
    },
    {
      icon: danielwellington,
      text: "We chose Gatsby as a tool to help us build our large, internationalized eCommerce website and reach optimal performance at Daniel Wellington. By splitting our 30K-page website into smaller 1K-page websites, we decreased our build time from over 20 minutes to just 3 minutes!",
      name: "Thibaut Remy",
      role: "Front-end Engineer",
      company: "Daniel Wellington",
    },
  ],
};

export const footerMenuItems = {
  id: "footerMenuItems-1",
  community: {
    icon: logo,
    text: "Gatsby is powered by the amazing Gatsby <br/>community and Gatsby, the company.",
    socials: [
      { icon: Github },
      { icon: Twitter },
      { icon: Discord },
      { icon: Instagram },
      { icon: Youtube },
      { icon: Twitch },
      { icon: Linkedin },
    ],
  },
  nav: [
    {
      title: "open source",
      links: [
        "Documentation",
        "Quick Start",
        "Tutorial",
        "How-To Guides",
        "Reference Guides",
        "Conceptual Guides",
        "Gatsby CLI",
      ],
    },
    {
      title: "gatsby cloud",
      links: [
        "Why Gatsby Cloud?",
        "Support",
        "Integrations",
        "Guides",
        "Pricing",
      ],
    },
    {
      title: "Features",
      links: [
        "Comparison",
        "Plugins",
        "Themes",
        "Recipes",
        "Starters",
        "Use Cases",
      ],
    },
    {
      title: "community",
      links: [
        "Contributing",
        "Swag Store",
        "Code of Conduct",
        "Style Guide",
        "Live Streams",
      ],
    },
    {
      title: "events",
      links: ["Webinars", "GatsbyConf 2022"],
    },
    {
      title: "open source",
      links: [
        "About us",
        "Blog",
        "Contact Us",
        "Design Labs",
        "Security",
        "Careers",
        "Partners",
      ],
    },
  ],
};

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
