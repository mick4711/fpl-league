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

const column = {
  name: "Name",
  team : "Team",
  points :"Points",
  rank : "Rank",
  gwPoints : "GW Points",
  gwRank : "GW Rank",
}

export default function LeagueTable({ playerData }: { playerData: Player[] }) {
  const [columnToSortBy, setColumnToSortBy] = useState(column.points)
  const [sortRequired, setSortRequired] = useState(false)

  const sortByColumn = (columnName: string) => {
    setColumnToSortBy(columnName)
    setSortRequired(true)
  }

  const sortTable = () => {
    switch (columnToSortBy) {
      case column.points:
        playerData.sort((a, b) => {
          return b.points - a.points
        })
        break
      case column.gwPoints:
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
          <td>{column.name}</td>
          <td>{column.team}</td>
          <TdSort title={column.points} onColumnClick={sortByColumn} />
          <td>{column.rank}</td>
          <TdSort title={column.gwPoints} onColumnClick={sortByColumn} />
          <td>{column.gwRank}</td>
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
