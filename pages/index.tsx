import { GetStaticProps } from "next"
import Head from "next/head"
import LeagueTable, { Player } from "../components/league-table"
import styles from "../styles/Table.module.css"

export default function Table({ playerData }: { playerData: Player[] }) {
  const gameweek =
    playerData.length > 0 ? playerData[0]["gw"] : "No data returned from server"
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
          <LeagueTable playerData={playerData} />
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
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://moh-fpl-api.vercel.app/api/league`)
  const playerData = await res.json().catch((error) => {
    console.log(error)
    return []
  })

  return {
    props: {
      playerData,
    },
    revalidate: 1,
  }
}
