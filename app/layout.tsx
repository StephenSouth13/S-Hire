import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S-HIRE.VN - Nền tảng tuyển dụng & phát triển nghề nghiệp",
  description: "Tìm việc làm mơ ước, học các khóa học chất lượng và tạo CV chuyên nghiệp tại S-HIRE.VN",
    generator: 'Quách Thành Long',
    icons: {
    icon: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  applicationName: "S-HIRE.VN",
  keywords: [
    "tuyển dụng",
    "việc làm",
    "học trực tuyến",
    "khóa học",
    "phát triển nghề nghiệp",
    "tạo CV",
    "việc làm tại Việt Nam",
    "việc làm IT",
    "việc làm marketing",   
    "việc làm bán hàng",
    "việc làm thiết kế",
    "việc làm nhân sự",
    "việc làm kế toán",
    "việc làm kỹ thuật",
    "việc làm tự do",
    "việc làm part-time",
    "việc làm full-time",
    "việc làm online",
    "việc làm từ xa",
    "việc làm sinh viên",
    "việc làm mới nhất",
    "việc làm hấp dẫn",
    "việc làm lương cao",
    "việc làm hot",
    "việc làm tại Hà Nội",
    "việc làm tại Hồ Chí Minh",
    "việc làm tại Đà Nẵng",
    "việc làm tại Hải Phòng",
    "việc làm tại Cần Thơ",
    "việc làm tại Bình Dương",
    "việc làm tại Đồng Nai",
    "việc làm tại Khánh Hòa",
    "việc làm tại Quảng Ninh",
    "việc làm tại Nghệ An",
    "việc làm tại Bình Thuận",
    "việc làm tại Thừa Thiên Huế",
    "việc làm tại Vĩnh Phúc",
    "việc làm tại Bắc Ninh",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
