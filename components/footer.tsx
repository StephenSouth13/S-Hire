"use client"

import { motion } from "framer-motion"
import {
  Facebook,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Star,
  Users,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FooterProps {
  language: "vi" | "en"
}

export default function Footer({ language }: FooterProps) {
  const content = {
    vi: {
      company: "Công ty",
      about: "Giới thiệu",
      careers: "Tuyển dụng",
      contact: "Liên hệ",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
      services: "Dịch vụ",
      findJobs: "Tìm việc làm",
      courses: "Khóa học",
      cvBuilder: "Tạo CV",
      employers: "Dành cho nhà tuyển dụng",
      support: "Hỗ trợ",
      help: "Trung tâm trợ giúp",
      faq: "Câu hỏi thường gặp",
      feedback: "Góp ý",
      followUs: "Theo dõi chúng tôi",
      newsletter: "Đăng ký nhận tin tức mới nhất",
      subscribe: "Đăng ký",
      address: "Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM",
      phone: "Điện thoại: +84 123 456 789",
      email: "Email: contact@s-hire.vn",
      stats: "Thống kê",
      jobsPosted: "Việc làm đã đăng",
      companiesJoined: "Công ty tham gia",
      candidatesHired: "Ứng viên được tuyển",
      successRate: "Tỷ lệ thành công",
      quickLinks: "Liên kết nhanh",
      popularCategories: "Danh mục phổ biến",
      itJobs: "Việc làm IT",
      marketingJobs: "Việc làm Marketing",
      salesJobs: "Việc làm Kinh doanh",
      hrJobs: "Việc làm Nhân sự",
    },
    en: {
      company: "Company",
      about: "About Us",
      careers: "Careers",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      services: "Services",
      findJobs: "Find Jobs",
      courses: "Courses",
      cvBuilder: "CV Builder",
      employers: "For Employers",
      support: "Support",
      help: "Help Center",
      faq: "FAQ",
      feedback: "Feedback",
      followUs: "Follow Us",
      newsletter: "Subscribe to our newsletter",
      subscribe: "Subscribe",
      address: "Address: 123 ABC Street, XYZ District, Ho Chi Minh City",
      phone: "Phone: +84 123 456 789",
      email: "Email: contact@s-hire.vn",
      stats: "Statistics",
      jobsPosted: "Jobs Posted",
      companiesJoined: "Companies Joined",
      candidatesHired: "Candidates Hired",
      successRate: "Success Rate",
      quickLinks: "Quick Links",
      popularCategories: "Popular Categories",
      itJobs: "IT Jobs",
      marketingJobs: "Marketing Jobs",
      salesJobs: "Sales Jobs",
      hrJobs: "HR Jobs",
    },
  }

  const t = content[language]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <MessageCircle className="h-5 w-5" />, href: "#", label: "Zalo", color: "hover:bg-blue-500" },
  ]

  const stats = [
    { icon: <Briefcase className="h-6 w-6" />, value: "15,000+", label: t.jobsPosted },
    { icon: <Users className="h-6 w-6" />, value: "2,500+", label: t.companiesJoined },
    { icon: <Award className="h-6 w-6" />, value: "50,000+", label: t.candidatesHired },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: t.successRate },
  ]

  const popularCategories = [
    { name: t.itJobs, count: "3,200+" },
    { name: t.marketingJobs, count: "1,800+" },
    { name: t.salesJobs, count: "2,100+" },
    { name: t.hrJobs, count: "950+" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t">
      {/* Stats Section */}
      <div className="border-b bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-sm bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700">
                  <CardContent className="p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  S
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  S-HIRE.VN
                </span>
                <div className="text-sm text-muted-foreground">
                  {language === "vi" ? "Tuyển dụng thông minh" : "Smart Recruitment"}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {language === "vi"
                ? "Nền tảng tuyển dụng và phát triển nghề nghiệp hàng đầu Việt Nam. Kết nối ứng viên tài năng với các cơ hội việc làm tốt nhất từ những công ty uy tín."
                : "Leading recruitment and career development platform in Vietnam. Connecting talented candidates with the best job opportunities from reputable companies."}
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <MapPin className="h-4 w-4" />
                </div>
                {t.address}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Phone className="h-4 w-4" />
                </div>
                {t.phone}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white">
                  <Mail className="h-4 w-4" />
                </div>
                {t.email}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                {t.followUs}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-muted rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">{t.quickLinks}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {t.careers}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {t.contact}
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {t.privacy}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {t.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">{t.services}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/jobs"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  {t.findJobs}
                </a>
              </li>
              <li>
                <a
                  href="/community/courses"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  {t.courses}
                </a>
              </li>
              <li>
                <a
                  href="/cv-builder"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  {t.cvBuilder}
                </a>
              </li>
              <li>
                <a
                  href="/employer"
                  className="text-muted-foreground hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  {t.employers}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-3">{t.popularCategories}</h4>
              <div className="space-y-2">
                {popularCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{t.newsletter}</p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input placeholder="your@email.com" className="flex-1 bg-white/50 dark:bg-slate-800/50" />
                <Button
                  size="icon"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {language === "vi"
                  ? "Nhận thông báo về việc làm mới và cơ hội phát triển nghề nghiệp."
                  : "Get notified about new jobs and career development opportunities."}
              </p>
            </div>

            {/* Support */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">{t.support}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/help" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                    {t.help}
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                    {t.faq}
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                    {t.feedback}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 S-hire.vn ||{" "}
                <span className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {language === "vi" ? "Được phát triển bởi phòng CNTT (VSM)" : "Developed by IT Department (VSM)"}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {language === "vi" ? "Hệ thống hoạt động bình thường" : "All systems operational"}
              </span>
              <span>v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
