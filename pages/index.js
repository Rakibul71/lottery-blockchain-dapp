import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bulma/css/bulma.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lottery Dapp</title>
        <meta name="description" content="An ethereum lottery Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar mt-4 mb-4">
          <div className="container">
            <div className="navbar-brand">
              <h1>Ether lottery</h1>
            </div>
            <div className="navbar-end">
              <button className="button is-link">Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className=" column is-two-thirds">
                <section className="mt-5">
                  <p>Enter the lottery by sending 0.1 Ether</p>
                  <button className="button is-link is-large is-large mt-3">
                    Play Now
                  </button>
                </section>
              </div>
              <div className=" column is-one-third">
                <p>Lottery Info</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <footer> */}
        <p>&copy; 2022 Block Explorer</p>
      </footer>
    </div>
  );
}
