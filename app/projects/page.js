import React from 'react'
import ProjectsPage from '../views/projects/projects-page'
import { seoPages } from '../lib/seo-pages';
import { getProjectCards } from '../../data/projects';
export const metadata = seoPages.projects;

const Page = () => {
  const projects = getProjectCards();
  return <ProjectsPage projects={projects}/>
}

export default Page
