import * as React from "react"
// import { twMerge } from "tailwind-merge"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      {...other}
      className="ui-text-white ui-bg-blue-500 hover:ui-bg-blue-700 ui-font-bold ui-py-2 ui-px-4 ui-rounded"
    >
      {children}
    </button>
  )
}

Button.displayName = "Button"
