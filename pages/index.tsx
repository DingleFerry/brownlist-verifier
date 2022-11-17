import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";
import { stringify } from 'querystring';

import JotformEmbed from 'react-jotform-embed';

// sfddskhfg

// import logoBMA from '../public/bma-logo-black.png';
// import logoTwit from '../public/twitter-logo-black.png';

// https://bafkreid5yasqlpflxg2fq7irzs5mgisvq7waskc5t2tf7nlrkqtaeaj3wm.ipfs.nftstorage.link/ - twitterLogo
// https://bafkreihjag3e6uz3ykuzjfsu6qlvyejznug5maz3z2hha3a2ufo5xhxjxi.ipfs.nftstorage.link/ - BMA logo

const Home: NextPage = () => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  // const hidePlaceholder = async () => {
  //   const connectToStart = (document.getElementById('connectToStart') as HTMLElement);
  //   const connectBtn = (document.getElementById('Home_connectBtn__q4_OB') as HTMLElement);
    
  //   connectToStart.classList.remove('Home_connectToStart__L19x5');
  //   connectToStart.classList.add('Home_displayNone__dFRW_');

  //   if (connectBtn == connectBtn){
  //     const messageText = (document.getElementById('status') as HTMLElement);
  //     console.log(messageText);
  //   }
  // };

  // function connectBtnClick() {
  //   useMetamask();
  //   hidePlaceholder();
  // }

  const bList = brownList.brownList;
  const gList = goldList.goldList;
  const pList = platinumList.platinumList;


  const message = "Click to verify status.";
  const mistake = "";

  let bListTotal = bList.length;
  let gListTotal = gList.length;
  let pListTotal = pList.length;
  let totalMFs = bListTotal + gListTotal + pListTotal;

  // let addressLength = address?.length;
  // const addressString = stringify(address);

  const checkList = async () => {
  const arr: string[] = bList;
  const arr1: string[] = gList;
  const arr2: string[] = pList;


  // const swapMessage = async () => {
  //   connectToStart.classList.remove('Home_connectToStart__L19x5');
  //   connectToStart.classList.add('Home_displayNone__dFRW_');

  //   message.classList.remove('Home_displayNone__dFRW_');
  //   message.classList.add('Home_message__qpB0D');
  // }


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
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('vertSpacer80') as HTMLElement).classList.remove('Home_vertSpacer80__SkJjf');
      (document.getElementById('vertSpacer80') as HTMLElement).classList.add('Home_displayNone__dFRW_');

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      tweetBtnBrown.classList.remove('Home_displayNone__dFRW_');
      tweetBtnBrown.classList.add('Home_tweetBtnBrown__l7wc1');

      (document.getElementById('certTrophyBrown') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('certTrophyBrown') as HTMLImageElement).classList.add('Home_certTrophyCont__3hYjc');
      
      (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');


    } else if (found1 !== undefined){
      const message = "We like your style MF, you're on the Gold List!";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      tweetBtnGold.classList.remove('Home_displayNone__dFRW_');
      tweetBtnGold.classList.add('Home_tweetBtnGold__3mlX3');

      (document.getElementById('certTrophyGold') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('certTrophyGold') as HTMLImageElement).classList.add('Home_certTrophyCont__3hYjc');

      (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');


    } else if (found2 !== undefined){
      const message = "Oh wow, look at the MF'n Big Shot on Platinum over here!!";
      const mistake = "";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      tweetBtnPlat.classList.remove('Home_displayNone__dFRW_');
      tweetBtnPlat.classList.add('Home_tweetBtnPlat__lexI5');

      (document.getElementById('certTrophyPlat') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('certTrophyPlat') as HTMLImageElement).classList.add('Home_certTrophyCont__3hYjc');

      (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');


    } else {    
      const message = "The connected address is not on The Brownlist. Submit the form below to request placement:";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";

      (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      (document.getElementById('messageBreak') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('messageBreak') as HTMLElement).classList.add('Home_displayBlock__4805r');

      (document.getElementById('homeFormMobile') as HTMLElement).classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      queryBtnMobile.classList.remove('Home_mainButton__dUc5h');
      queryBtnMobile.classList.add('Home_displayNone__dFRW_');

      setWalletAdd(str as string);

      // (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_displayNone__dFRW_');
      // (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_formCont__U0yV2');

      (document.getElementById('homeForm') as HTMLElement).classList.remove('Home_displayBlock__4805r');
      (document.getElementById('homeForm') as HTMLElement).classList.add('Home_displayNone__dFRW_');
      (document.getElementById('resultForm') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      (document.getElementById('resultForm') as HTMLElement).classList.add('Home_displayBlock__4805r');
    }
  };

  const [walletAdd, setWalletAdd] = useState('')
  const [twitterHandle, setTwitterHandle] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = {
      walletAdd,
      twitterHandle
    }

    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    const response = await fetch('/api/submit', {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const content = await response.json();

    alert('Success! Your address and handle have been submitted. Stay posted for status updates!')
    console.log(content)

    setWalletAdd('')
    setTwitterHandle('')

    // Get data from the form.
    // const data = {
    //   walletAdd: form.walletAdd.value as string,
    //   twitterHandle: form.twitterHandle.value as string,
    // }

    // const JSONdata = JSON.stringify(data)

    // const endpoint = '/api/form'

    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // }

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)

    console.log(form)
  }

  // const walletAddInput = document.getElementById('walletAdd') as HTMLFormElement;
  // walletAddInput.oninvalid = function(e) {
  //   e.target.setCustomValidity('')
  // }

  // (document.getElementById('jotFormEmbed') as HTMLElement).innerHTML = ''


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

        <div className={styles.counterCont}>
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

        {/* <p className={styles.connectToStart} id="connectToStart">Connect your wallet to start.</p> */}

        {address ? (
          <>
            <div className={styles.mainCont}>
              {/* <div id="vertSpacer80" className={styles.vertSpacer80}></div> */}
              <p id="status" className={styles.message}>{message}</p><br id="messageBreak" className={styles.displayNone}></br>

              <div>
                <div id="certTrophyBrown" className={styles.displayNone}>
                  <Image className={styles.trophyImage} src='https://tmb.imgix.net/certified-brown1.png/' alt='Brown swirl certification trophy.' width={2069} height={2069} />
                </div>
                <div id="certTrophyGold" className={styles.displayNone}>
                  <Image className={styles.trophyImage} src='https://tmb.imgix.net/certified-gold.png/' alt='Gold swirl certification trophy.' width={2069} height={2069} />
                </div>
                <div id="certTrophyPlat" className={styles.displayNone}>
                  <Image className={styles.trophyImage} src='https://tmb.imgix.net/certified-plat.png/' alt='Platinum swirl certification trophy.' width={2069} height={2069} />
                </div>
              </div>

              <div>
                <script async src="https://platform.twitter.com/widgets.js"></script>
                <button className={styles.displayNone} id="tweetBtnBrown"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/mVupmqcjiK%0DCheck%20your%20status%20now:%20https://brownlist-verifier.vercel.app/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnGold"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/mVupmqcjiK%0DCheck%20your%20status%20now:%20https://brownlist-verifier.vercel.app/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnPlat"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Oh%20this?%20This%20is%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20Not%20much%20space%20left%20MF%20...%20act%20now%20or%20forever%20hold%20your%20pee!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/mVupmqcjiK%0DCheck%20your%20status%20now:%20https://brownlist-verifier.vercel.app/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
              </div>

              <p id="mistake" className={styles.displayNone}>{mistake}</p>

              <div className={styles.buttons1}>
                <button onClick={checkList} className={styles.mainButton} id="queryBtn">Which list am I on?</button>
                {/* <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button> */}
                {/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Sorry if I blinded you MF, my official @BMAssholesNFT Gold Status is just too damn shiny!! twitter.com/BMAssholesNFT/status/1591485324286656512/photo/1" data-url="https://brownlist-verifier.vercel.app/" data-hashtags="#BMA #MakeMemesNotWar #KissMyAss" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script> */}
              </div>

              <div className={styles.buttons2}>
                <button onClick={checkList} className={styles.mainButton} id="queryBtnMobile">Which list am I on?</button>
                {/* <br></br> */}
                {/* <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button> */}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.connectCont}>
            {/* <div></div> */}
            <button onClick={connect} className={styles.connectBtn} id={styles.connectBtn}>Connect Wallet</button>
          </div>
        )}

        <div id="formCont" className={styles.formCont}>

        {/* <script type="text/javascript" src="https://form.jotform.com/jsform/223194906055053"></script> */}

        {/* <iframe className={styles.iFrameForm} src="https://docs.google.com/forms/d/e/1FAIpQLSdlZaq3kRAUk1IGlbnNWvDkf-X4gzPWjTEiaQLnm5F1F6Ht_A/viewform?embedded=true" width="640" height="542">Loading…</iframe> */}
        {/* <iframe className={styles.iFrameForm} id="JotFormIFrame-223195665935164" title="App" src="https://www.jotform.com/app/223195665935164?appEmbedded=1"></iframe> */}
        {/* <script type="text/javascript" src="https://form.jotform.com/jsform/223194906055053"></script> */}
        
        {/* <h1 className={styles.formTitle}>Not on The Brownlist?</h1>
                  <p className={styles.formInst}>Fill out the form below:</p> */}
        <div className={styles.jotFormEmbed}><JotformEmbed src="https://form.jotformeu.com/223194906055053" /></div>
          

            {/* <div id="homeFormMobile">
              <div className={styles.homeFormMobile}>
                <form onSubmit={handleSubmit}>
                  <h1 className={styles.formTitle}>Not on The Brownlist?</h1>
                  <p className={styles.formInst}>Fill out the form below:</p>
                  <label className={styles.formLabel} htmlFor="walletAdd" id={styles.walletAddInput}>Wallet Address</label>
                  <input className={styles.formInput} value={walletAdd} onChange={e => setWalletAdd(e.target.value)}
                    type="text"
                    id="walletAdd"
                    name="walletAdd"
                    required
                    minLength={42}
                    maxLength={43}
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please try again. Wallet Addresses must be 42 characters long and start with 0x.')}
                  />
                  <div className={styles.formUnderline}></div>
                  <br></br>
                  <label className={styles.formLabel} htmlFor="twitterHandle">Twitter Handle</label>
                  <input className={styles.formInput} value={twitterHandle} onChange={e => setTwitterHandle(e.target.value)}
                  type="text" id="twitterHandle" name="twitterHandle" required />
                  <div className={styles.formUnderline}></div>
                  <br></br>
                  <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
              </div>
            </div>

            <div className={styles.displayBlock} id="homeForm">
              <div className={styles.homeForm}>
                <form onSubmit={handleSubmit}>
                  <h1 className={styles.formTitle}>Not on The Brownlist?</h1>
                  <p className={styles.formInst}>Fill out the form below:</p>
                  <label className={styles.formLabel} htmlFor="walletAdd" id={styles.walletAddInput}>Wallet Address</label>
                  <input className={styles.formInput} value={walletAdd} onChange={e => setWalletAdd(e.target.value)}
                    type="text"
                    id="walletAdd"
                    name="walletAdd"
                    required
                    minLength={42}
                    maxLength={43}
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please try again. Wallet Addresses must be 42 characters long and start with 0x.')}
                  />
                  <div className={styles.formUnderline}></div>
                  <br></br>
                  <label className={styles.formLabel} htmlFor="twitterHandle">Twitter Handle</label>
                  <input className={styles.formInput} value={twitterHandle} onChange={e => setTwitterHandle(e.target.value)}
                  type="text" id="twitterHandle" name="twitterHandle" required />
                  <div className={styles.formUnderline}></div>
                  <br></br>
                  <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
              </div>
            </div>

            <div id="resultForm" className={styles.displayNone}>
              <div className={styles.resultForm}>
                <form onSubmit={handleSubmit}>
                  <label className={styles.resultFormLabel} htmlFor="walletAdd" id={styles.walletAddInput}>Wallet Address</label>
                  <input className={styles.resultFormInput} value={walletAdd} onChange={e => setWalletAdd(e.target.value)}
                    type="text"
                    id="walletAdd"
                    name="walletAdd"
                    required
                    minLength={42}
                    maxLength={43}
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please try again. Wallet Addresses must be 42 characters long and start with 0x.')}
                  />
                  <div className={styles.resultFormUnderline}></div>
                  <br></br>
                  <label className={styles.resultFormLabel} htmlFor="twitterHandle">Twitter Handle</label>
                  <input className={styles.resultFormInput} value={twitterHandle} onChange={e => setTwitterHandle(e.target.value)}
                  type="text" id="twitterHandle" name="twitterHandle" required />
                  <div className={styles.resultFormUnderline}></div>
                  <br></br>
                  <button type="submit" className={styles.resultSubmitBtn}>Submit</button>
                </form>
              </div>
            </div> */}
          
        </div>
        

      </main>
    </div>
  );
};

export default Home;
