// td-sort.stories.tsx

import React from "react"

import { Meta } from "@storybook/react"

import TdSort from "./td-sort"

export default {
  title: "Components/TdSort",
  component: TdSort,
} as Meta

const column = {
  name: "Name",
  team: "Team",
  points: "Points",
  rank: "Rank",
  gwPoints: "GW Points",
  gwRank: "GW Rank",
}
const sortByColumn = (columnName: string) => {}

export const Primary: React.VFC<{}> = () => (
  <table>
    <tr>
      <TdSort
        title={column.points}
        onColumnClick={sortByColumn}
        sortedStyle={true}
      />
    </tr>
  </table>
)
