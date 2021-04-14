import { CV } from "@app-types";

const cv: CV = {
  name: "Krisztian Korosi",
  nick: "Krisz",
  role: "Full-stack developer",
  links: {
    github: "https://github.com/Koeroesi86",
    website: "https://chris.koro.si",
  },
  desire:
    "My desire is to always improve myself and attain new skills, to keep up with the latest technologies.",
  skills: [
    {
      title: "Main skills (3 or more years each)",
      list: [
        "IntelliJ",
        "SQL",
        "XHTML1.0-HTML5",
        "CSS2-3",
        "SCSS",
        "JavaScript",
        "AngularJS",
        "jQuery",
        "Photoshop",
        "Illustrator",
        "Linux",
        "Windows",
        "MacOS",
        "Symfony",
        "Laravel",
        "Wordpress",
        "Apache",
        "PHP",
        "Git",
        "ECMA Script",
        "NodeJS",
        "ReactJS",
        "AWS (ex. EC2, ECR, ECS, RDS, IAM, S3)",
        "Rest APIs",
        "Docker",
      ],
    },
    {
      title: "Also focused on (2 or more years each)",
      list: [
        "ElasticSearch",
        "Typescript",
        "Nginx",
        "APIs (ex. Facebook, Twitter, Google)",
        "InDesign",
        "OAuth",
        "WebSockets",
        "Sublime",
        "VisualStudio",
        "Jenkins",
        "Serverless",
      ],
    },
  ],
  experiences: [
    {
      title: "Codra Kft. (Budapest H-1119)",
      from: "2009 Aug.",
      to: "2011 Dec.",
      role: "Webdesign, and Development",
      details: {
        link:
          "https://web.archive.org/web/20110227030706/https://codra.hu/webaruhaz/",
        company: "Codra",
        description:
          "was a distributor company for over 50 manufacturer (12 of them exclusively). For some time I’ve been a product manager too.",
      },
      responsibilities: [
        { text: "Site maintenance, Editing newsletters" },
        {
          text:
            "Design (Photoshop, Illustrator), Development (PHP, MySQL, JavaScript, HTML, CSS)",
        },
        { text: "Project done: webshop (osCommerce), blog" },
      ],
      achievements: ["Making the whole company’s brand (web, and printed)"],
    },
  ],
  studies: [
    {
      title: "Kalmár László IT secondary School (Budapest H-1027)",
      from: "",
      to: "2007",
      details: [
        {
          title: "Matura",
          points: ["Professional programmer degree"],
        },
      ],
    },
    {
      title: "SZIE – Ybl Miklós Faculty of Building (Budapest H-1146)",
      from: "2007",
      to: "2011",
      details: [
        {
          title: "Bsc education",
          points: ["Architect engineer"],
        },
        {
          title: "Achievements",
          points: ["Additional skills earned: AutoCAD, ArchiCAD"],
        },
      ],
    },
  ],
  interests: [
    "Photography",
    "Arts (drawing, statuary, architecture)",
    "Music (even playing on guitar, harp, drums)",
  ],
  favorites: [
    {
      url: "http://magyartop.hu/",
      name: "magyartop.hu",
      description: "(Own toplist for Hungarian websites)",
    },
    {
      url: "https://chris.koro.si/",
      name: "chris.koro.si",
      description: "(Personal website)",
    },
  ],
  information: [
    "Coming from an agile background, I have around 11 years’ experience working with",
    "Javascript. I have worked in TDD, BDD, Scrum and Kanban environments too",
  ],
};

export default cv;
