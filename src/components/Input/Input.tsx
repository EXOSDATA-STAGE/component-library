import React, { forwardRef, useId, useState } from "react";
import "@/styles/globals.css";
import "./Input.css";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva("btn", {
  variants: {
    size: {
      xs: ["input-xs"],
      sm: ["input-sm"],
      md: ["input-md"],
      lg: ["input-lg"],
      xl: ["input-xl"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "text" | "password" | "number" | "email";
  error?: boolean;
  errorMsg?: string;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      disabled,
      leftIcon,
      rightIcon,
      placeholder,
      className,
      required,
      error,
      errorMsg,
      ...props
    },
    ref
  ) => {
    let bothIcons = false;
    if (leftIcon && rightIcon) {
      bothIcons = true;
    }
    const id = useId();
    const [isPassword, setIsPassword] = useState(type === "password");
    const [inputType, setInputType] = useState(type);

    if (type === "email") {
      placeholder = placeholder ? placeholder : "info@yourmail.com";
      label = "Email";

      leftIcon = leftIcon ? leftIcon : <MdAlternateEmail />;
    }
    if (error) {
      rightIcon = <BiErrorCircle color="#DC3545" />;
    }
    if (type === "password") {
      rightIcon = isPassword ? (
        <div
          className="password-eye"
          onClick={() => {
            setIsPassword((prev) => !prev);
            setInputType("text");
          }}
        >
          <AiOutlineEye size={20} />
        </div>
      ) : (
        <div
          className="password-eye"
          onClick={() => {
            setIsPassword((prev) => !prev);
            setInputType("password");
          }}
        >
          <AiOutlineEyeInvisible size={20} />
        </div>
      );
    }
    if (leftIcon && rightIcon) {
      bothIcons = true;
    }
    return (
      <div className="input-container">
        <div>
          <label htmlFor={id} className="label">
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </label>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <input
              id={id}
              ref={ref}
              disabled={disabled}
              placeholder={placeholder}
              type={inputType}
              {...props}
              className={cn(
                "root-input",
                leftIcon && "with-left-icon",
                error && "errorInput",
                className
              )}
            />
            {leftIcon && (
              <span
                className={"leftIcon"}
                style={error ? { color: "#7f1d1d" } : {}}
              >
                {leftIcon}
              </span>
            )}
            {rightIcon && <span className="rightIcon">{rightIcon}</span>}
          </div>
          {error && <p className="errorMessage">{errorMsg}</p>}
        </div>
      </div>
    );
  }
);

export default TextInput;
