"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-32 left-20 z-20 max-w-lg bg-foreground/50 p-4 rounded backdrop-blur-2xl">
      <div className="text-left">
        {/* <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">✨ DIỄN GIẢ CHUYÊN GIA ĐÀO TẠO

</span>
        </div> */}

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">DIỄN GIẢ CHUYÊN GIA ĐÀO TẠO</span> <br/>
          Nguyễn Ngọc Sơn
        </h1>

        {/* Description */}
        <p className="text font-light text-white/70 mb-4 leading-relaxed">
        Nguyễn Ngọc Sơn là một nhà đào tạo và huấn luyện phát triển bản thân và kinh doanh hàng đầu tại Việt Nam
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Liên hệ
          </button>
        </div>
      </div>
    </main>
  )
}
