import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
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
import meter2 from "../assets/img/meter2.svg.png"; // jupyter
import meter3 from "../assets/img/meter3.png"; // vs code
import meter4 from "../assets/img/meter4.png"; // tile
import meter5 from "../assets/img/meter5.jpg"; // python
import meter7 from "../assets/img/meter7.png"; // figma 
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

  
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
        title: "Environmentalists",
        icon: web,
      },
      {
        title: "Researchers",
        icon: backend,
      },
    {
      title: "Game Developers",
      icon: mobile,
    },
    {
      title: "Policy Makers",
      icon: web,
    },
    // {
    //   title: "Virtual Internships",
    //   icon: web,
    // },
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
      name: "Jupyter",
      icon: meter2,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "VS Code",
      icon: meter3,
    },
    {
      name: "Tile",
      icon: meter4,
    },
    {
      name: "Python",
      icon: meter5,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: meter7,
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
      name: "Daniel Awolowo",
      designation: "Machine Learning Development",
      company: "MSc Software Engineering with Cloud Computing",
      image: projImg1,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Daniel does.",
      name: "Roinee Banerjee",
      designation: "Design & Development",
      company: "BSc Computer Science",
      image: projImg2,
    },
    {
      testimonial:
        "After Daniel optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Yousof Abbas",
      designation: "Design & Development",
      company: "BSc Mechanical Engineering",
      image: projImg3,
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