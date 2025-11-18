"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function AboutTony() {
  return (
    <div className="min-h-screen bg-white py-20 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-black mb-16 max-w-2xl leading-tight">
          Do you have a hunger to increase the quality of your life?
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
              alt="Tony Robbins"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We believe progress equals happiness. And no matter where you&apos;re looking to excel, we&apos;re here to help you forge your pathway to power. Meet the man who&apos;s spent over 45 years creating breakthroughs and transforming lives.
              </p>

              <button
                type="button"
                className="text-lg font-bold text-black hover:text-gray-700 transition-colors inline-flex items-center gap-2"
              >
                Meet Tony Robbins
                <span className="text-2xl">→</span>
              </button>
            </div>

            {/* Video Thumbnail - Bottom Right */}
            <div className="mt-12 lg:mt-0">
              <div className="relative h-[280px] rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                  alt="Watch video"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                
                {/* #1 COACH Badge */}
                <div className="absolute top-4 right-4 bg-white text-black font-bold text-2xl px-4 py-2 rounded">
                  #1 COACH
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-3 bg-white/90 hover:bg-white px-6 py-3 rounded-full transition-colors text-black">
                    <Play className="w-5 h-5 fill-current" />
                    <span className="font-semibold">Watch video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured In Section */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm text-muted mb-8">Featured in:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {/* Forbes Logo */}
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <span className="font-serif text-4xl font-bold text-gray-800">Forbes</span>
            </div>

            {/* Fortune Logo */}
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-3xl font-bold tracking-wider text-gray-800">FORTUNE</span>
            </div>

            {/* Inc. Logo */}
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <span className="font-serif text-4xl font-bold italic text-gray-800">Inc.</span>
            </div>

            {/* SUCCESS Logo */}
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-3xl font-bold tracking-wider text-gray-800">SUCCESS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

