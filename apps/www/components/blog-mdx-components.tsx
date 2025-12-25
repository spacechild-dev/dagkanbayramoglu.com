"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"

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
  const preRef = React.useRef<HTMLPreElement>(null)
  const [code, setCode] = React.useState("")

  React.useEffect(() => {
    if (preRef.current) {
      setCode(preRef.current.innerText)
    }
  }, [children])

  return (
    <div className="relative group my-6 not-prose">
      {language && (
        <div className="absolute left-4 top-0 -translate-y-1/2 rounded-md bg-muted px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border z-20">
          {language}
        </div>
      )}
      <div className="absolute right-4 top-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton value={code} className="hover:bg-muted" />
      </div>
      <pre
        ref={preRef}
        className={cn(
          "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-xl border border-zinc-200/50 bg-white py-4 shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </pre>
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
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  ),
}
