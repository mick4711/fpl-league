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

export default function LeagueTable({ playerData }: { playerData: Player[] }) {
  return (
    <table>
      <tr className="shaded">
        <td>Name</td>
        <td>Team</td>
        <td>Points</td>
        <td>Rank</td>
        <td>GW Points</td>
        <td>GW Rank</td>
      </tr>
      <tbody>
        {playerData.map((player) => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>
              <a href={player.link}>{player.team}</a>
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
