"use client"

import { useRef } from "react"
import { Button } from "./ui/button"

export default function Banner1() {
  return (
    <div className="min-h-[90vh] w-screen relative overflow-hidden youtube-container ">
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

    <div className='flex flex-col max-w-2xl mx-auto items-center justify-center z-10 absolute inset-0 text-center'>
      <h1 className='text-7xl font-bold backdrop-blur-2xl p-4 rounded bg-background/20'>
      Master every <br/> area of your life
      </h1>

      <h3 className='text-lg font-bold backdrop-blur-2xl p-4 rounded bg-background/20'>
      Close the gap between where you are and where you want to be with Tony Robbins’ scientifically proven system.
      </h3>

      <Button size='lg' className="mt-4 z-10 rounded-full">  Book Now</Button>
      </div>
    </div>
  );
}