// TODO: Check for fix line breaks instead of \n newline

const { env } = require("./env");

/** @type import("./src/types").CV */ 
module.exports = {
  "name": "Krisztián Kőrösi",
  "nick": "Krisz",
  "role": "Lead Full-Stack Software Engineer",
  "links": {
    "github": "https://github.com/Koeroesi86",
    "website": "https://chris.koro.si",
    "phone": env.PII_PHONE,
  },
  "desire": "Lead / Senior Full-Stack Engineer with 17+ years of experience architecting, scaling, and delivering high-availability systems across FinTech, E-commerce, and Payment Processing. Expert in modern React/Next.js and Node.js/NestJS architectures, cloud infrastructure, and AI workflow integration. Proven track record of guiding cross-functional teams, driving clean code standards (TDD/BDD), and translating complex business requirements into high-performance software.",
  "skills": [
    {
      "title": "Core Technologies (main focus)",
      "list": [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "Node.js/NestJS",
        "JavaScript (ES6+)",
        "RESTful APIs",
        "GraphQL",
        "State Management (Redux, Context)",
      ]
    },
    {
      "title": "Backend & Database",
      "list": [
        "PostgreSQL (Prisma ORM)",
        "MongoDB",
        "OAuth/Authentication",
        "WebSockets",
        "Docker",
        "AWS Services (EC2, S3, RDS, IAM, Lambda)",
      ]
    },
    {
      "title": "Tools & Methodologies",
      "list": [
        "CI/CD (Github Actions, Jenkins)",
        "Testing (TDD, BDD)",
        "SCSS/CSS Modules",
        "Git",
        "AngularJS/Angular 2+",
      ]
    }
  ],
  "experiences": [
    {
      "title": "Fizetésipont Kft. (Hungary 1026)",
      "from": "2026 Jan.",
      "to": "now",
      "role": "Senior Backend Developer & Architect",
      "details": {
        // "link": "https://fizetesipont.hu",
        "company": "Fizetésipont",
        "description": "is a payment service provider company",
      },
      "responsibilities": [
        {
          "text": "Architecting a greenfield payment processing service and core RESTful APIs.",
        },
        {
          "text": "Establishing security compliance (HSM, AWS Cryptography, MQTT) and building \nbackoffice management tools.",
        },
        {
          "text": "Integrating advanced AI workflows (Claude AI) to optimize engineering development \nspeed and system reliability.",
        },
        {
          "text": "Stack: NestJS, React, NextJS, Docker, PostgreSQL, GitHub Actions, AWS, MQTT, HSM",
        }
      ],
      "achievements": [
        "Architected and deployed a highly secure greenfield payment engine with integrated transaction management and automated compliance controls.",
        "Introduced AI-assisted development workflows to accelerate feature delivery and \ntest coverage."
      ],
    },
    {
      "title": "Spreadmonitor (Hungary 1118)",
      "from": "2024 Sep.",
      "to": "2025 Nov.",
      "role": "Full Stack Software Developer",
      "details": {
        // "link": "https://spreadmonitor.com",
        "company": "Spreadmonitor",
        "description": "is an IT outsourcing company for energy providers",
      },
      "responsibilities": [
        {
          "text": "Refactored key platform components to strictly typed architectures to increase \nsystem stability and developer throughput.",
        },
        {
          "text": "Projects done: ",
          "links": [
            {
              "text": "Apocam",
              "url": "https://app.apocam.io"
            }
          ]
        },
        {
          "text": "Stack: Angular, NestJS, Routing Controller, Docker, PostgreSQL, GitHub Actions",
        }
      ],
      "achievements": [
        "Migrated core services to a strictly typed architecture, decreasing manual QA."
      ],
    },
    {
      "title": "Fizz.hu (Hungary 1132)",
      "from": "2023 Jun.",
      "to": "2024 Aug.",
      "role": "Lead / Full Stack Software Developer",
      "details": {
        // "link": "https://fizz.hu",
        "company": "Fizz",
        "description": "is an ecommerce marketplace",
      },
      "responsibilities": [
        {
          "text": "Mentored and led engineering team through full lifecycle development to bring \nthe e-commerce marketplace live.",
        },
        // {
        //   "text": "Projects done: fizz.hu",
        // },
        {
          "text": "Stack: React, NestJS, Next.js, Docker, PostgreSQL, MongoDB, GitHub Actions",
        }
      ],
      "achievements": [
        "Scaled application architecture to support massive growth \nfrom ~200 users to over 4,000,000 users.",
        "Established architectural patterns in Next.js and NestJS that improved release \nreliability and reduced production incidents."
      ],
    },
    {
      "title": "Shares S.A.S (remote)",
      "from": "2022 Jan.",
      "to": "2023 Jun.",
      "role": "Full Stack Software Engineer",
      "details": {
        // "link": "https://shares.io",
        "company": "Shares",
        "description": "is an investment app company",
      },
      "responsibilities": [
        {
          "text": "Engineered and optimized core backoffice web applications \npowering critical internal operations.",
        },
        {
          "text": "Stack: React, Node.js, Docker, PostgreSQL, GitHub Actions",
        }
      ],
      "achievements": [
        "Re-engineered the web application using React and Node.js, significantly reducing \nload times via optimized data fetching and component-driven architecture.",
      ],
    },
    {
      "title": "EPAM (Hungary 1083)",
      "from": "2021 Jun.",
      "to": "2022 Jan.",
      "role": "Senior Software Engineer",
      "details": {
        // "link": "https://www.epam.com",
        "company": "EPAM",
        "description": "is an IT outsourcing company",
      },
      "responsibilities": [
        {
          "text": "Mentored engineers and assisted leadership in organizing sprint objectives and \nrelease schedules.",
        },
        {
          "text": "Stack: React, SCSS, Docker, Jenkins",
        }
      ],
      "achievements": [
        "Streamlined client deployment processes by introducing automated \nCI/CD release controls."
      ],
    },
    {
      "title": "Deko (London EC4A 3BF)",
      "from": "2020 Mar.",
      "to": "2021 May",
      "role": "Senior / Lead Developer",
      "details": {
        // "link": "https://www.dekopay.com/",
        "company": "Deko",
        "description": "is a point of sales finance company"
      },
      "responsibilities": [
        {
          "text": "Architected multi-lender provider integration platform for retail partners."
        },
        {
          "text": "Mentored engineering team and aligned technical deliverables."
        },
        {
          "text": "Stack: React, Node.js, Docker, PostgreSQL, AWS, Jenkins, Datadog"
        }
      ],
      "achievements": [
        "Designed complex multi-lender platform using modular ReactJS architecture, \nenabling independent deployments across diverse financial integration providers."
      ]
    },
    {
      "title": "Jefferies International (London EC2N 4JL)",
      "from": "2019 May",
      "to": "2019 Oct.",
      "role": "Consultant, Lead Developer",
      "details": {
        // "link": "https://www.jefferies.com",
        "company": "Jefferies",
        "description": "is an investment bank."
      },
      "responsibilities": [
        {
          "text": "Led technical strategy and delivery for financial trading platforms."
        },
        {
          "text": "Guiding and mentoring developers."
        },
        {
          "text": "Stack: React, React Hooks, OpenFin, CI/CD, TeamCity"
        }
      ],
      "achievements": [
        "Prototyped and delivered new high-frequency trading platform interfaces using \nReactJS and OpenFin, greatly enhancing workflow UX for financial traders."
      ]
    },
    {
      "title": "Photobox (London EC1R 5EN)",
      "from": "2018 Jul.",
      "to": "2019 Apr.",
      "role": "Full Stack Developer",
      "details": {
        // "link": "https://www.photobox.co.uk/",
        "company": "Photobox",
        "description": "is a digital platform to shop and create personalised print products."
      },
      "responsibilities": [
        {
          "text": "Developed customer-facing customized product editor."
        },
        {
          "text": "Stack: React, Redux, Node.js, GraphQL, AWS S3, SQS, SNS, Auth0, Serverless"
        },
        {
          "text": "Projects done: ",
          "links": [
            {
              "text": "Editor",
              "url": "https://www.photobox.co.uk/range/editor"
            }
          ]
        }
      ],
      "achievements": [
        "Architected serverless asynchronous workflows leveraging AWS S3, SQS, and SNS \nfor background photobook processing and automated notifications."
      ]
    },
    {
      "title": "Caplin Systems (London EC3A 7BR)",
      "from": "2017 Jun.",
      "to": "2018 Jul.",
      "role": "Software Engineer",
      "details": {
        // "link": "https://www.caplin.com",
        "company": "Caplin Systems",
        "description": "is a financial software development company. Most of their focus is on implementing online exchange applications for their customers"
      },
      "responsibilities": [
        {
          "text": "Engineered high-performance web UI components for financial exchanges."
        },
        {
          "text": "Stack: React, Electron, JavaScript (ES6+), SCSS, Java, Kotlin"
        },
        {
          "text": "Projects done: ",
          "links": [
            {
              "text": "FX Sales",
              "url": "https://www.caplin.com/#SolutionsMenu"
            },
            {
              "text": "FX Professional",
              "url": "https://www.caplin.com/#SolutionsMenu"
            },
            {
              "text": "FX Mobile",
              "url": "https://www.caplin.com/#SolutionsMenu"
            }
          ]
        }
      ],
      "achievements": [
        "Modernized legacy financial client applications by successfully migrating core \nplatforms to modular ReactJS desktop and web apps."
      ]
    },
    {
      "title": "MullenLowe Group (London EC1Y 1AT)",
      "from": "2016 Jun.",
      "to": "2017 Mar.",
      "role": "Senior Full-Stack Developer",
      "details": {
        // "link": "https://www.mullenlowegroup.com",
        "company": "MLG",
        "description": "is the bound between many MullenLowe agencies around the world. They are maintaining (mainly) all the other agencies daily and operational needs."
      },
      "responsibilities": [
        {
          "text": "Led development of internal tools, web apps, and cloud migrations."
        },
        {
          "text": "Stack: Node.js, TypeScript, Angular, PHP, Symfony, AWS, Docker, HAProxy, Nginx"
        },
        {
          "text": "Projects done: ",
          "links": [
            {
              "text": "Ink (Wordpress, ElasticSearch)",
              "url": "https://ink.mullenlowegroup.com"
            },
            {
              "text": "Holiday tracker (Angular1, Symfony2)",
              "url": "https://www.mullenlowegroup.com"
            },
            {
              "text": "\nKudos (Angular2, Symfony3)",
              "url": "https://kudos.mullenlowegroup.com"
            }
          ]
        }
      ],
      "achievements": [
        "Led successful creation and AWS cloud migration of multiple agency-wide platforms."
      ]
    },
    {
      "title": "Further experiences",
      "from": "2009 Aug.",
      "to": "2016 Jun.",
      "details": {
        "link": "https://www.linkedin.com/in/krisztiankorosi/",
        "company": "LinkedIn",
        "description": " contains all prior experiences, including: Apex IT Services, Hewlett-Packard, \nSystemax Business Services, Pentatrade, Codra"
      },
      "responsibilities": [
        {
          "text": "Full-stack web engineering, DevOps, and developer mentoring across various digital platforms."
        },
        {
          "text": "Stack: JavaScript, PHP, MySQL, SCSS, HTML5"
        }
      ],
      "achievements": []
    }
  ],
  "studies": [
    {
      "title": "Kalmár László IT Secondary School (Budapest H-1027)",
      "from": "",
      "to": "2007",
      "details": [
        {
          "title": "Matura",
          "points": ["Professional Programmer Degree"]
        }
      ]
    },
    {
      "title": "SZIE – Ybl Miklós Faculty of Architecture (Budapest H-1146)",
      "from": "2007",
      "to": "2011",
      "details": [
        {
          "title": "BSc Education",
          "points": ["Architect Engineer"]
        },
        {
          "title": "Achievements",
          "points": ["Additional technical skills: AutoCAD, ArchiCAD"]
        }
      ]
    }
  ],
  "interests": [
    "Photography",
    "Arts (drawing, sculpture, architecture)",
    "Music (guitar, harp, drums)"
  ],
  "favorites": [
    {
      "url": "https://seneca-control.com/en/",
      "name": "seneca-control.com",
      "description": "(controlling software)"
    },
    {
      "url": "http://chris.koro.si/",
      "name": "chris.koro.si",
      "description": "(Personal website)"
    },
    {
      "url": "https://www.caplin.com/solutions/post-trade",
      "name": "FXCorporate",
      "description": "(ReactJS FX settlement app with WebSockets)"
    },
    {
      "url": "https://xcams-models.com/",
      "name": "xcams-models.com",
      "description": "(Symfony site with 100,000+ active users)"
    },
    {
      "url": "https://kudos.mullenlowegroup.com/",
      "name": "Kudos",
      "description": "(Symfony site to upload award events and results)"
    }
  ],
  "information": [
    "Over 17 years of experience building scalable, mission-critical systems across payment processing, e-commerce, and financial services using modern JavaScript stacks (React/NextJS + Node/NestJS).",
    "A seasoned mentor and lead developer who excels at transforming raw requirements into robust technical designs. Experienced in leading cross-functional teams and streamlining complex release processes.",
    "Expertise in adopting best practices (TDD, BDD) within Agile environments to enhance system resilience and maintainability throughout the application lifecycle.",
    "Excellent communication and stakeholder management skills; acted as key technical liaison in Hungary for ACD Systems, CyberLink, Pinnacle, and AVID."
  ]
};