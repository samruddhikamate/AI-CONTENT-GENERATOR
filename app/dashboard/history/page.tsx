"use client"
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm'
import Image from 'next/image'
import React from 'react'
import { CopyButton } from '../_components/CopyButton'
import { Button } from '@/components/ui/button'
import TEMPLATE from '../_components/TemplateListSection'

export interface HISTORY {
  id: number
  formData: string
  aiResponse: string
  templateSlug: string
  createdBy: string
  createdAt: string
}

const Templates = [
  { slug: 'write-code', name: 'Write Code', icon: '/icons/code.svg' },
  { slug: 'instagram-hashtags', name: 'Instagram Hash Tag Generator', icon: '/icons/instagram.svg' },
  { slug: 'blog-ideas', name: 'Blog Topic Ideas', icon: '/icons/blog.svg' },
]

export default async function History() {
  const user = await currentUser()
  
  if (!user?.primaryEmailAddress?.emailAddress) {
    return <div>Please login to view history</div>
  }

  const historyList: HISTORY[] = await db.select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
    .orderBy(desc(AIOutput.createdAt))

  const getTemplateName = (slug: string) => {
    const template = Templates.find((item) => item.slug === slug)
    return template
  }

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>
      
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 p-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {historyList.map((item: HISTORY) => (
        <div key={item.id} className="grid grid-cols-7 my-5 py-3 px-3">
          <h2 className="col-span-2 flex gap-2 items-center">
            <Image 
              src={getTemplateName(item.templateSlug)?.icon || '/placeholder.svg'} 
              width={25} 
              height={25} 
              alt={getTemplateName(item.templateSlug)?.name || item.templateSlug} 
            />
            {getTemplateName(item.templateSlug)?.name || item.templateSlug}
          </h2>
          <h2 className="col-span-2 line-clamp-3">{item.aiResponse}</h2>
          <h2>{new Date(item.createdAt).toLocaleDateString()}</h2>
          <h2>{item.aiResponse.length}</h2>
          {/* <h2>
            <CopyButton text={item.aiResponse} />
          </h2> */}
          <h2>
            <Button variant='ghost' className='text-primary' 
            onClick={()=>navigator.clipboard.writeText(item.aiResponse)}
            >Copy</Button>
          </h2>
        </div>
      ))}
    </div>
  )
}

