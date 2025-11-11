import Link from "next/link"

const featuredPost = {
  title: "Chiến lược phát triển đội ngũ kinh doanh bền vững",
  slug: "chien-luoc-phat-trien-doi-ngu-kinh-doanh-ben-vung",
  excerpt:
    "Những nguyên tắc cốt lõi giúp đội ngũ kinh doanh tăng trưởng ổn định, từ xây dựng văn hóa đến tối ưu quy trình vận hành hàng ngày.",
  publishedAt: "Tháng 10, 2025",
  readingTime: "8 phút đọc",
  tags: ["Leadership", "Growth", "Sales Enablement"],
}

const posts = [
  featuredPost,
  {
    title: "Xây dựng hệ thống đào tạo nội bộ hiệu quả trong 90 ngày",
    slug: "xay-dung-he-thong-dao-tao-noi-bo-hieu-qua-trong-90-ngay",
    excerpt:
      "Lộ trình 3 giai đoạn để triển khai chương trình đào tạo toàn diện, tạo động lực tự học và nâng cao hiệu suất cho đội ngũ.",
    publishedAt: "Tháng 9, 2025",
    readingTime: "6 phút đọc",
    tags: ["Coaching", "Productivity"],
  },
  {
    title: "Tận dụng dữ liệu để ra quyết định kinh doanh chính xác",
    slug: "tan-dung-du-lieu-ra-quyet-dinh-kinh-doanh-chinh-xac",
    excerpt:
      "5 bước để doanh nghiệp vừa và nhỏ áp dụng tư duy dữ liệu, giúp tối ưu hoạt động bán hàng và chăm sóc khách hàng.",
    publishedAt: "Tháng 8, 2025",
    readingTime: "7 phút đọc",
    tags: ["Data Strategy", "Operations"],
  },
  {
    title: "Nghệ thuật thuyết trình truyền cảm hứng cho lãnh đạo",
    slug: "nghe-thuat-thuyet-trinh-truyen-cam-hung-cho-lanh-dao",
    excerpt:
      "Các kỹ thuật storytelling, ngôn ngữ cơ thể và hình ảnh hóa giúp thông điệp của bạn chạm đến đội nhóm và khách hàng.",
    publishedAt: "Tháng 7, 2025",
    readingTime: "5 phút đọc",
    tags: ["Public Speaking", "Mindset"],
  },
  {
    title: "Thiết kế trải nghiệm khách hàng đa kênh trong ngành bảo hiểm",
    slug: "thiet-ke-trai-nghiem-khach-hang-da-kenh-trong-nganh-bao-hiem",
    excerpt:
      "Cách kết hợp giữa marketing automation, đội ngũ tư vấn viên và nội dung cá nhân hóa để nâng cao lòng tin khách hàng.",
    publishedAt: "Tháng 6, 2025",
    readingTime: "9 phút đọc",
    tags: ["Customer Experience", "Automation"],
  },
]

const categories = [
  { name: "Chiến lược kinh doanh", count: 12 },
  { name: "Huấn luyện & đào tạo", count: 9 },
  { name: "Lãnh đạo & văn hoá", count: 7 },
  { name: "Marketing & bán hàng", count: 11 },
  { name: "Tư duy & phát triển bản thân", count: 5 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-32 space-y-24">
        <section className="space-y-8">
          <div className="space-y-4 sm:space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Blog & Insights / 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              Những góc nhìn sâu sắc dành cho doanh nhân hiện đại
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Khám phá các bài viết về chiến lược kinh doanh, phát triển đội ngũ, tư duy lãnh đạo và những trải nghiệm thực tế
              trong hành trình xây dựng doanh nghiệp bền vững.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {["Tư duy lãnh đạo", "Huấn luyện đội nhóm", "Tăng trưởng doanh nghiệp", "Marketing tự động"].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">Bài viết nổi bật</div>
              <h2 className="text-3xl sm:text-4xl font-light">Câu chuyện tiêu biểu</h2>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Đọc toàn bộ bài viết →
            </Link>
          </div>

          <article className="group border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-muted-foreground/50 hover:shadow-xl">
            <div className="p-8 sm:p-10 space-y-6 bg-muted/10">
              <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-mono uppercase tracking-widest">
                <span>{featuredPost.publishedAt}</span>
                <span>{featuredPost.readingTime}</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{featuredPost.excerpt}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-border rounded-full text-muted-foreground group-hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300"
              >
                <span>Khám phá ngay</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </article>
        </section>

        <section className="space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-light">Bài viết mới nhất</h2>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">Cập nhật hàng tuần</span>
            </div>

            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group border-b border-border/60 pb-8 hover:border-border transition-colors duration-500"
                >
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono uppercase">
                    <span>{post.publishedAt}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/title inline-block text-xl sm:text-2xl font-medium text-foreground group-hover/title:text-muted-foreground transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 border border-border rounded-full group-hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <span>Đọc tiếp</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
        </section>
      </main>
    </div>
  )
}

