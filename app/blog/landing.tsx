"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const topics = [
  "All topics",
  "Leadership",
  "Happiness",
  "Health",
  "Business",
  "Mindset",
  "Relationships",
  "Wealth",
];

const featuredPost = {
  id: 1,
  category: "BUSINESS",
  title: "How to make a massive action plan (MAP)",
  excerpt:
    "Do you know the results you want to achieve in your business? Many business owners and managers understand where they want to go, but they don't have the roadmap to get there. Of course, knowing where you want to end up and...",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  slug: "how-to-make-massive-action-plan",
};

const sidebarPosts = [
  {
    id: 2,
    category: ["MINDSET", "RELATIONSHIPS"],
    title: "Worrying about ending up alone?",
    excerpt:
      "Do you have a fear of being alone forever? Maybe you're starting to see your friends pair off into lon...",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    slug: "worrying-about-ending-up-alone",
  },
  {
    id: 3,
    category: ["WEALTH"],
    title: "Pay yourself first",
    excerpt:
      "Most of us are financial traders making the worst trade we could make -- we're trading time for...",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
    slug: "pay-yourself-first",
  },
  {
    id: 4,
    category: ["MINDSET"],
    title: "Change your words, change your life",
    excerpt:
      "The world's greatest leaders and progressive thinkers have always used the power of words to...",
    image: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?w=400&h=300&fit=crop",
    slug: "change-your-words-change-your-life",
  },
];

export default function BlogLanding() {
  const [activeTopic, setActiveTopic] = useState("All topics");

  return (
    <div className="bg-black text-white min-h-screen py-20 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-2xl">
            Inspiration at your fingertips
          </h1>

          {/* Topic Filters */}
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTopic === topic
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Large Post - Takes 2 columns */}
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="lg:col-span-2 group cursor-pointer"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-bold tracking-wider text-white/70 mb-3">
                  {featuredPost.category}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Sidebar Posts */}
          <div className="space-y-8">
            {sidebarPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group cursor-pointer"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs font-bold tracking-wider text-white/50 mb-2">
                      {Array.isArray(post.category)
                        ? post.category.join(", ")
                        : post.category}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

