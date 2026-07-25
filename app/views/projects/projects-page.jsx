"use client";
import React, { useMemo, useState } from "react";
import { LayoutGrid } from "lucide-react";
import PageHeader from "../../components/page-header";
import ProjectCard, { getCategoryIcon } from "./components/project-card";
import SectionHeader from "../../components/section-header";
import PageWrapper from "../../components/page-wrapper";

const ProjectsPage = ({ projects }) => {
  return (
    <div className="bg-gray-100">
      <PageHeader title="Our Projects" />

      <PageWrapper >
        <SectionHeader
          badge={"Our Portfolio"}
          title={`Showcasing Our Solar Projects`}
          description={`${projects.length}+ successful solar installations across Gujarat and beyond.`}
        />

        {/* Project rows */}
        <div className="mt-8 flex flex-col gap-8 pb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default ProjectsPage;
