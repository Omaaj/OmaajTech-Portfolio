import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Atunwon",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Olajuwon",
  },

  {
    id: 3,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 4,
    title: "Phone : ",
    description: "+2349073520712",
  },

  {
    id: 5,
    title: "Email : ",
    description: "juwiz999@gmail.com",
  },

  {
    id: 6,
    title: "Langauges : ",
    description: "English",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "20+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb 2024 - Present",
    title: "Senior Frontend Developer <span> Vita Renewal Aesthetics </span>",
    desc: [
      "Led end-to-end development of web applications using React.js, resulting in a 40% increase in user retention.",
      "Collaborated with digital marketers to optimize user experience, resulting in a 50% increase in engagement.",
      "Integrated third-party APIs for real-time data synchronization, driving a 50% increase in conversion rates.",
      "Utilized Figma for collaborative design prototyping, reducing design-to-development turnaround time by 30%.",
    ],
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Dec 2023 - Feb 2024",
    title: "Full-Stack Developer <span> Rimberio </span>",
    desc: [
      "Developed responsive user interfaces using React, leading to a 30% increase in engagement.",
      "Implemented Redux Toolkit for efficient state management, reducing code complexity by 40%.",
      "Integrated Firebase for a secure backend infrastructure, resulting in a 50% decrease in load times.",
      "Engineered a custom email notification system using EmailJS, improving communication efficiency by 60%",
    ],
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Mar 2023 - Nov 2023",
    title: "Senior Frontend Developer <span> PlanPaddy Technologies </span>",
    desc: [
      "Collaborated with teams using Git and Subversion for code management.",
      "Tested and refined applications for improved user experience.",
      "Utilized innovative JavaScript technologies for responsive website design",
    ],
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jun 2022 - Aug 2022",
    title: "Frontend Developer <span> CRYPTOFXMGMT </span>",
    desc: [
      "Ensured 100% validation of user input for improved data accuracy.",
      "Provided technical guidance for seamless integration between front-end and back-end.",
      "Created dynamic and browser-compatible pages using HTML5, CSS, and JavaScript",
    ],
  },

  {
    id: 5,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Mar 2022 - May 2022",
    title: "Junior Frontend Developer <span> Sycamore </span>",
    desc: [
      "Collaborated with cross-functional teams for project delivery.",
      "Implemented feedback for skills improvement.",
      "Translated marketing designs into functional code.",
    ],
  },
  {
    id: 6,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Sep 2021 - Oct 2021",
    title: "Frontend Developer <span> FlyDrop </span>",
    desc: [
      "Developed UI/UX designs for application elements.",
      "Maintained graphic standards and branding.",
      "Contributed to code libraries for streamlined development processes.",
    ],
  },
];

export const skills = [
  {
    id: 1,
    title: "Html5",
    img: "./img/skills/html5.svg",
  },

  {
    id: 2,
    title: "Css3",
    img: "./img/skills/css3.svg",
  },

  {
    id: 3,
    title: "Sass",
    img: "./img/skills/sass.svg",
  },

  {
    id: 4,
    title: "Javascript",
    img: "./img/skills/JS.svg",
  },

  // {
  //   id: 5,
  //   title: 'Wordpress',
  //   img: './img/skills/wordpress.svg',
  // },

  // {
  //   id: 6,
  //   title: 'woocomerce',
  //   img: './img/skills/woocommerce.svg',
  // },

  // {
  //   id: 7,
  //   title: 'Typescript',
  //   img: './img/skills/TypeScript.svg',
  // },
  {
    id: 8,
    title: "React",
    img: "./img/skills/react.svg",
  },

  {
    id: 9,
    title: "Styled-component",
    img: "./img/skills/styled-components.svg",
  },
  {
    id: 10,
    title: "Redux-Toolkit",
    img: "./img/skills/redux.svg",
  },
  {
    id: 11,
    title: "Git",
    img: "./img/skills/git.svg",
  },
  {
    id: 12,
    title: "Firebase",
    img: "./img/skills/firebase.svg",
  },
  // {
  //   id: 13,
  //   title: "Node",
  //   img: "./img/skills/node-js.svg",
  // },
  // {
  //   id: 14,
  //   title: "Php",
  //   img: "./img/skills/php.svg",
  // },
  {
    id: 15,
    title: "AWS",
    img: "./img/skills/aws.svg",
  },
  // {
  //   id: 16,
  //   title: "Google-Cloud",
  //   img: "./img/skills/cloud.svg",
  // },
  // {
  //   id: 17,
  //   title: "Azure",
  //   img: "./img/skills/azure-devops.svg",
  // },
  {
    id: 18,
    title: "Affilate-Marketer",
    img: "./img/skills/images.png",
  },
];

export const portfolio = [
  {
    id: 1,
    img: "./img/work/promomodel.png",
    // img: "./img/work/stock-photo-1081419642.jpg",
    title: "Body Aesthetics",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc2: "Body Aesthetics",
      },
      {
        icon: <FiUser />,
        title: "Github : ",
        desc1: "https://github.com/Vitarenewalaesthetics/Vitarenewalaesthetics",
        desc: "Vitarenewalaesthetics.git",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc2: "React",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc1: "https://vitarenewalaesthetics.com/",
        desc: "vitarenewal.com",
      },
    ],
  },

  {
    id: 2,
    img: "./img/work/v2 (6).jpeg",
    title: "E-Commerce",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc2: "E-Commerce",
      },
      {
        icon: <FiUser />,
        title: "Github : ",
        desc1: "https://github.com/Omaaj/Rimberio-Ecommerce.git",
        desc: "Rimberio-Ecommerce.git",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc2: "React & Firebase",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc1: "https://rimberios.com/",
        desc: "rimberios.com",
      },
    ],
  },

  {
    id: 3,
    img: "./img/work/v2 (2).jpeg",
    title: "Crypto-Investment-Plan",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc2: "Crypto-Investment-Plan",
      },
      {
        icon: <FiUser />,
        title: "Github : ",
        desc1: "https://github.com/Omaaj/Crypto-Investment-Plans.git",
        desc: "cryptofxmgmt.git",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc2: "Html, Css & Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc1: "https://cryptofxmgmt.rimberios.com/",
        desc: "cryptofxmgmt.com",
      },
    ],
  },

  {
    id: 4,
    img: "./img/work/v2 (3).jpeg",
    title: "Crypto-Investment-Plan-Dashboard",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc2: "Crypto-Dashboard",
      },
      {
        icon: <FiUser />,
        title: "Github : ",
        desc1: "https://github.com/Omaaj/Crypto-Investment-Plans-Dashboard.git",
        desc: "Crypto-Dashboard.git",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc2: "Html, Css & Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc1: "https://cryptofxmgmt-dashboard.rimberios.com/",
        desc: "cryptofxmgmt-dashboard.com",
      },
    ],
  },

  // {
  //   id: 5,
  //   img: "./img/work/v2 (5).jpeg",
  //   title: "Gary-Fryer-Timer",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Video",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Premium",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: "/img/color/purple.png",
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: "/img/color/red.png",
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: "/img/color/blueviolet.png",
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: "/img/color/blue.png",
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: "/img/color/goldenrod.png",
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: "/img/color/magenta.png",
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: "/img/color/yellowgreen.png",
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: "/img/color/orange.png",
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: "/img/color/green.png",
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: "/img/color/yellow.png",
    color: "hsl(42, 100%, 50%)",
  },
];
