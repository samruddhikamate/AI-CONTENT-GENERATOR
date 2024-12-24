'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

interface Task {
  id: number
  title: string
  completed: boolean
}

interface TaskListProps {
  isLoggedIn: boolean
}

export default function TaskList({ isLoggedIn }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Generate blog post", completed: false },
    { id: 2, title: "Create social media content", completed: true },
    { id: 3, title: "Write product descriptions", completed: false },
  ])

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-full"
    >
      <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-blue-600 dark:text-blue-400">Task List</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoggedIn ? (
            <ul className="space-y-2">
              {tasks.map(task => (
                <li key={task.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                  />
                  <label
                    htmlFor={`task-${task.id}`}
                    className={`text-sm ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    {task.title}
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Please log in to view your tasks.</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

