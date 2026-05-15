import React from 'react'
import SchemesPage from '../views/schemes/schemes-page'
import { seoPages } from '../lib/seo-pages';
export const metadata = seoPages.schemes;

const Page = () => {
  return <SchemesPage />
}

export default Page
