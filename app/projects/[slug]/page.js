import React from "react";
import { getProjectById } from "../../../data/projects";
import ProjectDetailsPage from "../../views/projects/project-details-page";

const Page = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectById(slug);
  return <ProjectDetailsPage project={project} />;
};

export default Page;
