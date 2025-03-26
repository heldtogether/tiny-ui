import { StoryObj, Meta } from "@storybook/react";

import { ContentSwitcher, ContentSwitcherItem } from "../components/ContentSwitcher";
import { useContentSwitcher } from "../hooks/useContentSwitcher";

// Define a component with ContentSwitcher props and our additional storybook args
type ContentSwitcherWithStoryProps = React.ComponentProps<typeof ContentSwitcher> & {
  activeIndex?: number;
};

const meta: Meta<ContentSwitcherWithStoryProps> = {
  title: "Components/ContentSwitcher",
  component: ContentSwitcher,
  subcomponents: {
    ContentSwitcherItem,
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <div className="tu:w-64 tu:md:w-full">
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
    activeIndex: {
      description: "The index of the active tab (for story controls only)",
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
};

export default meta;
// Define the Story type with our custom component type
type Story = StoryObj<ContentSwitcherWithStoryProps>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: `
const { setActiveIndex, isActiveIndex } = useContentSwitcher(0);

return (
  <ContentSwitcher>
    {Array.from({ length: 5 }).map((_, index) => (
      <ContentSwitcherItem
        active={isActiveIndex(index)}
        onClick={() => setActiveIndex(index)}
      >
        Content {index + 1}
      </ContentSwitcherItem>
    ))}
  </ContentSwitcher>
);
    `,
      },
    },
  },
  args: {
    activeIndex: 0,
  },
  render: (args) => {
    const { activeIndex } = args;
    const { setActiveIndex, isActiveIndex } = useContentSwitcher(activeIndex);

    return (
      <ContentSwitcher>
        {Array.from({ length: 5 }).map((_, index) => (
          <ContentSwitcherItem
            active={isActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            Content {index + 1}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    );
  }
};

