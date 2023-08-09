import React, { forwardRef } from "react";

export interface DropdownItemProps {
  children?: React.ReactNode;
  closeMenuOnClick?: boolean;
  icon?: React.ReactNode;
}

const DropdownItem = forwardRef<HTMLElement, DropdownItemProps>(
  ({ children }, ref) => {
    return <div>{children}</div>;
  }
);

export default DropdownItem;
