import { render } from "@testing-library/react"
import TdSort from "./td-sort"

const colName = "column name"
const sortByColumn = (columnName: string) => {}

describe("TdSort component", () => {
  it("renders with correct class when sorted", () => {
    const { getByRole, getByAltText } = render(
      <TdSort
        title={colName}
        onColumnClick={sortByColumn}
        sortedStyle={true}
      />
    )
    const td = getByRole("cell", { name: colName })
    const arrow = getByAltText("down arrow")

    expect(td).toBeInTheDocument()
    expect(td.className).toEqual(expect.stringContaining("sort sorted"))
    expect(td.onclick).not.toBeNull()
    expect(arrow).toBeInTheDocument()
  })

  it("renders with correct class when not sorted", () => {
    const { getByRole, getByAltText } = render(
      <TdSort
        title={colName}
        onColumnClick={sortByColumn}
        sortedStyle={false}
      />
    )
    const td = getByRole("cell", { name: colName })
    const arrow = getByAltText("down arrow")

    expect(td).toBeInTheDocument()
    expect(td.className).toEqual(expect.stringContaining("sort"))
    expect(td.className).toEqual(expect.not.stringContaining("sort sorted"))
    expect(td.onclick).not.toBeNull()
    expect(arrow).toBeInTheDocument()
  })
})
