import { GetStaticProps } from "next"
import Head from "next/head"
import LeagueTable, { Player } from "../components/league-table"
import styles from "../styles/Table.module.css"
import { emptyLeagueData } from "../test/mock-data"

export interface League {
  gameweek: number
  timestamp: string
  league: Player[]
}

export default function Table({ leagueData }: { leagueData: League }) {
  const gameweek =
    leagueData.league.length > 0
      ? leagueData.gameweek
      : "No data returned from server"
  const timestamp = new Date()

  return (
    <div>
      <Head>
        <title>FPL Table</title>
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
              <li>
                Next.js static rendered: data fetched and added at build time,
                no data fetched from front-end.
              </li>
              <li>
                Incremental Static Regeneration: page is regenerated if data has
                updated.
              </li>
              <li>
                Stale page is served while the updated page is being
                regenerated.
              </li>
              <li>Data fetched: {leagueData.timestamp} GMT</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://moh-fpl-api.vercel.app/api/league`)
  const leagueData = await res.json().catch((error) => {
    console.log(error)
    return emptyLeagueData
  })

  return {
    props: {
      leagueData,
    },
    revalidate: 1,
  }
}
