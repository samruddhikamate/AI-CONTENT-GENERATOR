'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface UserProfileCardProps {
  isLoggedIn: boolean
}

export default function UserProfileCard({ isLoggedIn }: UserProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-blue-600 dark:text-blue-400">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={isLoggedIn ? "/avatar.png" : ""} />
            <AvatarFallback>
              {isLoggedIn ? "JD" : "?"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {isLoggedIn ? "John Doe" : "Guest User"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isLoggedIn ? "john.doe@example.com" : "Please log in"}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

