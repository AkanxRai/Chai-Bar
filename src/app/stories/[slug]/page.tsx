import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Chai Bar`,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Hero image */}
      <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl shadow-sm sm:h-80 lg:h-96">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 font-body text-xs font-medium text-chai-brown">
          <Tag className="h-3 w-3" aria-hidden="true" />
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-brand text-3xl font-bold leading-tight text-chai-brown sm:text-4xl">
        {post.title}
      </h1>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-cream pb-8">
        <span className="flex items-center gap-1.5 font-body text-sm text-charcoal/50">
          <User className="h-4 w-4" aria-hidden="true" />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5 font-body text-sm text-charcoal/50">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {post.readTime}
        </span>
        <time
          dateTime={post.publishedAt}
          className="font-body text-sm text-charcoal/40"
        >
          {formattedDate}
        </time>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-charcoal/80"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-16 border-t border-cream pt-8">
        <Link
          href="/stories"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream bg-warm-white px-5 py-2.5 font-body text-sm font-medium text-charcoal/70 transition-colors duration-200 hover:border-chai-brown/30 hover:text-chai-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Stories
        </Link>
      </div>
    </article>
  );
}
