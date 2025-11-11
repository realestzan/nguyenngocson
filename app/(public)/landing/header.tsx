"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky right-0 left-0 top-0 z-20 flex items-center justify-between p-4  bg-background">
      {/* Logo */}
      <Link href="/" className="flex items-center scale-150 pl-12">
        <Image 
          src="/son-logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="size-10 scale-150 translate-x-[-0.5px] text-white invert"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="/course"
          className="text-primary/80 hover:text-primary text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Các Khoa Học
        </a>
        <a
          href="/blog"
          className="text-primary/80 hover:text-primary text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Blog
        </a>
        <a
          href="/contact"
          className="text-primary/80 hover:text-primary text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Liên Hệ
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <a href="tel:0912897102" className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
        0912 897 102
        </a>
      </div>
    </header>
  )
}
