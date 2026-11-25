import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-[62px] w-full rounded-[40px] border bg-white px-5 text-[17px] text-black placeholder:text-[#9fa4af] transition-colors duration-200 outline-none",
        "border-[#e6e6ef] focus:border-[var(--hap-base-color)]",
        hasError && "border-destructive focus:border-destructive",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex h-[140px] w-full rounded-[30px] border bg-white px-5 py-[15px] text-[17px] text-black placeholder:text-[#9fa4af] transition-colors duration-200 outline-none resize-none",
        "border-[#e6e6ef] focus:border-[var(--hap-base-color)]",
        hasError && "border-destructive focus:border-destructive",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
