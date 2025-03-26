import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Header, HeaderTitle, HeaderActions, HeaderAction } from "../components/Header";
import { Heading } from "../components/Heading";
import { User } from "@carbon/icons-react";
import { Shell } from "../components/Shell";

const meta: Meta<typeof HeaderActions> = {
  title: "UI/Shell/Header/Actions",
  component: HeaderActions,
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
          summary: "HeaderAction",
        },
      },
    },
  },
  args: {

  },
  render: ({ children }) => (
    <Header>
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
type Story = StoryObj<typeof HeaderActions>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};
