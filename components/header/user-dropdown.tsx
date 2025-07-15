// File: components/header/user-dropdown.tsx

'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { User, LogIn, Search } from 'lucide-react'

interface UserDropdownProps {
  language: 'vi' | 'en'
  onLogout: () => void
}

export default function UserDropdown({ language, onLogout }: UserDropdownProps) {
  const t = {
    vi: {
      myProfile: 'Hồ sơ của tôi',
      myApplications: 'Đơn ứng tuyển',
      savedJobs: 'Việc đã lưu',
      logout: 'Đăng xuất'
    },
    en: {
      myProfile: 'My Profile',
      myApplications: 'My Applications',
      savedJobs: 'Saved Jobs',
      logout: 'Logout'
    }
  }[language]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-3">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
            U
          </div>
          <span className="hidden sm:inline">User Name</span>
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
        <DropdownMenuItem onClick={onLogout} className="gap-2 text-red-600">
          <LogIn className="h-4 w-4" />
          {t.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
