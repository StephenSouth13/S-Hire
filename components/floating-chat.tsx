"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Facebook, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface FloatingChatProps {
  language: "vi" | "en"
}

export default function FloatingChat({ language }: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showFAQ, setShowFAQ] = useState(true)
  const [message, setMessage] = useState("")

  const content = {
    vi: {
      title: "Hỗ trợ trực tuyến",
      subtitle: "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
      faqTitle: "Câu hỏi thường gặp",
      contactTitle: "Liên hệ trực tiếp",
      messagePlaceholder: "Nhập tin nhắn của bạn...",
      send: "Gửi",
      online: "Đang online",
    },
    en: {
      title: "Online Support",
      subtitle: "We are always ready to help you!",
      faqTitle: "Frequently Asked Questions",
      contactTitle: "Direct Contact",
      messagePlaceholder: "Type your message...",
      send: "Send",
      online: "Online",
    },
  }

  const t = content[language]

  const faqItems = [
    {
      question: language === "vi" ? "Làm thế nào để tạo CV chuyên nghiệp?" : "How to create a professional CV?",
      answer:
        language === "vi"
          ? 'Bạn có thể sử dụng công cụ tạo CV của chúng tôi tại mục "Tạo CV". Chọn mẫu phù hợp và điền thông tin cá nhân.'
          : 'You can use our CV builder tool in the "CV Builder" section. Choose a suitable template and fill in your personal information.',
    },
    {
      question: language === "vi" ? "Tôi có thể tìm việc làm như thế nào?" : "How can I find jobs?",
      answer:
        language === "vi"
          ? 'Truy cập mục "Việc làm", sử dụng bộ lọc để tìm công việc phù hợp với kỹ năng và kinh nghiệm của bạn.'
          : 'Visit the "Jobs" section, use filters to find jobs that match your skills and experience.',
    },
    {
      question: language === "vi" ? "Các khóa học có miễn phí không?" : "Are the courses free?",
      answer:
        language === "vi"
          ? "Chúng tôi có cả khóa học miễn phí và trả phí. Bạn có thể lọc theo giá để tìm khóa học phù hợp."
          : "We have both free and paid courses. You can filter by price to find suitable courses.",
    },
    {
      question: language === "vi" ? "Làm sao để liên hệ với nhà tuyển dụng?" : "How to contact employers?",
      answer:
        language === "vi"
          ? "Sau khi ứng tuyển, bạn có thể liên hệ trực tiếp qua thông tin được cung cấp trong tin tuyển dụng."
          : "After applying, you can contact directly through the information provided in the job posting.",
    },
  ]

  const contactMethods = [
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      value: "S-HIRE.VN",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Zalo",
      value: "0123 456 789",
      color: "bg-blue-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "support@s-hire.vn",
      color: "bg-green-500",
    },
  ]

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg"
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              {/* Header */}
              <CardHeader className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{t.title}</CardTitle>
                    <p className="text-sm opacity-90">{t.subtitle}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-500 text-white">
                    {t.online}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0 max-h-96 overflow-y-auto">
                {/* FAQ Section */}
                <div className="p-4 border-b">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-auto"
                    onClick={() => setShowFAQ(!showFAQ)}
                  >
                    <span className="font-medium">{t.faqTitle}</span>
                    {showFAQ ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  <AnimatePresence>
                    {showFAQ && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 space-y-3"
                      >
                        {faqItems.map((item, index) => (
                          <motion.div
                            key={index}
                            className="p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <p className="font-medium text-sm mb-1">{item.question}</p>
                            <p className="text-xs text-muted-foreground">{item.answer}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Methods */}
                <div className="p-4 border-b">
                  <h4 className="font-medium mb-3">{t.contactTitle}</h4>
                  <div className="space-y-2">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`w-8 h-8 ${method.color} rounded-lg flex items-center justify-center text-white`}
                        >
                          {method.icon}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{method.label}</p>
                          <p className="text-xs text-muted-foreground">{method.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder={t.messagePlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle send message
                          setMessage("")
                        }
                      }}
                    />
                    <Button size="icon" className="shrink-0">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
