import { StoryObj, Meta } from "@storybook/react";
import { User } from "@carbon/icons-react";

import { Header, HeaderTitle, HeaderActions, HeaderAction } from "../components/Header";
import { Heading } from "../components/Heading";
import { Shell } from "../components/Shell";

const meta: Meta<typeof Header> = {
  title: "UI/Shell/Header",
  component: Header,
  subcomponents: {
    Header,
    HeaderTitle,
    HeaderActions,
    HeaderAction,
  },
  decorators: [
    (Story) => (
      <div className="tu:w-full">
        <Shell>
          <Story />
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
          summary: "HeaderTitle | HeaderActions",
        },
      },
    },
  },
  args: {},
  render: (args) => (
    <Header {...args}>
      <HeaderTitle>
        <Heading>
          <span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]
        </Heading>
      </HeaderTitle>
      <HeaderActions>
        <HeaderAction icon={User} label="Profile" tooltip={true} onClick={() => { }} />
      </HeaderActions>
    </Header>
  ),
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
