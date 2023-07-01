import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Click Me!",
  },
};
