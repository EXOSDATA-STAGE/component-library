import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button>Click Me!</Button>);

    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });
});
