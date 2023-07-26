import React, { useState } from "react";

export interface DropdownProps {
  children?: React.ReactNode;

  opened?: boolean;

  onChange?(opened: boolean): void;

  onOpen?(): void;

  onClose?(): void;

  closeOnEscape?: boolean;

  className?: string;
}

export default function Dropdown({
  children,
  opened,
  onChange,
  onOpen,
  onClose,
  closeOnEscape = true,
  className,
}: DropdownProps) {
  const [_opened, setOpened] = useState(false);

  const close = () => {
    setOpened(false);
    _opened && onClose?.();
  };

  const open = () => {
    setOpened(true);
    !_opened && onOpen?.();
  };

  const toggleDropdown = () => (_opened ? close() : open());
}
