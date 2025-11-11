'use client'

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, MessageCircle, Phone, Youtube, Zap, Mail, MapPin } from "lucide-react"

const socialLinks = [
  { label: "Zalo", icon: MessageCircle, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Youtube", icon: Youtube, href: "#" },
  { label: "Hotline", icon: Phone, href: "tel:0947428338" },
  { label: "Website", icon: Zap, href: "#" },
]

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0">
<div className="youtube-container">
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
</div>

</div>

      <div className="relative z-10 flex min-h-screen items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-10 text-white">
            <div className="space-y-5 backdrop-blur-2xl p-4 rounded-2xl bg-foreground/50">
              <div className="space-y-3">
                <div className="text-base font-semibold uppercase tracking-[0.5rem] text-white/70">Liên hệ</div>
                <h1 className="text-4xl font-light md:text-5xl">Nguyễn Ngọc Sơn</h1>
              </div>
              <div className="space-y-2 text-base text-white/80 md:text-lg">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 text-red-500" />
                  <span>
                    Địa chỉ: ố nhà 20, Đường 1, Khu D, KĐT Sinh thái Sông Hồng Nam Đầm Vạc, Phường Vĩnh Phúc, Tỉnh Phú Thọ, Việt Nam
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="size-5 text-red-500" />
                  <span>Email: admin@nguyenngocson.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-5 text-red-500" />
                  <span>Hotline tư vấn: 0912 897 102</span>
                </p>
              </div>
            </div>

          </div>

          <div className="w-full max-w-xl rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur sm:p-10">
            <form className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Họ tên <span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" placeholder="Họ tên" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" type="email" placeholder="Email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </Label>
                  <Input id="phone" type="tel" placeholder="Số điện thoại" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="field" className="text-sm font-medium text-gray-700">
                    Bạn đang hoạt động lĩnh vực gì
                  </Label>
                  <Select>
                    <SelectTrigger id="field" className="w-full">
                      <SelectValue placeholder="Chọn lĩnh vực" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kinh-doanh">Kinh doanh</SelectItem>
                      <SelectItem value="bao-hiem">Bảo hiểm</SelectItem>
                      <SelectItem value="giao-duc">Giáo dục</SelectItem>
                      <SelectItem value="tai-chinh">Tài chính</SelectItem>
                      <SelectItem value="khac">Lĩnh vực khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course" className="text-sm font-medium text-gray-700">
                  Khóa học quan tâm
                </Label>
                <Select>
                  <SelectTrigger id="course" className="w-full">
                    <SelectValue placeholder="Chọn khóa học" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wealth-awakening">Đánh thức sự giàu có</SelectItem>
                    <SelectItem value="leadership">Lãnh đạo truyền cảm hứng</SelectItem>
                    <SelectItem value="sales-master">Bậc thầy bán hàng</SelectItem>
                    <SelectItem value="business-coaching">Huấn luyện doanh nghiệp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Nội dung
                </Label>
                <Textarea id="message" placeholder="Nội dung nhắn gửi" className="min-h-[140px]" />
              </div>

              <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-500">
                Gửi yêu cầu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

