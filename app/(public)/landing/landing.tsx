"use client"

import Image from "next/image"
import Header from "./header"
import HeroContent from "./hero-content"
import PulsingCircle from "./pulsing-circle"
import ShaderBackground from "./shader-background"

export default function LandingSection() {
  return (
    <ShaderBackground>
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  )
}
