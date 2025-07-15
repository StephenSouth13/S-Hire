// File: components/header/logo.tsx

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo({ language }: { language: 'vi' | 'en' }) {
  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <Image
          src="/S-hireLogo.png"
          alt="S-HIRE Logo"
          width={40}
          height={40}
          className="rounded-xl shadow-lg object-cover"
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </div>
      <div>
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          S-HIRE.VN
        </span>
        <div className="text-xs text-muted-foreground -mt-1">
          {language === 'vi' ? 'Tuyển dụng thông minh' : 'Smart Recruitment'}
        </div>
      </div>
    </motion.div>
  )
}
