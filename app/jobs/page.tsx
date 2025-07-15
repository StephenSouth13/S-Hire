"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  MapPin,
  Filter,
  Briefcase,
  Clock,
  DollarSign,
  Star,
  Bookmark,
  BookmarkCheck,
  SlidersHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function JobsPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [darkMode, setDarkMode] = useState(false)
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    experience: "",
    salary: "",
    jobType: "",
  })

  const content = {
    vi: {
      title: "Tìm Việc Làm Mơ Ước",
      subtitle: "Khám phá hàng nghìn cơ hội việc làm từ các công ty hàng đầu",
      searchPlaceholder: "Tìm kiếm công việc, kỹ năng...",
      locationPlaceholder: "Địa điểm",
      searchButton: "Tìm kiếm",
      filters: "Bộ lọc",
      category: "Ngành nghề",
      experience: "Kinh nghiệm",
      salary: "Mức lương",
      jobType: "Loại hình",
      applyNow: "Ứng tuyển ngay",
      saveJob: "Lưu việc làm",
      saved: "Đã lưu",
      featuredJobs: "Việc làm nổi bật",
      allJobs: "Tất cả việc làm",
      jobsFound: "việc làm được tìm thấy",
      sortBy: "Sắp xếp theo",
      newest: "Mới nhất",
      salary_high: "Lương cao nhất",
      relevance: "Liên quan nhất",
      company: "Công ty",
      postedTime: "Đăng",
      ago: "trước",
    },
    en: {
      title: "Find Your Dream Job",
      subtitle: "Discover thousands of job opportunities from leading companies",
      searchPlaceholder: "Search jobs, skills...",
      locationPlaceholder: "Location",
      searchButton: "Search",
      filters: "Filters",
      category: "Category",
      experience: "Experience",
      salary: "Salary",
      jobType: "Job Type",
      applyNow: "Apply Now",
      saveJob: "Save Job",
      saved: "Saved",
      featuredJobs: "Featured Jobs",
      allJobs: "All Jobs",
      jobsFound: "jobs found",
      sortBy: "Sort by",
      newest: "Newest",
      salary_high: "Highest Salary",
      relevance: "Most Relevant",
      company: "Company",
      postedTime: "Posted",
      ago: "ago",
    },
  }

  const t = content[language]

  const categories = [
    { value: "it", label: language === "vi" ? "Công nghệ thông tin" : "Information Technology" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: language === "vi" ? "Kinh doanh" : "Sales" },
    { value: "finance", label: language === "vi" ? "Tài chính" : "Finance" },
    { value: "hr", label: language === "vi" ? "Nhân sự" : "Human Resources" },
    { value: "design", label: language === "vi" ? "Thiết kế" : "Design" },
  ]

  const experienceLevels = [
    { value: "intern", label: language === "vi" ? "Thực tập sinh" : "Intern" },
    { value: "entry", label: language === "vi" ? "Mới ra trường" : "Entry Level" },
    { value: "junior", label: language === "vi" ? "1-2 năm" : "1-2 years" },
    { value: "mid", label: language === "vi" ? "3-5 năm" : "3-5 years" },
    { value: "senior", label: language === "vi" ? "5+ năm" : "5+ years" },
  ]

  const salaryRanges = [
    { value: "under10", label: language === "vi" ? "Dưới 10 triệu" : "Under $500" },
    { value: "10-20", label: language === "vi" ? "10-20 triệu" : "$500-$1000" },
    { value: "20-30", label: language === "vi" ? "20-30 triệu" : "$1000-$1500" },
    { value: "30-50", label: language === "vi" ? "30-50 triệu" : "$1500-$2500" },
    { value: "over50", label: language === "vi" ? "Trên 50 triệu" : "Over $2500" },
  ]

  const jobTypes = [
    { value: "fulltime", label: language === "vi" ? "Toàn thời gian" : "Full-time" },
    { value: "parttime", label: language === "vi" ? "Bán thời gian" : "Part-time" },
    { value: "contract", label: language === "vi" ? "Hợp đồng" : "Contract" },
    { value: "remote", label: language === "vi" ? "Làm từ xa" : "Remote" },
  ]

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Vietnam",
      location: "Hà Nội",
      salary: "25-35 triệu",
      type: "Full-time",
      experience: "3-5 năm",
      logo: "/placeholder.svg?height=60&width=60",
      featured: true,
      postedTime: "2 ngày",
      description: "Tham gia phát triển các ứng dụng web hiện đại với React, TypeScript...",
      skills: ["React", "TypeScript", "Node.js"],
      benefits: ["Bảo hiểm sức khỏe", "Thưởng hiệu suất", "Làm việc từ xa"],
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      company: "Creative Agency",
      location: "TP.HCM",
      salary: "20-30 triệu",
      type: "Full-time",
      experience: "2-4 năm",
      logo: "/placeholder.svg?height=60&width=60",
      featured: true,
      postedTime: "1 ngày",
      description: "Quản lý và thực hiện các chiến dịch marketing số...",
      skills: ["Google Ads", "Facebook Ads", "SEO"],
      benefits: ["Thưởng KPI", "Du lịch công ty", "Đào tạo"],
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "FinTech Solutions",
      location: "Đà Nẵng",
      salary: "18-28 triệu",
      type: "Remote",
      experience: "1-3 năm",
      logo: "/placeholder.svg?height=60&width=60",
      featured: false,
      postedTime: "3 ngày",
      description: "Phân tích dữ liệu và tạo báo cáo cho các quyết định kinh doanh...",
      skills: ["Python", "SQL", "Tableau"],
      benefits: ["Làm việc từ xa", "Lương 13 tháng", "Bảo hiểm"],
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "Hà Nội",
      salary: "15-25 triệu",
      type: "Full-time",
      experience: "2-4 năm",
      logo: "/placeholder.svg?height=60&width=60",
      featured: false,
      postedTime: "1 tuần",
      description: "Thiết kế giao diện người dùng cho các ứng dụng mobile và web...",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      benefits: ["Môi trường sáng tạo", "Thiết bị Apple", "Team building"],
    },
  ]

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const FilterSidebar = ({ isMobile = false }) => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          {t.filters}
        </h3>
        <Separator />
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">{t.category}</label>
          <Select
            value={filters.category}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn ngành nghề" : "Select category"} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.experience}</label>
          <Select
            value={filters.experience}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, experience: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn kinh nghiệm" : "Select experience"} />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.salary}</label>
          <Select value={filters.salary} onValueChange={(value) => setFilters((prev) => ({ ...prev, salary: value }))}>
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn mức lương" : "Select salary"} />
            </SelectTrigger>
            <SelectContent>
              {salaryRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.jobType}</label>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <div key={type.value} className="flex items-center space-x-2">
                <Checkbox id={type.value} />
                <label htmlFor={type.value} className="text-sm">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white py-16">
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
                  <div className="lg:w-48 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder={t.locationPlaceholder}
                      value={filters.location}
                      onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
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

        {/* Main Content */}
        <section className="py-8">
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

              {/* Job Listings */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{t.allJobs}</h2>
                    <p className="text-muted-foreground">
                      {featuredJobs.length} {t.jobsFound}
                    </p>
                  </div>

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
                          <FilterSidebar isMobile />
                        </div>
                      </SheetContent>
                    </Sheet>

                    {/* Sort */}
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">{t.newest}</SelectItem>
                        <SelectItem value="salary">{t.salary_high}</SelectItem>
                        <SelectItem value="relevance">{t.relevance}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Featured Jobs */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    {t.featuredJobs}
                  </h3>
                  <div className="grid gap-4">
                    {featuredJobs
                      .filter((job) => job.featured)
                      .map((job, index) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4 flex-1">
                                  <Avatar className="h-12 w-12">
                                    <AvatarImage src={job.logo || "/placeholder.svg"} />
                                    <AvatarFallback>{job.company[0]}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h3 className="text-lg font-semibold">{job.title}</h3>
                                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                        Featured
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-2">{job.company}</p>
                                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {job.skills.map((skill) => (
                                        <Badge key={skill} variant="outline" className="text-xs">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                      <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <DollarSign className="h-4 w-4" />
                                        {job.salary}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Briefcase className="h-4 w-4" />
                                        {job.type}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {job.postedTime} {t.ago}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 ml-4">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleSaveJob(job.id)}
                                    className="w-10 h-10 p-0"
                                  >
                                    {savedJobs.includes(job.id) ? (
                                      <BookmarkCheck className="h-4 w-4 text-indigo-600" />
                                    ) : (
                                      <Bookmark className="h-4 w-4" />
                                    )}
                                  </Button>
                                  <Button size="sm" className="whitespace-nowrap">
                                    {t.applyNow}
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* All Jobs */}
                <div className="grid gap-4">
                  {featuredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Card className="hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={job.logo || "/placeholder.svg"} />
                                <AvatarFallback>{job.company[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="font-semibold mb-1">{job.title}</h3>
                                <p className="text-muted-foreground text-sm mb-2">{job.company}</p>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-3 w-3" />
                                    {job.salary}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {job.postedTime} {t.ago}
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-1">
                                  {job.skills.slice(0, 3).map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 ml-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleSaveJob(job.id)}
                                className="w-9 h-9 p-0"
                              >
                                {savedJobs.includes(job.id) ? (
                                  <BookmarkCheck className="h-4 w-4 text-indigo-600" />
                                ) : (
                                  <Bookmark className="h-4 w-4" />
                                )}
                              </Button>
                              <Button size="sm">{t.applyNow}</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="default" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer language={language} />
        <FloatingChat language={language} />
      </div>
    </div>
  )
}
