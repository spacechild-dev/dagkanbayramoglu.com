"use client"

import * as React from "react"
import { useLayoutEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  "data-language"?: string
  "data-theme"?: string
}

export function Pre({
  children,
  className,
  "data-language": language,
  "data-theme": theme,
  ...props
}: PreProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const [code, setCode] = useState("")
  const [copied, setCopied] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)

  React.useEffect(() => {
    if (preRef.current) {
      setCode(preRef.current.innerText)
    }
  }, [children])

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (preRef.current) {
        const hasHorizontalOverflow =
          preRef.current.scrollWidth > preRef.current.clientWidth
        setHasOverflow(hasHorizontalOverflow)
      }
    }

    checkOverflow()
    const resizeObserver = new ResizeObserver(checkOverflow)
    if (preRef.current) {
      resizeObserver.observe(preRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6 not-prose">
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border p-0.5",
          "border-zinc-950/10 dark:border-white/10",
          "bg-zinc-50 dark:bg-white/5",
          "text-zinc-950 dark:text-zinc-50"
        )}
      >
        {/* Tab Bar Style Header */}
        <div className="flex items-center relative pr-2.5 h-10 border-b border-zinc-950/5 dark:border-white/5 bg-zinc-100/50 dark:bg-white/5">
          <div className="flex-1 min-w-0 text-[10px] leading-6 rounded-tl-xl gap-1 flex items-center px-4 font-mono uppercase tracking-widest text-zinc-500 font-bold">
            {language || "code"}
          </div>
          
          {/* Copy Button */}
          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium rounded-lg",
              "text-zinc-500 dark:text-zinc-400",
              "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm",
              "border border-zinc-200/50 dark:border-zinc-800/50",
              "hover:bg-zinc-200/50 dark:hover:bg-zinc-700/70",
              "hover:text-zinc-950 dark:hover:text-zinc-50",
              "transition-all duration-150"
            )}
            aria-label="Copy code"
          >
            <span className="relative size-3">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Check className="size-full" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Copy className="size-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            <span>{copied ? "Copied" : "Copy"}</span>
          </motion.button>
        </div>

        {/* Code area */}
        <pre
          ref={preRef}
          className={cn(
            "p-4 text-sm leading-relaxed m-0 overflow-x-auto",
            "bg-white dark:bg-zinc-950/50 rounded-b-xl",
            "scrollbar-thin scrollbar-thumb-rounded",
            "scrollbar-thumb-black/15 hover:scrollbar-thumb-black/20",
            "dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/25",
            "[&::-webkit-scrollbar]:h-2",
            "[&::-webkit-scrollbar-thumb]:rounded-full",
            "[&::-webkit-scrollbar-thumb]:bg-black/15",
            "[&::-webkit-scrollbar-thumb]:dark:bg-white/20",
            "[&::-webkit-scrollbar-track]:bg-transparent",
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
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-200",
        className
      )}
      {...props}
    />
  ),
}