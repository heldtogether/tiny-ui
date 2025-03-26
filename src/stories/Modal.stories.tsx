import { StoryObj, Meta } from "@storybook/react";

import { Modal } from "../components/Modal";
import { Shell } from "../components/Shell";
import { useModal } from "../hooks/useModal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <Shell>
        <Story />
      </Shell>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the modal",
    },
    children: {
      control: false,
      description: "Content of the modal",
    },
    destructiveCancel: {
      control: "boolean",
      description: "Whether the cancel button is destructive",
    },
    isOpen: {
      control: "boolean",
      description: "Whether the modal is open",
    },
    onRequestClose: {
      action: "onRequestClose",
      description: "Callback when the modal should be closed",
    },
    onRequestSubmit: {
      action: "onRequestSubmit",
      description: "Callback when the modal should be submitted",
    },
  },
  args: {
    title: "Modal title",
    children: (
      <p>Modal content</p>
    ),
  },
  render: (args) => {
    const { isVisible, setIsVisible } = useModal(args.isOpen);

    return (
      <>
        <button
          className="tu:mx-auto tu:p-2 tu:border tu:border-gray-300 tu:m-20 tu:cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          Click me
        </button>
        <Modal {...args} isOpen={isVisible} onRequestClose={() => setIsVisible(false)} />
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: `
const { isVisible, setIsVisible } = useModal(false);

return (
  <>
    <button
      onClick={() => setIsVisible(!isVisible)}
    >
      Click me
    </button>
    <Modal isOpen={isVisible} onRequestClose={() => setIsVisible(false)}>
        {modalContent}
    </Modal>
  </>
);
    `,
      },
    },
  },
  args: {}
};
