import Head from "next/head"
import LeagueTable, { Player } from "../components/league-table"
import styles from "../styles/Table.module.css"
import { staticLeagueData } from "../test/mock-data"

export interface League {
  gameweek: number
  timestamp: string
  league: Player[]
}

export default function Static() {
    return <Table leagueData={staticLeagueData} apiLeague="static data" />
  }

function Table({ leagueData, apiLeague }: { leagueData: League, apiLeague: string }) {
  const gameweek =
    leagueData.league.length > 0
      ? leagueData.gameweek
      : "No data returned from server"
  const timestamp = new Date()

  return (
    <div>
      <Head>
        <title>FPL Static Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js
          <br />
          Fantasy Football customisable tables
        </h1>
        <div className={styles.table}>
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
          <LeagueTable playerData={leagueData.league} />
          <div className={styles.notes}>
            <ul className={styles.bullets}>
              <li>Static Data</li>
              <li>Data fetched: {leagueData.timestamp} GMT</li>   
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
