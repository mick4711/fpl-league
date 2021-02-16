import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
// import { ReactGrid, Column, Row, HeaderCell } from "@silevis/reactgrid"
// import "@silevis/reactgrid/styles.css"
import LeagueTable, { Player } from "../components/league-table"

export default function Table({ playerData }: { playerData: Player[] }) {
  // const getColumns = (): Column[] => [
  //   { columnId: "name", width: 150 },
  //   { columnId: "team", width: 150 },
  //   { columnId: "points", width: 60 },
  //   { columnId: "rank", width: 100 },
  //   { columnId: "gw_points", width: 60 },
  //   { columnId: "gw_rank", width: 100 },
  // ]

  // const headerRow: Row<HeaderCell> = {
  //   rowId: "header",
  //   cells: [
  //     { type: "header", text: "Name" },
  //     { type: "header", text: "Team" },
  //     { type: "header", text: "Points" },
  //     { type: "header", text: "Rank" },
  //     { type: "header", text: "GW-Pts" },
  //     { type: "header", text: "GW-Rank" },
  //   ],
  // }

  // const getRows = (players: Player[]): Row[] => [
  //   headerRow,
  //   ...players.map<Row>((person, idx) => ({
  //     rowId: idx,
  //     cells: [
  //       { type: "text", text: person.name },
  //       { type: "text", text: person.team },
  //       { type: "number", value: person.points },
  //       { type: "number", value: person.rank },
  //       { type: "number", value: person.gw_points },
  //       { type: "number", value: person.gw_rank },
  //     ],
  //   })),
  // ]

  // const rows = getRows(playerData)
  // const columns = getColumns()
  const gameweek = playerData[0]["gw"]
  const timestamp = new Date()

  return (
    <div>
      <Head>
        <title>FPL Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>

      <div className="table">
        <p>Gameweek: {gameweek}</p>
        <p suppressHydrationWarning={true}>
          Time:{" "}
          {timestamp.toLocaleString("en-IE", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        {/* <ReactGrid rows={rows} columns={columns} />
        <hr /> */}
        <LeagueTable playerData={playerData} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://moh-fpl-api.vercel.app/api/league`)
  const playerData = await res.json()

  return {
    props: {
      playerData,
    },
    revalidate: 1,
  }
}
