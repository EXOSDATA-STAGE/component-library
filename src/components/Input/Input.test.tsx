import React from "react";
import { checkAccessibility } from "@/lib/tests";
import { render, screen } from "@testing-library/react";
import TextInput from "./Input";

describe("TextInput", () => {
  checkAccessibility([<TextInput label="Hello" />]);

  test("renders the Button component", () => {
    render(<TextInput label="Hello" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
