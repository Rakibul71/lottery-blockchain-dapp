import Head from "next/head";
import Web3 from "web3";
import styles from "../styles/Home.module.css";
import "bulma/css/bulma.css";
import { useState } from "react";

export default function Home() {
  const [web3, setWeb3] = useState();
  const connectWalletHandler = async () => {
    //check metamask is installed
    if (typeof window !== "undefine" && typeof window.ethereum) {
      try {
        // request wallet connection
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // create web3 instance and set to state
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      //check metamask  is not installed
      console.log("Please Install metamask");
    }
  };
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
              <button onClick={connectWalletHandler} className="button is-link">
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className=" column is-two-thirds">
                <section className="mt-5">
                  <p>Enter the lottery by sending 0.1 Ether</p>
                  <button className="button is-link is-large is-light mt-3">
                    Play Now
                  </button>
                </section>

                <section className="mt-6">
                  <p>
                    <b>Admin Only: </b> Pick Winner
                  </p>
                  <button className="button is-primary is-large is-light mt-3">
                    Pick Winner
                  </button>
                </section>
              </div>

              <div className={`${styles.lotteryInfo} column is-one-third`}>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div>Lottery #1 winner</div>
                          <a
                            href="https://etherscan.io/address/0x978433520FfF6e433bB067945a1B31ebb7CB068C"
                            target="_blank"
                          >
                            0x978433520FfF6e433bB067945a1B31ebb7CB068C
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Players (1)</h2>
                        <a
                          href="https://etherscan.io/address/0x978433520FfF6e433bB067945a1B31ebb7CB068C"
                          target="_blank"
                        >
                          0x978433520FfF6e433bB067945a1B31ebb7CB068C
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Pot</h2>
                        <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
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
