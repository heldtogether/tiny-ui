import { useEffect, useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/Accordion";
import { Shell } from "../components/Shell";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  },
  decorators: [
    (Story) => (
      <Shell className="tu:h-64">
        <Story />
      </Shell>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "check",
      options: ["1", "2"],
    },
    onValueChange: {
      control: false,
    },
  },
  args: {
    children: "Click Me",
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>(args.value as string[]);

    useEffect(() => {
      setValue(args.value as string[]);
    }, [args.value]);

    return (
      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <AccordionItem value="1" className="tu:w-96">
          <AccordionTrigger>
            <h1>Accordion Item 1</h1>
          </AccordionTrigger>
          <AccordionContent>
            <p>Accordion Item 1 Content</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2" className="tu:w-96">
          <AccordionTrigger>
            <h1>Accordion Item 2</h1>
          </AccordionTrigger>
          <AccordionContent>
            <p>Accordion Item 2 Content</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {};