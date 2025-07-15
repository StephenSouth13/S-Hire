"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Briefcase, Users, Award, Star, ChevronRight, Play, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [darkMode, setDarkMode] = useState(false)

  const content = {
    vi: {
      heroTitle: "Tìm Việc Làm Mơ Ước Của Bạn",
      heroSubtitle: "Kết nối với hàng nghìn cơ hội việc làm từ các công ty hàng đầu Việt Nam",
      searchPlaceholder: "Tìm kiếm công việc, công ty...",
      locationPlaceholder: "Địa điểm",
      findJobBtn: "Tìm việc ngay",
      featuredJobs: "Việc Làm Nổi Bật",
      popularCourses: "Khóa Học Phổ Biến",
      whyChooseUs: "Tại Sao Chọn S-HIRE.VN",
      testimonials: "Cảm Nhận Người Dùng",
      ctaTitle: "Xây Dựng Hồ Sơ Chuyên Nghiệp",
      ctaSubtitle: "Tạo CV ấn tượng và tìm được công việc mơ ước",
      createProfile: "Tạo hồ sơ ngay",
    },
    en: {
      heroTitle: "Find Your Dream Job",
      heroSubtitle: "Connect with thousands of job opportunities from leading companies in Vietnam",
      searchPlaceholder: "Search jobs, companies...",
      locationPlaceholder: "Location",
      findJobBtn: "Find Jobs Now",
      featuredJobs: "Featured Jobs",
      popularCourses: "Popular Courses",
      whyChooseUs: "Why Choose S-HIRE.VN",
      testimonials: "User Testimonials",
      ctaTitle: "Build Professional Profile",
      ctaSubtitle: "Create impressive CV and find your dream job",
      createProfile: "Create Profile Now",
    },
  }

  const t = content[language]

  const featuredJobs = [
    {
      id: 1,
      title: language === "vi" ? "Frontend Developer" : "Frontend Developer",
      company: "TechCorp Vietnam",
      location: "Hà Nội",
      salary: "15-25 triệu",
      type: "Full-time",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: language === "vi" ? "Marketing Manager" : "Marketing Manager",
      company: "Digital Agency",
      location: "TP.HCM",
      salary: "20-30 triệu",
      type: "Full-time",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: language === "vi" ? "Data Analyst" : "Data Analyst",
      company: "FinTech Solutions",
      location: "Đà Nẵng",
      salary: "18-28 triệu",
      type: "Remote",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  const popularCourses = [
    {
      id: 1,
      title: language === "vi" ? "Lập trình React từ cơ bản đến nâng cao" : "React Programming from Basic to Advanced",
      instructor: "Nguyễn Văn A",
      price: "Miễn phí",
      rating: 4.8,
      students: 1250,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: language === "vi" ? "Digital Marketing cho người mới bắt đầu" : "Digital Marketing for Beginners",
      instructor: "Trần Thị B",
      price: "299,000đ",
      rating: 4.9,
      students: 890,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const whyChooseFeatures = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: language === "vi" ? "Hàng nghìn việc làm" : "Thousands of Jobs",
      description:
        language === "vi" ? "Cập nhật liên tục từ các công ty uy tín" : "Continuously updated from reputable companies",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: language === "vi" ? "Cộng đồng chuyên nghiệp" : "Professional Community",
      description: language === "vi" ? "Kết nối với các chuyên gia trong ngành" : "Connect with industry experts",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: language === "vi" ? "Khóa học chất lượng" : "Quality Courses",
      description:
        language === "vi" ? "Nâng cao kỹ năng với các khóa học từ chuyên gia" : "Enhance skills with expert courses",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: language === "vi" ? "Tạo CV chuyên nghiệp" : "Professional CV Builder",
      description: language === "vi" ? "Công cụ tạo CV hiện đại, ấn tượng" : "Modern, impressive CV creation tool",
    },
  ]

  const testimonials = [
    {
      name: "Nguyễn Minh Tuấn",
      role: language === "vi" ? "Frontend Developer" : "Frontend Developer",
      content:
        language === "vi"
          ? "S-HIRE.VN đã giúp tôi tìm được công việc mơ ước chỉ sau 2 tuần đăng ký!"
          : "S-HIRE.VN helped me find my dream job in just 2 weeks after registration!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị Lan",
      role: language === "vi" ? "Marketing Manager" : "Marketing Manager",
      content:
        language === "vi"
          ? "Các khóa học ở đây rất chất lượng, giúp tôi nâng cao kỹ năng đáng kể."
          : "The courses here are very high quality, helping me significantly improve my skills.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6" variants={fadeInUp}>
                {t.heroTitle}
              </motion.h1>
              <motion.p className="text-xl lg:text-2xl mb-8 opacity-90" variants={fadeInUp}>
                {t.heroSubtitle}
              </motion.p>

              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder={t.searchPlaceholder}
                      className="pl-10 h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div className="lg:w-48 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder={t.locationPlaceholder}
                      className="pl-10 h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Button size="lg" className="h-12 px-8 bg-white text-indigo-600 hover:bg-white/90">
                    {t.findJobBtn}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" variants={fadeInUp}>
                {t.featuredJobs}
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={job.logo || "/placeholder.svg"} />
                            <AvatarFallback>{job.company[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
                            <CardDescription className="text-sm">{job.company}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">{job.type}</Badge>
                            <span className="font-semibold text-green-600">{job.salary}</span>
                          </div>
                          <Button className="w-full mt-4">{language === "vi" ? "Ứng tuyển" : "Apply Now"}</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" variants={fadeInUp}>
                {t.popularCourses}
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {popularCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-48 lg:h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={course.price === "Miễn phí" ? "default" : "secondary"}>
                              {course.price === "Miễn phí" ? (language === "vi" ? "Miễn phí" : "Free") : course.price}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{course.rating}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <p className="text-muted-foreground mb-3">{course.instructor}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {course.students} {language === "vi" ? "học viên" : "students"}
                            </span>
                            <Button>
                              <Play className="h-4 w-4 mr-2" />
                              {language === "vi" ? "Học ngay" : "Learn Now"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" variants={fadeInUp}>
                {t.whyChooseUs}
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" variants={fadeInUp}>
                {t.testimonials}
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="p-6 border-0 shadow-lg">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-3">"{testimonial.content}"</p>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="text-3xl lg:text-4xl font-bold mb-4" variants={fadeInUp}>
                {t.ctaTitle}
              </motion.h2>
              <motion.p className="text-xl mb-8 opacity-90" variants={fadeInUp}>
                {t.ctaSubtitle}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 px-8">
                  {t.createProfile}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer language={language} />
        <FloatingChat language={language} />
      </div>
    </div>
  )
}
