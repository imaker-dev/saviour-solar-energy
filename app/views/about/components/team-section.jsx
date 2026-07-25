import React from "react";
import { ArrowUpRight } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader, { HighlightText } from "@/app/components/section-header";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.5H5.56V10.1h2.78v8.4ZM6.95 8.9a1.61 1.61 0 1 1 0-3.22 1.61 1.61 0 0 1 0 3.22Zm11.55 9.6h-2.77v-4.4c0-1.13-.42-1.83-1.42-1.83-.78 0-1.24.51-1.44 1-.08.17-.09.42-.09.66v4.57h-2.78s.04-7.4 0-8.4h2.78v1.2c.37-.56 1.03-1.37 2.5-1.37 1.83 0 3.22 1.2 3.22 3.76v4.81Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

const team = [
  {
    name: "Shirley R.",
    role: "Founder & CEO",
    bio: "Visionary leader with 15 years in renewable energy and management.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Emily R.",
    role: "Head of Engineering",
    bio: "Leads system design, from site surveys through to final commissioning.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Michael B.",
    role: "Operations Director",
    bio: "Keeps every installation on schedule, on budget, and up to code.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80",
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
];

const socialIconMap = {
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

function TeamCard({ name, role, bio, image, socials }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 sm:w-[340px]">
      {/* Photo */}
      <div className="relative h-[440px] w-full overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${role}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
      </div>

      {/* Arrow link */}
      <a
        href="#"
        aria-label={`View ${name}'s profile`}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-primary-500 group-hover:rotate-45"
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
      </a>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm font-medium text-primary-400">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{bio}</p>

        <div className="mt-5 flex items-center gap-2.5">
          {Object.entries(socials).map(([key, href]) => {
            const Icon = socialIconMap[key];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={href}
                aria-label={`${name} on ${key}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-300 hover:bg-primary-500"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <PageWrapper>
      <SectionHeader
        badge="Our Team"
        title={
          <>
            Meet the Experts <br />
            Behind Every <HighlightText>Solar Project</HighlightText>
          </>
        }
        align="center"
      />

      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </PageWrapper>
  );
}
