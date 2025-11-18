"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    name: "Mindset",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop",
  },
  {
    name: "Wealth",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=1000&fit=crop",
  },
  {
    name: "Health",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop",
  },
  {
    name: "Relationships",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop",
  },
  {
    name: "Business",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1000&fit=crop",
  },
  {
    name: "Leadership",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=1000&fit=crop",
  },
  {
    name: "Happiness",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=1000&fit=crop",
  },
];

export default function Category() {
  const [hoveredCategory, setHoveredCategory] = useState(0);

  return (
    <div className="min-h-[90vh] bg-white text-background py-20 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Categories */}
          <div className="space-y-8">
            <div className="mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-muted mb-8">
                ● PILLARS FOR AN EXTRAORDINARY LIFE
              </p>
            </div>
            
            <div className="space-y-2">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  type="button"
                  onMouseEnter={() => setHoveredCategory(index)}
                  onClick={() => setHoveredCategory(index)}
                  className={`text-5xl md:text-7xl font-bold cursor-pointer transition-all duration-300 text-left w-full ${
                    hoveredCategory === index
                      ? "text-background opacity-100 translate-x-4"
                      : "text-muted-foreground opacity-50 hover:opacity-75"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredCategory === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}