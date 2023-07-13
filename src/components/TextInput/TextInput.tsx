import React, { forwardRef, useId } from "react";
import "./TextInput.css";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    const id = useId();
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
          <input
            id={id}
            ref={ref}
            type="text"
            {...props}
            className={cn(
              "border-form-stroke text-body-color placeholder-body-color border-primary root-input",
              className
            )}
          />
        </div>
      </div>
    );
  }
);

export default TextInput;
