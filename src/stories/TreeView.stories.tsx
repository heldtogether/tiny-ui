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
import { TreeNode, TreeView } from "../components/TreeView";

const meta: Meta<typeof TreeView> = {
  title: "Components/TreeView",
  component: TreeView,
  subcomponents: {
    TreeNode,
  },
  decorators: [
    (Story) => (
      <div className="tu:w-96 tu:h-96 tu:flex tu:border tu:border-rose-200">
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
  },
  render: () => (
    <TreeView>
      <TreeNode label="Folder 1">
        <TreeNode label="Object 1">
          <TreeNode label="Object 1.1" />
          <TreeNode label="Object 1.2" />
        </TreeNode>
        <TreeNode label="Object 2" />
        <TreeNode label="Object 3" />
      </TreeNode>
      <TreeNode label="Folder 2" />
      <TreeNode label="Folder 3" />
    </TreeView>
  ),
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {

};