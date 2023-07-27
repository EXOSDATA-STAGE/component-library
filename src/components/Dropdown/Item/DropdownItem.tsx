import React, {  forwardRef } from "react";

export interface DropdownItemProps {
  children?: React.ReactNode;
  closeMenuOnClick?: boolean;
  icon?: React.ReactNode;
}

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(props,ref) => {
  return <div></div>;
};

export default DropdownItem;
