'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
}

export default function Navbar({ isLoggedIn, onLogin, onLogout }: NavbarProps) {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })


  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">AIContentGenerator</h1>
        <Button
          onClick={isLoggedIn ? onLogout : onLogin}
          variant={isLoggedIn ? "outline" : "default"}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </div>
    </motion.nav>
  )
}

