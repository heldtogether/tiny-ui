import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Content } from "../components/Content";
import { Heading } from "../components/Heading";
import { Shell } from "../components/Shell";
import { Header } from "../components/Header";
import { Portal } from "../components/Portal";
import { Sidebar, SidebarItems, SidebarLinkItem } from "../components/Sidebar";

const meta: Meta<typeof Content> = {
  title: "UI/Shell/Content",
  subcomponents: {
    Content,
    Sidebar,
    Portal,
  },
  component: Content,
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
      description: "The elements to display in the content",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
  args: {

  },
  render: ({ children }) => (
    <Content>
      <Sidebar label="Main Navigation">
        <SidebarItems>
          <SidebarLinkItem href="/">
            Home
          </SidebarLinkItem>
          <SidebarLinkItem href="/">
            About
          </SidebarLinkItem>
        </SidebarItems>
      </Sidebar>
      <Portal>
        <Heading>
          Main Content
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
        </p>
      </Portal>
    </Content>
  ),
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};
