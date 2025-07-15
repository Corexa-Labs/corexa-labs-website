import type React from "react"
import { cn } from "@/lib/utils"

interface DiagonalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function DiagonalCard({ children, className, ...props }: DiagonalCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transform -skew-y-3 group-hover:skew-y-0 transition-transform duration-500 ease-in-out",
        "bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700", // Lighter base styling
        className,
      )}
      {...props}
    >
      <div className="transform skew-y-3 group-hover:skew-y-0 transition-transform duration-500 ease-in-out p-6">
        {children}
      </div>
    </div>
  )
}
