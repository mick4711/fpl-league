import React, { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { ReactGrid, Column, Row, HeaderCell } from "@silevis/reactgrid"
import "@silevis/reactgrid/styles.css"
import { Player, getPlayers } from "../lib/players"

export default function Table() {
  const [people] = useState<Player[]>(getPlayers())

  const getColumns = (): Column[] => [
    { columnId: "name", width: 150 },
    { columnId: "team", width: 150 },
    { columnId: "points", width: 60 },
    { columnId: "rank", width: 100 },
    { columnId: "gw_points", width: 60 },
    { columnId: "gw_rank", width: 100 },
  ]

  const headerRow: Row<HeaderCell> = {
    rowId: "header",
    cells: [
      { type: "header", text: "Name" },
      { type: "header", text: "Team" },
      { type: "header", text: "Points" },
      { type: "header", text: "Rank" },
      { type: "header", text: "GW-Pts" },
      { type: "header", text: "GW-Rank" },
    ],
  }

  const getRows = (persons: Player[]): Row[] => [
    headerRow,
    ...persons.map<Row>((person, idx) => ({
      rowId: idx,
      cells: [
        // { type: "text", text: person.id.toString() },
        { type: "text", text: person.name },
        { type: "text", text: person.team },
        { type: "number", value: person.points },
        { type: "number", value: person.rank },
        { type: "number", value: person.gw_points },
        { type: "number", value: person.gw_rank },
      ],
    })),
  ]

  const rows = getRows(people)
  const columns = getColumns()

  return (
    <div>
      <Head>
        <title>FPL Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">Home</Link>

      <div className="table">
        <ReactGrid rows={rows} columns={columns} />
      </div>
    </div>
  )
}
