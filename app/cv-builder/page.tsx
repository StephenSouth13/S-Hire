"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Save,
  Download,
  Eye,
  EyeOff,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  Globe,
  Plus,
  Minus,
  FileText,
  Zap,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function CVBuilderPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")
  const [previewMode, setPreviewMode] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [selectedColor, setSelectedColor] = useState("blue")
  const previewRef = useRef<HTMLDivElement>(null)

  const [cvData, setCvData] = useState({
    personal: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      linkedin: "",
      summary: "",
      photo: "",
    },
    experience: [
      {
        id: 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
    education: [
      {
        id: 1,
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        gpa: "",
      },
    ],
    skills: [{ id: 1, name: "", level: 80 }],
    languages: [{ id: 1, name: "", level: "Intermediate" }],
    certifications: [
      {
        id: 1,
        name: "",
        issuer: "",
        date: "",
        url: "",
      },
    ],
    projects: [
      {
        id: 1,
        name: "",
        description: "",
        technologies: "",
        url: "",
      },
    ],
  })

  const content = {
    vi: {
      title: "Trình Tạo CV Chuyên Nghiệp",
      subtitle: "Tạo CV ấn tượng trong vài phút với công cụ thiết kế hiện đại",
      personalInfo: "Thông tin cá nhân",
      experience: "Kinh nghiệm làm việc",
      education: "Học vấn",
      skills: "Kỹ năng",
      languages: "Ngôn ngữ",
      certifications: "Chứng chỉ",
      projects: "Dự án",
      preview: "Xem trước",
      hidePreview: "Ẩn xem trước",
      saveCV: "Lưu CV",
      downloadPDF: "Tải PDF",
      shareCV: "Chia sẻ CV",
      resetCV: "Đặt lại",
      template: "Mẫu thiết kế",
      colorScheme: "Màu sắc",
      fontSize: "Cỡ chữ",
      spacing: "Khoảng cách",
      fullName: "Họ và tên",
      jobTitle: "Chức danh",
      email: "Email",
      phone: "Số điện thoại",
      address: "Địa chỉ",
      website: "Website",
      linkedin: "LinkedIn",
      summary: "Tóm tắt bản thân",
      addExperience: "Thêm kinh nghiệm",
      addEducation: "Thêm học vấn",
      addSkill: "Thêm kỹ năng",
      addLanguage: "Thêm ngôn ngữ",
      addCertification: "Thêm chứng chỉ",
      addProject: "Thêm dự án",
      company: "Công ty",
      position: "Vị trí",
      startDate: "Ngày bắt đầu",
      endDate: "Ngày kết thúc",
      current: "Hiện tại",
      description: "Mô tả",
      school: "Trường học",
      degree: "Bằng cấp",
      field: "Chuyên ngành",
      gpa: "GPA",
      skillName: "Tên kỹ năng",
      skillLevel: "Mức độ",
      languageName: "Ngôn ngữ",
      languageLevel: "Trình độ",
      certificationName: "Tên chứng chỉ",
      issuer: "Tổ chức cấp",
      date: "Ngày cấp",
      url: "Đường dẫn",
      projectName: "Tên dự án",
      technologies: "Công nghệ",
      beginner: "Cơ bản",
      intermediate: "Trung cấp",
      advanced: "Nâng cao",
      native: "Bản ngữ",
    },
    en: {
      title: "Professional CV Builder",
      subtitle: "Create impressive CV in minutes with modern design tools",
      personalInfo: "Personal Information",
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      certifications: "Certifications",
      projects: "Projects",
      preview: "Preview",
      hidePreview: "Hide Preview",
      saveCV: "Save CV",
      downloadPDF: "Download PDF",
      shareCV: "Share CV",
      resetCV: "Reset CV",
      template: "Template",
      colorScheme: "Color Scheme",
      fontSize: "Font Size",
      spacing: "Spacing",
      fullName: "Full Name",
      jobTitle: "Job Title",
      email: "Email",
      phone: "Phone",
      address: "Address",
      website: "Website",
      linkedin: "LinkedIn",
      summary: "Professional Summary",
      addExperience: "Add Experience",
      addEducation: "Add Education",
      addSkill: "Add Skill",
      addLanguage: "Add Language",
      addCertification: "Add Certification",
      addProject: "Add Project",
      company: "Company",
      position: "Position",
      startDate: "Start Date",
      endDate: "End Date",
      current: "Current",
      description: "Description",
      school: "School",
      degree: "Degree",
      field: "Field of Study",
      gpa: "GPA",
      skillName: "Skill Name",
      skillLevel: "Skill Level",
      languageName: "Language",
      languageLevel: "Proficiency",
      certificationName: "Certification Name",
      issuer: "Issuing Organization",
      date: "Issue Date",
      url: "URL",
      projectName: "Project Name",
      technologies: "Technologies",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      native: "Native",
    },
  }

  const t = content[language]

  const templates = [
    { value: "modern", label: language === "vi" ? "Hiện đại" : "Modern" },
    { value: "classic", label: language === "vi" ? "Cổ điển" : "Classic" },
    { value: "creative", label: language === "vi" ? "Sáng tạo" : "Creative" },
    { value: "minimal", label: language === "vi" ? "Tối giản" : "Minimal" },
    { value: "professional", label: language === "vi" ? "Chuyên nghiệp" : "Professional" },
  ]

  const colorSchemes = [
    { value: "blue", label: language === "vi" ? "Xanh dương" : "Blue", color: "bg-blue-500" },
    { value: "green", label: language === "vi" ? "Xanh lá" : "Green", color: "bg-green-500" },
    { value: "purple", label: language === "vi" ? "Tím" : "Purple", color: "bg-purple-500" },
    { value: "orange", label: language === "vi" ? "Cam" : "Orange", color: "bg-orange-500" },
    { value: "red", label: language === "vi" ? "Đỏ" : "Red", color: "bg-red-500" },
    { value: "gray", label: language === "vi" ? "Xám" : "Gray", color: "bg-gray-500" },
  ]

  const languageLevels = [
    { value: "beginner", label: t.beginner },
    { value: "intermediate", label: t.intermediate },
    { value: "advanced", label: t.advanced },
    { value: "native", label: t.native },
  ]

  const updatePersonalInfo = (field: string, value: string) => {
    setCvData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const addExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }))
  }

  const updateExperience = (id: number, field: string, value: string | boolean) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    }))
  }

  const removeExperience = (id: number) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }))
  }

  const addEducation = () => {
    setCvData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          gpa: "",
        },
      ],
    }))
  }

  const updateEducation = (id: number, field: string, value: string) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    }))
  }

  const removeEducation = (id: number) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
  }

  const addSkill = () => {
    setCvData((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now(), name: "", level: 80 }],
    }))
  }

  const updateSkill = (id: number, field: string, value: string | number) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)),
    }))
  }

  const removeSkill = (id: number) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }))
  }

  const CVPreview = () => (
    <div className="bg-white text-black p-8 shadow-lg min-h-[297mm] w-full max-w-[210mm] mx-auto">
      {/* Header */}
      <div className="border-b-2 border-blue-500 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{cvData.personal.fullName || "Your Name"}</h1>
        <h2 className="text-xl text-blue-600 mb-4">{cvData.personal.title || "Your Job Title"}</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="space-y-1">
            {cvData.personal.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {cvData.personal.email}
              </div>
            )}
            {cvData.personal.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {cvData.personal.phone}
              </div>
            )}
          </div>
          <div className="space-y-1">
            {cvData.personal.address && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {cvData.personal.address}
              </div>
            )}
            {cvData.personal.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {cvData.personal.website}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {cvData.personal.summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            {language === "vi" ? "TÓM TẮT" : "SUMMARY"}
          </h3>
          <p className="text-gray-700 leading-relaxed">{cvData.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {cvData.experience.some((exp) => exp.company) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            {language === "vi" ? "KINH NGHIỆM LÀM VIỆC" : "WORK EXPERIENCE"}
          </h3>
          <div className="space-y-4">
            {cvData.experience
              .filter((exp) => exp.company)
              .map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{exp.position}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {exp.startDate} - {exp.current ? (language === "vi" ? "Hiện tại" : "Present") : exp.endDate}
                    </div>
                  </div>
                  {exp.description && <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Education */}
      {cvData.education.some((edu) => edu.school) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            {language === "vi" ? "HỌC VẤN" : "EDUCATION"}
          </h3>
          <div className="space-y-3">
            {cvData.education
              .filter((edu) => edu.school)
              .map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                      <p className="text-blue-600">{edu.school}</p>
                      {edu.field && <p className="text-sm text-gray-600">{edu.field}</p>}
                    </div>
                    <div className="text-sm text-gray-600">
                      {edu.startDate} - {edu.endDate}
                      {edu.gpa && <div>GPA: {edu.gpa}</div>}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {cvData.skills.some((skill) => skill.name) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            {language === "vi" ? "KỸ NĂNG" : "SKILLS"}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {cvData.skills
              .filter((skill) => skill.name)
              .map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                    <span className="text-xs text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {cvData.languages.some((lang) => lang.name) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            {language === "vi" ? "NGÔN NGỮ" : "LANGUAGES"}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {cvData.languages
              .filter((lang) => lang.name)
              .map((lang) => (
                <div key={lang.id} className="flex justify-between">
                  <span className="text-sm text-gray-800">{lang.name}</span>
                  <span className="text-sm text-gray-600">{lang.level}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl mb-6 opacity-90">{t.subtitle}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  {previewMode ? <EyeOff className="h-5 w-5 mr-2" /> : <Eye className="h-5 w-5 mr-2" />}
                  {previewMode ? t.hidePreview : t.preview}
                </Button>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                  <Save className="h-5 w-5 mr-2" />
                  {t.saveCV}
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Download className="h-5 w-5 mr-2" />
                  {t.downloadPDF}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className={`grid ${previewMode ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-8`}>
              {/* Form Section */}
              <div className="space-y-6">
                {/* Template & Style Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      {language === "vi" ? "Cài đặt thiết kế" : "Design Settings"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>{t.template}</Label>
                        <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {templates.map((template) => (
                              <SelectItem key={template.value} value={template.value}>
                                {template.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>{t.colorScheme}</Label>
                        <Select value={selectedColor} onValueChange={setSelectedColor}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {colorSchemes.map((color) => (
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
                  </CardContent>
                </Card>

                {/* Form Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
                    <TabsTrigger value="personal" className="text-xs">
                      <User className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.personalInfo}</span>
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="text-xs">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.experience}</span>
                    </TabsTrigger>
                    <TabsTrigger value="education" className="text-xs">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.education}</span>
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="text-xs">
                      <Zap className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.skills}</span>
                    </TabsTrigger>
                    <TabsTrigger value="languages" className="text-xs">
                      <Globe className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.languages}</span>
                    </TabsTrigger>
                    <TabsTrigger value="certifications" className="text-xs">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.certifications}</span>
                    </TabsTrigger>
                    <TabsTrigger value="projects" className="text-xs">
                      <FileText className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{t.projects}</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Personal Information */}
                  <TabsContent value="personal">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t.personalInfo}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">{t.fullName}</Label>
                            <Input
                              id="fullName"
                              value={cvData.personal.fullName}
                              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <Label htmlFor="title">{t.jobTitle}</Label>
                            <Input
                              id="title"
                              value={cvData.personal.title}
                              onChange={(e) => updatePersonalInfo("title", e.target.value)}
                              placeholder="Software Developer"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">{t.email}</Label>
                            <Input
                              id="email"
                              type="email"
                              value={cvData.personal.email}
                              onChange={(e) => updatePersonalInfo("email", e.target.value)}
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">{t.phone}</Label>
                            <Input
                              id="phone"
                              value={cvData.personal.phone}
                              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                              placeholder="+84 123 456 789"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address">{t.address}</Label>
                          <Input
                            id="address"
                            value={cvData.personal.address}
                            onChange={(e) => updatePersonalInfo("address", e.target.value)}
                            placeholder="123 Street, City, Country"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="website">{t.website}</Label>
                            <Input
                              id="website"
                              value={cvData.personal.website}
                              onChange={(e) => updatePersonalInfo("website", e.target.value)}
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="linkedin">{t.linkedin}</Label>
                            <Input
                              id="linkedin"
                              value={cvData.personal.linkedin}
                              onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                              placeholder="linkedin.com/in/yourprofile"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="summary">{t.summary}</Label>
                          <Textarea
                            id="summary"
                            value={cvData.personal.summary}
                            onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                            placeholder={
                              language === "vi"
                                ? "Mô tả ngắn gọn về bản thân, kinh nghiệm và mục tiêu nghề nghiệp..."
                                : "Brief description about yourself, experience and career goals..."
                            }
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Experience */}
                  <TabsContent value="experience">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{t.experience}</CardTitle>
                        <Button onClick={addExperience} size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          {t.addExperience}
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {cvData.experience.map((exp, index) => (
                          <div key={exp.id} className="p-4 border rounded-lg space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">
                                {language === "vi" ? "Kinh nghiệm" : "Experience"} #{index + 1}
                              </h4>
                              {cvData.experience.length > 1 && (
                                <Button variant="outline" size="sm" onClick={() => removeExperience(exp.id)}>
                                  <Minus className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>{t.company}</Label>
                                <Input
                                  value={exp.company}
                                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                  placeholder="Company Name"
                                />
                              </div>
                              <div>
                                <Label>{t.position}</Label>
                                <Input
                                  value={exp.position}
                                  onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                                  placeholder="Job Title"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <Label>{t.startDate}</Label>
                                <Input
                                  type="month"
                                  value={exp.startDate}
                                  onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                                />
                              </div>
                              <div>
                                <Label>{t.endDate}</Label>
                                <Input
                                  type="month"
                                  value={exp.endDate}
                                  onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                  disabled={exp.current}
                                />
                              </div>
                              <div className="flex items-center space-x-2 pt-6">
                                <Switch
                                  id={`current-${exp.id}`}
                                  checked={exp.current}
                                  onCheckedChange={(checked) => updateExperience(exp.id, "current", checked)}
                                />
                                <Label htmlFor={`current-${exp.id}`}>{t.current}</Label>
                              </div>
                            </div>

                            <div>
                              <Label>{t.description}</Label>
                              <Textarea
                                value={exp.description}
                                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                                placeholder={
                                  language === "vi"
                                    ? "Mô tả công việc, thành tựu và trách nhiệm..."
                                    : "Describe your job responsibilities, achievements..."
                                }
                                rows={3}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Education */}
                  <TabsContent value="education">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{t.education}</CardTitle>
                        <Button onClick={addEducation} size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          {t.addEducation}
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {cvData.education.map((edu, index) => (
                          <div key={edu.id} className="p-4 border rounded-lg space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">
                                {language === "vi" ? "Học vấn" : "Education"} #{index + 1}
                              </h4>
                              {cvData.education.length > 1 && (
                                <Button variant="outline" size="sm" onClick={() => removeEducation(edu.id)}>
                                  <Minus className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>{t.school}</Label>
                                <Input
                                  value={edu.school}
                                  onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                                  placeholder="University Name"
                                />
                              </div>
                              <div>
                                <Label>{t.degree}</Label>
                                <Input
                                  value={edu.degree}
                                  onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                  placeholder="Bachelor's Degree"
                                />
                              </div>
                            </div>

                            <div>
                              <Label>{t.field}</Label>
                              <Input
                                value={edu.field}
                                onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                placeholder="Computer Science"
                              />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <Label>{t.startDate}</Label>
                                <Input
                                  type="month"
                                  value={edu.startDate}
                                  onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                                />
                              </div>
                              <div>
                                <Label>{t.endDate}</Label>
                                <Input
                                  type="month"
                                  value={edu.endDate}
                                  onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                                />
                              </div>
                              <div>
                                <Label>{t.gpa}</Label>
                                <Input
                                  value={edu.gpa}
                                  onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                                  placeholder="3.8/4.0"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Skills */}
                  <TabsContent value="skills">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{t.skills}</CardTitle>
                        <Button onClick={addSkill} size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          {t.addSkill}
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cvData.skills.map((skill, index) => (
                          <div key={skill.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="font-medium">
                                {language === "vi" ? "Kỹ năng" : "Skill"} #{index + 1}
                              </h4>
                              {cvData.skills.length > 1 && (
                                <Button variant="outline" size="sm" onClick={() => removeSkill(skill.id)}>
                                  <Minus className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="space-y-4">
                              <div>
                                <Label>{t.skillName}</Label>
                                <Input
                                  value={skill.name}
                                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                                  placeholder="JavaScript"
                                />
                              </div>
                              <div>
                                <Label>
                                  {t.skillLevel}: {skill.level}%
                                </Label>
                                <Slider
                                  value={[skill.level]}
                                  onValueChange={(value) => updateSkill(skill.id, "level", value[0])}
                                  max={100}
                                  step={5}
                                  className="mt-2"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Languages */}
                  <TabsContent value="languages">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{t.languages}</CardTitle>
                        <Button
                          onClick={() =>
                            setCvData((prev) => ({
                              ...prev,
                              languages: [...prev.languages, { id: Date.now(), name: "", level: "Intermediate" }],
                            }))
                          }
                          size="sm"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {t.addLanguage}
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cvData.languages.map((lang, index) => (
                          <div key={lang.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="font-medium">
                                {language === "vi" ? "Ngôn ngữ" : "Language"} #{index + 1}
                              </h4>
                              {cvData.languages.length > 1 && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      languages: prev.languages.filter((l) => l.id !== lang.id),
                                    }))
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>{t.languageName}</Label>
                                <Input
                                  value={lang.name}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      languages: prev.languages.map((l) =>
                                        l.id === lang.id ? { ...l, name: e.target.value } : l,
                                      ),
                                    }))
                                  }
                                  placeholder="English"
                                />
                              </div>
                              <div>
                                <Label>{t.languageLevel}</Label>
                                <Select
                                  value={lang.level}
                                  onValueChange={(value) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      languages: prev.languages.map((l) =>
                                        l.id === lang.id ? { ...l, level: value } : l,
                                      ),
                                    }))
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {languageLevels.map((level) => (
                                      <SelectItem key={level.value} value={level.value}>
                                        {level.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Certifications */}
                  <TabsContent value="certifications">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{t.certifications}</CardTitle>
                        <Button
                          onClick={() =>
                            setCvData((prev) => ({
                              ...prev,
                              certifications: [
                                ...prev.certifications,
                                { id: Date.now(), name: "", issuer: "", date: "", url: "" },
                              ],
                            }))
                          }
                          size="sm"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {t.addCertification}
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cvData.certifications.map((cert, index) => (
                          <div key={cert.id} className="p-4 border rounded-lg space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">
                                {language === "vi" ? "Chứng chỉ" : "Certification"} #{index + 1}
                              </h4>
                              {cvData.certifications.length > 1 && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      certifications: prev.certifications.filter((c) => c.id !== cert.id),
                                    }))
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>{t.certificationName}</Label>
                                <Input
                                  value={cert.name}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      certifications: prev.certifications.map((c) =>
                                        c.id === cert.id ? { ...c, name: e.target.value } : c,
                                      ),
                                    }))
                                  }
                                  placeholder="AWS Certified Developer"
                                />
                              </div>
                              <div>
                                <Label>{t.issuer}</Label>
                                <Input
                                  value={cert.issuer}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      certifications: prev.certifications.map((c) =>
                                        c.id === cert.id ? { ...c, issuer: e.target.value } : c,
                                      ),
                                    }))
                                  }
                                  placeholder="Amazon Web Services"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>{t.date}</Label>
                                <Input
                                  type="month"
                                  value={cert.date}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      certifications: prev.certifications.map((c) =>
                                        c.id === cert.id ? { ...c, date: e.target.value } : c,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                              <div>
                                <Label>{t.url}</Label>
                                <Input
                                  value={cert.url}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      certifications: prev.certifications.map((c) =>
                                        c.id === cert.id ? { ...c, url: e.target.value } : c,
                                      ),
                                    }))
                                  }
                                  placeholder="https://certification-url.com"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Projects */}
                  <TabsContent value="projects">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{t.projects}</CardTitle>
                        <Button
                          onClick={() =>
                            setCvData((prev) => ({
                              ...prev,
                              projects: [
                                ...prev.projects,
                                { id: Date.now(), name: "", description: "", technologies: "", url: "" },
                              ],
                            }))
                          }
                          size="sm"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {t.addProject}
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cvData.projects.map((project, index) => (
                          <div key={project.id} className="p-4 border rounded-lg space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">
                                {language === "vi" ? "Dự án" : "Project"} #{index + 1}
                              </h4>
                              {cvData.projects.length > 1 && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      projects: prev.projects.filter((p) => p.id !== project.id),
                                    }))
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div>
                              <Label>{t.projectName}</Label>
                              <Input
                                value={project.name}
                                onChange={(e) =>
                                  setCvData((prev) => ({
                                    ...prev,
                                    projects: prev.projects.map((p) =>
                                      p.id === project.id ? { ...p, name: e.target.value } : p,
                                    ),
                                  }))
                                }
                                placeholder="E-commerce Website"
                              />
                            </div>

                            <div>
                              <Label>{t.description}</Label>
                              <Textarea
                                value={project.description}
                                onChange={(e) =>
                                  setCvData((prev) => ({
                                    ...prev,
                                    projects: prev.projects.map((p) =>
                                      p.id === project.id ? { ...p, description: e.target.value } : p,
                                    ),
                                  }))
                                }
                                placeholder={
                                  language === "vi"
                                    ? "Mô tả dự án, tính năng chính và vai trò của bạn..."
                                    : "Describe the project, main features and your role..."
                                }
                                rows={3}
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>{t.technologies}</Label>
                                <Input
                                  value={project.technologies}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      projects: prev.projects.map((p) =>
                                        p.id === project.id ? { ...p, technologies: e.target.value } : p,
                                      ),
                                    }))
                                  }
                                  placeholder="React, Node.js, MongoDB"
                                />
                              </div>
                              <div>
                                <Label>{t.url}</Label>
                                <Input
                                  value={project.url}
                                  onChange={(e) =>
                                    setCvData((prev) => ({
                                      ...prev,
                                      projects: prev.projects.map((p) =>
                                        p.id === project.id ? { ...p, url: e.target.value } : p,
                                      ),
                                    }))
                                  }
                                  placeholder="https://project-demo.com"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Preview Section */}
              {previewMode && (
                <div className="lg:sticky lg:top-24">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        {t.preview}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[800px] overflow-y-auto" ref={previewRef}>
                        <CVPreview />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer language={language} />
        <FloatingChat language={language} />
      </div>
    </div>
  )
}
