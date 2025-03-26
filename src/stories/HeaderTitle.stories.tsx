import { StoryObj, Meta } from "@storybook/react";

import { Header, HeaderTitle } from "../components/Header";
import { Heading } from "../components/Heading";
import { Shell } from "../components/Shell";

const meta: Meta<typeof HeaderTitle> = {
  title: "UI/Shell/Header/Title",
  component: HeaderTitle,
  decorators: [
    (Story) => (
      <div className="tu:w-full">
        <Shell>
          <Header>
            <Story />
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
      control: false,
      description: "The elements to display in the header",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    onMenuClick: {
      action: "menu button clicked",
      description: "Callback function when the menu button is clicked (only used on small screens)",
    },
    isMenuOpen: {
      control: "boolean",
      description: "Whether the menu is open (only used on small screens)",
    },
  },
  args: {},
  render: ({ onMenuClick, isMenuOpen }) => (
    <HeaderTitle onMenuClick={onMenuClick} isMenuOpen={isMenuOpen}>
      <Heading>
        <span style={{
          fontWeight: "normal",
          marginRight: "8px",
        }}>Tiny UI</span>[shell]
      </Heading>
    </HeaderTitle>
  ),
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};
