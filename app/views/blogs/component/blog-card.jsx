"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogCard({ post }) {
  const publishedDate = new Date(post.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blogs/${post.id}`} className="group block h-full">
      <article className="relative h-full bg-white flex flex-col transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge - Floating on Image */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-sm text-secondary-700 text-xs font-semibold tracking-wide rounded-full shadow-sm border border-white/40">
              {post.category.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Meta Information */}
          <div className="flex items-center gap-3 mb-4 text-secondary-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary-400" />
              <span className="text-xs font-medium tracking-wide">
                {formattedDate}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-secondary-200" />
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary-400" />
              <span className="text-xs font-medium tracking-wide">
                {post.readTime} min read
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-medium text-secondary-800 mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors duration-300 leading-tight tracking-tight">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
            {post.description}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Read More Button */}
          <div className="flex items-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold  group-hover:text-primary-500">
              <span>Read More</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
