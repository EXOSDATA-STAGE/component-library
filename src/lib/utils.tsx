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

import { createContext, useContext } from "react";

export function createSafeContext<ContextValue>(errorMessage: string) {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const Provider = ({
    children,
    value,
  }: {
    value: ContextValue;
    children: React.ReactNode;
  }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return [Provider, useSafeContext] as const;
}

type EventHandler<Event> = (event?: Event) => void;

export function createEventHandler<Event>(
  parentEventHandler: EventHandler<Event>,
  eventHandler: EventHandler<Event>
) {
  return (event?: Event) => {
    parentEventHandler?.(event);
    eventHandler?.(event);
  };
}
