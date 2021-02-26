import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Table from "../pages/index"
import { validPlayerData } from "./mock-data"


beforeAll(() => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date('09 Apr 1957 19:11:00 GMT').getTime())
})

afterAll(() => {
  jest.useRealTimers()
})

describe("Table component", () => {
  it("renders with valid playerData", () => {
    const { getByRole, getByText } = render(
      <Table playerData={validPlayerData} />
    )

    const title = getByText("Fantasy Football customisable tables")
    const main = getByRole("main")
    const table = getByRole("table")

    expect(title).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
  })

  it("renders with empty playerData and message", () => {
    const { getByRole, getByText } = render(<Table playerData={[]} />)

    const message = getByText("Gameweek: No data returned from server")
    const title = getByText("Fantasy Football customisable tables")
    const main = getByRole("main")
    const table = getByRole("table")

    expect(message).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(table.className).toEqual(expect.stringContaining("leaguetable"))
  })


  it("renders snapshot correctly", () => {
    const component = renderer.create(<Table playerData={validPlayerData} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
