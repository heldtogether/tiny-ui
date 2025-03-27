import { Meta, StoryObj } from "@storybook/react";

import {
  Sidebar,
  SidebarDivider,
  SidebarItems,
  SidebarLinkItem,
  SidebarButtonItem,
  SidebarTextItem,
} from "../components/Sidebar";
import { TreeNode } from "../components/TreeView";
import { TreeView } from "../components/TreeView";
import { Shell } from "../components/Shell";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <Shell className="tu:h-64">
        <div className="tu:w-full tu:h-96 tu:flex tu:border tu:border-rose-200">
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
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the sidebar",
      table: {
        type: { summary: "small | medium | large" },
      },
    },
    children: {
      description: "The child nodes of the sidebar",
      control: false,
    },
    label: {
      control: false,
      description: "The a11y label of the sidebar",
    },
    isVisible: {
      control: false,
      description: "Whether the sidebar is currently visible (only used on mobile)",
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

export const SidebarsWithTreeview: Story = {
  args: {
    size: "medium",
  },
  argTypes: {
    children: {
      control: false,
    },
    label: {
      control: false,
    },
    isVisible: {
      control: false,
    },
  },
  render: ({ size }) => (
    <Sidebar label="Main Navigation" isVisible={true} size={size}>
      <TreeView label="Tree View">
        <TreeNode label="Folder 1">
          <TreeNode label="Object 1" />
          <TreeNode label="Object 2" />
        </TreeNode>
        <TreeNode label="Folder 2">
          <TreeNode label="Object 3" />
          <TreeNode label="Object 4" />
        </TreeNode>
        <TreeNode label="Object 5" />
        <TreeNode label="Object 6" />
        <TreeNode label="Object 7" />
        <TreeNode label="Object 8" />
        <TreeNode label="Object 9" />
        <TreeNode label="Object 10" />
        <TreeNode label="Object 11" />
        <TreeNode label="Object 12" />
        <TreeNode label="Object 13" />
        <TreeNode label="Object 14" />
        <TreeNode label="Object 15" />
        <TreeNode label="Object 16" />
        <TreeNode label="Object 17" />
        <TreeNode label="Object 18" />
        <TreeNode label="Object 19" />
        <TreeNode label="Object 20" />
        <TreeNode label="Object 21" />
        <TreeNode label="Object 22" />
        <TreeNode label="Object 23" />
        <TreeNode label="Object 24" />
        <TreeNode label="Object 25" />
        <TreeNode label="Object 26" />
        <TreeNode label="Object 27" />
        <TreeNode label="Object 28" />
        <TreeNode label="Object 29" />
        <TreeNode label="Object 30" />
      </TreeView>
    </Sidebar>
  ),
};
