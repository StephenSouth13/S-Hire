// File: components/header.tsx

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import AuthModal from "@/components/auth-modal"
import Logo from "@/components/header/logo"
import NavItems from "@/components/header/nav-items"
import MobileMenu from "@/components/header/mobile-menu"
import LangSwitcher from "@/components/header/lang-switcher"
import ThemeToggle from "@/components/header/theme-toggle"
import UserDropdown from "@/components/header/user-dropdown"

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

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo language={language} />
            <NavItems language={language} />
            <div className="flex items-center gap-2">
              <LangSwitcher language={language} setLanguage={setLanguage} />
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

              {isLoggedIn ? (
                <UserDropdown language={language} onLogout={() => setIsLoggedIn(false)} />
              ) : (
                <div className="hidden lg:flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => handleAuthClick("login")}>Đăng nhập</Button>
                  <Button size="sm" onClick={() => handleAuthClick("register")}>Đăng ký</Button>
                </div>
              )}

              {/* Mobile Only */}
              <div className="lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 h-9">
                      ☰
                    </Button>
                  </SheetTrigger>
                  <MobileMenu
                    language={language}
                    isLoggedIn={isLoggedIn}
                    onLogout={() => setIsLoggedIn(false)}
                    onLoginClick={() => handleAuthClick("login")}
                    onRegisterClick={() => handleAuthClick("register")}
                    setIsOpen={setIsOpen}
                  />
                </Sheet>
              </div>
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
