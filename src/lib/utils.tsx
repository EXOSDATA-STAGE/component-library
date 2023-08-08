import { clsx, type ClassValue } from "clsx";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function isElement(value: any): value is React.ReactElement {
  if (Array.isArray(value) || value === null) {
    return false;
  }

  if (typeof value === "object") {
    if (value.type === React.Fragment) {
      return false;
    }

    return true;
  }

  return false;
}
