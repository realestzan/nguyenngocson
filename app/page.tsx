import { Carousel1 } from "@/components/carousel-1";
import Landing from "@/components/landing";
import Banner1 from "@/components/banner-1";
import Category from "@/components/category";
import Testimonial from "@/components/testimonial";
import AboutTony from "@/components/about-tony";

export default function Home() {
  return (
    <main className="min-h-screen">
<div className="relative max-w-7xl mx-auto"><Landing /></div>
      <Carousel1 />
  <div className="relative"><Banner1 /></div>

  <div className=""> <Category /></div>
  
<Testimonial />

<AboutTony />
    </main>
  );
}
