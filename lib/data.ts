import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Birmingham University Event",
    location: "Birmingham, UK",
    description:
      "Star studed event with some of the heavy hitter in the business.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Birmingham Challenge",
    location: "Houston, TX",
    description:
      "Challenge yourself, try solving these problem and see where you rank amongst Bimringham top talent.",
    icon: React.createElement(FaReact),
    date: "2023 Summer - TBA",
  },
  {
    title: "Business Conference",
    location: "Orlando, FL",
    description:
      "Meet leaders in business, build your network and learn from the best.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Christmas - TBA",
  },
] as const;

export const projectsData = [
  {
    title: "Grassroots Projects",
    description:
      "We engage with universities, colleges and schools to equip individuals the with skills, knowledge, and confidence needed to thrive in their personal and professional lives. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Corporate Engagements",
    description:
      "At Katapult X, we believe in harnessing the power of collaboration to drive enduring and impactful change. Through strategic partnerships and collaborations with global companies, government bodies and research organisations, we aim to facilitate best practices and foster a culture of shared learning.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Entrepreneurship",
    description:
      "Equip small business and entrepreneurs with the requisite skills to be able to engage business clients effectively.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
