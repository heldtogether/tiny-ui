import { StoryObj, Meta } from "@storybook/react";

import { Button } from "../components/Button";
import { Add } from "@carbon/icons-react";
import { Shell } from "../components/Shell";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <Shell className="tu:h-64">
        <div className="tu:flex tu:flex-row tu:gap-4">
          <Story />
        </div>
      </Shell>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content of the tooltip",
    },
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "destructive"],
      description: "Type of the button",
    },
    ghost: {
      control: false,
      description: "Whether the button is ghost",
    },
    icon: {
      control: false,
      description: "Icon for the button",
    },
    iconOnly: {
      control: false,
      description: "Whether the button is icon only",
    },
  },
  args: {
    children: "Click Me",
  },
  render: ({ children, type }) => (
    <>
      <Button type={type}>{children}</Button>
      <Button type={type} ghost>{children}</Button>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    type: "tertiary",
  },
};

export const Destructive: Story = {
  args: {
    type: "destructive",
  },
};

export const WithIcon: Story = {
  args: {
    type: "primary",
    icon: Add,
  },
  render: ({ children, icon }) => (
    <>
      <Button type="primary" icon={icon}>{children}</Button>
      <Button type="primary" ghost icon={icon}>{children}</Button>
    </>
  ),
};

export const IconOnly: Story = {
  args: {
    type: "primary",
    icon: Add,
  },
  render: ({ children, icon }) => (
    <>
      <Button type="primary" icon={icon} iconOnly>{children}</Button>
      <Button type="primary" ghost icon={icon} iconOnly>{children}</Button>
    </>
  ),
};