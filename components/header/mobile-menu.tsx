// File: components/header/mobile-menu.tsx

'use client'

import { SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface MobileMenuProps {
  language: 'vi' | 'en'
  isLoggedIn: boolean
  onLogout: () => void
  onLoginClick: () => void
  onRegisterClick: () => void
  setIsOpen: (open: boolean) => void
}

export default function MobileMenu({
  language,
  isLoggedIn,
  onLogout,
  onLoginClick,
  onRegisterClick,
  setIsOpen,
}: MobileMenuProps) {
  const content = {
    vi: {
      home: 'Trang chủ',
      jobs: 'Việc làm',
      courses: 'Khóa học',
      cvTemplate: 'CV mẫu',
      cvBuilder: 'Tạo CV',
      employer: 'Nhà tuyển dụng',
      about: 'Giới thiệu',
      logout: 'Đăng xuất',
      login: 'Đăng nhập',
      register: 'Đăng ký',
    },
    en: {
      home: 'Home',
      jobs: 'Jobs',
      courses: 'Courses',
      cvTemplate: 'CV Templates',
      cvBuilder: 'CV Builder',
      employer: 'Employers',
      about: 'About',
      logout: 'Logout',
      login: 'Login',
      register: 'Register',
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
    <SheetContent side="right" className="w-80 p-0 lg:hidden">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div>
              <span className="text-xl font-bold">S-HIRE.VN</span>
              <div className="text-sm opacity-90">Smart Recruitment</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <Badge className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  {item.badge}
                </Badge>
              )}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t bg-muted/30 space-y-2">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  onLogout()
                  setIsOpen(false)
                }}
              >
                {t.logout}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  onLoginClick()
                  setIsOpen(false)
                }}
              >
                {t.login}
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                onClick={() => {
                  onRegisterClick()
                  setIsOpen(false)
                }}
              >
                {t.register}
              </Button>
            </>
          )}
        </div>
      </div>
    </SheetContent>
  )
}
