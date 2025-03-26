import { StoryObj, Meta } from "@storybook/react";

import { Tooltip, TooltipContent } from "../components/Tooltip";

const meta: Meta<typeof TooltipContent> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Position of the tooltip",
    },
    children: {
      control: "text",
      description: "Content of the tooltip",
    },
    isVisible: {
      control: "boolean",
      description: "Whether the tooltip is permanently visible",
    },
  },
  args: {
    position: "top",
    children: "Tooltip content",
  },
  render: ({ position, children, isVisible }) => (
    <Tooltip>
      <button className="tu:mx-auto tu:p-2 tu:border tu:border-gray-300">Hover me</button>
      <TooltipContent position={position} isVisible={isVisible}>{children}</TooltipContent>
    </Tooltip>
  ),
};

export default meta;
type Story = StoryObj<typeof TooltipContent>;

export const Top: Story = {
  args: {
    position: "top",
    children: "Top tooltip",
    isVisible: true,
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom",
    children: "Bottom tooltip",
    isVisible: true,
  },
};

export const Left: Story = {
  args: {
    position: "left",
    children: "Left tooltip",
    isVisible: true,
  },
};

export const Right: Story = {
  args: {
    position: "right",
    children: "Right tooltip",
    isVisible: true,
  },
};
