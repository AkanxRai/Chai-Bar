"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import { blogPosts, blogCategories, type BlogPost } from "@/data/blog";

const ALL_CATEGORY = "All" as const;
type FilterCategory = typeof ALL_CATEGORY | BlogPost["category"];

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(ALL_CATEGORY);

  const filteredPosts =
    activeCategory === ALL_CATEGORY
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const categories: FilterCategory[] = [ALL_CATEGORY, ...blogCategories];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-brand text-4xl font-bold text-chai-brown sm:text-5xl">
          City Stories
        </h1>
        <p className="mt-4 font-body text-base text-charcoal/60 sm:text-lg">
          Conversations, ideas, and the quiet hum of Indiranagar.
        </p>
      </div>

      {/* Category filter pills */}
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter posts by category"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={[
                "rounded-full px-4 py-2 font-body text-sm font-medium cursor-pointer transition-colors duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
                isActive
                  ? "bg-chai-brown text-cream shadow-sm"
                  : "border border-cream bg-warm-white text-charcoal/60 hover:border-chai-brown/30 hover:text-charcoal",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Blog card grid */}
      {filteredPosts.length === 0 ? (
        <p className="py-16 text-center font-body text-charcoal/40">
          No stories in this category yet — check back soon.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/stories/${post.slug}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-warm-white shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
      aria-label={`Read: ${post.title}`}
    >
      {/* Cover image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category pill overlay */}
        <span className="absolute left-4 top-4 rounded-full bg-chai-brown/90 px-3 py-1 font-body text-xs font-medium text-cream backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title */}
        <h2 className="font-brand text-lg font-semibold leading-snug text-chai-brown transition-colors duration-200 group-hover:text-terracotta">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="font-body text-sm italic leading-relaxed text-charcoal/60 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer meta */}
        <div className="mt-auto flex items-center gap-4 pt-2">
          <span className="flex items-center gap-1 font-body text-xs text-charcoal/40">
            <User className="h-3 w-3" aria-hidden="true" />
            {post.author}
          </span>
          <span className="flex items-center gap-1 font-body text-xs text-charcoal/40">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
