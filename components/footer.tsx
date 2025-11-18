import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

const navColumns = [
  {
    links: ["About", "Events", "Programs", "Coaching", "Start now"],
  },
  {
    links: ["Documentary", "Podcast", "Blog", "Free resources", "Shop all"],
  },
  {
    links: ["Community", "Assessments", "Careers", "Giving"],
  },
];

export function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div className="relative min-h-[500px] bg-[#1e3a5f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&h=800&fit=crop"
            alt="Tony Robbins"
            fill
            className="object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-20 flex items-center justify-center min-h-[500px]">
          <div className="text-center max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to live an extraordinary life?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Now is your time. Connect with us to learn more.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1 */}
            <div>
              <ul className="space-y-4">
                {navColumns[0].links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-base text-white/90 hover:text-white transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-4">
                {navColumns[1].links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-base text-white/90 hover:text-white transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-4">
                {navColumns[2].links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-base text-white/90 hover:text-white transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="space-y-8">
              <div>
                <Link
                  href="#"
                  className="text-base text-white font-medium hover:text-white/80 transition inline-flex items-center gap-2"
                >
                  Customer Support
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">
                  Contact Customer Support for questions on your products, coaching, or events.
                </p>
              </div>

              <div>
                <Link
                  href="#"
                  className="text-base text-white font-medium hover:text-white/80 transition inline-flex items-center gap-2"
                >
                  Media Inquiries
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">
                  Robbins Research International, Inc. has a dedicated media department. Members of the press are welcome to contact us.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              {/* Left Side */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
                >
                  English
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                  <span>© 2025. All rights reserved.</span>
                </div>
              </div>

              {/* Right Side - Social Icons */}
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="X"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="mt-8 text-xs text-white/40">
              9051 Mira Mesa Blvd P.O. Box 261229, San Diego, CA 92126
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

