import React, { useState } from "react";
import { User, Help } from "@carbon/icons-react";

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
import { Heading } from "../components/Heading";

export default {
  title: "UI/Shell",
  component: Shell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onMenuClick: { action: "menu button clicked" },
    onSidebarItemClick: { action: "sidebar item clicked" },
  },
};

export const HeaderSidebarAndContent = {
  render: (args: any) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <Shell>
        <Header>
          <HeaderTitle
            onMenuClick={() => {
              args.onMenuClick();
              setIsVisible(!isVisible);
            }}
            isMenuOpen={isVisible}
          >
            <Heading><span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]</Heading>
          </HeaderTitle>
          <HeaderActions>
            <HeaderAction>Jony Appleseed</HeaderAction>
            <HeaderAction icon={Help} tooltip="Help" onClick={() => { }} />
            <HeaderAction icon={User} tooltip="Profile" onClick={() => { }} />
          </HeaderActions>
        </Header>
        <Content>
          <Sidebar isVisible={isVisible}>
            <SidebarItems>
              <SidebarLinkItem href="#">Item1</SidebarLinkItem>
              <SidebarLinkItem href="#">Item2</SidebarLinkItem>
              <SidebarDivider />
              <SidebarLinkItem href="#">Item3</SidebarLinkItem>
            </SidebarItems>
            <SidebarItems>
              <SidebarButtonItem
                onClick={() => {
                  args.onSidebarItemClick();
                }}
              >
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

export const HeaderAndContent = {
  render: (args: any) => {
    return (
      <Shell>
        <Header>
          <HeaderTitle>
            <Heading><span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]</Heading>
          </HeaderTitle>
          <HeaderActions>
            <HeaderAction>Jony Appleseed</HeaderAction>
            <HeaderAction icon={Help} tooltip="Help" onClick={() => { }} />
            <HeaderAction icon={User} tooltip="Profile" onClick={() => { }} />
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
