import * as React from "react"
import Link from "next/link"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "../../utils"

const buttonVariants = cva("rounded-md relative", {
  variants: {
    variant: {
      default: "bg-white text-text shadow-button border border-gray-400",
      primary: "bg-customMyColor text-black",
      destructive: "bg-destructive text-white",
      monochrome: "bg-white text-text border border-gray-400",
    },
    modifier: {
      outline:
        "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
      plain: "shadow-none bg-transparent border-none px-2 py-1 text-sm",
    },
    size: {
      slim: "text-sm",
      medium: "text-sm",
      large: "text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "bg-surfaceDisabled text-textDisabled",
    },
  },
  compoundVariants: [
    {
      modifier: "outline",
      variant: "destructive",
      className: "text-destructive",
    },
    {
      modifier: "outline",
      variant: "primary",
      className: "text-primary",
    },
    {
      modifier: "plain",
      variant: "destructive",
      className: "text-destructive",
    },
    {
      modifier: "plain",
      variant: "primary",
      className: "text-primary",
    },
    {
      modifier: undefined,
      size: "slim",
      className: "px-3 py-1",
    },
    {
      modifier: "outline",
      size: "slim",
      className: "px-3 py-1",
    },
    {
      modifier: undefined,
      size: "medium",
      className: "px-4 py-2",
    },
    {
      modifier: "outline",
      size: "medium",
      className: "px-4 py-2",
    },
    {
      modifier: undefined,
      size: "large",
      className: "px-6 py-3",
    },
    {
      modifier: "outline",
      size: "large",
      className: "px-6 py-3",
    },
    {
      disabled: true,
      variant: "default",
      className: "border-borderDisabled",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
})

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      modifier,
      size,
      fullWidth,
      disabled,
      loading,
      href,
      ...props
    },
    ref
  ) => {
    if (href) {
      return (
        <Link
          className={cn(
            buttonVariants({ variant, modifier, size, fullWidth, disabled })
          )}
          href={href}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(
          buttonVariants({ variant, modifier, size, fullWidth, disabled })
        )}
        ref={ref}
        type="button"
        {...props}
      >
        <span className={cn("leading-[1.25rem]", loading && "opacity-0")}>
          {children}
        </span>
        {loading ? (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
            <svg
              className="animate-spin"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current"
                d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
              />
            </svg>
            <span className="sr-only">Loading</span>
          </span>
        ) : null}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
