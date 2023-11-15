import { type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

export const ButtonVariants = cva(
  `
  flex justify-center items-center active:scale-95 rounded-xl 
  text-sm font-bold text-slate-100 transition-all shadow-md
  hover:scale-105 duration-200
  `,
  {
    variants: {
      variant: {
        default: ["shadow-none", "active:scale-100"],
        grey: "bg-slate-buttongreysp",
        blue: "bg-accent-blue",
      },
      size: {
        default: "",
        md: "w-[6.875rem] h-[2.375rem] text-[1rem] rounded-md",
        lg: "w-[21.875rem] h-[7.5rem] text-[3rem] rounded-3xl",
        wlg: "w-[24rem] h-[5.25rem] text-[2rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps2
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string
  children?: React.ReactElement
}

export function Button2({
  variant,
  size,
  children,
  label,
  ...props
}: ButtonProps2): JSX.Element {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {children && children}
      {label && label}
    </button>
  )
}

Button2.displayName = "Button2"
