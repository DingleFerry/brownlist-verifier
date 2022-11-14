import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";

// import logoBMA from '../public/bma-logo-black.png';
// import logoTwit from '../public/twitter-logo-black.png';

// https://bafkreid5yasqlpflxg2fq7irzs5mgisvq7waskc5t2tf7nlrkqtaeaj3wm.ipfs.nftstorage.link/ - twitterLogo
// https://bafkreihjag3e6uz3ykuzjfsu6qlvyejznug5maz3z2hha3a2ufo5xhxjxi.ipfs.nftstorage.link/ - BMA logo

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

  const queryBtn = (document.getElementById('queryBtn') as HTMLElement);
  const queryBtnMobile = (document.getElementById('queryBtnMobile') as HTMLElement);

  const tweetBtnBrown = (document.getElementById('tweetBtnBrown') as HTMLElement);
  const tweetBtnGold = (document.getElementById('tweetBtnGold') as HTMLElement);
  const tweetBtnPlat = (document.getElementById('tweetBtnPlat') as HTMLElement);
  

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

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      tweetBtnBrown.classList.remove('Home_displayNone__dFRW_');
      tweetBtnBrown.classList.add('Home_tweetBtnBrown__l7wc1');
    } else if (found1 !== undefined){
      const message = "We like your style MF, you're on the Gold List!";
      const clideo = "";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      tweetBtnGold.classList.remove('Home_displayNone__dFRW_');
      tweetBtnGold.classList.add('Home_tweetBtnGold__3mlX3');
    } else if (found2 !== undefined){
      const message = "Oh wow, look at the MF'n Big Shot on Platinum over here!!";
      const clideo = "";
      const mistake = "";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      tweetBtnPlat.classList.remove('Home_displayNone__dFRW_');
      tweetBtnPlat.classList.add('Home_tweetBtnPlat__lexI5');
    } else {
      const message = "Unfortunately, you are not currently on The Brownlist. So go make memes while there's still time!";
      const clideo = "If you don't know how, search for “meme maker” to get the ball rolling.";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('clideo') as HTMLElement).textContent = clideo;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');
    }
  };


  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.mainNav}>
          <div className={styles.pageLinks}>
            <Link href="/nonsense">
              <a><h3 className={styles.pageLink}>Nonsense</h3></a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="">
              <a>
                <Image src='https://tmb.imgix.net/black-logo.png/' alt='Black BMA logo' width={90} height={90} />
              </a>
            </Link>
          </div>
          <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
              <a className={styles.twitLogoCont} target="_blank">
                <Image src='https://tmb.imgix.net/twitter-0a0a0a.png/' alt='Black Twitter logo' width={56} height={45} />
              </a>
            </Link>
          </div>
        </div>

        <h1 className={styles.total}>{totalMFs} MFs strong!</h1>
        <div className={styles.sect1}>
          <div className={styles.counter1}>
            <h1 className={styles.brownCounter}>Brown: {bListTotal}
              <span className={styles.goldCounter}> Gold: {gListTotal}</span>
              <span className={styles.platCounter}> Platinum: {pListTotal}</span>
            </h1>
          </div>
          <div className={styles.counter2}>
            <h1 className={styles.counter} id={styles.platCounter}>{pListTotal}</h1>
            <h1 className={styles.counter} id={styles.goldCounter}>{gListTotal}</h1>
            <h1 className={styles.counter} id={styles.brownCounter}>{bListTotal}</h1>
          </div>
        </div>

        {address ? (
          <>
            <p id="status" className={styles.message}>{message}</p>
            <div>
              <script async src="https://platform.twitter.com/widgets.js"></script>
              <button className={styles.displayNone} id="tweetBtnBrown"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/mVupmqcjiK%0DCheck%20your%20status%20now:%20https://brownlist-verifier.vercel.app/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
              <button className={styles.displayNone} id="tweetBtnGold"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/mVupmqcjiK%0DCheck%20your%20status%20now:%20https://brownlist-verifier.vercel.app/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
              <button className={styles.displayNone} id="tweetBtnPlat"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Oh%20this?%20This%20is%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20Not%20much%20space%20left%20MF%20...%20act%20now%20or%20forever%20hold%20your%20pee!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/mVupmqcjiK%0DCheck%20your%20status%20now:%20https://brownlist-verifier.vercel.app/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
            </div>
            <p id="clideo" className={styles.displayNone}>{clideo}</p>
            <p id="mistake" className={styles.displayNone}>{mistake}</p>

            <div className={styles.buttons1}>
              <button onClick={checkList} className={styles.mainButton} id="queryBtn">Which list am I on?</button>
              {/* <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button> */}
              {/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Sorry if I blinded you MF, my official @BMAssholesNFT Gold Status is just too damn shiny!! twitter.com/BMAssholesNFT/status/1591485324286656512/photo/1" data-url="https://brownlist-verifier.vercel.app/" data-hashtags="#BMA #MakeMemesNotWar #KissMyAss" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script> */}
            </div>

            <div className={styles.buttons2}>
              <button onClick={checkList} className={styles.mainButton} id="queryBtnMobile">Which list am I on?</button><br></br>
              {/* <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button> */}
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
