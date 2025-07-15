"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Star, Clock, Users, Play, BookOpen, Award, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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

export default function CoursesPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [savedCourses, setSavedCourses] = useState<number[]>([])
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    level: "",
    duration: "",
    price: "",
  })

  const content = {
    vi: {
      title: "Khóa Học Phát Triển Nghề Nghiệp",
      subtitle: "Nâng cao kỹ năng với các khóa học chất lượng từ chuyên gia hàng đầu",
      searchPlaceholder: "Tìm kiếm khóa học...",
      searchButton: "Tìm kiếm",
      filters: "Bộ lọc",
      allCourses: "Tất cả",
      freeCourses: "Miễn phí",
      paidCourses: "Có phí",
      trending: "Xu hướng",
      category: "Danh mục",
      level: "Cấp độ",
      duration: "Thời lượng",
      price: "Giá",
      enrollNow: "Đăng ký ngay",
      learnMore: "Tìm hiểu thêm",
      instructor: "Giảng viên",
      students: "học viên",
      lessons: "bài học",
      hours: "giờ",
      rating: "đánh giá",
      free: "Miễn phí",
      bestseller: "Bán chạy",
      new: "Mới",
      hot: "Hot",
      beginner: "Cơ bản",
      intermediate: "Trung cấp",
      advanced: "Nâng cao",
      coursesFound: "khóa học được tìm thấy",
      featuredCourses: "Khóa học nổi bật",
      popularInstructors: "Giảng viên nổi tiếng",
      categories: "Danh mục phổ biến",
      achievements: "Thành tựu",
      totalStudents: "Tổng học viên",
      totalCourses: "Tổng khóa học",
      completionRate: "Tỷ lệ hoàn thành",
      satisfaction: "Hài lòng",
    },
    en: {
      title: "Career Development Courses",
      subtitle: "Enhance your skills with quality courses from leading experts",
      searchPlaceholder: "Search courses...",
      searchButton: "Search",
      filters: "Filters",
      allCourses: "All Courses",
      freeCourses: "Free",
      paidCourses: "Paid",
      trending: "Trending",
      category: "Category",
      level: "Level",
      duration: "Duration",
      price: "Price",
      enrollNow: "Enroll Now",
      learnMore: "Learn More",
      instructor: "Instructor",
      students: "students",
      lessons: "lessons",
      hours: "hours",
      rating: "rating",
      free: "Free",
      bestseller: "Bestseller",
      new: "New",
      hot: "Hot",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      coursesFound: "courses found",
      featuredCourses: "Featured Courses",
      popularInstructors: "Popular Instructors",
      categories: "Popular Categories",
      achievements: "Achievements",
      totalStudents: "Total Students",
      totalCourses: "Total Courses",
      completionRate: "Completion Rate",
      satisfaction: "Satisfaction",
    },
  }

  const t = content[language]

  const categories = [
    { value: "programming", label: language === "vi" ? "Lập trình" : "Programming", icon: "💻", count: 45 },
    { value: "design", label: language === "vi" ? "Thiết kế" : "Design", icon: "🎨", count: 32 },
    { value: "marketing", label: "Marketing", icon: "📈", count: 28 },
    { value: "business", label: language === "vi" ? "Kinh doanh" : "Business", icon: "💼", count: 24 },
    { value: "data", label: language === "vi" ? "Dữ liệu" : "Data Science", icon: "📊", count: 19 },
    { value: "language", label: language === "vi" ? "Ngoại ngữ" : "Languages", icon: "🌍", count: 15 },
  ]

  const levels = [
    { value: "beginner", label: t.beginner },
    { value: "intermediate", label: t.intermediate },
    { value: "advanced", label: t.advanced },
  ]

  const courses = [
    {
      id: 1,
      title: language === "vi" ? "Lập trình React từ cơ bản đến nâng cao" : "React Programming from Basic to Advanced",
      instructor: "Nguyễn Văn A",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      price: 0,
      originalPrice: 599000,
      rating: 4.9,
      students: 2847,
      lessons: 45,
      duration: 12,
      level: "intermediate",
      category: "programming",
      image: "/placeholder.svg?height=200&width=300",
      badges: ["hot", "bestseller"],
      description:
        language === "vi"
          ? "Học React từ cơ bản đến nâng cao với các dự án thực tế"
          : "Learn React from basic to advanced with real projects",
      skills: ["React", "JavaScript", "Redux", "Hooks"],
      featured: true,
      completionRate: 94,
    },
    {
      id: 2,
      title: language === "vi" ? "Digital Marketing cho người mới bắt đầu" : "Digital Marketing for Beginners",
      instructor: "Trần Thị B",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      price: 299000,
      originalPrice: 599000,
      rating: 4.8,
      students: 1923,
      lessons: 32,
      duration: 8,
      level: "beginner",
      category: "marketing",
      image: "/placeholder.svg?height=200&width=300",
      badges: ["new"],
      description:
        language === "vi"
          ? "Khóa học marketing số toàn diện cho người mới bắt đầu"
          : "Comprehensive digital marketing course for beginners",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
      featured: true,
      completionRate: 89,
    },
    {
      id: 3,
      title: language === "vi" ? "UI/UX Design với Figma" : "UI/UX Design with Figma",
      instructor: "Lê Văn C",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      price: 399000,
      originalPrice: 799000,
      rating: 4.7,
      students: 1456,
      lessons: 28,
      duration: 10,
      level: "intermediate",
      category: "design",
      image: "/placeholder.svg?height=200&width=300",
      badges: ["bestseller"],
      description:
        language === "vi" ? "Thiết kế giao diện chuyên nghiệp với Figma" : "Professional interface design with Figma",
      skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
      featured: false,
      completionRate: 91,
    },
    {
      id: 4,
      title: language === "vi" ? "Python cho Data Science" : "Python for Data Science",
      instructor: "Phạm Thị D",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      price: 0,
      originalPrice: 0,
      rating: 4.6,
      students: 3241,
      lessons: 38,
      duration: 15,
      level: "beginner",
      category: "data",
      image: "/placeholder.svg?height=200&width=300",
      badges: ["free", "hot"],
      description:
        language === "vi"
          ? "Học Python và ứng dụng trong phân tích dữ liệu"
          : "Learn Python and its applications in data analysis",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
      featured: true,
      completionRate: 87,
    },
  ]

  const instructors = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      title: language === "vi" ? "Senior Developer" : "Senior Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.9,
      students: 12500,
      courses: 8,
      expertise: ["React", "Node.js", "TypeScript"],
    },
    {
      id: 2,
      name: "Trần Thị B",
      title: language === "vi" ? "Marketing Expert" : "Marketing Expert",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      students: 8900,
      courses: 6,
      expertise: ["Digital Marketing", "SEO", "Social Media"],
    },
    {
      id: 3,
      name: "Lê Văn C",
      title: language === "vi" ? "UX/UI Designer" : "UX/UI Designer",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.7,
      students: 6700,
      courses: 5,
      expertise: ["Figma", "Adobe XD", "User Research"],
    },
  ]

  const achievements = [
    { icon: <Users className="h-8 w-8" />, value: "50,000+", label: t.totalStudents },
    { icon: <BookOpen className="h-8 w-8" />, value: "200+", label: t.totalCourses },
    { icon: <Award className="h-8 w-8" />, value: "95%", label: t.completionRate },
    { icon: <Heart className="h-8 w-8" />, value: "98%", label: t.satisfaction },
  ]

  const toggleSaveCourse = (courseId: number) => {
    setSavedCourses((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "hot":
        return "bg-red-500 text-white"
      case "new":
        return "bg-green-500 text-white"
      case "bestseller":
        return "bg-orange-500 text-white"
      case "free":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case "hot":
        return t.hot
      case "new":
        return t.new
      case "bestseller":
        return t.bestseller
      case "free":
        return t.free
      default:
        return badge
    }
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">{t.filters}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">{t.category}</label>
          <Select
            value={filters.category}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn danh mục" : "Select category"} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.icon} {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.level}</label>
          <Select value={filters.level} onValueChange={(value) => setFilters((prev) => ({ ...prev, level: value }))}>
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn cấp độ" : "Select level"} />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.duration}</label>
          <Select
            value={filters.duration}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, duration: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn thời lượng" : "Select duration"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">{language === "vi" ? "Dưới 5 giờ" : "Under 5 hours"}</SelectItem>
              <SelectItem value="medium">{language === "vi" ? "5-15 giờ" : "5-15 hours"}</SelectItem>
              <SelectItem value="long">{language === "vi" ? "Trên 15 giờ" : "Over 15 hours"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )

  const CourseCard = ({ course, index }: { course: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
          <div className="absolute top-3 left-3 flex gap-2">
            {course.badges.map((badge) => (
              <Badge key={badge} className={`${getBadgeColor(badge)} text-xs`}>
                {getBadgeText(badge)}
              </Badge>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <Button
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-black hover:bg-white"
            >
              <Play className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} />
              <AvatarFallback>{course.instructor[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{course.instructor}</span>
          </div>

          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {course.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {course.skills.slice(0, 3).map((skill: string) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {course.duration} {t.hours}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {course.price === 0 ? (
                <span className="text-lg font-bold text-green-600">{t.free}</span>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-indigo-600">{course.price.toLocaleString()}đ</span>
                  {course.originalPrice > course.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      {course.originalPrice.toLocaleString()}đ
                    </span>
                  )}
                </div>
              )}
            </div>

            <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600">
              {t.enrollNow}
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span>{language === "vi" ? "Tiến độ hoàn thành" : "Completion Rate"}</span>
              <span>{course.completionRate}%</span>
            </div>
            <Progress value={course.completionRate} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl mb-8 opacity-90">{t.subtitle}</p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder={t.searchPlaceholder}
                      value={filters.keyword}
                      onChange={(e) => setFilters((prev) => ({ ...prev, keyword: e.target.value }))}
                      className="pl-10 h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Button size="lg" className="h-12 px-8 bg-white text-indigo-600 hover:bg-white/90">
                    <Search className="h-4 w-4 mr-2" />
                    {t.searchButton}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl mb-4">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block w-80 shrink-0">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <FilterSidebar />
                  </CardContent>
                </Card>
              </div>

              {/* Course Content */}
              <div className="flex-1">
                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList className="grid w-full sm:w-auto grid-cols-4 lg:grid-cols-4">
                      <TabsTrigger value="all">{t.allCourses}</TabsTrigger>
                      <TabsTrigger value="free">{t.freeCourses}</TabsTrigger>
                      <TabsTrigger value="paid">{t.paidCourses}</TabsTrigger>
                      <TabsTrigger value="trending">{t.trending}</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-3">
                      {/* Mobile Filter */}
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="lg:hidden bg-transparent">
                            <Filter className="h-4 w-4 mr-2" />
                            {t.filters}
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80">
                          <SheetHeader>
                            <SheetTitle>{t.filters}</SheetTitle>
                          </SheetHeader>
                          <div className="mt-6">
                            <FilterSidebar />
                          </div>
                        </SheetContent>
                      </Sheet>

                      <Select defaultValue="popular">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="popular">
                            {language === "vi" ? "Phổ biến nhất" : "Most Popular"}
                          </SelectItem>
                          <SelectItem value="newest">{language === "vi" ? "Mới nhất" : "Newest"}</SelectItem>
                          <SelectItem value="rating">{language === "vi" ? "Đánh giá cao" : "Highest Rated"}</SelectItem>
                          <SelectItem value="price-low">
                            {language === "vi" ? "Giá thấp nhất" : "Lowest Price"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="all" className="space-y-8">
                    {/* Featured Courses */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="h-6 w-6 text-yellow-500" />
                        {t.featuredCourses}
                      </h2>
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {courses
                          .filter((course) => course.featured)
                          .map((course, index) => (
                            <CourseCard key={course.id} course={course} index={index} />
                          ))}
                      </div>
                    </div>

                    {/* All Courses */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">{t.allCourses}</h2>
                        <p className="text-muted-foreground">
                          {courses.length} {t.coursesFound}
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                          <CourseCard key={course.id} course={course} index={index} />
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="free">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {courses
                        .filter((course) => course.price === 0)
                        .map((course, index) => (
                          <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="paid">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {courses
                        .filter((course) => course.price > 0)
                        .map((course, index) => (
                          <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trending">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {courses
                        .filter((course) => course.badges.includes("hot"))
                        .map((course, index) => (
                          <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
                {t.categories}
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg" variants={fadeInUp}>
                {language === "vi" ? "Khám phá các danh mục khóa học phong phú" : "Explore our rich course categories"}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.value}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{category.label}</h3>
                    <p className="text-muted-foreground">
                      {category.count} {language === "vi" ? "khóa học" : "courses"}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Instructors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
                {t.popularInstructors}
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg" variants={fadeInUp}>
                {language === "vi"
                  ? "Học từ các chuyên gia hàng đầu trong ngành"
                  : "Learn from leading industry experts"}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={instructor.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={instructor.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-lg">{instructor.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
                    <p className="text-muted-foreground mb-3">{instructor.title}</p>

                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{instructor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{instructor.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{instructor.courses}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {instructor.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer language={language} />
        <FloatingChat language={language} />
      </div>
    </div>
  )
}
