import { Meta, StoryObj } from "@storybook/react";

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
    children: {
      control: false,
      description: "The child nodes of the tree view",
      table: {
        type: { summary: "TreeNode | TreeNode[]" },
      },
    },
    label: {
      control: false,
      description: "The a11y label of the tree view",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <TreeView {...args}>
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