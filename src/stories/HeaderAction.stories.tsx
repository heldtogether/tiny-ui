import { StoryObj, Meta } from "@storybook/react";

import { Header, HeaderTitle, HeaderActions, HeaderAction } from "../components/Header";
import { User } from "@carbon/icons-react";
import { Shell } from "../components/Shell";
import { Heading } from "../components/Heading";

const meta: Meta<typeof HeaderAction> = {
  title: "UI/Shell/Header/Action",
  component: HeaderAction,
  decorators: [
    (Story) => (
      <div className="tu:w-full">
        <Shell>
          <Header>
            <HeaderTitle>
              <Heading>
                <span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]
              </Heading>
            </HeaderTitle>
            <HeaderActions>
              <Story />
            </HeaderActions>
          </Header>
        </Shell>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    controls: {},
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    tooltip: {
      control: "boolean",
      description: "Whether to display a tooltip",
    },
    label: {
      control: "text",
      description: "The label for the action (required for a11y), displayed in the tooltip",
    },
    onClick: {
      action: "clicked",
      description: "The function to call when the action is clicked",
    },
    icon: {
      control: false,
      description: "The icon to display in the action",
    },
  },
  args: {
    label: "Profile",
    tooltip: true,
    icon: User,
  },
  render: ({ label, tooltip, onClick, icon }) => (
    <HeaderAction icon={icon} label={label} tooltip={tooltip} onClick={onClick} />
  ),
};

export default meta;
type Story = StoryObj<typeof HeaderAction>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};
