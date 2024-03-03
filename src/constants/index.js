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
      title: "Day 1",
      company_name: "Storyboard Creation and Development",
      icon: acubase,
      iconBg: "#383E56",
      date: "1st March 2024",
      points: [
        "Creating a storyboard for the Hackathon project alongwith the theme.",
        "Discussing strengths , programming skills and experience , to distribute tasks between team members.",
        "Finalised theme was Biodiversity Conservation through Threat Identifier.",
      ],
    },
    {
      title: "Day 2",
      company_name: "Machine Learning Model and Game Asset Application and Development",
      icon: boysenb,
      iconBg: "#E6DEDD",
      date: "2nd March 2024",
      points: [
        "Started the web application development.",
        "Created and modified loading machine model for the Threat Identifier.",
        "Created the tiles , sprites , Game World in Tile Editor for the game. "
      ],
    },
    {
      title: "Day 3",
      company_name: "Game and Web Application Development",
      icon: justit,
      iconBg: "#383E56",
      date: "3rd March 2024",
      points: [
        "Following Tutorials to implement different React componenet in React.",
        "Final developments on sprite sheets and Game world.",
        "Programming for Collision Detection and Scene Transition.",
        "Organising the presentation.",
      ],
    },
    {
      title: "Final Submission",
      company_name: "Project Finalisation",
      icon: forage,
      iconBg: "#E6DEDD",
      date: "3rd March 2024",
      points: [
        "Project Submission"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The Hackathon was truly a wonderful experience, learning about the MARIA-1 , Stability.ai and further development in Generative AI. Learning from researchers , networking with industry leaders and fellow competitiors about their wide spread applications motivates me to utlise Machine Learning and thinking outside the box to help resolve immediate issues.",
      name: "Daniel Awolowo",
      designation: "Machine Learning Development",
      company: "MSc Software Engineering with Cloud Computing",
      image: projImg1,
    },
    {
      testimonial:
        "From learning on different updates and features to improve model performance, the possible applications and exciting future of Generative AI followed by an amazing panel discussing its ethical use, to pulling all-nighters for the project. My experience in my first ever Hackathon at GenAI Hackathon is something that has helped my develop life and technical skills that I will take forward in my career path",
      name: "Roinee Banerjee",
      designation: "Web Application Development",
      company: "BSc Computer Science",
      image: projImg2,
    },
    {
      testimonial:
        " The Hackathon with the Fireside Chat , pushed my programming skills and knowledge in JavaScript, game development and Generative AI. It was challenging to work through the some of the issues and understanding the mechanics of the game design , however with my team member's help we managed to create a demo for a product all three of us are proud of. ",
      name: "Yousof Abbas",
      designation: "Game Development",
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