import React from "react";
import PageHeader from "../../components/page-header";
import { getAllProjects } from "../../../data/projects";
import { MapPin, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import SectionHeader from "../../components/section-header";
import PageWrapper from "../../components/page-wrapper";

const ProjectsPage = () => {
  const projects = getAllProjects();

  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Our Projects" />

      <PageWrapper>
        <SectionHeader
          badge={"Our Portfolio"}
          title={`Showcasing Our Solar Projects`}
          description={`${projects.length}+ successful solar installations across Gujarat and beyond.`}
        />
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-24 text-gray-400 text-sm">
            No projects found.
          </div>
        )}
      </PageWrapper>
    </div>
  );
};

export default ProjectsPage;
