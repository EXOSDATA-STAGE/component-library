import React, {  forwardRef } from "react";

export interface DropdownItemProps {
  children?: React.ReactNode;
  closeMenuOnClick?: boolean;
  icon?: React.ReactNode;
}

const DropdownItem = forwardRef<HTMLButtonElement, MenuItemProps>() => {
  return <div></div>;
};

export default DropdownItem;
