import { render } from "@testing-library/react"
import LeagueTable from "../components/league-table"
import { validPlayerData } from "./mock-data"

describe("LeagueTable component", () => {
  it("renders with valid playerData", () => {
    const { getByRole, getAllByRole } = render(
      <LeagueTable playerData={validPlayerData} />
    )

    const table = getByRole("table")
    const rows = getAllByRole("row")

    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
    expect(rows.length).toBe(4)
    expect(rows[0].childElementCount).toBe(6)
  })

  it("renders with empty playerData", () => {
    const { getByRole, getAllByRole } = render(
      <LeagueTable playerData={[]} />
    )

    const table = getByRole("table")
    const rows = getAllByRole("row")

    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
    expect(rows.length).toBe(1)
    expect(rows[0].childElementCount).toBe(6)
  })
})
