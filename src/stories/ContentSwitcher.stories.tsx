import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { ContentSwitcher, ContentSwitcherItem } from "../components/ContentSwitcher";

// Create a proper type for our component with the state props
interface ContentSwitcherStoryProps {
  children?: React.ReactNode;
}

const meta: Meta<ContentSwitcherStoryProps> = {
  title: "Components/ContentSwitcher",
  component: ContentSwitcher,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of the ContentSwitcher component",
      table: {
        // disable: true,
        type: {
          summary: "ContentSwitcherItem | ContentSwitcherItem[]",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ContentSwitcherStoryProps>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
// First, set up a state variable to track the active tab
const [activeTab, setActiveTab] = useState(0);

// Then, render the ContentSwitcher with ContentSwitcherItems
<ContentSwitcher>
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
        `,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => {
    // We keep the state management in the render function
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
      <div className="tu:w-192 tu:m-2">
        <ContentSwitcher>
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
      </div>
    );
  }
};

