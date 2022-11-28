import { useAddress, useMetamask, useCoinbaseWallet, useWalletConnect } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";


const Home: NextPage = () => {
  const address = useAddress();
  const connectMM = useMetamask();
  const connectCB = useCoinbaseWallet();
  const connectWC = useWalletConnect();

  const bList = brownList.brownList;
  const gList = goldList.goldList;
  const pList = platinumList.platinumList;


  const message = "Click to verify status.";
  const mistake = "";

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

  const jotFormBlack = (document.getElementById('jotFormBlack') as HTMLElement);
  const jotFormBlackElement = (document.getElementById('jotFormBlackElement') as HTMLElement);
  const homeQuests = (document.getElementById('homeQuests') as HTMLElement);
  const totalMFs = (document.getElementById('totalMFs') as HTMLElement);
  const counterCont = (document.getElementById('counterCont') as HTMLElement);
  const status = (document.getElementById('status') as HTMLElement);
  const statusMobile = (document.getElementById('statusMobile') as HTMLElement);
  const mainCont = (document.getElementById('mainCont') as HTMLElement);
  const newForm = (document.getElementById('newForm') as HTMLElement);
  const certTrophyMosaics = (document.getElementById('certTrophyMosaics') as HTMLElement);

  console.log(address);

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

    if (found !== undefined) {
      const message = "Congrats! You're on the Brown List!";
      const mistake = "If you believe this is incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      status.textContent = message;
      statusMobile.textContent = message;
      statusMobile.classList.remove('Home_messageMobile__5C61x');
      statusMobile.classList.add('Home_messageMobilePad0__yKtcW');
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      tweetBtnBrown.classList.remove('Home_displayNone__dFRW_');
      tweetBtnBrown.classList.add('Home_tweetBtnBrown__l7wc1');

      (document.getElementById('certTrophyBrown') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('certTrophyBrown') as HTMLImageElement).classList.add('Home_certTrophyCont__3hYjc');
      
      (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');

      homeQuests.classList.add('Home_displayNone__dFRW_');
      counterCont.classList.add('Home_displayNone__dFRW_');

      totalMFs.classList.remove('Home_total__212AA');
      totalMFs.classList.add('Home_totalBrown__51Xiu');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');

    } else if (found1 !== undefined){
      const message = "We like your style MF, you're on the Gold List!";
      const mistake = "If you believe this is incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      status.textContent = message;
      statusMobile.textContent = message;
      statusMobile.classList.remove('Home_messageMobile__5C61x');
      statusMobile.classList.add('Home_messageMobilePad0__yKtcW');
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      tweetBtnGold.classList.remove('Home_displayNone__dFRW_');
      tweetBtnGold.classList.add('Home_tweetBtnGold__3mlX3');

      (document.getElementById('certTrophyGold') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('certTrophyGold') as HTMLImageElement).classList.add('Home_certTrophyCont__3hYjc');

      (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');

      homeQuests.classList.add('Home_displayNone__dFRW_');
      counterCont.classList.add('Home_displayNone__dFRW_');

      totalMFs.classList.remove('Home_total__212AA');
      totalMFs.classList.add('Home_totalGold__JWfRU');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');

    } else if (found2 !== undefined){
      const message = "Oh wow, look at the MF'n big shot on Platinum over here!!";
      const mistake = "";

      status.textContent = message;
      statusMobile.textContent = message;
      statusMobile.classList.remove('Home_messageMobile__5C61x');
      statusMobile.classList.add('Home_messageMobilePad0__yKtcW');
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      tweetBtnPlat.classList.remove('Home_displayNone__dFRW_');
      tweetBtnPlat.classList.add('Home_tweetBtnPlat__lexI5');

      (document.getElementById('certTrophyPlat') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('certTrophyPlat') as HTMLImageElement).classList.add('Home_certTrophyCont__3hYjc');

      (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');

      homeQuests.classList.add('Home_displayNone__dFRW_');
      counterCont.classList.add('Home_displayNone__dFRW_');

      totalMFs.classList.remove('Home_total__212AA');
      totalMFs.classList.add('Home_totalPlat__psvtb');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');

    } else {    
      const message = "The connected address is not on The Brownlist. Submit the form below to request placement:";
      const mistake = "If you believe this is incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      status.textContent = message;
      statusMobile.textContent = message;
      statusMobile.classList.remove('Home_messageMobile__5C61x');
      statusMobile.classList.add('Home_messageMobilePad0__yKtcW');
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      homeQuests.classList.add('Home_displayNone__dFRW_');
      counterCont.classList.add('Home_displayNone__dFRW_');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPadTop__Oc5a6');

      newForm.classList.remove('Home_newForm__ijaKq');
      newForm.classList.add('Home_newFormRes__wINKP');
    }
  };

  const reload = async() => {
    location.reload();
  }

  const jotFormURL = "https://form.jotform.com/223266588147061";


  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.mainNav}>
          <div className={styles.pageLinks}>
            <Link href="/nonsense">
              <a><h3 className={styles.pageLink}>BS</h3></a>
            </Link>
          </div>
          <div className={styles.logo} onClick={reload}>
            <Link href="">
              <a>
                <Image src='https://brownlist.imgix.net/black-logo.png/' alt='Black BMA logo' width={90} height={90} />
              </a>
            </Link>
          </div>
          <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
              <a className={styles.twitLogoCont} target="_blank">
                <Image src='https://brownlist.imgix.net/twitter-white-black.png/' alt='Black Twitter logo' width={45} height={45} />
              </a>
            </Link>
          </div>
        </div>

        <h1 id='totalMFs' className={styles.total}>{totalMFs} MFs strong!</h1>

        <div id='counterCont' className={styles.counterCont}>
          <div className={styles.counter1}>
            <h1 className={styles.brownCounter}>Brown: {bListTotal}
              <span className={styles.goldCounter}> Gold: {gListTotal}</span>
              <span className={styles.platCounter}> Platinum: {pListTotal}</span>
            </h1>
          </div>
          <div className={styles.counter2}>
            <h1 className={styles.counter} id={styles.brownCounter}>{bListTotal}</h1>
            <h1 className={styles.counter} id={styles.goldCounter}>{gListTotal}</h1>
            <h1 className={styles.counter} id={styles.platCounter}>{pListTotal}</h1>
          </div>
        </div>

        {address ? (
          <>
            <div id="mainCont" className={styles.mainCont}>
              <p id="status" className={styles.message}>{message}</p>
              <br id="messageBreak" className={styles.displayNone}></br>

              <div>
                <div id="certTrophyBrown" className={styles.displayNone}>
                  <Image className={styles.trophyImage} src='https://brownlist.imgix.net/cert-brown.png/' alt='Brown swirl certification trophy.' width={2069} height={2069} />
                </div>
                <div id="certTrophyGold" className={styles.displayNone}>
                  <Image className={styles.trophyImage} src='https://brownlist.imgix.net/cert-gold.png/' alt='Gold swirl certification trophy.' width={2069} height={2069} />
                </div>
                <div id="certTrophyPlat" className={styles.displayNone}>
                  <Image className={styles.trophyImage} src='https://brownlist.imgix.net/cert-plat.png/' alt='Platinum swirl certification trophy.' width={2069} height={2069} />
                </div>
              </div>

              <p id="statusMobile" className={styles.messageMobile}>{message}</p>

              <div>
                <script async src="https://platform.twitter.com/widgets.js"></script>
                <button className={styles.displayNone} id="tweetBtnBrown"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/LUnk6cm1v7%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnGold"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/5GL5mtcDnC%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnPlat"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Oh%20this?%20This%20is%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20Not%20much%20space%20left%20MF%20...%20act%20now%20or%20forever%20hold%20your%20pee!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/nAPozwvx1N%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
              </div>

              <p id="mistake" className={styles.displayNone}>{mistake}</p>

              <div className={styles.buttonsCont}>
                <button onClick={checkList} className={styles.mainButton} id="queryBtn">Which list am I on?</button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.connectCont}>
            {/* <h1>Connect with:</h1> */}
            <div className={styles.connectBtnsCont}>
              <button onClick={connectMM} className={styles.connectBtnMM} id={styles.connectBtn}>MetaMask</button>
              <button onClick={connectWC} className={styles.connectBtnWC} id={styles.connectBtn}>WalletConnect</button>
              {/* <button onClick={connectCB} className={styles.connectBtnCB} id={styles.connectBtn}>CoinBase</button> */}
            </div>

            <div className={styles.connectBtnsContMob}>
              {/* <div><h1>Connect:</h1></div> */}
              <button onClick={connectMM} className={styles.connectMMMob}>
                <Image className={styles.connectMMMobImage} src='https://brownlist.imgix.net/metamask.png/' alt='MetaMask connect button' width={40} height={40} />
              </button>
              <button onClick={connectWC} className={styles.connectBtnWCMob}>
                <Image className={styles.connectMMMobImage} src='https://brownlist.imgix.net/wallet-connect-1.png/' alt='WalletConnect connect button' width={40} height={40} />
              </button>
              {/* <button onClick={connectCB} className={styles.connectBtnCBMob}>
                <Image className={styles.connectMMMobImage} src='https://brownlist.imgix.net/coinbase.png/' alt='CoinBase connect button' width={40} height={40} />
              </button> */}
            </div>
          </div>
        )}

        <div id="certTrophyMosaics" className={styles.certTrophyCont}>
          {/* <div className={styles.ytCont}><iframe id="ytFrame" className={styles.ytFrame} width="560" height="720" src="https://www.youtube.com/embed/6LWQkuGY1qI?autoplay=1&mute=1&loop=1&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> */}
          <Image className={styles.trophyImage} src='https://brownlist.imgix.net/trophies-mosaic.gif/' alt='Platinum swirl certification trophy.' width={800} height={800} />
        </div>
        
        <div id='homeQuests' className={styles.homeQuestCont}>
          <h1 className={styles.formTitle}>Not on The Brownlist??</h1>
          <p className={styles.formInst}>Fill out the form below:</p>
        </div>
        
        <div id ="formCont">
          <iframe id='newForm' className={styles.newForm} title="Jotform Embed" src={jotFormURL}></iframe>
        </div>
        

      </main>
    </div>
  );
};

export default Home;
