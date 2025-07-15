// File: components/header/nav-items.tsx

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface NavItemsProps {
  language: 'vi' | 'en'
}

export default function NavItems({ language }: NavItemsProps) {
  const content = {
    vi: {
      home: 'Trang chủ',
      jobs: 'Việc làm',
      courses: 'Khóa học',
      cvTemplate: 'CV mẫu',
      cvBuilder: 'Tạo CV',
      employer: 'Nhà tuyển dụng',
      about: 'Giới thiệu'
    },
    en: {
      home: 'Home',
      jobs: 'Jobs',
      courses: 'Courses',
      cvTemplate: 'CV Templates',
      cvBuilder: 'CV Builder',
      employer: 'Employers',
      about: 'About'
    }
  }

  const t = content[language]

  const navItems = [
    { label: t.home, href: '/' },
    { label: t.jobs, href: '/jobs', badge: 'Hot' },
    { label: t.courses, href: '/community/courses' },
    { label: t.cvTemplate, href: '/cv-template' },
    { label: t.cvBuilder, href: '/cv-builder', badge: 'New' },
    { label: t.employer, href: '/employer' },
    { label: t.about, href: '/about' }
  ]

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <motion.div key={item.href} className="relative">
          <motion.a
            href={item.href}
            className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            {item.badge && (
              <Badge
                variant="secondary"
                className="text-xs px-1.5 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white"
              >
                {item.badge}
              </Badge>
            )}
          </motion.a>
        </motion.div>
      ))}
    </nav>
  )
}
