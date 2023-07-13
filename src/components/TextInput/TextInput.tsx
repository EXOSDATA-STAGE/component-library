import React, { forwardRef } from "react";
import "./Input.css";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, children, ...props }, ref) => {
    return (
      <input ref={ref} className={cn("", className)} {...props}>
        {children}
        {label}
      </input>
    );
  }
);

export default Input;
