import React, { forwardRef, useId, useState } from "react";
import "./Input.css";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { cn } from "@/lib/utils";

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

      leftIcon = leftIcon ? leftIcon : <AiOutlineMail />;
    }
    if (error) {
      rightIcon = rightIcon ? rightIcon : <BiErrorCircle color="#DC3545" />;
    }
    if (type === "password") {
      rightIcon = isPassword ? (
        <AiOutlineEye
          onClick={() => {
            setIsPassword((prev) => !prev);
            setInputType("text");
          }}
        />
      ) : (
        <AiOutlineEyeInvisible
          onClick={() => {
            setIsPassword((prev) => !prev);
            setInputType("password");
          }}
        />
      );
    }
    if (leftIcon && rightIcon) {
      bothIcons = true;
    }
    return (
      <div className="input-container">
        <div
          style={{
            marginBottom: "3rem",
          }}
        >
          <label htmlFor={id} className="label">
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </label>
          <div style={{ position: "relative" }}>
            <input
              id={id}
              ref={ref}
              disabled={disabled}
              placeholder={placeholder}
              type={inputType}
              {...props}
              className={cn(
                "text-body-color placeholder-body-color border-primary",
                leftIcon
                  ? "with-left-icon border-form-stroke "
                  : "border-form-stroke root-input",
                rightIcon
                  ? "with-right-icon border-form-stroke "
                  : "border-form-stroke root-input",
                bothIcons
                  ? "bothIcons border-form-stroke "
                  : "border-form-stroke root-input",
                error ? "errorInput" : "border-form-stroke root-input",
                className
              )}
            />
            {leftIcon && <span className="leftIcon">{leftIcon}</span>}
            {rightIcon && (
              <span className={bothIcons ? "bothIconsRight" : "rightIcon"}>
                {rightIcon}
              </span>
            )}
          </div>
          {error && <p className="errorMessage">{errorMsg}</p>}
        </div>
      </div>
    );
  }
);

export default TextInput;
