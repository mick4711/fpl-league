import { useState } from "react"
import styles from "../styles/LeagueTable.module.css"
import TdSort from "./td-sort"

export interface Player {
  id: number
  gw: number
  name: string
  team: string
  points: number
  rank: number
  gw_points: number
  gw_rank?: number
  link: string
}

enum Column {
  Name = "Name",
  Team = "Team",
  Points = "Points",
  Rank = "Rank",
  GW_Points = "GW Points",
  GW_Rank = "GW Rank",
}

export default function LeagueTable({ playerData }: { playerData: Player[] }) {
  const [columnToSortBy, setColumnToSortBy] = useState(Column.Points)
  const [sortRequired, setSortRequired] = useState(false)

  const sortByColumn = (column: Column) => {
    setColumnToSortBy(column)
    setSortRequired(true)
  }

  const sortTable = () => {
    switch (columnToSortBy) {
      case Column.Name:
        playerData.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        break
      case Column.Points:
        playerData.sort((a, b) => {
          return b.points - a.points
        })
        break
      case Column.GW_Points:
        playerData.sort((a, b) => {
          return b.gw_points - a.gw_points
        })
        break
    }
  }

  if (sortRequired) {
    sortTable()
  }

  return (
    <table>
      <thead>
        <tr className={styles.shaded}>
          <TdSort title={Column.Name} onColumnClick={sortByColumn} />
          <td>{Column.Team}</td>
          <TdSort title={Column.Points} onColumnClick={sortByColumn} />
          <td>{Column.Rank}</td>
          <TdSort title={Column.GW_Points} onColumnClick={sortByColumn} />
          <td>{Column.GW_Rank}</td>
        </tr>
      </thead>
      <tbody>
        {playerData.map((player) => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>
              <a href={player.link} target="_blank" rel="noreferrer">
                {player.team}
              </a>
            </td>
            <td className={styles.numeric}>
              {player.points.toLocaleString("en-IE")}
            </td>
            <td className={styles.numeric}>
              {player.rank.toLocaleString("en-IE")}
            </td>
            <td className={styles.numeric}>
              {player.gw_points.toLocaleString("en-IE")}
            </td>
            <td className={styles.numeric}>
              {player.gw_rank?.toLocaleString("en-IE")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
