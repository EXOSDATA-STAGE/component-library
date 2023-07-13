import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

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
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    children: "Click Here",
    variant: "primary",
    leftIcon: <span>👈</span>,
  },
};

export const SecondaryWithRightIcon: Story = {
  args: {
    children: "Click Here",
    variant: "secondary",
    rightIcon: <span>👉</span>,
  },
};
