'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button 
      variant="ghost" 
      className="text-primary"
      onClick={handleCopy}
    >
      {copied ? "Copied!" : "Copy"}
    </Button>
  )
}

