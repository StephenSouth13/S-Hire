"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, User, Eye, EyeOff, Facebook, Chrome, Github, ArrowRight, Shield, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode: "login" | "register"
  setMode: (mode: "login" | "register") => void
  language: "vi" | "en"
  onSuccess: () => void
}

export default function AuthModal({ isOpen, onClose, mode, setMode, language, onSuccess }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const content = {
    vi: {
      login: "Đăng nhập",
      register: "Đăng ký",
      welcome: "Chào mừng trở lại!",
      welcomeRegister: "Tạo tài khoản mới",
      subtitle: "Đăng nhập để tiếp tục hành trình tìm việc",
      subtitleRegister: "Tham gia cộng đồng S-HIRE.VN ngay hôm nay",
      email: "Email",
      password: "Mật khẩu",
      confirmPassword: "Xác nhận mật khẩu",
      fullName: "Họ và tên",
      rememberMe: "Ghi nhớ đăng nhập",
      forgotPassword: "Quên mật khẩu?",
      loginButton: "Đăng nhập",
      registerButton: "Tạo tài khoản",
      noAccount: "Chưa có tài khoản?",
      hasAccount: "Đã có tài khoản?",
      signUpHere: "Đăng ký ngay",
      signInHere: "Đăng nhập ngay",
      orContinueWith: "Hoặc tiếp tục với",
      agreeTerms: "Tôi đồng ý với",
      termsOfService: "Điều khoản dịch vụ",
      and: "và",
      privacyPolicy: "Chính sách bảo mật",
      benefits: {
        title: "Tại sao chọn S-HIRE.VN?",
        items: [
          "Hàng nghìn cơ hội việc làm hấp dẫn",
          "Công cụ tạo CV chuyên nghiệp miễn phí",
          "Khóa học nâng cao kỹ năng chất lượng",
          "Kết nối với các nhà tuyển dụng uy tín",
        ],
      },
    },
    en: {
      login: "Login",
      register: "Register",
      welcome: "Welcome back!",
      welcomeRegister: "Create new account",
      subtitle: "Login to continue your job search journey",
      subtitleRegister: "Join S-HIRE.VN community today",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      fullName: "Full Name",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginButton: "Login",
      registerButton: "Create Account",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      signUpHere: "Sign up now",
      signInHere: "Sign in now",
      orContinueWith: "Or continue with",
      agreeTerms: "I agree to the",
      termsOfService: "Terms of Service",
      and: "and",
      privacyPolicy: "Privacy Policy",
      benefits: {
        title: "Why choose S-HIRE.VN?",
        items: [
          "Thousands of attractive job opportunities",
          "Free professional CV builder tool",
          "Quality skill enhancement courses",
          "Connect with reputable employers",
        ],
      },
    },
  }

  const t = content[language]

  const socialProviders = [
    {
      name: "Google",
      icon: <Chrome className="h-5 w-5" />,
      color: "hover:bg-red-50 hover:border-red-200 hover:text-red-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      color: "hover:bg-gray-50 hover:border-gray-200 hover:text-gray-600",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    onSuccess()
    onClose()
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="flex min-h-[600px]">
          {/* Left Side - Benefits */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div>
                    <span className="text-2xl font-bold">S-HIRE.VN</span>
                    <div className="text-sm opacity-90">Smart Recruitment</div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4">{t.benefits.title}</h2>

                <div className="space-y-4">
                  {t.benefits.items.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-white/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">{language === "vi" ? "Bảo mật tuyệt đối" : "Absolute Security"}</span>
                  </div>
                  <p className="text-sm opacity-90">
                    {language === "vi"
                      ? "Thông tin của bạn được bảo vệ bằng công nghệ mã hóa tiên tiến"
                      : "Your information is protected by advanced encryption technology"}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 right-5 w-12 h-12 bg-white/10 rounded-full"></div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 p-8">
            <DialogHeader className="text-center mb-6">
              <div className="flex lg:hidden items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  S-HIRE.VN
                </span>
              </div>

              <DialogTitle className="text-2xl font-bold">
                {mode === "login" ? t.welcome : t.welcomeRegister}
              </DialogTitle>
              <p className="text-muted-foreground">{mode === "login" ? t.subtitle : t.subtitleRegister}</p>
            </DialogHeader>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              {socialProviders.map((provider) => (
                <Button
                  key={provider.name}
                  variant="outline"
                  className={`w-full h-11 transition-all duration-300 ${provider.color}`}
                  onClick={() => {}}
                >
                  {provider.icon}
                  <span className="ml-2">
                    {mode === "login" ? "Login" : "Sign up"} with {provider.name}
                  </span>
                </Button>
              ))}
            </div>

            <div className="relative mb-6">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">{t.orContinueWith}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                {mode === "register" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {t.fullName}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  {t.password}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-11 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-11 px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {mode === "register" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        {t.confirmPassword}
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {mode === "login" ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      {t.rememberMe}
                    </Label>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    {t.forgotPassword}
                  </Button>
                </div>
              ) : (
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    {t.agreeTerms}{" "}
                    <Button variant="link" className="p-0 h-auto text-sm underline">
                      {t.termsOfService}
                    </Button>{" "}
                    {t.and}{" "}
                    <Button variant="link" className="p-0 h-auto text-sm underline">
                      {t.privacyPolicy}
                    </Button>
                  </Label>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {language === "vi" ? "Đang xử lý..." : "Processing..."}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {mode === "login" ? t.loginButton : t.registerButton}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </form>

            {/* Switch Mode */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                {mode === "login" ? t.noAccount : t.hasAccount}{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium text-indigo-600 hover:text-indigo-700"
                  onClick={() => setMode(mode === "login" ? "register" : "login")}
                >
                  {mode === "login" ? t.signUpHere : t.signInHere}
                </Button>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
