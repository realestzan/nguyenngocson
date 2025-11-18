"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Serena Williams",
    title: "Most Singles Grand Slam titles in history (male or female), 4-time Olympic gold medalist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote:
      "I was able to talk to Tony Robbins right after I got hurt and Mr. Robbins inspired me a lot to never lose my soul and always be myself. Like I've learned the human body can give out on you but your soul is there forever.",
  },
  {
    name: "Klay Thompson",
    title: "4-time NBA champion, 5-time All-Star, ESPY Best Comeback Athlete",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote:
      "Tony's teachings helped me through the darkest times of my career. His words gave me the strength to come back stronger than ever and reminded me that setbacks are just setups for comebacks.",
  },
  {
    name: "Maria Menounos",
    title: "Actress & TV Host, Cancer survivor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote:
      "When I faced my biggest health challenge, Tony's philosophy about finding strength in adversity became my guiding light. He taught me that our mindset determines our reality, and that belief saved my life.",
  },
  {
    name: "Marc Benioff",
    title: "Salesforce Founder & CEO, owner of TIME magazine",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote:
      "Tony Robbins transformed not just my business approach, but my entire life philosophy. His strategies for peak performance and giving back have been instrumental in building Salesforce into what it is today.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&h=1080&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-8 md:px-16 py-16">
        {/* Quote Section */}
        <div className="flex-1 flex items-center justify-end">
          <div className="max-w-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <p className="text-3xl font-bold text-white leading-tight">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Profiles */}
        <div className="flex justify-center items-end gap-8 md:gap-12 pb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${
                activeIndex === index ? "opacity-100 scale-110" : "opacity-40 hover:opacity-70"
              }`}
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name and Title */}
              <div className="text-center max-w-[200px]">
                <h3 className="text-white font-bold text-sm md:text-base mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-white/70 text-xs md:text-sm leading-tight">
                  {testimonial.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

