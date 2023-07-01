import React, { forwardRef } from "react";
import "./Button.css";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  label?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn("bigger-size", className)} {...props}>
        {children}
        {label}
      </button>
    );
  }
);

export default Button;
