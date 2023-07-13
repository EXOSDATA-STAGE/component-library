import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TextInput from "./TextInput";

const meta = {
  title: "TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Hello",
  },
};
