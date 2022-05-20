import { Player } from "../components/league-table"
import { League } from "../pages/index"

export const validPlayerData: Player[] = [
  {
    id: 1,
    name: "Player 1",
    team: "Team 1",
    points: 100,
    rank: 11,
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
    gw_points: 30,
    gw_rank: 22,
    link: "https://fantasy.premierleague.com/entry/3/event/10",
  },
]
export const staticPlayerData: Player[] = [
  {
  gw_points: 31,
  name: "Willy Flynn",
  link: "https://fantasy.premierleague.com/entry/5187909/event/37",
  rank: 865175,
  gw_rank: 6136519,
  id: 5187909,
  team: "Dingerpol FC",
  points: 2191
  },
  {
  gw_points: 37,
  name: "Caoimhin King",
  link: "https://fantasy.premierleague.com/entry/1974437/event/37",
  rank: 2179363,
  gw_rank: 4895132,
  id: 1974437,
  team: "The Grand Touré",
  points: 2010
  },
  {
  gw_points: 23,
  name: "Val Weblin",
  link: "https://fantasy.premierleague.com/entry/1585946/event/37",
  rank: 4304885,
  gw_rank: 7875590,
  id: 1585946,
  team: "Scorchers",
  points: 1801
  },
  {
  gw_points: 39,
  name: "James Broderick",
  link: "https://fantasy.premierleague.com/entry/5671497/event/37",
  rank: 2656494,
  gw_rank: 4507311,
  id: 5671497,
  team: "brodders",
  points: 1959
  },
  {
  gw_points: 46,
  name: "Odhran Stapleton",
  link: "https://fantasy.premierleague.com/entry/2169933/event/37",
  rank: 624286,
  gw_rank: 3323459,
  id: 2169933,
  team: "1977",
  points: 2240
  },
  {
  gw_points: 58,
  name: "Marty Flynn",
  link: "https://fantasy.premierleague.com/entry/3235761/event/37",
  rank: 508315,
  gw_rank: 1916872,
  id: 3235761,
  team: "Martchester United",
  points: 2269
  },
  {
  gw_points: 30,
  name: "Pat McCarthy",
  link: "https://fantasy.premierleague.com/entry/1374973/event/37",
  rank: 3048924,
  gw_rank: 6346763,
  id: 1374973,
  team: "ItsOurYearAgain",
  points: 1919
  },
  {
  gw_points: 81,
  name: "Michael O'Hegarty",
  link: "https://fantasy.premierleague.com/entry/2552353/event/37",
  rank: 2644806,
  gw_rank: 622223,
  id: 2552353,
  team: "Barnhill Rangers",
  points: 1960
  }
  ]

export const validLeagueData: League = {
  gameweek: 10,
  timestamp: "2021-04-27 09:26:36.715872",
  league: validPlayerData,
}

export const staticLeagueData: League = {
  gameweek: 37,
  timestamp: "Fri May 20 14:48:02 UTC 2022",
  league: staticPlayerData,
}

export const emptyLeagueData: League = {
  gameweek: 10,
  timestamp: "2021-04-27 09:26:36.715872",
  league: [],
}
