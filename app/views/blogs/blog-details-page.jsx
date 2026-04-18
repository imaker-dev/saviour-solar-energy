"use client";

import React from "react";
import { Clock, Calendar, Tag, ArrowLeft, RefreshCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import PageWrapper from "../../components/page-wrapper";
import CtaBanner from "../home/components/cta-banner";

// ── Markdown renderer with premium typography ──────────────────────────────
const MarkdownContent = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => null, // title already shown in hero
        h2: ({ children }) => (
          <h2 className="text-[1.65rem] font-bold text-gray-950 leading-snug tracking-tight mt-14 mb-5 first:mt-0">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-[1.15rem] font-semibold text-gray-800 leading-snug mt-8 mb-3">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-[15.5px] text-gray-600 leading-[1.85] mb-5">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="mb-5 space-y-2 pl-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-5 space-y-2 pl-0 list-none counter-reset-item">
            {children}
          </ol>
        ),
        li: ({ children, ordered }) => (
          <li className="flex items-start gap-3 text-[15px] text-gray-600 leading-relaxed">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
            <span>{children}</span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-900">{children}</strong>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-amber-400 pl-6 my-8 text-gray-500 italic">
            {children}
          </blockquote>
        ),
        code: ({ inline, children }) =>
          inline ? (
            <code className="bg-gray-100 text-gray-800 text-[13px] px-1.5 py-0.5 rounded font-mono">
              {children}
            </code>
          ) : (
            <pre className="bg-gray-950 text-gray-100 text-[13px] rounded-xl p-5 overflow-x-auto mb-6 font-mono leading-relaxed">
              <code>{children}</code>
            </pre>
          ),
        hr: () => (
          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

// ── Format date ────────────────────────────────────────────────────────────
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// ── Main component ─────────────────────────────────────────────────────────
const BlogDetailsPage = ({ post }) => {
  if (!post) return null;

  const router = useRouter();

  return (
    <PageWrapper>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto  pt-12 pb-10">
        {/* Back + Category */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push()}
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-gray-400 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={13} />
            Back
          </button>
          <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-[0.13em] bg-amber-50 px-3 py-1 rounded-full">
            {post.category.name}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl lg:text-2xl sm:text-[2.6rem] font-bold text-gray-950 leading-[1.1] tracking-tight mb-5">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-[15.5px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 text-[12px] text-gray-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-gray-300" />
            {formatDate(post.publishedAt)}
          </span>
          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <RefreshCw size={11} className="text-gray-300" />
              Updated {formatDate(post.updatedAt)}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-gray-300" />
            {post.readTime} min read
          </span>
        </div>
      </div>

      {/* ── Featured image ───────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden h-[250px] lg:h-[350px] mt-10 mb-2 bg-gray-100">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto  py-12">
        <MarkdownContent content={post.content} />
      </article>

      <CtaBanner />
    </PageWrapper>
  );
};

export default BlogDetailsPage;
