import react from "../assets/svgtech/react.svg";
import firebase from "../assets/svgtech/firebase.svg";
import javascr from "../assets/svgtech/javascript.svg";
import mongo from "../assets/svgtech/mongo.svg";
import tailwind from "../assets/svgtech/tailwind.svg";
import mobile from "../assets/svgtech/mobile.svg";
import node from "../assets/svgtech/node.svg";
import frame from "../assets/svgtech/framer.svg";
import java from "../assets/svgtech/java.svg";
import vite from "../assets/svgtech/vit.svg";
import dine from "../assets/dine.png"
const projects = [
  {
    id: 1,
    name: "ED Mobile Application",
    des: [
      { text: "Built mobile app with ", color: "rgba(255, 255, 255, 0.4)" },
      { text: "React Native", color: "#FBD19C" },
      {
        text: ", integrating smooth data flow via ",
        color: "rgba(255, 255, 255, 0.4)",
      },
      { text: "RESTful APIs", color: "#FBD19C" },
      {
        text: " using Node.js and Express.",
        color: "rgba(255, 255, 255, 0.4)",
      },
    ],
    link: "https://gurudevedu.org/app/",
  },
  {
    id: 2,
    name: "DineR Dashboard",
    des: [
      {
        text: "Implemented robust error handling and used ",
        color: "rgba(255, 255, 255, 0.4)",
      },
      { text: "MongoDB", color: "#FBD19C" },
      {
        text: "'s aggregation pipeline for insights, plus integrated ",
        color: "rgba(255, 255, 255, 0.4)",
      },
      { text: "AI", color: "#FBD19C" },
      {
        text: " to scan and store menu items efficiently.",
        color: "rgba(255, 255, 255, 0.4)",
      },
    ],
    link: "https://app.dineqr.io/",
  },
  {
    id: 3,
    name: "Matbook Service Catalog",
    des: [
      {
        text: "Revamped MatBook’s website to showcase ",
        color: "rgba(255, 255, 255, 0.4)",
      },
      { text: "materials, products, projects", color: "#FBD19C" },
      {
        text: ", and tools using React and Tailwind CSS.",
        color: "rgba(255, 255, 255, 0.4)",
      },
    ],
    link: "https://thematbook.com/",
  },
  {
    id: 4,
    name: "Portfolio Website",
    des: [
      { text: "I developed this ", color: "rgba(255, 255, 255, 0.4)" },
      { text: "portfolio", color: "#FBD19C" },
      {
        text: " to showcase the work of Sakshi Vaidya",
        color: "rgba(255, 255, 255, 0.4)",
      },

      { text: ", a talented ", color: "rgba(255, 255, 255, 0.4)" },
      { text: "UI/UX designer", color: "#FBD19C" },
      {
        text:
          ", which delivers a visually engaging user experience through intuitive design.",
        color: "rgba(255, 255, 255, 0.4)",
      },
    ],
    link: "https://sakshivaidyaa.vercel.app/",
  },
];
const projectDetails = [
  {
    id: 1,
    name:"ED Mobile Application",
    highlightedTerms: ["MongoDB", "Razorpay","Firebase","RESTful","Node.js","Express"],
    TechStack: [
      {
        name: "React Native",
        desc: "Mobile framework",
        link: "https://reactnative.dev/",
        logo: react, // Replace with your import or image path
      },
      {
        name: "MongoDB",
        desc: "NoSQL database",
        link: "https://www.mongodb.com/docs/",
        logo: mongo, // Replace with your import or image path
      },
      {
        name: "Firebase",
        desc: "Backend platform",
        link: "https://firebase.google.com/docs",
        logo: firebase, // Replace with your import or image path
      },
      {
        name: "Node.js",
        desc: "JavaScript runtime",
        link: "https://nodejs.org/en/docs/",
        logo: node, // Replace with your import or image path
      },
      {
        name: "Express.js",
        desc: "Web framework",
        link: "https://expressjs.com/en/4x/api.html",
        logo: javascr, // Replace with your import or image path
      },
    ],
    problem:
      "The earlier web-based platform built with PHP Laravel faced multiple operational bottlenecks:",
    list: [
      "Disorganized structure, making it hard to showcase services and available courses/tests.",
      "Users faced issues receiving OTPs on time, disrupting login and registration flows.",
      "low delivery of test results and study materials.",
      "Frequent disruptions during peak exam seasons.",
      "No dedicated mobile solution, resulting in low engagement.",
    ],
    overview: mobile,
    solutions: [
      "Switched to MongoDB for faster test result processing.",
      " Integrated Razorpay to eliminate payment failures, even during high traffic.",
      "Implemented load balancing to support concurrent users seamlessly.",
      "Added Firebase to send instant updates and alerts.",
      "RESTful APIs with Node.js and Express for smooth data flow.",
      "Enhanced OTP Service for better security.",
      "React Native ensured a seamless and accessible platform for aspirants on the go.",
    ],
    link:"https://gurudevedu.org/app/"
  },
  {
    id: 2,
    name:"DineQR Dashboard",
    TechStack: [
      {
        name: "Vite",
        desc: "Build tool",
        link: "https://vitejs.dev/",
        logo: vite, // Replace with your import or image path
      },
      {
        name: "React",
        desc: "Frontend framework",
        link: "https://react.dev/",
        logo: react, // Replace with your import or image path
      },
      {
        name: "Tailwind CSS",
        desc: "CSS framework",
        link: "https://tailwindcss.com/docs",
        logo: tailwind, // Replace with your import or image path
      },
      {
        name: "MongoDB",
        desc: "NoSQL database",
        link: "https://www.mongodb.com/docs/",
        logo: mongo, // Replace with your import or image path
      },
     
      {
        name: "Node.js",
        desc: "JavaScript runtime",
        link: "https://nodejs.org/en/docs/",
        logo: node, // Replace with your import or image path
      },
      {
        name: "Express.js",
        desc: "Web framework",
        link: "https://expressjs.com/en/4x/api.html",
        logo: javascr, // Replace with your import or image path
      },
      {
        name: "Framer Motion",
        desc: "Animation library",
        link: "https://www.framer.com/motion/",
        logo: frame, // Replace with your import or image path
      },

      
    ],
    highlightedTerms: ["Vite", "React", "Node.js"," MongoDB's aggregation","aggregation","AI"],
    problem:
      "The client faced load times of 15-30 seconds from login to the main page, with slow API responses. Additionally, there were numerous responsiveness and design issues, such as missing data across pages and multiple UI inconsistencies. The client also required an insights page for better data visibility.",
    list: [],
    overview: dine,
    solutions: [
      "I built the entire application from scratch using Vite and React, optimizing UI and ensuring responsiveness.",
      "For the backend, I developed it with Node.js and MongoDB, achieving login times of under one second. ",
      "I implemented error handling and utilized MongoDB's aggregation pipeline for the insights page",
      "Additionally, I integrated an AI feature to scan and extract menu items for storage in MongoDB."
    ],
    link:"https://app.dineqr.io/"
  },
  {
    id: 3,
    name:"Matbook Catalog Website",
    highlightedTerms: ["Tailwind", "React",],
    TechStack: [
      {
        name: "React",
        desc: "Frontend framework",
        link: "https://react.dev/",
        logo: react, // Replace with your import or image path
      },
      {
        name: "Tailwind CSS",
        desc: "CSS framework",
        link: "https://tailwindcss.com/docs",
        logo: tailwind, // Replace with your import or image path
      },
      {
        name: "Framer Motion",
        desc: "Animation library",
        link: "https://www.framer.com/motion/",
        logo: frame, // Replace with your import or image path
      },

      {
        name: "Java APIs",
        desc: "Backend APIs",
        link: "https://docs.oracle.com/en/java/", 
        logo: java, 
      },
    ],
    problem:
      "The client needed a revamped website to better showcase their materials, products, completed projects, and proprietary tools. The previous site suffered from CSS issues, slow load times, and missing icons and functionality, impacting user engagement.",
    list: [],
    overview: "https://drive.google.com/file/d/1ld56Bc0TDAT4m0igO4kMrFas7C2bPWLJ/view?usp=drive_link",
    solutions: [
      "To address the client's needs, I developed a revamped website that effectively showcases MatBook’s materials, products, completed projects, and proprietary tools.",
      " Utilizing React and Tailwind CSS, I ensured fast load times and resolved previous CSS issues. The site now features improved icons and enhanced functionality, leading to a more engaging user experience.",
      " Additionally, I integrated Java APIs to streamline backend processes, resulting in a robust platform that meets user expectations and boosts engagement.",
    ],
    link:"https://thematbook.com/"
  },
];

export { projects, projectDetails };
