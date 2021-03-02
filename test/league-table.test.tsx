import { render, fireEvent, screen } from "@testing-library/react"
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
    const { getByRole, getAllByRole } = render(<LeagueTable playerData={[]} />)

    const table = getByRole("table")
    const rows = getAllByRole("row")

    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
    expect(rows.length).toBe(1)
    expect(rows[0].childElementCount).toBe(6)
  })

  it("sorts by gw points onclick", () => {
    //sort data by overall points
    validPlayerData.sort((a, b) => {
      return b.points - a.points
    })
    const { getByRole, getAllByRole } = render(
      <LeagueTable playerData={validPlayerData} />
    )

    fireEvent.click(screen.getByText("GW Points"))
    const table = getByRole("table")
    const rows = getAllByRole("row")

    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
    expect(rows.length).toBe(4)
    expect(rows[0].childElementCount).toBe(6)
    expect(rows[1].childNodes[1].textContent).toMatch(/Team 2/)
    expect(rows[2].childNodes[1].textContent).toMatch(/Team 3/)
    expect(rows[3].childNodes[1].textContent).toMatch(/Team 1/)
  })

  it("sorts by points onclick", () => {
    //sort data by gw points
    validPlayerData.sort((a, b) => {
      return b.gw_points - a.gw_points
    })
    const { getByRole, getAllByRole } = render(
      <LeagueTable playerData={validPlayerData} />
    )

    fireEvent.click(screen.getByText("Points"))
    const table = getByRole("table")
    const rows = getAllByRole("row")

    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
    expect(rows.length).toBe(4)
    expect(rows[0].childElementCount).toBe(6)
    expect(rows[1].childNodes[1].textContent).toMatch(/Team 1/)
    expect(rows[2].childNodes[1].textContent).toMatch(/Team 2/)
    expect(rows[3].childNodes[1].textContent).toMatch(/Team 3/)
  })
})
