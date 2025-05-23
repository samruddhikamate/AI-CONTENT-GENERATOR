// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { ArrowRight, Book, Clock4, Layout, Settings } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <nav className="border-b">
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center">
//             <Image
//               src="/logo.svg"
//               alt="Logo"
//               width={120}
//               height={40}
//               className="h-8 w-auto"
//             />
//           </div>
//           <Button variant="ghost" className="font-medium">
//             <Link href={"/dashboard"}>
//               Get Started
//             </Link>
//           </Button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="container mx-auto px-4">
//         {/* Membership Banner */}
//         <div className="flex justify-center mt-8">
//           <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-1">
//             <span className="text-sm text-gray-600">Unlock Exclusive Benefits with Membership - Join Now</span>
//             <ArrowRight className="w-4 h-4 ml-2 text-gray-600" />
//           </div>
//         </div>

//         {/* Hero Section */}
//         <div className="text-center mt-16 mb-24">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             AI Content{' '}
//             <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
//               Generator
//             </span>
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
//             Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
//           </p>
//           <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
//             <Link href={"/dashboard"} className='flex'>
//               Get started <ArrowRight className="w-4 h-4 ml-2" />
//             </Link>
//           </Button>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
//           <FeatureCard
//             icon={<Layout className="w-6 h-6" />}
//             title="25+ templates"
//             description="Responsive, and mobile-first project on the web"
//           />
//           <FeatureCard
//             icon={<Settings className="w-6 h-6" />}
//             title="Customizable"
//             description="Components are easily customized and extendable"
//           />
//           <FeatureCard
//             icon={<Book className="w-6 h-6" />}
//             title="Free to Use"
//             description="Every component and plugin is well documented"
//           />
//           <FeatureCard
//             icon={<Clock4 className="w-6 h-6" />}
//             title="24/7 Support"
//             description="Contact us 24 hours a day, 7 days a week"
//           />
//         </div>
//       </main>
//     </div>
//   )
// }

// interface FeatureCardProps {
//   icon: React.ReactNode
//   title: string
//   description: string
// }

// function FeatureCard({ icon, title, description }: FeatureCardProps) {
//   return (
//     <Card className="border-0 shadow-none">
//       <CardContent className="p-6">
//         <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
//           {icon}
//         </div>
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
//           Learn more <ArrowRight className="w-4 h-4 ml-1" />
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }



"use client"; // Ensure this is a Client Component

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Book, Clock4, Layout, Settings } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} className="h-8 w-auto" />
          
          {/* Animated Navbar Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" className="font-medium">
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Membership Banner */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-1">
            <span className="text-sm text-gray-600">Unlock Exclusive Benefits with Membership - Join Now</span>
            <ArrowRight className="w-4 h-4 ml-2 text-gray-600" />
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="text-center mt-16 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Content{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>

          {/* Animated Call to Action Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              <Link href={"/dashboard"} className='flex'>
                Get started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FeatureCard icon={<Layout className="w-6 h-6" />} title="25+ Templates" description="Responsive, and mobile-first project on the web" />
          <FeatureCard icon={<Settings className="w-6 h-6" />} title="Customizable" description="Components are easily customized and extendable" />
          <FeatureCard icon={<Book className="w-6 h-6" />} title="Free to Use" description="Every component and plugin is well documented" />
          <FeatureCard icon={<Clock4 className="w-6 h-6" />} title="24/7 Support" description="Contact us 24 hours a day, 7 days a week" />
        </motion.div>
      </main>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-6">
        {/* Animated Feature Card Icon */}
        <motion.div
          className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="link" className="text-blue-600 p-0 h-auto font-medium">
          Learn more <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
