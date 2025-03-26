import { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { ContentSwitcher, ContentSwitcherItem } from "../components/ContentSwitcher";

const meta: Meta<typeof ContentSwitcher> = {
  title: "Components/ContentSwitcher",
  component: ContentSwitcher,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <div className="tu:w-192 tu:m-2">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of the ContentSwitcher component",
      control: false,
      table: {
        type: {
          summary: "ContentSwitcherItem | ContentSwitcherItem[]",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentSwitcher>;

export const Default: Story = {
  args: {},
  render: (args) => {
    // We keep the state management in the render function
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
      <ContentSwitcher {...args}>
        <ContentSwitcherItem
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
        >
          Tab 1
        </ContentSwitcherItem>
        <ContentSwitcherItem
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          Tab 2
        </ContentSwitcherItem>
        <ContentSwitcherItem
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        >
          Tab 3
        </ContentSwitcherItem>
      </ContentSwitcher>
    );
  }
};

