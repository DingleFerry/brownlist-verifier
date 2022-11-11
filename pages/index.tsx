import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image'
import styles from "../styles/Home.module.css";
// import logo from '../public/black-logo.png';
import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";
// import twitLogo from "https://tmb.imgix.net/twitter-0a0a0a.png";

// https://bafkreid5yasqlpflxg2fq7irzs5mgisvq7waskc5t2tf7nlrkqtaeaj3wm.ipfs.nftstorage.link/ - twitterLogo

const Home: NextPage = () => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  const bList = brownList.brownList;
  const gList = goldList.goldList;
  const pList = platinumList.platinumList;


  const message = "Connected! Click to verify status.";
  const mistake = "";
  const clideo = "";

  let bListTotal = bList.length;
  let gListTotal = gList.length;
  let pListTotal = pList.length;
  let totalMFs = bListTotal + gListTotal + pListTotal;

  const checkList = async () => {
  const arr: string[] = bList;
  const arr1: string[] = gList;
  const arr2: string[] = pList;

  const str = address?.toString();

    const found = arr.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    const found1 = arr1.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    const found2 = arr2.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    console.log(bListTotal, gListTotal, pListTotal);

    if (found !== undefined) {
      const message = "Congrats! You're on the Brown List!";
      const clideo = "";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else if (found1 !== undefined){
      const message = "We like your style MF, you're on the Gold List!";
      const clideo = "";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else if (found2 !== undefined){
      const message = "Oh wow, look at the MF'n Big Shot on Platinum over here!!";
      const clideo = "";
      const mistake = "";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else {
      const message = "Unfortunately, you are not currently on The Brownlist. So go make memes while there's still time!";
      const clideo = "If you don't know how, search for “meme maker” to get the ball rolling.";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    }
  };


  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.mainNav}>
          <div className={styles.pageLinks}>
            <Link href="/passive/nonsense">
              <a><h3 className={styles.pageLink}>Nonsense</h3></a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="">
              <a>
                <Image src='https://bafkreihjag3e6uz3ykuzjfsu6qlvyejznug5maz3z2hha3a2ufo5xhxjxi.ipfs.nftstorage.link' alt='Black asshole logo.' width={90} height={90}/>
              </a>
            </Link>
          </div>
          <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
              <a className={styles.twitLogoCont} target="_blank">
                <Image src='https://bafkreid5yasqlpflxg2fq7irzs5mgisvq7waskc5t2tf7nlrkqtaeaj3wm.ipfs.nftstorage.link' alt='Black Twitter logo.' width={56} height={45}/>
              </a>
            </Link>
          </div>
        </div>

        <h1 className={styles.total}>{totalMFs} MFs strong!</h1>
        <div className={styles.counter1}>
          <h1 className={styles.brownCounter}>Brown: {bListTotal}
            <span className={styles.goldCounter}> Gold: {gListTotal}</span>
            <span className={styles.platCounter}> Platinum: {pListTotal}</span>
          </h1>
        </div>
        <div className={styles.counter2}>
          <h1 className={styles.counter} id={styles.platCounter}> Platinum: {pListTotal}</h1>
          <h1 className={styles.counter} id={styles.goldCounter}> Gold: {gListTotal}</h1>
          <h1 className={styles.counter} id={styles.brownCounter}>Brown: {bListTotal}</h1>
        </div>

        {address ? (
          <>
            <p id="status" className={styles.message}>{message}</p>
            <p id="clideo" className={styles.clideo}>{clideo}</p>
            <p id="mistake" className={styles.mistake}>{mistake}</p>

            <div className={styles.buttons1}>
              <button onClick={checkList} className={styles.mainButton}>Which list am I on?</button>
              <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button>
            </div>

            <div className={styles.buttons2}>
              <button onClick={checkList} className={styles.mainButton}>Which list am I on?</button><br></br>
              <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button>
            </div>
          </>
        ) : (
          <button onClick={connect} className={styles.mainButton} id={styles.connectBtn}>Connect Wallet</button>
        )}
      </main>
    </div>
  );
};

export default Home;
