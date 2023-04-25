/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Table from "../pages/index"
import { validLeagueData, emptyLeagueData } from "./mock-data"

beforeAll(() => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date("09 Apr 1957 19:11:00 GMT").getTime())
})

afterAll(() => {
  jest.useRealTimers()
})

describe("Table component", () => {
  it("renders with valid playerData", () => {
    const { getByRole, getByText } = render(
      <Table leagueData={validLeagueData} apiLeague="testLeague" />
    )

    const title = getByText("Fantasy Football customisable tables", {
      exact: false,
    })
    const main = getByRole("main")
    const table = getByRole("table")

    expect(title).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
  })

  it("renders with empty playerData and message", () => {
    const { getByRole, getByText } = render(<Table leagueData={emptyLeagueData} apiLeague="testLeague" />)

    const message = getByText("Gameweek: No data returned from server")
    const title = getByText("Fantasy Football customisable tables", {
      exact: false,
    })
    const main = getByRole("main")
    const table = getByRole("table")

    expect(message).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
  })

  it("renders snapshot correctly", () => {
    const component = renderer.create(<Table leagueData={validLeagueData} apiLeague="testLeague" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
