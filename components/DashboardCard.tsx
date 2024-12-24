'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface DashboardCardProps {
  title: string
  value: string
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-blue-600 dark:text-blue-400">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

