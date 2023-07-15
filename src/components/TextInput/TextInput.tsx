import React, { forwardRef, useId } from "react";
import "./TextInput.css";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: Type;
  error?: boolean;
  errorMsg?: string;
}

type Type = "text" | "password" | "number" | "email";

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type,
      disabled,
      leftIcon,
      rightIcon,
      placeholder,
      className,
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
    if (type === "email") {
      placeholder = placeholder ? placeholder : "info@yourmail.com";
      label = "Email";

      leftIcon = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.33398 4.16667C2.87756 4.16667 2.50065 4.54357 2.50065 5V15C2.50065 15.4564 2.87756 15.8333 3.33398 15.8333H16.6673C17.1238 15.8333 17.5007 15.4564 17.5007 15V5C17.5007 4.54357 17.1238 4.16667 16.6673 4.16667H3.33398ZM0.833984 5C0.833984 3.6231 1.95708 2.5 3.33398 2.5H16.6673C18.0442 2.5 19.1673 3.6231 19.1673 5V15C19.1673 16.3769 18.0442 17.5 16.6673 17.5H3.33398C1.95708 17.5 0.833984 16.3769 0.833984 15V5Z"
              fill="#637381"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.984696 4.52154C1.24862 4.14449 1.76823 4.0528 2.14527 4.31673L10.0007 9.81554L17.8562 4.31673C18.2332 4.0528 18.7528 4.14449 19.0167 4.52154C19.2807 4.89858 19.189 5.41818 18.8119 5.68211L10.4786 11.5154C10.1917 11.7163 9.80977 11.7163 9.52284 11.5154L1.1895 5.68211C0.812463 5.41818 0.720767 4.89858 0.984696 4.52154Z"
              fill="#637381"
            ></path>
          </g>
        </svg>
      );
    }
    if (error) {
      rightIcon = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          color="#dc3545"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.9987 2.50065C5.85656 2.50065 2.4987 5.85852 2.4987 10.0007C2.4987 14.1428 5.85656 17.5007 9.9987 17.5007C14.1408 17.5007 17.4987 14.1428 17.4987 10.0007C17.4987 5.85852 14.1408 2.50065 9.9987 2.50065ZM0.832031 10.0007C0.832031 4.93804 4.93609 0.833984 9.9987 0.833984C15.0613 0.833984 19.1654 4.93804 19.1654 10.0007C19.1654 15.0633 15.0613 19.1673 9.9987 19.1673C4.93609 19.1673 0.832031 15.0633 0.832031 10.0007Z"
            fill="#DC3545"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0013 5.83398C10.4615 5.83398 10.8346 6.20708 10.8346 6.66732V10.0007C10.8346 10.4609 10.4615 10.834 10.0013 10.834C9.54106 10.834 9.16797 10.4609 9.16797 10.0007V6.66732C9.16797 6.20708 9.54106 5.83398 10.0013 5.83398Z"
            fill="#DC3545"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.16797 13.3333C9.16797 12.8731 9.54106 12.5 10.0013 12.5H10.0096C10.4699 12.5 10.843 12.8731 10.843 13.3333C10.843 13.7936 10.4699 14.1667 10.0096 14.1667H10.0013C9.54106 14.1667 9.16797 13.7936 9.16797 13.3333Z"
            fill="#DC3545"
          ></path>
        </svg>
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
            {label}
          </label>
          <div style={{ position: "relative" }}>
            <input
              id={id}
              ref={ref}
              disabled={disabled}
              placeholder={placeholder}
              type={type || "text"}
              {...props}
              className={cn(
                leftIcon
                  ? "with-left-icon border-form-stroke  text-body-color placeholder-body-color border-primary"
                  : "border-form-stroke text-body-color placeholder-body-color border-primary root-input",
                rightIcon
                  ? "with-right-icon border-form-stroke  text-body-color placeholder-body-color border-primary"
                  : "border-form-stroke text-body-color placeholder-body-color border-primary root-input",
                bothIcons
                  ? "bothIcons border-form-stroke  text-body-color placeholder-body-color border-primary"
                  : "border-form-stroke text-body-color placeholder-body-color border-primary root-input",
                error
                  ? "errorInput text-body-color placeholder-body-color border-primary"
                  : "border-form-stroke text-body-color placeholder-body-color border-primary root-input",
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
