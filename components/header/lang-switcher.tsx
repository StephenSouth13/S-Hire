// File: components/header/lang-switcher.tsx

'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Globe, ChevronDown } from 'lucide-react'

interface LangSwitcherProps {
  language: 'vi' | 'en'
  setLanguage: (lang: 'vi' | 'en') => void
}

export default function LangSwitcher({ language, setLanguage }: LangSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-3">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{language.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setLanguage('vi')} className="gap-2">
          🇻🇳 Tiếng Việt
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')} className="gap-2">
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
