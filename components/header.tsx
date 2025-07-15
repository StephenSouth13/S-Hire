"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Sun, Moon, Globe, ChevronDown, User, LogIn, UserPlus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import AuthModal from "@/components/auth-modal"

interface HeaderProps {
  language: "vi" | "en"
  setLanguage: (lang: "vi" | "en") => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function Header({ language, setLanguage, darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const content = {
    vi: {
      home: "Trang chủ",
      jobs: "Việc làm",
      courses: "Khóa học",
      cvTemplate: "CV mẫu",
      cvBuilder: "Tạo CV",
      profile: "Hồ sơ",
      employer: "Nhà tuyển dụng",
      about: "Giới thiệu",
      login: "Đăng nhập",
      register: "Đăng ký",
      logout: "Đăng xuất",
      myProfile: "Hồ sơ của tôi",
      myApplications: "Đơn ứng tuyển",
      savedJobs: "Việc đã lưu",
      settings: "Cài đặt",
      searchPlaceholder: "Tìm kiếm việc làm, khóa học...",
    },
    en: {
      home: "Home",
      jobs: "Jobs",
      courses: "Courses",
      cvTemplate: "CV Templates",
      cvBuilder: "CV Builder",
      profile: "Profile",
      employer: "Employers",
      about: "About",
      login: "Login",
      register: "Register",
      logout: "Logout",
      myProfile: "My Profile",
      myApplications: "My Applications",
      savedJobs: "Saved Jobs",
      settings: "Settings",
      searchPlaceholder: "Search jobs, courses...",
    },
  }

  const t = content[language]

  const navItems = [
    { label: t.home, href: "/" },
    { label: t.jobs, href: "/jobs", badge: "Hot" },
    { label: t.courses, href: "/community/courses" },
    { label: t.cvTemplate, href: "/cv-template" },
    { label: t.cvBuilder, href: "/cv-builder", badge: "New" },
    { label: t.employer, href: "/employer" },
    { label: t.about, href: "/about" },
  ]

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  S
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  S-HIRE.VN
                </span>
                <div className="text-xs text-muted-foreground -mt-1">
                  {language === "vi" ? "Tuyển dụng thông minh" : "Smart Recruitment"}
                </div>
              </div>
            </motion.div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder={t.searchPlaceholder} className="pl-10 bg-muted/50 border-0 focus-visible:ring-1" />
              </div>
            </div>

            {/* Desktop Navigation */}
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

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 px-3">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">{language.toUpperCase()}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem onClick={() => setLanguage("vi")} className="gap-2">
                    🇻🇳 Tiếng Việt
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")} className="gap-2">
                    🇺🇸 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dark Mode Toggle */}
              <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="w-9 h-9">
                <motion.div initial={false} animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.div>
              </Button>

              {/* Auth Section */}
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 px-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        U
                      </div>
                      <span className="hidden sm:inline">User Name</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="gap-2">
                      <User className="h-4 w-4" />
                      {t.myProfile}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Search className="h-4 w-4" />
                      {t.myApplications}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Search className="h-4 w-4" />
                      {t.savedJobs}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="gap-2 text-red-600">
                      <LogIn className="h-4 w-4" />
                      {t.logout}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden lg:flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => handleAuthClick("login")} className="gap-2">
                    <LogIn className="h-4 w-4" />
                    {t.login}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleAuthClick("register")}
                    className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  >
                    <UserPlus className="h-4 w-4" />
                    {t.register}
                  </Button>
                </div>
              )}

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden w-9 h-9">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
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

                    {/* Mobile Search */}
                    <div className="p-4 border-b">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input placeholder={t.searchPlaceholder} className="pl-10" />
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 p-4">
                      <div className="space-y-2">
                        {navItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/80 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-medium">{item.label}</span>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </a>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile Auth */}
                    <div className="p-4 border-t bg-muted/30">
                      {isLoggedIn ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              U
                            </div>
                            <span className="font-medium">User Name</span>
                          </div>
                          <Button
                            variant="outline"
                            className="w-full bg-transparent"
                            onClick={() => setIsLoggedIn(false)}
                          >
                            {t.logout}
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            className="w-full gap-2 bg-transparent"
                            onClick={() => handleAuthClick("login")}
                          >
                            <LogIn className="h-4 w-4" />
                            {t.login}
                          </Button>
                          <Button
                            className="w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-600"
                            onClick={() => handleAuthClick("register")}
                          >
                            <UserPlus className="h-4 w-4" />
                            {t.register}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        mode={authMode}
        setMode={setAuthMode}
        language={language}
        onSuccess={() => setIsLoggedIn(true)}
      />
    </>
  )
}
