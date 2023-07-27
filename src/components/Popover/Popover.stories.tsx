import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import Button from "@/components/Button";

const meta = {
  title: "Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Popover>
        <PopoverTrigger>
          <Button>Click Here</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    ),
  },
};
