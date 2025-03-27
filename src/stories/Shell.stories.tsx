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
import { useSidebar } from "../hooks/useSidebar";

type ShellWithStoryProps = React.ComponentProps<typeof Shell> & {
  "HeaderTitle.onMenuClick"?: () => void;
  "HeaderTitle.isMenuOpen"?: boolean;
  "Sidebar.size"?: "small" | "medium" | "large";
};

const meta: Meta<ShellWithStoryProps> = {
  title: "UI/Shell",
  component: Shell,
  subcomponents: {
    Header,
    HeaderTitle,
    HeaderActions,
    HeaderAction,
    Sidebar,
  },
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
    "HeaderTitle.onMenuClick": {
      control: false,
      description: "The function to call when the menu is clicked",
      table: {
        type: { summary: "() => void" },
      },
    },
    "HeaderTitle.isMenuOpen": {
      control: "boolean",
      description: "Whether the sidebar is visible (only used on small screens)",
      table: {
        type: { summary: "boolean" },
      },
    },
    "Sidebar.size": {
      control: "select",
      description: "The size of the sidebar",
      options: ["small", "medium", "large"],
      table: {
        type: { summary: "small | medium | large" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ShellWithStoryProps>;

export const HeaderSidebarAndContent: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: `
const { isVisible, setIsVisible } = useSidebar(false);

return (
  <Shell {...args}>
    <Header>
      <HeaderTitle
        onMenuClick={() => {
          setIsVisible(!isVisible);
        }}
        isMenuOpen={isVisible}
      >
        <Heading><span className="font-normal mr-2">Tiny UI</span>[shell]</Heading>
      </HeaderTitle>
      <HeaderActions>
        <HeaderAction label="User name" className="hidden md:block">Jony Appleseed</HeaderAction>
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
            <div className="flex flex-row justify-between">
              <span className="text-left text-xs">
                &copy; 2025 Tiny UI
              </span>
              <span className="text-right font-bold text-xs">
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
        `,
      },
    },
  },
  render: (args) => {
    const { isVisible, setIsVisible } = useSidebar(args["HeaderTitle.isMenuOpen"]);

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
            <HeaderAction label="User name" className="tu:hidden md:tu:block">Jony Appleseed</HeaderAction>
            <HeaderAction icon={Help} label="Help" tooltip={true} onClick={() => { }} />
            <HeaderAction icon={User} label="Profile" tooltip={true} onClick={() => { }} />
          </HeaderActions>
        </Header>
        <Content>
          <Sidebar label="Main Navigation" isVisible={isVisible} size={args["Sidebar.size"]}>
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
  argTypes: {
    "HeaderTitle.onMenuClick": {
      table: {
        disable: true,
      },
    },
    "Sidebar.size": {
      table: {
        disable: true,
      },
    },
    "HeaderTitle.isMenuOpen": {
      table: {
        disable: true,
      },
    },
  },
  args: {
    "HeaderTitle.onMenuClick": undefined,
    "Sidebar.size": "small",
  },
  render: (args) => {
    return (
      <Shell {...args}>
        <Header>
          <HeaderTitle>
            <Heading><span className="tu:font-normal tu:mr-2">Tiny UI</span>[shell]</Heading>
          </HeaderTitle>
          <HeaderActions>
            <HeaderAction label="User name" className="tu:hidden md:tu:block">Jony Appleseed</HeaderAction>
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
