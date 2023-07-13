import React, { forwardRef } from "react";
import "./Button.css";
import { cn } from "@/lib/utils";

import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: ["btn-primary"],
      secondary: ["btn-secondary"],
    },
    size: {
      xs: ["btn-xs"],
      sm: ["btn-sm"],
      md: ["btn-md"],
      lg: ["btn-lg"],
      xl: ["btn-xl"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, children, leftIcon, rightIcon, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant: variant,
            size: size,
          }),
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

export default Button;
