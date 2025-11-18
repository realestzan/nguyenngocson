"use client"

import { useRef } from "react"
import { Button } from "./ui/button"

export default function Landing() {
  return (
    <div className="min-h-[90vh] relative overflow-hidden youtube-container rounded-3xl">
    <iframe
      width="100%"
      height="100%"
      className="absolute inset-0"
      src="https://www.youtube.com/embed/cegE_W3RnaU?si=Cxek7AsnI75e3Hay&autoplay=1&mute=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>

    <h1 className='text-7xl font-bold absolute left-4 bottom-28 z-10'>
    Your Holiday <br/> Breakthrough Awaits
    </h1>

<Button size='lg' className="absolute bottom-12 left-4 z-10 rounded-full">
    Book Now
</Button>
    <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-blue-900 to-transparent" />
        </div>
  )
}