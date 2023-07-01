import React from "react";
import "./Button.css";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn("bigger-size", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
