import { Metadata } from "next";
import { getBlogById } from "@/data/blogs.js";
import BlogDetailsPage from "../../views/blogs/blog-details-page";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const post = blogsData.posts.find(p => p.slug === slug);

//   if (!post) {
//     return {
//       title: 'Blog Post Not Found',
//       description: 'The blog post you are looking for does not exist.',
//     };
//   }

//   return {
//     title: post.seo.metaTitle,
//     description: post.seo.metaDescription,
//     keywords: post.seo.keywords,
//     openGraph: {
//       title: post.seo.ogTitle || post.title,
//       description: post.seo.ogDescription || post.description,
//       images: post.seo.ogImage ? [{ url: post.seo.ogImage }] : [{ url: post.featuredImage }],
//       type: 'article',
//       publishedTime: post.publishedAt,
//       modifiedTime: post.updatedAt,
//     },
//     canonical: post.seo.canonicalUrl,
//   };
// }

// export async function generateStaticParams() {
//   return blogsData.posts.map(post => ({
//     slug: post.slug,
//   }));
// }

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
