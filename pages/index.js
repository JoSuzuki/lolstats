import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LoL Partners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>LoL Partners</h1>
        <div>
          <label htmlFor="summonerName">Summoner name:</label>
          <input type="text" id="summonerName"></input>
          <button type="button">Go</button>
        </div>
      </main>
    </div>
  );
}
