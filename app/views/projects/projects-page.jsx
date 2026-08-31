"use client";
import PageHeader from "../../components/page-header";
import ProjectCard from "./components/project-card";
import PageWrapper from "../../components/page-wrapper";

const ProjectsPage = ({ projects }) => {
  return (
    <div>
      <PageHeader title="Our Projects" />

      <PageWrapper>
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
