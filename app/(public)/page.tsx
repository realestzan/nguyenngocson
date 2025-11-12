"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import LandingSection from "./landing/landing"

export default function Home() {
  const [activeSection, setActiveSection] = useState("landing")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const sectionIds = ["landing", "intro", "work", "thoughts", "connect"]


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <section
        id="landing"
        ref={(el) => {
          sectionsRef.current[0] = el
        }}
        className="min-h-screen"
      >
        <LandingSection />
      </section>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sectionIds.map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">DIỄN GIẢ CHUYÊN GIA ĐÀO TẠO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                Nguyễn
                  <br />
                  <span className="text-muted-foreground">Ngọc Sơn </span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Nguyễn Ngọc Sơn là một diễn giả và chuyên gia huấn luyện phát triển kinh doanh, phát triển cá nhân tại Việt Nam.
                  <br />
                  <br />
                  Với hơn 20 năm trong ngành bảo hiểm nhân thọ và 16 năm đào tạo đội ngũ kinh doanh, diễn giả Nguyễn Ngọc Sơn được biết đến là chuyên gia đào tạo bán hàng, huấn luyện và xây dựng hệ thống kinh doanh.
                  <br />
                  <br />
                  Anh đã huấn luyện doanh nghiệp tăng trưởng bền vững, giúp nhiều cá nhân và đội nhóm đạt kết quả vượt trội trong sự nghiệp.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Philippines</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <Image src="/son.png" alt="Nguyễn Ngọc Sơn" width={500} height={500} />
              {/* <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Frontend Developer</div>
                  <div className="text-muted-foreground">@ Hububble</div>
                  <div className="text-xs text-muted-foreground">2021 — Present</div>
                </div>
              </div> */}

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CHUYÊN MÔN</div>
                <div className="flex flex-wrap gap-2">
                  {["DIỄN GIẢ", "React", "TypeScript", "HubSpot CMS", "Node.js"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Kinh nghiệm</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  heading: "Chuyên gia huấn luyện và đào tạo doanh nhân – Nguyễn Ngọc Sơn",
                  description:
                    "Nguyễn Ngọc Sơn là chuyên gia huấn luyện và đào tạo doanh nhân tại Việt Nam, tập trung vào phát triển kinh doanh và phát triển cá nhân.",
                },
                {
                  heading: "Kinh nghiệm",
                  description:
                    "21 năm kinh nghiệm trong lĩnh vực bảo hiểm nhân thọ, bán hàng và phát triển doanh nghiệp.",
                },
                {
                  heading: "Lãnh đạo hệ thống",
                  description:
                    "Giám đốc hệ thống Văn phòng Tổng đại lý – đối tác chiến lược của Dai-ichi Life Việt Nam, thuộc top 10 tập đoàn bảo hiểm nhân thọ hàng đầu thế giới.",
                },
                {
                  heading: "Hoạt động diễn thuyết",
                  description:
                    "Hơn 1.500 buổi thuyết trình tại các hội nghị khách hàng và hội thảo đào tạo kinh doanh.",
                },
                {
                  heading: "Chương trình đào tạo",
                  description:
                    "Trực tiếp huấn luyện gần 500 chương trình đào tạo dành cho đội ngũ kinh doanh và tư vấn viên.",
                },
                {
                  heading: "Phát triển đội ngũ",
                  description:
                    "Đào tạo và phát triển 120 trưởng phòng, 10 giám đốc văn phòng tổng đại lý trong hệ thống.",
                },
                {
                  heading: "Giá trị mang lại",
                  description:
                    "Chia sẻ kinh nghiệm thực tiễn, giúp tối ưu hiệu suất, xây dựng đội nhóm bền vững và nâng cao năng lực cho hàng nghìn tư vấn viên đạt mục tiêu thu nhập &amp; thăng tiến.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="lg:col-span-10 space-y-3">
                    <h3 className="text-lg sm:text-xl font-medium text-foreground">{item.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="courses"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Chương trình đào tạo</h2>
              <div className="text-sm text-muted-foreground font-mono">6 KHÓA HỌC ĐẶC BIỆT</div>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "KHAI PHÁ NĂNG LỰC",
                  description:
                    "Định hình tư duy và xây dựng nền tảng phát triển bản thân cho doanh nhân hiện đại.",
                },
                {
                  title: "TIỀM ẨN TINH HOA BÁN HÀNG",
                  description:
                    "Nâng tầm kỹ năng bán hàng chuyên nghiệp với chiến lược thuyết phục và chốt deal hiệu quả.",
                },
                {
                  title: "CUỘC ĐỜI NGOẠI HẠNG",
                  description:
                    "Huấn luyện phát triển toàn diện để tạo nên cuộc sống đột phá và sự nghiệp bền vững.",
                },
                {
                  title: "MARKETING POWER SYSTEM",
                  description:
                    "Xây dựng hệ thống marketing tự động giúp doanh nghiệp tăng trưởng mạnh mẽ.",
                },
                {
                  title: "ELITE TRAINER",
                  description:
                    "Đào tạo huấn luyện viên chuyên nghiệp với phương pháp dẫn dắt hiệu quả và truyền cảm hứng.",
                },
                {
                  title: "TRẠI DOANH NHÂN TRIỆU ĐÔ",
                  description:
                    "Chương trình chuyên sâu giúp nhà lãnh đạo xây dựng doanh nghiệp triệu đô bền vững.",
                },
              ].map((course, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>KHÓA {index + 1}</span>
                      <span className="uppercase tracking-widest text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {course.title}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {course.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Kết nối với Nguyễn Ngọc Sơn</h2>

              <div className="space-y-6">
                {/* <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p> */}

                <div className="space-y-4">
                  <Link
                    href="admin@nguyenngocson.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">admin@nguyenngocson.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">MẠNG XÃ HỘI</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Facebook", handle: "@felixmacaspac", url: "https://www.facebook.com/NguyenNgocSonCEO.102" },
                  { name: "Youtube", handle: "@felixmacaspac", url: "https://www.youtube.com/@NguyenNgocSonTrainer" },
                  { name: "Tiktok", handle: "@felixmacaspac", url: "https://www.tiktok.com/@nguyenngocsonhldn" },
                  { name: "Spotify", handle: "felixmacaspac", url: "https://creators.spotify.com/pod/show/2iA1Yrzdn2eEt0bO4g921D/home" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Nguyễn Ngọc Sơn. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">CÔNG TY TNHH ĐÀO TẠO & HUẤN LUYỆN DOANH NHÂN              </div>
            </div>

          </div>
        </footer>
      </main>

      {/* <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div> */}
    </div>
  )
}

