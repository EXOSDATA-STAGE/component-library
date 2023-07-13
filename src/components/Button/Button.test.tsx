import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import { checkAccessibility } from "@/lib/tests";

describe("Button", () => {
  checkAccessibility([<Button>Click Me!</Button>]);

  test("renders the Button component", () => {
    render(<Button>Click Me!</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders the Button component with a left icon", () => {
    render(<Button leftIcon={<span>👈</span>}>Click Me!</Button>);

    expect(screen.getByText("👈")).toBeInTheDocument();
  });

  test("renders the Button component with a right icon", () => {
    render(<Button rightIcon={<span>👉</span>}>Click Me!</Button>);

    expect(screen.getByText("👉")).toBeInTheDocument();
  });

  const onClickCallback = jest.fn();

  test("calls the onClick callback when clicked", () => {
    render(<Button onClick={onClickCallback}>Click Me!</Button>);

    screen.getByRole("button").click();

    expect(onClickCallback).toBeCalled();
  });
});
