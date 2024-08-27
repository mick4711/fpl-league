import React, { ComponentProps } from "react"
import { Meta, StoryFn } from "@storybook/react"
import TdSort from "./td-sort"

export default {
  title: "Components/TdSort",
  component: TdSort,
} as Meta

const Template: StoryFn<ComponentProps<typeof TdSort>> = (args) => (
  <TdSort {...args} />
)

export const Sorted = Template.bind({})
Sorted.args = {
  title: "sorted",
  onColumnClick: (colName: string) => {},
  sortedStyle: true,
}

export const NotSorted = Template.bind({})
NotSorted.args = {
  title: "not sorted",
  onColumnClick: (colName: string) => {},
  sortedStyle: false,
}
