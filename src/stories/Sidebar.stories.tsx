import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  Sidebar,
  SidebarDivider,
  SidebarItems,
  SidebarLinkItem,
  SidebarButtonItem,
  SidebarTextItem,
} from "../components/Sidebar";
import { Content } from "../components/Content";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <div className="tu:w-full tu:h-96 tu:flex tu:border tu:border-rose-200">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  render: ({ size }) => (
    <Sidebar label="Main Navigation" isVisible={true} size={size}>
      <SidebarItems>
        <SidebarLinkItem href="#">Item1</SidebarLinkItem>
        <SidebarLinkItem href="#">Item2</SidebarLinkItem>
        <SidebarDivider />
        <SidebarLinkItem href="#">Item3</SidebarLinkItem>
      </SidebarItems>
      <SidebarItems>
        <SidebarButtonItem onClick={() => { }}>
          Settings
        </SidebarButtonItem>
        <SidebarDivider />
        <SidebarTextItem>
          <div className="tu:flex tu:flex-row tu:justify-between">
            <span className="tu:text-left tu:text-xs">&copy; 2025 Tiny UI</span>
            <span className="tu:text-right tu:font-bold tu:text-xs">
              v1.0.0
            </span>
          </div>
        </SidebarTextItem>
      </SidebarItems>
    </Sidebar>
  ),
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    size: "medium",
  },
};

export const MultipleSidebars: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: () => (
    <>
      <Sidebar label="Main Navigation" isVisible={true} size="medium">
        <SidebarItems>
          <SidebarLinkItem href="#">Item1</SidebarLinkItem>
          <SidebarLinkItem href="#">Item2</SidebarLinkItem>
          <SidebarDivider />
          <SidebarLinkItem href="#">Item3</SidebarLinkItem>
        </SidebarItems>
        <SidebarItems>
          <SidebarButtonItem onClick={() => { }}>
            Settings
          </SidebarButtonItem>
          <SidebarDivider />
          <SidebarTextItem>
            <div className="tu:flex tu:flex-row tu:justify-between">
              <span className="tu:text-left tu:text-xs">&copy; 2025 Tiny UI</span>
              <span className="tu:text-right tu:font-bold tu:text-xs">
                v1.0.0
              </span>
            </div>
          </SidebarTextItem>
        </SidebarItems>
      </Sidebar>
      <Sidebar label="Context-dependent Navigation" isVisible={true} size="large">
        <SidebarItems>
          <SidebarLinkItem href="#">Item4</SidebarLinkItem>
          <SidebarLinkItem href="#">Item5</SidebarLinkItem>
          <SidebarLinkItem href="#">Item6</SidebarLinkItem>
        </SidebarItems>
      </Sidebar>
    </>
  ),
};
