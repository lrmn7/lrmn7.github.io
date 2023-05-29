import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import virtualphotography from "public/projects/virtualphotography.png";
import donlod from "public/projects/donlod.png";
import qrcode from "public/projects/qrcode.png";
import shortin from "public/projects/shortin.png";
import quraneverything from "public/projects/quraneverything.png";
import wahelper from "public/projects/wahelper.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/lrmn7"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
        {""} or {" "}
        <a
          href="/blog"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my blog
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Virtual Photography",
    type: "Frontend",
    image: (
      <Image
        src={virtualphotography}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website in Virtual Photography. I have stories about Virtual Photography to tell, theories to share and time to write.",
    tags: ["Gallery", "Game", "Virtual Photography", "Blogs"],
    liveUrl: "https://lrmn-vp.is-a.fun//",
    codeUrl: "https://github.com/lrmn7/lrmn-vp",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Donlod",
    type: "Frontend",
    image: (
      <Image
        src={donlod}
        sizes="100vw"
        fill
        alt="Donlod"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Donlod is a social and media platform downloader that doesn't piss you off. Save what you love without ads, trackers, or other creepy bullshit.",
    tags: ["No Watermark", "Downloader", "Audio & Video", "Social Media"],
    liveUrl: "https://donlod.hop.sh/",
    codeUrl: "https://github.com/lrmn7/donlod/",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "QRCode Generator",
    type: "Frontend",
    image: (
      <Image
        src={qrcode}
        sizes="100vw"
        fill
        alt="QRCode Generator"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "This is just a quick mini project of a QR Generator. A simple web app to generate the QR Code.",
    tags: ["QR Code", "Web App", "Generator"],
    liveUrl: "https://qr-generator.is-a.fun/",
    codeUrl: "https://github.com/lrmn7/generator-qr/",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Shortin URL",
    type: "Frontend",
    image: (
      <Image
        src={shortin}
        sizes="100vw"
        fill
        alt="Shortin URL"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Personalized link shortner. (Made using tinyurl API).",
    tags: ["Shortner", "Shortin", "Tinyurl", "Web App"],
    liveUrl: "https://shortin.is-a.fun/",
    codeUrl: "https://github.com/lrmn7/shortin-isafun/",
    bgColor: "bg-[#9FD0E3]",
  },
  {
    title: "Quran Everything",
    type: "Frontend",
    image: (
      <Image
        src={quraneverything}
        sizes="100vw"
        fill
        alt="Quran Everything"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Quran Everything is a website that provides prayer schedules, the 99 Names of Allah (Asma'ul Husna), and the ability to read the Quran.",
    tags: ["Al-Quran", "Translate", "Audio", "Salat times"],
    liveUrl: "https://quran-everything.is-a.fun/",
    codeUrl: "https://github.com/lrmn7/quran-everything/",
    bgColor: "bg-[#9FD0E3]",
  },
  {
    title: "Whatsapp Helper",
    type: "Frontend",
    image: (
      <Image
        src={wahelper}
        sizes="100vw"
        fill
        alt="Whatsapp Helper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Just a simple web app to help you initiate and send the WhatsApp chat without saving the phone number.",
    tags: ["Whatsapp", "Web App", "Wa Helper"],
    liveUrl: "https://quran-everything.is-a.fun/",
    codeUrl: "https://github.com/lrmn7/quran-everything/",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
