import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Menu from "./Menu";

const meta = {
  title: "Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
