import { createSafeContext } from "@/lib/utils";

interface DropdownContext {
  toggleDropdown(): void;
  closeDropdown(): void;
  openDropdown(): void;
  opened: boolean;
}

export const [DropdownContextProvider, useDropdownContext] =
  createSafeContext<DropdownContext>(
    "Menu component was not found in the tree"
  );
