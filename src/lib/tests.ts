import React from "react";
import { type RenderResult, act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

export async function renderWithAct(element: React.ReactElement) {
  let result: RenderResult | undefined;
  await act(async () => {
    result = render(element);
  });
  return result!;
}

const config = {
  rules: {
    region: {
      enabled: false,
    },

    "autocomplete-valid": {
      enabled: false,
    },
  },
};

export function checkAccessibility(elements: React.ReactElement[]) {
  expect.extend(toHaveNoViolations);

  it("has no accessibility violations", async () => {
    for (const element of elements) {
      const { container } = await renderWithAct(element);
      const result = await axe(container, config);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}
