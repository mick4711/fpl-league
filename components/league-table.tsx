import { useState } from "react"

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
  Points,
  GW_Points,
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
        <tr className="shaded">
          <td>Name</td>
          <td>Team</td>
          <td className="sort" onClick={() => {
            setColumn(Column.Points)
            setDoSort(true)
          }}>
            Points
          </td>
          <td>Rank</td>
          <td className="sort" onClick={() => {
            setColumn(Column.GW_Points)
            setDoSort(true)
          }}>
            GW Points
          </td>
          <td>GW Rank</td>
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
            <td className="numeric">{player.points.toLocaleString()}</td>
            <td className="numeric">{player.rank.toLocaleString()}</td>
            <td className="numeric">{player.gw_points.toLocaleString()}</td>
            <td className="numeric">{player.gw_rank.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
