// app/employer/page.tsx
'use client'

import { useState } from 'react' // Import useState
import { Check, Rocket, Users, Briefcase, Sparkles, LayoutGrid, Award, Lightbulb, TrendingUp, HelpCircle, PhoneCall, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
// SỬA LỖI: Nhập 'Variants' từ framer-motion
import { motion, Variants } from 'framer-motion'
import { Input } from '@/components/ui/input' // Giả định có component Input
import { Textarea } from '@/components/ui/textarea' // Giả định có component Textarea
import Link from 'next/link' // Giả định sử dụng Next.js Link
import Footer from "@/components/footer"
import Header from "@/components/header"
import FloatingChat from "@/components/floating-chat"

// SỬA LỖI: Thêm kiểu 'Variants' để TypeScript nhận diện đúng
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// SỬA LỖI: Thêm kiểu 'Variants' để TypeScript nhận diện đúng
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

// SỬA LỖI: Thêm kiểu 'Variants' để TypeScript nhận diện đúng
const buttonVariants: Variants = {
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
  tap: { scale: 0.98 },
}

export default function EmployerPage() {
  // State for language, assuming Header/Footer/FloatingChat might use it
  const [language, setLanguage] = useState<'vi' | 'en'>('vi'); // Default to Vietnamese

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-800 dark:text-zinc-100 font-sans antialiased flex flex-col">
      {/* Header Component */}
      <Header language={language} setLanguage={setLanguage} darkMode={false} setDarkMode={() => {}} /> {/* Assuming language/darkMode props are handled by Header */}

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-900 text-white py-28 md:py-40 px-6 text-center shadow-2xl">
          {/* Subtle background pattern/animation */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Sparkles className="w-full h-full text-indigo-400 opacity-30 animate-pulse-slow" /> {/* Custom pulse animation */}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight drop-shadow-xl">
              Giải pháp <span className="text-purple-300">tuyển dụng đột phá</span> cho Doanh nghiệp của bạn
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-14 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Khám phá sức mạnh của công nghệ AI và dữ liệu lớn để tìm kiếm, thu hút và quản lý ứng viên tiềm năng một cách nhanh chóng, hiệu quả.
            </p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="bg-white text-indigo-800 hover:bg-indigo-50 transition-all duration-300 shadow-2xl font-semibold text-lg md:text-xl px-12 py-7 rounded-full uppercase tracking-wide group"
              >
                <Rocket className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                Đăng tin tuyển dụng ngay
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            Tại sao <span className="text-indigo-600 dark:text-purple-400">S-Hire</span> là đối tác tuyển dụng hàng đầu?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14 text-center"
          >
            {[
              { icon: <Users className="w-14 h-14 text-indigo-600 dark:text-purple-400" />, label: 'Tiếp cận nhanh chóng ứng viên chất lượng' },
              { icon: <Briefcase className="w-14 h-14 text-indigo-600 dark:text-purple-400" />, label: 'Quản lý toàn diện quy trình tuyển dụng' },
              { icon: <Rocket className="w-14 h-14 text-indigo-600 dark:text-purple-400" />, label: 'Tăng tốc độ tuyển dụng với AI thông minh' },
              { icon: <Award className="w-14 h-14 text-indigo-600 dark:text-purple-400" />, label: 'Tin tuyển dụng nổi bật, tăng tương tác' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-10 rounded-3xl bg-zinc-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700 flex flex-col items-center justify-center h-full transform hover:-translate-y-3 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-6 bg-indigo-100 dark:bg-purple-900 p-5 rounded-full shadow-lg group-hover:bg-indigo-200 dark:group-hover:bg-purple-800 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50 leading-snug">{item.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="py-20 md:py-32 px-6 bg-zinc-50 dark:bg-zinc-850">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            Những tính năng <span className="text-indigo-600 dark:text-purple-400">độc quyền</span> của chúng tôi
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {[
              {
                icon: <LayoutGrid className="w-9 h-9 text-white" />,
                title: 'Hệ thống Quản lý ATS toàn diện',
                description: 'Quản lý toàn bộ vòng đời ứng viên từ ứng tuyển đến tuyển dụng, tích hợp báo cáo và phân tích chuyên sâu, giúp tối ưu hóa quy trình.',
              },
              {
                icon: <Lightbulb className="w-9 h-9 text-white" />,
                title: 'Công nghệ AI Match thông minh',
                description: 'Tự động đề xuất ứng viên phù hợp nhất với yêu cầu công việc của bạn, dựa trên phân tích chuyên sâu về kỹ năng và kinh nghiệm, giảm thời gian tìm kiếm.',
              },
              {
                icon: <TrendingUp className="w-9 h-9 text-white" />,
                title: 'Thống kê & Báo cáo hiệu suất',
                description: 'Theo dõi hiệu suất tuyển dụng theo thời gian thực, phân tích dữ liệu ứng viên chi tiết để đưa ra quyết định chiến lược và tối ưu hóa chiến dịch.',
              },
              {
                icon: <Users className="w-9 h-9 text-white" />,
                title: 'Kho hồ sơ ứng viên đa dạng & phong phú',
                description: 'Tiếp cận hàng triệu hồ sơ chất lượng cao, được cập nhật liên tục, đến từ nhiều ngành nghề và cấp độ kinh nghiệm khác nhau.',
              },
              {
                icon: <Briefcase className="w-9 h-9 text-white" />,
                title: 'Tùy chỉnh tin tuyển dụng chuyên nghiệp',
                description: 'Tạo tin tuyển dụng ấn tượng với các mẫu thiết kế sẵn có, dễ dàng tùy chỉnh theo nhận diện thương hiệu của doanh nghiệp bạn.',
              },
              {
                icon: <Check className="w-9 h-9 text-white" />,
                title: 'Hỗ trợ khách hàng 24/7 tận tâm',
                description: 'Đội ngũ hỗ trợ chuyên nghiệp, thân thiện luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn trong suốt quá trình sử dụng dịch vụ.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group"
              >
                <div className="flex-shrink-0 bg-indigo-600 dark:bg-purple-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:bg-indigo-700 dark:group-hover:bg-purple-700 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50 leading-snug">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-850">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            <span className="text-indigo-600 dark:text-purple-400">Bảng giá</span> dịch vụ tối ưu cho mọi quy mô doanh nghiệp
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                name: 'Gói Miễn Phí',
                price: '0₫',
                period: 'Mãi mãi',
                description: 'Giải pháp cơ bản cho các doanh nghiệp mới bắt đầu hoặc có nhu cầu tuyển dụng ít.',
                features: ['Đăng 1 tin/tháng', 'Hiển thị 7 ngày', 'Không nổi bật', 'Hỗ trợ cơ bản qua email'],
                buttonText: 'Bắt đầu ngay',
              },
              {
                name: 'Gói Tiêu Chuẩn',
                price: '299.000₫',
                period: '/tháng',
                description: 'Phù hợp cho các doanh nghiệp vừa và nhỏ với nhu cầu tuyển dụng thường xuyên.',
                features: ['Đăng 5 tin/tháng', 'Hiển thị 30 ngày', 'Gắn nổi bật 7 ngày', 'Hỗ trợ ưu tiên qua chat', 'Truy cập thư viện mẫu tin'],
                buttonText: 'Chọn gói này',
              },
              {
                name: 'Gói Pro',
                price: '499.000₫',
                period: '/tháng',
                description: 'Giải pháp toàn diện nhất cho các doanh nghiệp lớn, có nhu cầu tuyển dụng khối lượng cao.',
                features: ['Không giới hạn tin', 'Tự động hiển thị nổi bật mọi lúc', 'Hỗ trợ lọc ứng viên chuyên sâu', 'Tích hợp ATS cơ bản', 'Ưu tiên hiển thị kết quả tìm kiếm', 'Tư vấn chiến lược tuyển dụng'],
                buttonText: 'Nâng cấp ngay',
                highlight: true,
              },
            ].map((gói, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`rounded-3xl p-8 shadow-xl transition-all duration-300 border-2 ${
                  gói.highlight
                    ? 'bg-gradient-to-br from-purple-700 to-indigo-800 text-white border-purple-600 transform scale-105 shadow-2xl'
                    : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700'
                } group`}
                whileHover={{ scale: gói.highlight ? 1.07 : 1.03, translateY: gói.highlight ? -10 : -8, boxShadow: gói.highlight ? "0 20px 40px rgba(0, 0, 0, 0.3)" : "0 10px 20px rgba(0, 0, 0, 0.15)" }}
              >
                <h3 className="text-3xl font-bold mb-3">{gói.name}</h3>
                <p className={`mb-4 ${gói.highlight ? 'text-purple-200' : 'text-zinc-600 dark:text-zinc-300'}`}>{gói.description}</p>
                <p className="text-5xl font-extrabold mb-6">
                  {gói.price}
                  <span className={`text-base font-medium ${gói.highlight ? 'text-purple-200' : 'text-zinc-500 dark:text-zinc-400'}`}>
                    {gói.period}
                  </span>
                </p>
                <ul className="space-y-3 text-base mb-8">
                  {gói.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${gói.highlight ? 'text-white' : 'text-green-500'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    size="lg"
                    className={`w-full font-semibold text-lg px-8 py-5 rounded-full shadow-md transition-all duration-300 ${
                      gói.highlight
                        ? 'bg-white text-purple-700 hover:bg-purple-100'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700'
                    }`}
                  >
                    {gói.buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 md:py-32 px-6 bg-white dark:bg-zinc-900">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            Khách hàng nói gì về <span className="text-indigo-600 dark:text-purple-400">S-Hire</span>?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14"
          >
            {[
              {
                quote: "S-Hire đã thay đổi cách chúng tôi tuyển dụng. Giờ đây, chúng tôi tìm được ứng viên chất lượng nhanh hơn bao giờ hết, tiết kiệm đáng kể thời gian và chi phí!",
                author: "Nguyễn Văn A",
                title: "HR Manager, ABC Tech Corp",
                avatar: "https://placehold.co/150x150/FFD700/000000?text=A", // Placeholder avatar
              },
              {
                quote: "Giao diện thân thiện, dễ sử dụng, và đặc biệt là tính năng AI Match rất hiệu quả. Chúng tôi đã tìm được những nhân tài xuất sắc nhờ S-Hire!",
                author: "Trần Thị B",
                title: "CEO, XYZ Solutions",
                avatar: "https://placehold.co/150x150/ADD8E6/000000?text=B", // Placeholder avatar
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-zinc-100 dark:bg-zinc-800 p-10 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
              >
                <img src={testimonial.avatar} alt={testimonial.author} className="w-24 h-24 rounded-full mb-8 border-4 border-indigo-500 dark:border-purple-500 shadow-lg object-cover" />
                <p className="text-lg italic mb-8 text-zinc-700 dark:text-zinc-200 leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-bold text-xl text-indigo-600 dark:text-purple-400">{testimonial.author}</p>
                <p className="text-base text-zinc-500 dark:text-zinc-400 mt-1">{testimonial.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-r from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            Câu hỏi thường gặp về <span className="text-indigo-600 dark:text-purple-400">S-Hire</span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {[
              {
                question: "Làm sao để đăng ký tài khoản nhà tuyển dụng?",
                answer: "Bạn chỉ cần nhấp vào nút 'Đăng ký dành cho Nhà tuyển dụng' ở đầu hoặc cuối trang và điền thông tin theo hướng dẫn. Quá trình này rất nhanh chóng và dễ dàng, chỉ mất vài phút để hoàn tất.",
              },
              {
                question: "Tôi có thể đăng bao nhiêu tin tuyển dụng miễn phí?",
                answer: "Với gói Miễn Phí, bạn có thể đăng 1 tin tuyển dụng mỗi tháng, tin sẽ được hiển thị trong 7 ngày. Đây là lựa chọn tuyệt vời để bạn trải nghiệm dịch vụ của chúng tôi.",
              },
              {
                question: "Tính năng AI Match hoạt động như thế nào?",
                answer: "Hệ thống AI của chúng tôi sẽ phân tích mô tả công việc của bạn một cách chi tiết và đối chiếu với dữ liệu hàng triệu hồ sơ ứng viên. Từ đó, chúng tôi đề xuất những ứng viên có kỹ năng, kinh nghiệm và mong muốn phù hợp nhất, giúp bạn tiết kiệm thời gian sàng lọc.",
              },
              {
                question: "S-Hire có hỗ trợ tích hợp với hệ thống ATS hiện có của công ty tôi không?",
                answer: "Gói Pro của chúng tôi cung cấp tính năng tích hợp ATS cơ bản, giúp đồng bộ hóa dữ liệu dễ dàng. Đối với các yêu cầu tích hợp chuyên sâu hơn, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi để được tư vấn chi tiết.",
              },
              {
                question: "Làm thế nào để tin tuyển dụng của tôi nổi bật hơn?",
                answer: "Bạn có thể chọn các gói dịch vụ cao cấp hơn như Gói Tiêu Chuẩn hoặc Gói Pro để tin tuyển dụng của bạn được ưu tiên hiển thị nổi bật trên trang chủ và kết quả tìm kiếm, thu hút nhiều ứng viên tiềm năng hơn.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-3xl shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="font-bold text-xl mb-3 flex items-start text-zinc-900 dark:text-zinc-50">
                  <HelpCircle className="w-6 h-6 mr-4 mt-1 text-indigo-600 dark:text-purple-400 flex-shrink-0" /> {faq.question}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 pl-10 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT/GET IN TOUCH SECTION */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-indigo-800 to-purple-900 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 drop-shadow-md leading-tight"
          >
            Liên hệ với <span className="text-purple-300">chúng tôi</span>
          </motion.h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8 text-lg md:text-xl"
            >
              <p className="text-purple-100 leading-relaxed">
                Bạn có câu hỏi hoặc cần hỗ trợ thêm? Đội ngũ chuyên nghiệp của S-Hire luôn sẵn lòng lắng nghe và giải đáp mọi thắc mắc của bạn một cách nhanh chóng và hiệu quả.
              </p>
              <div className="flex items-center gap-5 text-purple-100">
                <PhoneCall className="w-7 h-7 flex-shrink-0 text-white" />
                <p>Hotline: <span className="font-semibold text-white">1900 1234</span></p>
              </div>
              <div className="flex items-center gap-5 text-purple-100">
                <Mail className="w-7 h-7 flex-shrink-0 text-white" />
                <p>Email: <span className="font-semibold text-white">hotro@s-hire.vn</span></p>
              </div>
              <p className="text-purple-100 text-base">Giờ làm việc: Thứ 2 - Thứ 6 (8:00 AM - 5:00 PM)</p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-2xl text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700"
            >
              <form className="space-y-7">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3">Tên của bạn</label>
                  <Input id="name" placeholder="Ví dụ: Nguyễn Thị Lan" className="w-full p-4 rounded-xl border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3">Email</label>
                  <Input type="email" id="email" placeholder="email@congty.com" className="w-full p-4 rounded-xl border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">Nội dung tin nhắn</label>
                  <Textarea id="message" placeholder="Xin chào, tôi muốn hỏi về..." rows={6} className="w-full p-4 rounded-xl border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all" />
                </div>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition-all duration-300 font-semibold text-lg py-4 rounded-full shadow-lg"
                  >
                    Gửi tin nhắn
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="text-center py-20 md:py-32 px-6 bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-zinc-900 dark:text-zinc-50"
          >
            Sẵn sàng <span className="text-indigo-600 dark:text-purple-400">tăng tốc</span> tuyển dụng của bạn?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-14 text-lg md:text-xl max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300 leading-relaxed"
          >
            Tham gia cùng hàng nghìn doanh nghiệp hàng đầu đang tin dùng S-Hire để tìm kiếm những ứng viên tài năng nhất và xây dựng đội ngũ vững mạnh.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              size="lg"
              className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-xl font-semibold text-xl px-12 py-6 rounded-full dark:bg-purple-600 dark:hover:bg-purple-700 uppercase tracking-wide group"
            >
              Đăng ký ngay dành cho Nhà tuyển dụng
            </Button>
          </motion.div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer language={language} /> {/* Pass language prop to Footer */}
      {/* Floating Chat Component */}
      <FloatingChat language={language} /> {/* Pass language prop to FloatingChat */}
    </div>
  )
}