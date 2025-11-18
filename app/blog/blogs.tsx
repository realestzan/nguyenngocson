"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "BUSINESS",
    title: "Why immersive business events are key to igniting growth",
    excerpt:
      "Good business growth events are more than seminars. The most effective ones are fully immersive experiences that ignite growth...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    slug: "why-immersive-business-events",
  },
  {
    id: 2,
    category: "LEADERSHIP",
    title: "Turning difficult conversations into catalysts for growth",
    excerpt:
      "When you embrace difficult but honest conversations, something powerful happens: clarity increases, trust deepens, and growth...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    slug: "turning-difficult-conversations",
  },
  {
    id: 3,
    category: "LEADERSHIP",
    title: "Stop people-pleasing and unleash your true leadership potential with emotional mastery",
    excerpt:
      "People-pleasing costs you more than you realize. It drains your energy, scatters your focus, and holds you back from your true...",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    slug: "stop-people-pleasing",
  },
  {
    id: 4,
    category: "LEADERSHIP",
    title: "Why saying \"no\" is your ultimate leadership superpower",
    excerpt:
      "What if the secret to unstoppable leadership isn't saying \"yes\"--but mastering the art of saying \"no\"?",
    image: "https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=800&h=600&fit=crop",
    slug: "why-saying-no",
  },
  {
    id: 5,
    category: "LEADERSHIP",
    title: "Identity and authenticity are the keys to unstoppable leadership",
    excerpt:
      "Your identity is not fixed. It's not fate. It's a pattern crafted by the beliefs you've repeated, the standards you've accepted, and the...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    slug: "identity-and-authenticity",
  },
  {
    id: 6,
    category: "BUSINESS",
    title: "Turn resistance into momentum with executive coaching",
    excerpt:
      "Executive coaching is the force multiplier that turns challenges into drive. An experienced professional coach sharpens your ability to...",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    slug: "turn-resistance-into-momentum",
  },
  {
    id: 7,
    category: "MINDSET",
    title: "The power of positive thinking: Transform your life",
    excerpt:
      "Discover how changing your mindset can unlock new possibilities and create lasting change in every area of your life...",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop",
    slug: "power-of-positive-thinking",
  },
  {
    id: 8,
    category: "WEALTH",
    title: "Building wealth through smart investing strategies",
    excerpt:
      "Learn the fundamental principles of wealth creation and how to make your money work for you in today's economy...",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop",
    slug: "building-wealth-strategies",
  },
  {
    id: 9,
    category: "RELATIONSHIPS",
    title: "Mastering the art of meaningful connections",
    excerpt:
      "Build deeper, more fulfilling relationships by understanding the psychology of human connection and communication...",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    slug: "mastering-meaningful-connections",
  },
];

export default function Blogs() {
  return (
    <div className="bg-white py-20 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <article className="h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-xs font-bold tracking-wider text-gray-500 mb-3 uppercase">
                    {post.category}
                  </p>
                  <h3 className="text-2xl font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Load more articles
          </button>
        </div>
      </div>
    </div>
  );
}

