"use client";

import { BlogCard } from "./component/blog-card";
import { getAllBlogs } from "../../../data/blogs";
import PageHeader from "../../components/page-header";
import PageWrapper from "@/app/components/page-wrapper";

function AllBlogsPage() {

  const blogs = getAllBlogs();

  return (
    <div>
      <PageHeader title={"Blogs"} />
      <PageWrapper>
        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No blogs found
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your search or category filter to find what
              you&apos;re looking for.
            </p>
          </div>
        )}
      </PageWrapper>
    </div>
  );
}

export default AllBlogsPage;
