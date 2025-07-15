import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S-HIRE.VN - Nền tảng tuyển dụng & phát triển nghề nghiệp",
  description: "Tìm việc làm mơ ước, học các khóa học chất lượng và tạo CV chuyên nghiệp tại S-HIRE.VN",
    generator: 'v0.dev'
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
