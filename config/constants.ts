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
} from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rohitjuyal2003",
    icon: "/socials/linkedin.svg",
  },
  {
    name: "Peerlist",
    url: "https://peerlist.io/rohitjuyal",
    icon: "/socials/peerlist.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/rohitjuyal21",
    icon: "/socials/github.svg",
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
