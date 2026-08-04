// TODO: Check for fix line breaks instead of \n newline

const { env } = require("./env");

/** @type import("./src/types").CV */ 
module.exports = {
  "name": "Krisztián Kőrösi",
  "nick": "Krisz",
  "role": "Full-stack developer",
  "links": {
    "github": "https://github.com/Koeroesi86",
    "website": "https://chris.koro.si",
    "phone": env.PII_PHONE,
  },
  "desire": "Experienced full-stack professional with 17+ years in JavaScript ecosystems. Seeking a Lead Developer role where I can leverage deep expertise in modern React/NextJS and Node.js/NestJS architecture to build scalable, high-performance applications. I thrive in collaborative environments that prioritize clean code, TDD/BDD practices, and continuous technical excellence.",
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
        "\nAngularJS/Angular 2+",
      ]
    }
  ],
  "experiences": [
    {
      "title": "Fizetésipont Kft. (Hungary 1026)",
      "from": "2026 Jan.",
      "to": "now",
      "role": "Senior backend developer",
      "details": {
        // "link": "https://fizetesipont.hu",
        "company": "Fizetésipont",
        "description": "is a payment service provider company",
      },
      "responsibilities": [
        {
          "text": "Implementing and structuring greenfield payment system and its APIs",
        },
        {
          "text": "Claude AI, NestJS, React, NextJS, Docker, Postgres, Github Actions",
        }
      ],
      "achievements": [
        "Skills earned: AI workflows and optimizations, Payment systems,\nAWS Cryptography, MQTT, HSM",
        "Implemented a secure greenfield payment processing service including backoffice\ndashboard, compliance, and transaction management.",
      ],
    },
    {
      "title": "Spreadmonitor (Hungary 1118)",
      "from": "2024 Sep.",
      "to": "2025 Nov.",
      "role": "Full stack software developer",
      "details": {
        // "link": "https://spreadmonitor.com",
        "company": "Spreadmonitor",
        "description": "is an IT outsourcing company for energy providers",
      },
      "responsibilities": [
        {
          "text": "Made the project more typed and increased testability",
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
          "text": "Angular, Node, NestJS, Routing Controller, Docker, Postgres, Github Actions",
        }
      ],
      "achievements": [
        "Skills earned: Routing controller",
        "Implemented a more robust and type-safe platform for the existing energy \nmonitoring application, enhancing maintainability and scalability.",],
    },
    {
      "title": "Fizz.hu (Hungary 1132)",
      "from": "2023 Jun.",
      "to": "2024 Aug.",
      "role": "Full stack software developer",
      "details": {
        // "link": "https://fizz.hu",
        "company": "Fizz",
        "description": "is an ecommerce marketplace",
      },
      "responsibilities": [
        {
          "text": "Prepared site to go live and mentored/lead developer team",
        },
        {
          "text": "Projects done: ",
          "links": [
            {
              "text": "fizz.hu",
              "url": "https://fizz.hu"
            }
          ]
        },
        {
          "text": "React, Node, NestJS, NextJS, Docker, Postgres, MongoDB, Github Actions",
        }
      ],
      "achievements": [
        "Skills earned: NextJS, NestJS",
        "Contributed to the full lifecycle development of an e-commerce marketplace, \nenhanced maintainability and scalability.",
        "Imroved scalability from around 200 to over 4 million users."
      ],
    },
    {
      "title": "Shares S.A.S (remote)",
      "from": "2022 Jan.",
      "to": "2023 Jun.",
      "role": "Full stack software engineer",
      "details": {
        // "link": "https://shares.io",
        "company": "Shares",
        "description": "is an investment app company",
      },
      "responsibilities": [
        {
          "text": "Maintaining and improving backoffice web application",
        },
        {
          "text": "React, Node, Docker, Postres, Github Actions",
        }
      ],
      "achievements": [
        "Re-engineered the backoffice web application using React and Node.js, improving \nload times by data fetching patterns and adopting component-driven architecture.",
        "Migrated core services to a highly typed approach, reducing reliance \non extensive manual QA testing through improved code safety."
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
          "text": "Mentoring and helping team to organize",
        },
        {
          "text": "React, SCSS, Docker, Jenkins",
        }
      ],
      "achievements": ["Streamlined some of the client release processes"],
    },
    {
      "title": "Deko (London EC4A 3BF)",
      "from": "2020 Mar.",
      "to": "2021 May.",
      "role": "Senior Developer",
      "details": {
        // "link": "https://www.dekopay.com/",
        "company": "Deko",
        "description": "is a point of sales finance company"
      },
      "responsibilities": [
        {
          "text": "Creating multi lender provider platform called Deko Plugin"
        },
        {
          "text": "Mentoring team and clarifying business expectations"
        },
        {
          "text": "React, NodeJS, Docker, PostgreSQL, AWS, Jenkins, Datadog"
        }
      ],
      "achievements": [
        "Skills earned: Styled Components",
        "Developed and maintained the complex multi-lender architecture using ReactJS,\nensuring modularity and independent deployment for different financial providers.",
      ]
    },
    {
      "title": "Jefferies International (London EC2N 4JL)",
      "from": "2019 May.",
      "to": "2019 Oct.",
      "role": "Consultant, Lead Developer",
      "details": {
        // "link": "https://www.jefferies.com",
        "company": "Jefferies",
        "description": "is an investment bank."
      },
      "responsibilities": [
        {
          "text": "Development of new and existing projects"
        },
        {
          "text": "Mentoring team and clarifying business expectations"
        },
        {
          "text": "React, React Hooks, CI/CD, Intellij TeamCity"
        }
      ],
      "achievements": [
        "Skills earned: OpenFin",
        "Prototyped and implemented a new trading platforms using ReactJS and OpenFin, \nenhancing the user experience for financial traders.",
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
          "text": "Development of new customised product editor"
        },
        {
          "text": "HTML, JS, SCSS, ES, React, Redux, NodeJS, S3"
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
        "Skills earned: Serverless, SQS, SNS, GraphQL, Auth0",
        "Implemented serverless workflows leveraging AWS S3 (storage) and SQS/SNS for asynchronous photobook processing and notifications after order placement."
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
          "text": "Frontend development of their existing products"
        },
        {
          "text": "HTML, JS, SCSS, ES, React, Electron"
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
        "Skills earned: Electron, Java, Kotlin",
        "Successfully migrated/modernized client-facing financial applications, replacing \nolder technologies with modern ReactJS.",
      ]
    },
    {
      "title": "MullenLowe Group (London EC1Y 1AT)",
      "from": "2016 Jun.",
      "to": "2017 Mar.",
      "role": "Senior Full-Stack developer",
      "details": {
        // "link": "https://www.mullenlowegroup.com",
        "company": "MLG",
        "description": "is the bound between many MullenLowe agencies around the world. They are maintaining (mainly) all the other agencies daily and operational needs."
      },
      "responsibilities": [
        {
          "text": "Development of many sites of the company, and some Devops"
        },
        {
          "text": "UI (HTML, JS, SCSS, TS, ES) and backend (Node JS, PHP, MySQL), AWS"
        },
        {
          "text": "Projects done: ",
          "links": [
            {
              "text": "Ink (Wordpress, ElasticSearch)",
              "url": "https://ink.mullenlowegroup.com"
            },
            {
              "text": "\nHoliday tracker (Angular1, Symfony2)",
              "url": "https://www.mullenlowegroup.com"
            },
            {
              "text": "Kudos (Angular2, Symfony3)",
              "url": "https://kudos.mullenlowegroup.com"
            },
            // {
            //   "text": "\nVote456 (Symfony)",
            //   "url": "https://www.mullenlowegroup.com"
            // }
          ]
        }
      ],
      "achievements": [
        "Skills earned: Docker, AWS, Typescript, ES 3-6, Node JS, Haproxy,\nAngular 1-2, Symfony 3, Nginx",
        "Successfully led the development and deployment of multiple internal tools and \nweb applications, migration to cloud.",
      ]
    },
    {
      "title": "Further experiences",
      "from": "2009 Aug.",
      "to": "2016 Jun.",
      "details": {
        "link": "https://www.linkedin.com/in/krisztiankorosi/",
        "company": "LinkedIn",
        "description": " contains all prior experiences, including: Apex IT Services, Hewlett-Packard,\nSystemax Business Services, Pentatrade, Codra"
      },
      "responsibilities": [
        {
          "text": "Frontend and backend development, DevOps, mentoring"
        },
        {
          "text": "HTML, JS, SCSS, ES, PHP, MySQL"
        }
      ],
      "achievements": []
    }
  ],
  "studies": [
    {
      "title": "Kalmár László IT secondary School (Budapest H-1027)",
      "from": "",
      "to": "2007",
      "details": [
        {
          "title": "Matura",
          "points": ["Professional programmer degree"]
        }
      ]
    },
    {
      "title": "SZIE – Ybl Miklós Faculty of Building (Budapest H-1146)",
      "from": "2007",
      "to": "2011",
      "details": [
        {
          "title": "Bsc education",
          "points": ["Architect engineer"]
        },
        {
          "title": "Achievements",
          "points": ["Additional skills earned: AutoCAD, ArchiCAD"]
        }
      ]
    }
  ],
  "interests": [
    "Photography",
    "Arts (drawing, statuary, architecture)",
    "Music (even playing on guitar, harp, drums)"
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
      "description": "(ReactJS FX settlement app with websockets)"
    },
    {
      "url": "https://xcams-models.com/",
      "name": "xcams-models.com",
      "description": "(Symfony site with 100000+ users)"
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
    "Easily getting along well with people and have excellent communication skills, I’ve been a main point of contact in Hungary for ACD Systems, Cyberlink, Pinnaccle and AVID",
  ]
};
