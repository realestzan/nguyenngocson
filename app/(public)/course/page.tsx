import Link from "next/link"

const featuredCourse = {
  title: "ELITE LEADERSHIP MASTERCLASS",
  slug: "elite-leadership-masterclass",
  headline: "Khơi dậy tư duy lãnh đạo đột phá, dẫn dắt đội nhóm vươn tới kết quả vượt trội.",
  description:
    "Chương trình 6 tuần kết hợp mentoring cá nhân, workshop chiến lược và hệ thống bài tập thực hành giúp lãnh đạo áp dụng ngay trong doanh nghiệp.",
  startDate: "Khai giảng: 12 Tháng 12, 2025",
  duration: "6 tuần • Hybrid",
  highlights: ["Coaching 1-1", "Blueprint xây dựng đội ngũ", "Case study thực tế"],
}

const programs = [
  featuredCourse,
  {
    title: "MARKETING POWER SYSTEM",
    slug: "marketing-power-system",
    headline: "Xây dựng hệ thống marketing tự động hóa giúp doanh nghiệp tăng trưởng bền vững.",
    description:
      "Học cách thiết kế phễu chuyển đổi đa kênh, tận dụng AI trong cá nhân hóa nội dung và tối ưu hành trình khách hàng.",
    startDate: "Khai giảng: 05 Tháng 1, 2026",
    duration: "4 tuần • Online",
    highlights: ["Automation Blueprint", "Email System", "Dashboard KPI"],
  },
  {
    title: "KHAI PHÁ NĂNG LỰC DOANH NHÂN",
    slug: "khai-pha-nang-luc-doanh-nhan",
    headline: "Tái cấu trúc tư duy và chiến lược cá nhân để đạt chuẩn lãnh đạo thế hệ mới.",
    description:
      "Chương trình trải nghiệm 3 ngày với bài tập nội lực, quản trị cảm xúc và định vị cá nhân, dành cho nhà sáng lập & quản lý cấp cao.",
    startDate: "Khai giảng: 22 Tháng 2, 2026",
    duration: "3 ngày • Trực tiếp",
    highlights: ["Mindset Lab", "Personal Strategy Map", "Peer Coaching"],
  },
  {
    title: "TRẠI DOANH NHÂN TRIỆU ĐÔ",
    slug: "trai-doanh-nhan-trieu-do",
    headline: "Hành trình chuyên sâu giúp doanh nghiệp nhân 3 doanh thu trong 12 tháng.",
    description:
      "Bootcamp 7 ngày kết hợp chiến lược tài chính, vận hành và lãnh đạo giúp doanh nhân nâng cấp hệ thống toàn diện.",
    startDate: "Khai giảng: 15 Tháng 4, 2026",
    duration: "7 ngày • Retreat",
    highlights: ["Growth Playbook", "Capital Strategy", "Leadership Circle"],
  },
]

const modules = [
  {
    title: "Chiến lược & Lãnh đạo",
    description: "Xây dựng tầm nhìn, thiết kế chiến lược hành động và hệ thống đo lường hiệu quả.",
    lessons: 14,
  },
  {
    title: "Vận hành & Quy trình",
    description: "Chuẩn hóa quy trình, phân quyền thông minh và tối ưu nguồn lực đội nhóm.",
    lessons: 12,
  },
  {
    title: "Marketing & Bán hàng",
    description: "Chiến lược đa kênh, tư duy bán hàng tư vấn và ứng dụng công nghệ trong tăng trưởng.",
    lessons: 16,
  },
  {
    title: "Năng lực cá nhân",
    description: "Quản trị năng lượng, xây dựng thói quen và phát triển tư duy lãnh đạo bền vững.",
    lessons: 10,
  },
]

const testimonials = [
  {
    name: "Lê Minh Phong",
    role: "CEO, NovaLife Insurance",
    quote:
      "Chương trình giúp chúng tôi tái cấu trúc hệ thống kinh doanh, chỉ sau 90 ngày doanh số tăng 48% và đội ngũ gắn kết hơn bao giờ hết.",
  },
  {
    name: "Trần Hoài An",
    role: "Founder, Aster Academy",
    quote:
      "Điều khác biệt nằm ở tính thực tiễn. Mỗi module đều có bài tập áp dụng ngay, được phản hồi trực tiếp từ anh Sơn và đội ngũ chuyên gia.",
  },
]

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-32 space-y-24">
        <section className="space-y-8">
          <div className="space-y-4 sm:space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Programs & Courses / 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              Hệ sinh thái đào tạo dành cho nhà lãnh đạo doanh nghiệp
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Các chương trình được thiết kế dựa trên 20 năm kinh nghiệm thực chiến trong ngành bảo hiểm, bán hàng và huấn luyện
              đội ngũ. Tập trung vào chiến lược, vận hành, marketing và phát triển con người.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {["Leadership", "Growth", "Systems", "Coaching", "High-Performance"].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">Featured Program</div>
              <h2 className="text-3xl sm:text-4xl font-light">Trải nghiệm trọng tâm</h2>
            </div>
            <Link
              href={`/course/${featuredCourse.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Xem chi tiết →
            </Link>
          </div>

          <article className="group border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-muted-foreground/50 hover:shadow-xl">
            <div className="p-8 sm:p-10 space-y-6 bg-muted/10">
              <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-mono uppercase tracking-widest">
                <span>{featuredCourse.startDate}</span>
                <span>{featuredCourse.duration}</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {featuredCourse.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{featuredCourse.headline}</p>
                <p className="text-muted-foreground/90 leading-relaxed">{featuredCourse.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {featuredCourse.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 border border-border rounded-full group-hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={`/course/${featuredCourse.slug}`}
                className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300"
              >
                <span>Đăng ký ngay</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </article>
        </section>

        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-light">Chương trình nổi bật</h2>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">Thực hành 100%</span>
          </div>

          <div className="space-y-8">
            {programs.map((program) => (
              <article key={program.slug} className="group border-b border-border/60 pb-8 hover:border-border transition-colors duration-500">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono uppercase">
                  <span>{program.startDate}</span>
                  <span>{program.duration}</span>
                </div>
                <div className="mt-4 space-y-4">
                  <Link
                    href={`/course/${program.slug}`}
                    className="inline-block text-xl sm:text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300"
                  >
                    {program.title}
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">{program.headline}</p>
                  <p className="text-muted-foreground/90 leading-relaxed max-w-2xl">{program.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {program.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border border-border rounded-full group-hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/course/${program.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <span>Khám phá chương trình</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-border rounded-2xl p-8 sm:p-10 space-y-10 bg-muted/5">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">Lộ trình học tập</div>
            <h2 className="text-3xl font-light">Module trọng tâm</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Mỗi chương trình được xây dựng theo khung năng lực 4 chiều, đảm bảo sự cân bằng giữa chiến lược, hệ thống vận hành và
              phát triển con người.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {modules.map((module) => (
              <div
                key={module.title}
                className="group border border-border rounded-xl p-6 hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono uppercase">
                    <span>Module</span>
                    <span>{String(module.lessons).padStart(2, "0")} bài học</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[2fr,3fr] items-start">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">Học viên nói gì?</div>
            <h2 className="text-2xl sm:text-3xl font-light">Câu chuyện chuyển hóa</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hơn 1.500 buổi đào tạo và coaching chuyên sâu đã tạo ra kết quả thực tế cho các doanh nghiệp trong và ngoài nước.
            </p>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="border border-border rounded-2xl p-6 sm:p-8 space-y-4 hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <p className="text-lg text-foreground leading-relaxed">“{testimonial.quote}”</p>
                <footer className="text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div>{testimonial.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="border border-border rounded-2xl p-8 sm:p-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-[0.3em]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Next Cohort</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light">Sẵn sàng đồng hành cùng đội ngũ của bạn</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Đặt lịch tư vấn miễn phí để được xây dựng lộ trình phù hợp với mô hình doanh nghiệp của bạn, từ chiến lược đến triển khai
            thực tế.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4 text-sm">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-lg border border-border px-5 py-3 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-all duration-300"
            >
              Đặt lịch tư vấn
            </Link>
            <Link
              href="/blog"
              className="inline-flex justify-center rounded-lg border border-border px-5 py-3 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-all duration-300"
            >
              Xem câu chuyện thành công
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

