import { Metadata } from "next";
import { getBlogById } from "@/data/blogs.js";
import BlogDetailsPage from "../../views/blogs/blog-details-page";
import { generateSEO } from "../../lib/seo-config";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = getBlogById(slug);

  if (!post) {
    return {};
  }

  return generateSEO({
    title: post?.seo?.metaTitle || post.title,

    description: post?.seo?.metaDescription || post.description,

    keywords: post?.seo?.keywords || post.tags || [],

    path: `/blogs/${post.slug}`,

    image: post.featuredImage,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getBlogById(slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Blog Post Not Found</h1>
          <p className="text-muted-foreground">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return <BlogDetailsPage post={post} />;
}
