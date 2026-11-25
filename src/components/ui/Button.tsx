import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[40px] font-sans font-medium uppercase transition-all duration-200 ease-linear disabled:pointer-events-none disabled:opacity-50 [&_svg]:-rotate-45 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:rotate-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(90deg,#6256ed_0,#f350bc_50%,#6256ed)] bg-[length:200%_100%] bg-left text-white hover:bg-[position:120%]",
        outline:
          "border border-current bg-transparent text-foreground hover:border-[var(--hap-base-color)] hover:text-[var(--hap-base-color)]",
        ghost: "text-foreground hover:text-primary bg-transparent",
      },
      size: {
        default: "h-[56px] px-7 text-[16px]",
        sm: "h-11 px-5 text-[14px]",
        lg: "h-[62px] px-[30px] text-[17px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";
