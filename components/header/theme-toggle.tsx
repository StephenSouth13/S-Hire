// File: components/header/theme-toggle.tsx

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setDarkMode(!darkMode)}
      className="w-9 h-9"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <Sun className="h-4 w-4 text-yellow-400" />
        ) : (
          <Moon className="h-4 w-4 text-slate-700" />
        )}
      </motion.div>
    </Button>
  )
}
