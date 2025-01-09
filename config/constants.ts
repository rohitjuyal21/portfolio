import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiRedux,
  SiShadcnui,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiLinkedin,
  SiPeerlist,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const SOCIAL_LINKS = [
  {
    name: "Peerlist",
    url: "https://peerlist.io/rohitjuyal",
    icon: "/socials/peerlist.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rohitjuyal2003",
    icon: "/socials/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/rohitjuyal21",
    icon: "/socials/github.png",
  },
];

export const WORK_EXPERIENCE = [
  {
    company: "Kinlotech IT solution",
    role: "Frontend Developer",
    description:
      "Worked on multiple projects, maintaining the frontend and ensuring they look visually appealing. Utilized technologies such as Next.js, React, TypeScript, Tailwind CSS, Shadcn, and Material UI to build and enhance user interfaces.",
    startDate: "Feb 2024",
    endDate: "Present",
    icon: "/work/kinlotech.svg",
  },
  {
    company: "Crework",
    role: "Frontend Developer",
    description: `Developed landing pages for initiatives like "30 Days of PM" and "PM Interview Questions" for Crework, increasing user engagement and resource access. Created a Product Management Quiz feature, allowing over 500 users to take the quiz and receive scores. Skills used include React, MongoDB, Tailwind CSS.`,
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    icon: "/work/crework.svg",
  },
];

export const SKILLS = [
  {
    name: "HTML",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "mongoDB",
    icon: SiMongodb,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  { name: "Github", icon: SiGithub },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Shadcn",
    icon: SiShadcnui,
  },
  { name: "Postman", icon: SiPostman },
];

export const PROJECTS = [
  {
    name: "Trust Social",
    description:
      "A modern platform to collect, organize, and share testimonials with ease. Built using advanced technologies, this project offers seamless integration and powerful features to showcase your testimonials effectively.",
    logo: "/projects/trust-social-logo.png",
    github: "https://github.com/rohitjuyal21/trust-social",
    live: "https://trustsocial.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Shadcn UI",
      "framer-motion",
    ],
    thumbnai: "/projects/trust-social-thumbnail.png",
  },
  {
    name: "Amigo Brain",
    description:
      "AmigoBrain is a fun and engaging quiz application where users can create a personalized quiz about themselves and share it with their friends. Friends can take the quiz, score themselves, and see how well they know the quiz creator. Each quiz comes with a leaderboard (Friendboard) that displays the scores of all friends who have participated.",
    logo: "/projects/amigo-brain-logo.png",
    github: "https://github.com/rohitjuyal21/amigo-brain",
    live: "https://amigo-brain.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    thumbnai: "/projects/amigo-brain-thumbnail.png",
  },
  {
    name: "Roast my idea",
    description:
      "Roast My Idea is a social application designed to allow users to post their startup ideas anonymously and receive honest feedback from the community. This ensures that users can share their ideas without the fear of judgment, fostering an open environment for constructive criticism.",
    logo: "/projects/roast-my-idea-logo.png",
    github: "https://github.com/rohitjuyal21/roast-my-idea",
    live: "https://roast-my-idea.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Redux Toolkit"],
    thumbnai: "/projects/roast-my-idea-thumbnail.png",
  },
  {
    name: "FaviGrab",
    description:
      "FaviGrab is a React web app that makes downloading favicons easy. Enter a URL, choose a size, and download high-quality favicons using integrated APIs.",
    logo: "/projects/favigrab-logo.svg",
    github: "https://github.com/rohitjuyal21/favi-grab-client",
    live: "https://favi-grab.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Node.js"],
    thumbnai: "/projects/roast-my-idea-thumbnail.png",
  },
  {
    name: "Focus Hours",
    description:
      "Focus Hours is a Chrome extension designed to boost your productivity by blocking distracting websites, like social media, during work hours. It helps you stay focused by redirecting you to useful and productive resources instead.",
    logo: "/projects/focus-hours-logo.png",
    github: "https://github.com/rohitjuyal21/focus-hours",
    tech: ["React", "Javascript", "Chrome Extension"],
  },
];

export const FOOTER_NAV = [
  { name: "Github", url: "https://github.com/rohitjuyal21", icon: SiGithub },
  {
    name: "Peerlist",
    url: "https://peerlist.io/rohitjuyal",
    icon: SiPeerlist,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rohitjuyal2003",
    icon: SiLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rohitjuyal21",
    icon: FaXTwitter,
  },
];
