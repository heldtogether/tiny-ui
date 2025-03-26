import { useState } from "react";
import { User, Help } from "@carbon/icons-react";
import { Meta, StoryObj } from "@storybook/react";

import { Shell } from "../components/Shell";
import {
  Sidebar,
  SidebarButtonItem,
  SidebarDivider,
  SidebarItems,
  SidebarLinkItem,
  SidebarTextItem,
} from "../components/Sidebar";
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderTitle,
} from "../components/Header";
import { Portal } from "../components/Portal";
import { Content } from "../components/Content";
import { Heading } from "../components/Heading";;

const meta: Meta<typeof Shell> = {
  title: "UI/Shell",
  component: Shell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "The children of the shell",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Shell>;

export const HeaderSidebarAndContent: Story = {
  args: {},
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <Shell {...args}>
        <Header>
          <HeaderTitle
            onMenuClick={() => {
              setIsVisible(!isVisible);
            }}
            isMenuOpen={isVisible}
          >
            <Heading><span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]</Heading>
          </HeaderTitle>
          <HeaderActions>
            <HeaderAction label="User name">Jony Appleseed</HeaderAction>
            <HeaderAction icon={Help} label="Help" tooltip={true} onClick={() => { }} />
            <HeaderAction icon={User} label="Profile" tooltip={true} onClick={() => { }} />
          </HeaderActions>
        </Header>
        <Content>
          <Sidebar label="Main Navigation" isVisible={isVisible}>
            <SidebarItems>
              <SidebarLinkItem href="#">Item1</SidebarLinkItem>
              <SidebarLinkItem href="#">Item2</SidebarLinkItem>
              <SidebarDivider />
              <SidebarLinkItem href="#">Item3</SidebarLinkItem>
            </SidebarItems>
            <SidebarItems>
              <SidebarButtonItem onClick={() => { }}>
                Settings
              </SidebarButtonItem>
              <SidebarDivider />
              <SidebarTextItem>
                <div className="tu:flex tu:flex-row tu:justify-between">
                  <span className="tu:text-left tu:text-xs">
                    &copy; 2025 Tiny UI
                  </span>
                  <span className="tu:text-right tu:font-bold tu:text-xs">
                    v1.0.0
                  </span>
                </div>
              </SidebarTextItem>
            </SidebarItems>
          </Sidebar>
          <Portal>
            <div>
              <h1>Content goes here</h1>
            </div>
          </Portal>
        </Content>
      </Shell>
    );
  },
};

export const HeaderAndContent: Story = {
  args: {},
  render: (args) => {
    return (
      <Shell {...args}>
        <Header>
          <HeaderTitle>
            <Heading><span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]</Heading>
          </HeaderTitle>
          <HeaderActions>
            <HeaderAction label="User name">Jony Appleseed</HeaderAction>
            <HeaderAction icon={Help} label="Help" tooltip={true} onClick={() => { }} />
            <HeaderAction icon={User} label="Profile" tooltip={true} onClick={() => { }} />
          </HeaderActions>
        </Header>
        <Content>
          <Portal>
            <h1>Content goes here</h1>
          </Portal>
        </Content>
      </Shell>
    );
  },
};
