/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"
import TdSort from "../components/td-sort"

const colName = "column name"
const sortByColumn = (columnName: string) => {}

let containerWithTableRow: { container: HTMLTableRowElement }
beforeEach(() => {
  const table = document.createElement("table")
  const tr = document.createElement("tr")
  containerWithTableRow = {
    container: document.body.appendChild(table).appendChild(tr),
  }
})

describe("TdSort component", () => {
  it("renders with correct class when sorted", () => {
    const { getByRole, getByAltText } = render(
      <TdSort
        title={colName}
        onColumnClick={sortByColumn}
        sortedStyle={true}
      />,
      containerWithTableRow
    )
    const td = getByRole("cell", { name: "column name down arrow" })
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
      />,
      containerWithTableRow
    )
    const td = getByRole("cell", { name: "column name down arrow" })
    const arrow = getByAltText("down arrow")

    expect(td).toBeInTheDocument()
    expect(td.className).toEqual(expect.stringContaining("sort"))
    expect(td.className).toEqual(expect.not.stringContaining("sort sorted"))
    expect(td.onclick).not.toBeNull()
    expect(arrow).toBeInTheDocument()
  })
})
