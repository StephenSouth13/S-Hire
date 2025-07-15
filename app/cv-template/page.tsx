"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  Download,
  Eye,
  Star,
  Heart,
  Zap,
  Crown,
  FileText,
  Briefcase,
  Code,
  Palette,
  Building,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

export default function CVTemplatePage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    style: "",
    color: "",
  })

  const content = {
    vi: {
      title: "Mẫu CV Chuyên Nghiệp",
      subtitle: "Tạo ấn tượng đầu tiên với các mẫu CV được thiết kế bởi chuyên gia",
      searchPlaceholder: "Tìm kiếm mẫu CV...",
      searchButton: "Tìm kiếm",
      filters: "Bộ lọc",
      allTemplates: "Tất cả",
      freeTemplates: "Miễn phí",
      premiumTemplates: "Premium",
      popularTemplates: "Phổ biến",
      category: "Danh mục",
      style: "Phong cách",
      color: "Màu sắc",
      useTemplate: "Dùng mẫu này",
      preview: "Xem trước",
      download: "Tải xuống",
      favorite: "Yêu thích",
      free: "Miễn phí",
      premium: "Premium",
      new: "Mới",
      popular: "Phổ biến",
      templatesFound: "mẫu CV được tìm thấy",
      featuredTemplates: "Mẫu CV nổi bật",
      categories: "Danh mục nghề nghiệp",
      stats: "Thống kê",
      totalTemplates: "Tổng mẫu CV",
      downloads: "Lượt tải",
      satisfaction: "Hài lòng",
      users: "Người dùng",
    },
    en: {
      title: "Professional CV Templates",
      subtitle: "Make a great first impression with expertly designed CV templates",
      searchPlaceholder: "Search CV templates...",
      searchButton: "Search",
      filters: "Filters",
      allTemplates: "All Templates",
      freeTemplates: "Free",
      premiumTemplates: "Premium",
      popularTemplates: "Popular",
      category: "Category",
      style: "Style",
      color: "Color",
      useTemplate: "Use Template",
      preview: "Preview",
      download: "Download",
      favorite: "Favorite",
      free: "Free",
      premium: "Premium",
      new: "New",
      popular: "Popular",
      templatesFound: "templates found",
      featuredTemplates: "Featured Templates",
      categories: "Professional Categories",
      stats: "Statistics",
      totalTemplates: "Total Templates",
      downloads: "Downloads",
      satisfaction: "Satisfaction",
      users: "Users",
    },
  }

  const t = content[language]

  const categories = [
    {
      value: "general",
      label: language === "vi" ? "CV Chung" : "General CV",
      icon: <FileText className="h-6 w-6" />,
      count: 25,
      color: "bg-blue-500",
    },
    {
      value: "tech",
      label: language === "vi" ? "CV IT/Tech" : "IT/Tech CV",
      icon: <Code className="h-6 w-6" />,
      count: 18,
      color: "bg-green-500",
    },
    {
      value: "design",
      label: language === "vi" ? "CV Thiết kế" : "Design CV",
      icon: <Palette className="h-6 w-6" />,
      count: 15,
      color: "bg-purple-500",
    },
    {
      value: "business",
      label: language === "vi" ? "CV Kinh doanh" : "Business CV",
      icon: <Briefcase className="h-6 w-6" />,
      count: 20,
      color: "bg-orange-500",
    },
    {
      value: "construction",
      label: language === "vi" ? "CV Xây dựng" : "Construction CV",
      icon: <Building className="h-6 w-6" />,
      count: 12,
      color: "bg-yellow-500",
    },
    {
      value: "harvard",
      label: language === "vi" ? "CV Harvard" : "Harvard CV",
      icon: <Crown className="h-6 w-6" />,
      count: 8,
      color: "bg-red-500",
    },
  ]

  const styles = [
    { value: "modern", label: language === "vi" ? "Hiện đại" : "Modern" },
    { value: "classic", label: language === "vi" ? "Cổ điển" : "Classic" },
    { value: "creative", label: language === "vi" ? "Sáng tạo" : "Creative" },
    { value: "minimal", label: language === "vi" ? "Tối giản" : "Minimal" },
    { value: "professional", label: language === "vi" ? "Chuyên nghiệp" : "Professional" },
  ]

  const colors = [
    { value: "blue", label: language === "vi" ? "Xanh dương" : "Blue", color: "bg-blue-500" },
    { value: "green", label: language === "vi" ? "Xanh lá" : "Green", color: "bg-green-500" },
    { value: "purple", label: language === "vi" ? "Tím" : "Purple", color: "bg-purple-500" },
    { value: "orange", label: language === "vi" ? "Cam" : "Orange", color: "bg-orange-500" },
    { value: "red", label: language === "vi" ? "Đỏ" : "Red", color: "bg-red-500" },
    { value: "black", label: language === "vi" ? "Đen" : "Black", color: "bg-black" },
  ]

  const templates = [
    {
      id: 1,
      name: language === "vi" ? "CV Hiện đại Pro" : "Modern Pro CV",
      category: "general",
      style: "modern",
      color: "blue",
      price: 0,
      originalPrice: 99000,
      rating: 4.9,
      downloads: 15420,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["popular", "free"],
      description:
        language === "vi"
          ? "Mẫu CV hiện đại với thiết kế sạch sẽ, phù hợp cho mọi ngành nghề"
          : "Modern CV template with clean design, suitable for all industries",
      features: [
        language === "vi" ? "Thiết kế responsive" : "Responsive design",
        language === "vi" ? "Dễ tùy chỉnh" : "Easy to customize",
        language === "vi" ? "Format ATS-friendly" : "ATS-friendly format",
      ],
      featured: true,
    },
    {
      id: 2,
      name: language === "vi" ? "CV Developer Elite" : "Developer Elite CV",
      category: "tech",
      style: "modern",
      color: "green",
      price: 49000,
      originalPrice: 99000,
      rating: 4.8,
      downloads: 8930,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["new", "premium"],
      description:
        language === "vi"
          ? "Mẫu CV chuyên dành cho lập trình viên với section kỹ năng nổi bật"
          : "Specialized CV template for developers with highlighted skills section",
      features: [
        language === "vi" ? "Section kỹ năng coding" : "Coding skills section",
        language === "vi" ? "Portfolio links" : "Portfolio links",
        language === "vi" ? "GitHub integration" : "GitHub integration",
      ],
      featured: true,
    },
    {
      id: 3,
      name: language === "vi" ? "CV Creative Designer" : "Creative Designer CV",
      category: "design",
      style: "creative",
      color: "purple",
      price: 79000,
      originalPrice: 149000,
      rating: 4.7,
      downloads: 6750,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["premium"],
      description:
        language === "vi"
          ? "CV sáng tạo cho designer với layout độc đáo và màu sắc bắt mắt"
          : "Creative CV for designers with unique layout and eye-catching colors",
      features: [
        language === "vi" ? "Layout sáng tạo" : "Creative layout",
        language === "vi" ? "Portfolio showcase" : "Portfolio showcase",
        language === "vi" ? "Màu sắc tùy chỉnh" : "Customizable colors",
      ],
      featured: false,
    },
    {
      id: 4,
      name: language === "vi" ? "CV Harvard Classic" : "Harvard Classic CV",
      category: "harvard",
      style: "classic",
      color: "black",
      price: 0,
      originalPrice: 0,
      rating: 4.9,
      downloads: 25680,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["free", "popular"],
      description:
        language === "vi"
          ? "Mẫu CV theo chuẩn Harvard, được ưa chuộng bởi các nhà tuyển dụng"
          : "Harvard-standard CV template, favored by recruiters",
      features: [
        language === "vi" ? "Chuẩn Harvard" : "Harvard standard",
        language === "vi" ? "ATS-optimized" : "ATS-optimized",
        language === "vi" ? "Định dạng chuẩn" : "Standard format",
      ],
      featured: true,
    },
    {
      id: 5,
      name: language === "vi" ? "CV Business Executive" : "Business Executive CV",
      category: "business",
      style: "professional",
      color: "blue",
      price: 59000,
      originalPrice: 119000,
      rating: 4.6,
      downloads: 4320,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["premium"],
      description:
        language === "vi"
          ? "CV chuyên nghiệp cho các vị trí quản lý và điều hành"
          : "Professional CV for management and executive positions",
      features: [
        language === "vi" ? "Thiết kế executive" : "Executive design",
        language === "vi" ? "Leadership focus" : "Leadership focus",
        language === "vi" ? "Achievement highlights" : "Achievement highlights",
      ],
      featured: false,
    },
    {
      id: 6,
      name: language === "vi" ? "CV Xây dựng Pro" : "Construction Pro CV",
      category: "construction",
      style: "professional",
      color: "orange",
      price: 39000,
      originalPrice: 79000,
      rating: 4.5,
      downloads: 3210,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["new"],
      description:
        language === "vi"
          ? "Mẫu CV chuyên dành cho ngành xây dựng và kỹ thuật"
          : "Specialized CV template for construction and engineering",
      features: [
        language === "vi" ? "Chuyên ngành xây dựng" : "Construction-focused",
        language === "vi" ? "Certifications section" : "Certifications section",
        language === "vi" ? "Project highlights" : "Project highlights",
      ],
      featured: false,
    },
  ]

  const stats = [
    { icon: <FileText className="h-8 w-8" />, value: "100+", label: t.totalTemplates },
    { icon: <Download className="h-8 w-8" />, value: "500K+", label: t.downloads },
    { icon: <Users className="h-8 w-8" />, value: "50K+", label: t.users },
    { icon: <Star className="h-8 w-8" />, value: "98%", label: t.satisfaction },
  ]

  const toggleFavorite = (templateId: number) => {
    setFavorites((prev) => (prev.includes(templateId) ? prev.filter((id) => id !== templateId) : [...prev, templateId]))
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "popular":
        return "bg-orange-500 text-white"
      case "new":
        return "bg-green-500 text-white"
      case "premium":
        return "bg-purple-500 text-white"
      case "free":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case "popular":
        return t.popular
      case "new":
        return t.new
      case "premium":
        return t.premium
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
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.style}</label>
          <Select value={filters.style} onValueChange={(value) => setFilters((prev) => ({ ...prev, style: value }))}>
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn phong cách" : "Select style"} />
            </SelectTrigger>
            <SelectContent>
              {styles.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t.color}</label>
          <Select value={filters.color} onValueChange={(value) => setFilters((prev) => ({ ...prev, color: value }))}>
            <SelectTrigger>
              <SelectValue placeholder={language === "vi" ? "Chọn màu sắc" : "Select color"} />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${color.color}`}></div>
                    {color.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )

  const TemplateCard = ({ template, index }: { template: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative">
          <img src={template.image || "/placeholder.svg"} alt={template.name} className="w-full h-80 object-cover" />
          <div className="absolute top-3 left-3 flex gap-2">
            {template.badges.map((badge) => (
              <Badge key={badge} className={`${getBadgeColor(badge)} text-xs`}>
                {getBadgeText(badge)}
              </Badge>
            ))}
          </div>
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/80 hover:bg-white"
              onClick={() => toggleFavorite(template.id)}
            >
              <Heart
                className={`h-4 w-4 ${favorites.includes(template.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
              />
            </Button>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
              <Button size="sm" variant="secondary">
                <Eye className="h-4 w-4 mr-2" />
                {t.preview}
              </Button>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                <Download className="h-4 w-4 mr-2" />
                {t.useTemplate}
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition-colors">{template.name}</h3>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{template.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{template.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{template.downloads.toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {template.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {template.price === 0 ? (
                <span className="text-lg font-bold text-green-600">{t.free}</span>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-indigo-600">{template.price.toLocaleString()}đ</span>
                  {template.originalPrice > template.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      {template.originalPrice.toLocaleString()}đ
                    </span>
                  )}
                </div>
              )}
            </div>

            <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600">
              {t.useTemplate}
            </Button>
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

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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

              {/* Template Content */}
              <div className="flex-1">
                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList className="grid w-full sm:w-auto grid-cols-4">
                      <TabsTrigger value="all">{t.allTemplates}</TabsTrigger>
                      <TabsTrigger value="free">{t.freeTemplates}</TabsTrigger>
                      <TabsTrigger value="premium">{t.premiumTemplates}</TabsTrigger>
                      <TabsTrigger value="popular">{t.popularTemplates}</TabsTrigger>
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
                          <SelectItem value="downloads">
                            {language === "vi" ? "Tải nhiều nhất" : "Most Downloaded"}
                          </SelectItem>
                          <SelectItem value="rating">{language === "vi" ? "Đánh giá cao" : "Highest Rated"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="all" className="space-y-8">
                    {/* Featured Templates */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="h-6 w-6 text-yellow-500" />
                        {t.featuredTemplates}
                      </h2>
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {templates
                          .filter((template) => template.featured)
                          .map((template, index) => (
                            <TemplateCard key={template.id} template={template} index={index} />
                          ))}
                      </div>
                    </div>

                    {/* All Templates */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">{t.allTemplates}</h2>
                        <p className="text-muted-foreground">
                          {templates.length} {t.templatesFound}
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {templates.map((template, index) => (
                          <TemplateCard key={template.id} template={template} index={index} />
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="free">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {templates
                        .filter((template) => template.price === 0)
                        .map((template, index) => (
                          <TemplateCard key={template.id} template={template} index={index} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="premium">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {templates
                        .filter((template) => template.price > 0)
                        .map((template, index) => (
                          <TemplateCard key={template.id} template={template} index={index} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="popular">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {templates
                        .filter((template) => template.badges.includes("popular"))
                        .map((template, index) => (
                          <TemplateCard key={template.id} template={template} index={index} />
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
                {language === "vi"
                  ? "Chọn mẫu CV phù hợp với ngành nghề của bạn"
                  : "Choose CV templates that match your profession"}
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
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${category.color} text-white rounded-2xl mb-4`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{category.label}</h3>
                    <p className="text-muted-foreground">
                      {category.count} {language === "vi" ? "mẫu CV" : "templates"}
                    </p>
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
