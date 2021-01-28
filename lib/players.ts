export interface Player {
  id: number
  name: string
  team: string
  points: number
  rank: number
  gw_points: number
  gw_rank: number
}

export const getPlayers = () => {
  return [
    {
      id: 1883563,
      name: "Willy Flynn",
      team: "Athletic Dingbao",
      points: 1170,
      rank: 501112,
      gw: 20,
      gw_points: 37,
      gw_rank: 2693747,
    },
    {
      id: 1209661,
      name: "James Broderick",
      team: "Brodders",
      points: 1155,
      rank: 654097,
      gw: 20,
      gw_points: 26,
      gw_rank: 4986640,
    },
    {
      id: 5183234,
      name: "Marty Flynn",
      team: "Martchester United",
      points: 1146,
      rank: 766419,
      gw: 20,
      gw_points: 53,
      gw_rank: 726577,
    },
    {
      id: 149458,
      name: "Caoimhin King",
      team: "Saka Spuds",
      points: 1095,
      rank: 1507001,
      gw: 20,
      gw_points: 29,
      gw_rank: 4158571,
    },
    {
      id: 4215324,
      name: "Michael O'Hegarty",
      team: "Hillside Rangers",
      points: 1083,
      rank: 1708802,
      gw: 20,
      gw_points: 39,
      gw_rank: 2242625,
    },
    {
      id: 5743257,
      name: "Odhran Stapleton",
      team: "1977",
      points: 1038,
      rank: 2536644,
      gw: 20,
      gw_points: 68,
      gw_rank: 119925,
    },
    {
      id: 1952226,
      name: "Val Weblin",
      team: "Scorchers",
      points: 1034,
      rank: 2620619,
      gw: 20,
      gw_points: 25,
      gw_rank: 5269396,
    },
    {
      id: 4070204,
      name: "Pat McCarthy",
      team: "Kloppites",
      points: 981,
      rank: 3601005,
      gw: 20,
      gw_points: 19,
      gw_rank: 6503258,
    },
  ]
}
