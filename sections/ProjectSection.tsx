import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// import virtualphotography from "public/projects/og-vp2.svg";
import mewwme from "public/projects/mew.svg";
import widget from "public/projects/widget.svg";
import ohclips from "public/projects/ohclips.svg";
import lucy from "public/projects/lucy.svg";

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
  }, [projectSection, onSectionChange]);

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
        Other projects can be explored in my{" "}
        <Link href="https://github.com/lrmn7" legacyBehavior>
          <a className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap">
            Github
          </a>
        </Link>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Mewwme's",
    type: "Frontend",
    image: (
      <Image
        src={mewwme}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The Discord music bot that's 100% free with no payment or votes required to access all its amazing functionalities.",
    tags: ["Discord bot", "Discord music", "Radio FM", "Music 24/7"],
    liveUrl: "https://meww.me/",
    codeUrl: "https://github.com/mewwme/",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "L u c y ♡",
    type: "Frontend",
    image: (
      <Image
        src={lucy}
        sizes="100vw"
        fill
        alt="lucy"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "a discord moderation & music 24/7. Music, Economy, Leveling, Fun, Reaction Roles, Moderation, and lots more!",
    tags: ["Discord bot", "Moderation", "Music"],
    liveUrl: "https://lucy.is-a.fun/",
    codeUrl: "https://github.com/Hai-Lucy",
    bgColor: "bg-[#9FD0E3]",
  },
  {
    title: "Widget Spotify for obs",
    type: "Frontend",
    image: (
      <Image
        src={widget}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A Spotify player widget for OBS Studio and Streamlabs OBS that displays the currently playing song.",
    tags: ["widget", "OBS", "Livestream", "Twitch", "Spotify"],
    liveUrl: "https://spotify-obs.vercel.app/",
    codeUrl: "https://github.com/lrmn7/widget-spotify-obs",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "OhCLiPS",
    type: "Frontend",
    image: (
      <Image
        src={ohclips}
        sizes="100vw"
        fill
        alt="Ohclips"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Gaming clips sharing platform built using Vue, Express, Redis, Firebase, TailwindCSS and more.",
    tags: ["Ohclips", "Gaming", "Share moment game", "Web App"],
    liveUrl: "https://ohclips.vercel.app/",
    codeUrl: "https://github.com/lrmn7/ohclips",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
