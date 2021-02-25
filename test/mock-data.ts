import { Player } from "../components/league-table"

export type { Player }
export const validPlayerData: Player[] = [
  {
    id: 1,
    name: "Player 1",
    team: "Team 1",
    points: 100,
    rank: 11,
    gw: 10,
    gw_points: 25,
    gw_rank: 33,
    link: "https://fantasy.premierleague.com/entry/1/event/10",
  },
  {
    id: 2,
    name: "Player 2",
    team: "Team 2",
    points: 75,
    rank: 22,
    gw: 10,
    gw_points: 50,
    gw_rank: 11,
    link: "https://fantasy.premierleague.com/entry/2/event/10",
  },
  {
    id: 3,
    name: "Player 3",
    team: "Team 3",
    points: 50,
    rank: 33,
    gw: 10,
    gw_points: 30,
    gw_rank: 22,
    link: "https://fantasy.premierleague.com/entry/3/event/10",
  },
]
