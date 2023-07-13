import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click Here",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click Here",
    variant: "secondary",
    disabled: true,
  },
};
