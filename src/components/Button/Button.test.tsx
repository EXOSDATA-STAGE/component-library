import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import { checkAccessibility } from "@/lib/tests";

describe("Button", () => {
  checkAccessibility([<Button>Click Me!</Button>]);

  test("renders the Button component", () => {
    render(<Button>Click Me!</Button>);

    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });
});
