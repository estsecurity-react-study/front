import * as React from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function Button({
  children,
  className,
  ...other
}: ButtonProps): JSX.Element {
  const classNames = twMerge(
    "ui-text-white ui-bg-blue-500 hover:ui-bg-blue-700 ui-font-bold ui-py-2 ui-px-4 ui-rounded",
    className
  )
  return (
    <button type="button" {...other} className={classNames}>
      {children}
    </button>
  )
}

Button.displayName = "Button"
