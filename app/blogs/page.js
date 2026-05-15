import React from 'react'
import AllBlogsPage from '../views/blogs/all-blogs-page'
import { seoPages } from '../lib/seo-pages';
export const metadata = seoPages.blogs;

const Page = () => {
  return <AllBlogsPage />
}

export default Page
