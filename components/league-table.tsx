import { useState } from "react"
import styles from '../styles/LeagueTable.module.css'
import TdSort from "./td-sort"

export interface Player {
  id: number
  gw: number
  name: string
  team: string
  points: number
  rank: number
  gw_points: number
  gw_rank: number
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
  const [column, setColumn] = useState(Column.Points)
  const [doSort, setDoSort] = useState(false)

  const sortTable = () => {
    switch (column) {
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

  if (doSort) {
    sortTable()
  }

  return (
    <table>
      <thead>
        <tr className={styles.shaded}>
          <TdSort title={Column.Name} />
          <td>{Column.Team}</td>
          {/* TODO customise with a symbol and convert to component */}
          <td
            className={styles.sort}
            onClick={() => {
              setColumn(Column.Points)
              setDoSort(true)
            }}
          >
            {Column.Points}
          </td>
          <td>{Column.Rank}</td>
          <td
            className={styles.sort}
            onClick={() => {
              setColumn(Column.GW_Points)
              setDoSort(true)
            }}
          >
            {Column.GW_Points}
          </td>
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
            <td className={styles.numeric}>{player.points.toLocaleString("en-IE")}</td>
            <td className={styles.numeric}>{player.rank.toLocaleString("en-IE")}</td>
            <td className={styles.numeric}>
              {player.gw_points.toLocaleString("en-IE")}
            </td>
            <td className={styles.numeric}>
              {player.gw_rank.toLocaleString("en-IE")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
