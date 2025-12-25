"use client"

import * as React from "react"
import { useRef, useState, useEffect } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  "data-language"?: string
}

export function Pre({
  children,
  className,
  "data-language": language,
  ...props
}: PreProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const [code, setCode] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (preRef.current) {
      setCode(preRef.current.innerText)
    }
  }, [children])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-8 not-prose">
      {/* Inject CSS to override inline styles from shiki/rehype-pretty-code */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-pre { background-color: transparent !important; }
        .custom-pre code { background-color: transparent !important; }
      `}} />
      
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border transition-all",
          "border-zinc-300 dark:border-zinc-800",
          "bg-[#fdfbf7]/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm"
        )}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-300/50 dark:border-zinc-800/50 bg-[#f5f2e9]/90 dark:bg-zinc-900/90">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
            {language || "code"}
          </div>
          
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold rounded-md transition-all",
              "text-zinc-600 dark:text-zinc-400",
              "hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50",
              copied ? "text-green-600 dark:text-green-400" : ""
            )}
          >
            {copied ? (
              <span className="flex items-center gap-1">
                <Check className="size-3" />
                <span>Copied</span>
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Copy className="size-3" />
                <span>Copy</span>
              </span>
            )}
          </button>
        </div>

        <pre
          ref={preRef}
          className={cn(
            "custom-pre p-5 text-sm sm:text-base leading-relaxed m-0 overflow-x-auto !bg-transparent !text-inherit",
            "scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </div>
    </div>
  )
}

export const components = {
  pre: Pre,
  CodeBlock: Pre,
  figure: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <figure 
      className={cn("m-0 p-0 !bg-transparent !border-0", className)} 
      {...props} 
    />
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold before:content-none after:content-none",
        className
      )}
      {...props}
    />
  ),
}