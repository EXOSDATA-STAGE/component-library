import { createEventHandler, isElement } from "@/lib/utils";
import React, { cloneElement, forwardRef } from "react";
import { useDropdownContext } from "../Dropdown.context";

export interface DropdownTargetProps {
  children: React.ReactNode;
}

const DropdownTarget = forwardRef<HTMLElement, DropdownTargetProps>(
  ({ children }, ref) => {
    const ctx = useDropdownContext();

    if (!isElement(children)) {
      throw new Error(
        "DropdownTarget only accepts a single child which is an element"
      );
    }

    const onClick = createEventHandler(children.props.onClick, () =>
      ctx.toggleDropdown()
    );

    return cloneElement(children, {
      onClick,
      ref,
    });
  }
);

export default DropdownTarget;
