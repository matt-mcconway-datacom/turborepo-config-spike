import { TestComponent } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/TestComponent",
  component: TestComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Text",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Text",
  },
};

export const SecondaryAlt: Story = {
  args: {
    variant: "secondary",
    children: "Text2",
  },
};
