import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Create momentum in every area of your life",
    description:
      "Master the proven strategies developed and used by Tony Robbins to lead a life of massive purpose, passion, abundance and happiness.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    logo: "INNER CIRCLE",
    logoSubtitle: "TONY ROBBINS",
    href: "/programs/inner-circle",
  },
  {
    id: 2,
    title: "Accelerate your path to business success",
    description:
      "A curated community to give you the guidance and knowledge to make record profits this year.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    logo: "BUSINESS ACCELERATOR",
    logoSubtitle: "TONY ROBBINS",
    href: "/programs/business-accelerator",
  },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-3xl">
            Tony Robbins programs
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed lg:pt-8">
            Connect deeply, engage fully and evolve intentionally with Tony&apos;s exclusive programs and communities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={program.href}
              className="group cursor-pointer"
            >
              <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                  {/* Top Content */}
                  <div className="flex-1 flex items-start">
                    <div className="max-w-lg">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {program.title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Logo Badge */}
                  <div className="flex justify-start">
                    <div className="bg-black px-8 py-6 rounded-xl">
                      <p className="text-xs font-bold tracking-wider text-white/70 mb-1">
                        {program.logoSubtitle}
                      </p>
                      <p className="text-2xl font-bold tracking-wide text-white">
                        {program.logo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Programs Section (Optional) */}
        <div className="mt-16 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-white/80 transition-colors"
          >
            View all programs
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

