import { isElement } from "@/lib/utils";
import React, { cloneElement, forwardRef } from "react";

export interface DropdownTargetProps {
  children: React.ReactNode;
}

const DropdownTarget = forwardRef<HTMLElement, DropdownTargetProps>(
  ({ children }, ref) => {
    if (!isElement(children)) {
      throw new Error(
        "DropdownTarget only accepts a single child which is an element"
      );
    }

    const onClick = children.props.onClick;

    return cloneElement(children, {
      onClick,
      ref,
    });
  }
);

export default DropdownTarget;
