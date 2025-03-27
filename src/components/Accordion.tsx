import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "../utils/cn"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("tu:border-b tu:last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "tu:bg-gray-700 tu:text-gray-100 tu:w-full tu:px-2 tu:focus-visible:border-neutral-950 tu:focus-visible:ring-neutral-950/50 tu:flex tu:flex-1 tu:items-start tu:justify-between tu:gap-4 tu:py-2 tu:text-left tu:text-sm tu:font-medium tu:transition-all tu:outline-none tu:hover:bg-gray-800 tu:active:bg-gray-900 tu:focus-visible:ring-[3px] tu:disabled:pointer-events-none tu:disabled:opacity-50 tu:[&[data-state=open]>svg]:rotate-180 tu:dark:focus-visible:border-neutral-300 tu:dark:focus-visible:ring-neutral-300/50",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="tu:text-neutral-100 tu:pointer-events-none tu:size-4 tu:shrink-0 tu:translate-y-0.5 tu:transition-transform tu:duration-200 dark:tu:text-neutral-400" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="tu:data-[state=closed]:animate-accordion-up tu:data-[state=open]:animate-accordion-down tu:overflow-hidden tu:text-sm tu:font-sans"
      {...props}
    >
      <div className={cn("tu:pt-0 tu:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
