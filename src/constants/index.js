import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    forage,
    boysenb,
    justit,
    acubase,
    project14,
    project18,
    project19,
    project16,
    project15,
    project20,
    project21,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
        title: "Junior Software Developer",
        icon: web,
      },
      {
        title: "Trainee Cyber Security Analyst",
        icon: backend,
      },
    {
      title: "Graduate Web Developer",
      icon: mobile,
    },
    {
      title: "Trainee Software Developer",
      icon: web,
    },
    {
      title: "Virtual Internships",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Software Developer",
      company_name: "Acubase Critical Care",
      icon: acubase,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Working with 4D, a component of C++ to a professional degree.",
        "Demonstrating strong provlem-solving skills.",
        "Utilising SQL commands, along with HL7 and OBDC.",
      ],
    },
    {
      title: "Graduate Web Developer",
      company_name: "BoysenB Software",
      icon: boysenb,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Mar 2023",
      points: [
        "Created cloud servers using Node to connect web applications with mobile applications.",
        "Created mobile applications for specific purposes and functions using React Native.",
      ],
    },
    {
      title: "Trainee Software Developer",
      company_name: "JustIT Bootcamp",
      icon: justit,
      iconBg: "#383E56",
      date: "Oct 2022 - Feb 2023",
      points: [
        "Training in both Front-End & Back-End Development.",
        "Learned a variety of programming languages, such as HTML, CSS, JavaScript, Python & MySQL.",
        "Created my own personal portfolio that I consistently work on and add to.",
        "Completed projects and tasks in a fashion identical to a work-based remote environment.",
        "Taught and trained myself on other programming languages, such as React, as well as how to implement APIs.",
        "Gathered information and knowledge about different utilities and applications.",
      ],
    },
    {
      title: "Virtual Internships",
      company_name: "Forage",
      icon: forage,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Accenture: “Coding: Development & Advanced Engineering”: Completed practical tasks in object-oriented programming, code refactoring, continuous integration and agile planning.",
        "Tata: “Data Visualization: Empowering Businesses with Effective Insight”: Completed practical task modules in framing business scenarios, choosing the right visuals, creating effective visuals and communication insights and analysis.",
        "Align Technology: “Software Engineering Programmer”: Completed practical task modules in project planning for a Front-End Prototype.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to meet a more harder worker than what we've seen, but Daniel has proven me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acubase",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Daniel does.",
      name: "Chris David",
      designation: "COO",
      company: "BoysenB Software",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Daniel optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "Tata Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "JavaScript Fighting Game",
      description:
        "Fighting game involving two characters that were created using only JavaScript and HTML. Game proceeds until one character loses health.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      ],
      image: project14,
      source_code_link: "https://fighting-game-1a-l5bhymwtg-kronium345.vercel.app/",
      github_code_link: "https://github.com/Kronium345/fighting-game-1a",
    },
    {
      name: "Internet Cafe",
      description:
        "An internet cafe website I created during my final year at university, where I worked on Front-End Web Development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: project18,
      source_code_link: "https://abbeville-cafe-bites-nn9a.vercel.app/",
      github_code_link: "https://github.com/Kronium345/abbeville--cafe--bites",
    },
    {
      name: "Superhero Database App",
      description:
        "A fun little project, built at the behest of a client who wanted their child to have something to look at.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: project19,
      source_code_link: "https://superhero-database-kjigsg4je-kronium345.vercel.app/",
      github_code_link: "https://github.com/Kronium345/superhero-database-app",
    },
    {
        name: "Article Summariser",
        description:
          "An article summarizer application using OpenAI's GPT model",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
        ],
        image: project16,
        source_code_link: "https://64595add6b85f22dc8dd9556--stellar-sprite-99a993.netlify.app/",
        github_code_link: "https://github.com/Kronium345/summariser/tree/main",
      },
      {
        name: "Gym and Fitness App",
        description:
          "A super-cool gym application, designed to showcase different exercises and videos, all with a person's search.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
        ],
        image: project15,
        source_code_link: "https://danielawolowo-gym.netlify.app/",
        github_code_link: "https://github.com/Kronium345/Daniel-s-Fitness-App"
      },
      {
        name: "NFT Marketplace Mobile Application",
        description:
          "A fun and exciting mobile NFT marketplace application created using React Native.",
        tags: [
          {
            name: "mobile",
            color: "blue-text-gradient",
          },
        ],
        image: project20,
        source_code_link: "https://cool-thunder-2632.on.fleek.co/",
        github_code_link: "https://github.com/Kronium345/showcase",
      },
      {
        name: "Car Showcase Application",
        description:
          "A cool and exciting application that was created using React, Next and TypeScript.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
        ],
        image: project21,
        source_code_link: "https://car-showcase-phi-three.vercel.app/",
        github_code_link: "https://github.com/Kronium345/car_showcase",
      },



  ];
  
  export { services, technologies, experiences, testimonials, projects };