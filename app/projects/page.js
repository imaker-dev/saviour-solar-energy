import React from 'react'
import ProjectsPage from '../views/projects/projects-page'
import { seoPages } from '../lib/seo-pages';
export const metadata = seoPages.projects;

const Page = () => {
  return <ProjectsPage />
}

export default Page
