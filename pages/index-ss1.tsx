import { useAddress, useMetamask, useCoinbaseWallet, useWalletConnect } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";
import brownMics from "../public/brownMics.json";
import goldMics from "../public/goldMics.json";
import platMics from "../public/platMics.json";

import IPinfoWrapper, { IPinfo, AsnResponse } from "node-ipinfo";
// import { setLogVerbosity } from '@grpc/grpc-js';

const Home: NextPage = () => {
  const address = useAddress();
  const connectMM = useMetamask();
  const connectWC = useWalletConnect();

  const bList = brownList.brownList;
  const gList = goldList.goldList;
  const pList = platinumList.platinumList;

  let bListTotal = bList.length;
  let gListTotal = gList.length;
  let pListTotal = pList.length;
  let totalMFs = bListTotal + gListTotal + pListTotal;

  const checkList = async () => {
  const arr: string[] = bList;
  const arr1: string[] = gList;
  const arr2: string[] = pList;


  const queryBtn = (document.getElementById('queryBtn') as HTMLElement);
  // const queryBtnMobile = (document.getElementById('queryBtnMobile') as HTMLElement);

  const tweetBtnBrown = (document.getElementById('tweetBtnBrown') as HTMLElement);
  const tweetBtnGold = (document.getElementById('tweetBtnGold') as HTMLElement);
  const tweetBtnPlat = (document.getElementById('tweetBtnPlat') as HTMLElement);

  // const jotFormBlack = (document.getElementById('jotFormBlack') as HTMLElement);
  // const jotFormBlackElement = (document.getElementById('jotFormBlackElement') as HTMLElement);
  // const homeQuests = (document.getElementById('homeQuests') as HTMLElement);
  // const totalMFs = (document.getElementById('totalMFs') as HTMLElement);
  // const counterCont = (document.getElementById('counterCont') as HTMLElement);
  const platStatusMsg = (document.getElementById('platStatusMsg') as HTMLElement);
  const goldStatusMsg = (document.getElementById('goldStatusMsg') as HTMLElement);
  const brownStatusMsg = (document.getElementById('brownStatusMsg') as HTMLElement);
  // const status = (document.getElementById('status') as HTMLElement);
  // const statusMobile = (document.getElementById('statusMobile') as HTMLElement);
  const lookBelow = (document.getElementById('lookBelow') as HTMLElement);
  const mainCont = (document.getElementById('mainCont') as HTMLElement);
  const newForm = (document.getElementById('newForm') as HTMLElement);
  const certTrophyMosaics = (document.getElementById('certTrophyMosaics') as HTMLElement);
  const trophyGrid = (document.getElementById('trophyGrid') as HTMLElement);
  const certTrophyPlat = (document.getElementById('certTrophyPlat') as HTMLImageElement);
  const certTrophyGold = (document.getElementById('certTrophyGold') as HTMLImageElement);
  const certTrophyBrown = (document.getElementById('certTrophyBrown') as HTMLImageElement);
  const pageDetails = (document.getElementById('pageDetails') as HTMLElement);
  const trophyDetails = (document.getElementById('trophyDetails') as HTMLElement);
  const checkListCont = (document.getElementById('checkListCont') as HTMLElement);

  const listTotals = (document.getElementById('listTotals') as HTMLElement);
  const listTotalsMob = (document.getElementById('listTotalsMob') as HTMLElement);

  console.log(address);

  const str = address?.toString();

    const brownHit = arr.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    const goldHit = arr1.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    const platHit = arr2.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    if (brownHit !== undefined) {
      // const message = "Congrats! You're on the Brown List!";
      // const mistake = "If you believe this is incorrect, stay calm MF and reach out to us on Twitter.";

      // (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      // (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      // status.textContent = message;
      // statusMobile.textContent = message;
      // statusMobile.classList.remove('Home_messageMobile__5C61x');
      // statusMobile.classList.add('Home_displayNone__dFRW_');
      // status.classList.add('Home_displayNone__dFRW_');
      // lookBelow.classList.remove('Home_displayNone__dFRW_');
      // lookBelow.classList.add('Home_lookBelow__1MtoB');
      // (document.getElementById('mistake') as HTMLElement).textContent = mistake;
      trophyGrid.classList.remove('Home_displayNone__dFRW_');
      trophyGrid.classList.add('Home_trophyGrid__kculm');

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      tweetBtnBrown.classList.remove('Home_displayNone__dFRW_');
      tweetBtnBrown.classList.add('Home_tweetBtnBrown__l7wc1');

      certTrophyBrown.classList.remove('Home_displayNone__dFRW_');
      certTrophyBrown.classList.add('Home_certTrophyCont__3hYjc');

      trophyDetails.classList.remove('Home_displayNone__dFRW_');
      trophyDetails.classList.add('Home_trophyDetails__frLPK');
      trophyDetails.style.background = "#995c3d";
      pageDetails.style.background = "#995c3d";

      checkListCont.classList.add('Home_displayNone__dFRW_');
      
      // (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      // (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');

      // homeQuests.classList.add('Home_displayNone__dFRW_');
      // counterCont.classList.add('Home_displayNone__dFRW_');

      // totalMFs.classList.remove('Home_total__212AA');
      // totalMFs.classList.add('Home_totalBrown__51Xiu');

      listTotals.classList.add('Home_displayNone__dFRW_');
      listTotalsMob.classList.add('Home_displayNone__dFRW_');
      
      brownStatusMsg.classList.remove('Home_displayNone__dFRW_');
      brownStatusMsg.classList.add('Home_totalBrown__51Xiu');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');

    } else if (goldHit !== undefined){
      // const message = "We like your style MF, you're on the Gold List!";
      // const mistake = "If you believe this is incorrect, stay calm MF and reach out to us on Twitter.";

      // (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      // (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      // status.textContent = message;
      // statusMobile.textContent = message;
      // statusMobile.classList.remove('Home_messageMobile__5C61x');
      // statusMobile.classList.add('Home_displayNone__dFRW_');
      // status.classList.add('Home_displayNone__dFRW_');
      // lookBelow.classList.remove('Home_displayNone__dFRW_');
      // lookBelow.classList.add('Home_lookBelow__1MtoB');
      // (document.getElementById('mistake') as HTMLElement).textContent = mistake;
      trophyGrid.classList.remove('Home_displayNone__dFRW_');
      trophyGrid.classList.add('Home_trophyGrid__kculm');

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      tweetBtnGold.classList.remove('Home_displayNone__dFRW_');
      tweetBtnGold.classList.add('Home_tweetBtnGold__3mlX3');

      certTrophyBrown.classList.remove('Home_displayNone__dFRW_');
      certTrophyBrown.classList.add('Home_certTrophyCont__3hYjc');
      
      certTrophyGold.classList.remove('Home_displayNone__dFRW_');
      certTrophyGold.classList.add('Home_certTrophyCont__3hYjc');

      trophyDetails.classList.remove('Home_displayNone__dFRW_');
      trophyDetails.classList.add('Home_trophyDetails__frLPK');
      trophyDetails.style.background = "#D68E22";
      pageDetails.style.background = "#D68E22";

      checkListCont.classList.add('Home_displayNone__dFRW_');

      // (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      // (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');

      // homeQuests.classList.add('Home_displayNone__dFRW_');
      // counterCont.classList.add('Home_displayNone__dFRW_');

      // totalMFs.classList.remove('Home_total__212AA');
      // totalMFs.classList.add('Home_totalGold__JWfRU');

      listTotals.classList.add('Home_displayNone__dFRW_');
      listTotalsMob.classList.add('Home_displayNone__dFRW_');
      
      goldStatusMsg.classList.remove('Home_displayNone__dFRW_');
      goldStatusMsg.classList.add('Home_totalGold__JWfRU');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');

    } else if (platHit !== undefined){
      // const message = "Oh wow, look at the MF'n big shot on Platinum over here!!";
      // const mistake = "";

      // status.textContent = message;
      // statusMobile.textContent = message;
      // statusMobile.classList.remove('Home_messageMobile__5C61x');
      // statusMobile.classList.add('Home_displayNone__dFRW_');
      // status.classList.add('Home_displayNone__dFRW_');
      // lookBelow.classList.remove('Home_displayNone__dFRW_');
      // lookBelow.classList.add('Home_lookBelow__1MtoB');
      // (document.getElementById('mistake') as HTMLElement).textContent = mistake;
      trophyGrid.classList.remove('Home_displayNone__dFRW_');
      trophyGrid.classList.add('Home_trophyGrid__kculm');

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      tweetBtnPlat.classList.remove('Home_displayNone__dFRW_');
      tweetBtnPlat.classList.add('Home_tweetBtnPlat__lexI5');

      certTrophyPlat.classList.remove('Home_displayNone__dFRW_');
      certTrophyPlat.classList.add('Home_certTrophyCont__3hYjc');

      certTrophyGold.classList.remove('Home_displayNone__dFRW_');
      certTrophyGold.classList.add('Home_certTrophyCont__3hYjc');

      certTrophyBrown.classList.remove('Home_displayNone__dFRW_');
      certTrophyBrown.classList.add('Home_certTrophyCont__3hYjc');

      trophyDetails.classList.remove('Home_displayNone__dFRW_');
      trophyDetails.classList.add('Home_trophyDetails__frLPK');

      checkListCont.classList.add('Home_displayNone__dFRW_');

      // (document.getElementById('formCont') as HTMLImageElement).classList.remove('Home_formCont__U0yV2');
      // (document.getElementById('formCont') as HTMLImageElement).classList.add('Home_displayNone__dFRW_');

      // homeQuests.classList.add('Home_displayNone__dFRW_');
      // counterCont.classList.add('Home_displayNone__dFRW_');

      // totalMFs.classList.remove('Home_total__212AA');
      // totalMFs.classList.add('Home_displayNone__dFRW_');

      listTotals.classList.add('Home_displayNone__dFRW_');
      listTotalsMob.classList.add('Home_displayNone__dFRW_');

      platStatusMsg.classList.remove('Home_displayNone__dFRW_');
      platStatusMsg.classList.add('Home_totalPlat__psvtb');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');

    } else {    
      // const message = "The connected address is not on The Brownlist. Submit the form below to request placement:";
      // const mistake = "If you believe this is incorrect, stay calm MF and reach out to us on Twitter.";

      // (document.getElementById('mistake') as HTMLElement).classList.remove('Home_displayNone__dFRW_');
      // (document.getElementById('mistake') as HTMLElement).classList.add('Home_mistake__3n8wi');

      // status.textContent = message;
      // statusMobile.textContent = message;
      // statusMobile.classList.remove('Home_messageMobile__5C61x');
      // statusMobile.classList.add('Home_messageMobilePad0__yKtcW');
      // (document.getElementById('mistake') as HTMLElement).textContent = mistake;

      certTrophyMosaics.classList.remove('Home_certTrophyCont__3hYjc');
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');

      queryBtn.classList.remove('Home_mainButton__dUc5h');
      queryBtn.classList.add('Home_displayNone__dFRW_');

      // homeQuests.classList.add('Home_displayNone__dFRW_');
      // counterCont.classList.add('Home_displayNone__dFRW_');

      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPadTop__Oc5a6');

      newForm.classList.remove('Home_newForm__ijaKq');
      newForm.classList.add('Home_newFormRes__wINKP');
    }
};

const checkMics = async () => {
  const brownMicList = brownMics.karaokeAttendees;
  const goldMicList = goldMics.karaokeSingers;
  const platMicList = platMics.karaokeStars;

  const brownMic = (document.getElementById('brownMic') as HTMLElement);
  const goldMic = (document.getElementById('goldMic') as HTMLElement);
  const platMic = (document.getElementById('platMic') as HTMLElement);

  const arr: string[] = brownMicList;
  const arr1: string[] = goldMicList;
  const arr2: string[] = platMicList;


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
      brownMic.classList.remove('Home_displayNone__dFRW_');
      brownMic.classList.add('Home_certTrophyCont__3hYjc');
    } 
    else if (found1 !== undefined){
      brownMic.classList.remove('Home_displayNone__dFRW_');
      brownMic.classList.add('Home_certTrophyCont__3hYjc');
      goldMic.classList.remove('Home_displayNone__dFRW_');
      goldMic.classList.add('Home_certTrophyCont__3hYjc');
    } else if (found2 !== undefined){
      brownMic.classList.remove('Home_displayNone__dFRW_');
      brownMic.classList.add('Home_certTrophyCont__3hYjc');
      goldMic.classList.remove('Home_displayNone__dFRW_');
      goldMic.classList.add('Home_certTrophyCont__3hYjc');
      platMic.classList.remove('Home_displayNone__dFRW_');
      platMic.classList.add('Home_certTrophyCont__3hYjc');
    } 
    else {    
    }
  };

  const checkLocation = async() => {
    const ipinfoWrapper = new IPinfoWrapper("5689eeab9ca86e");
    const scUSA = (document.getElementById('scUSA') as HTMLElement);

    ipinfoWrapper.lookupIp("1.1.1.1").then((response: IPinfo) => {
        const country = response.country;
        if (country === "United States") {
          scUSA.classList.remove('Home_displayNone__dFRW_');
          scUSA.classList.add('Home_certTrophyCont__3hYjc');
          console.log("show US trophy")
        } else if (country === "Nigeria") {
          console.log("show Nigerian trophy")
        } else {
          console.log("show world trophy")
        }
    });

    // ipinfoWrapper.lookupASN("AS7922").then((response: AsnResponse) => {
    //     console.log(response);
    // });
  }

  const checkAll = async() =>{
    checkList();
    checkMics();
    checkLocation();
  }

  const popModal4 = async() => {
    const modal4 = (document.getElementById('modalCont4') as HTMLElement);
    modal4.classList.remove('Home_displayNone__dFRW_');
    modal4.classList.add('Home_modalCont__SFakS');
  }

  const closeModal4 = async() => {
    const modal4 = (document.getElementById('modalCont4') as HTMLElement);
    modal4.classList.remove('Home_modalCont__SFakS');
    modal4.classList.add('Home_displayNone__dFRW_');
  }

  const popModal5 = async() => {
    const modal5 = (document.getElementById('modalCont5') as HTMLElement);
    modal5.classList.remove('Home_displayNone__dFRW_');
    modal5.classList.add('Home_modalCont__SFakS');
  }

  const closeModal5 = async() => {
    const modal5 = (document.getElementById('modalCont5') as HTMLElement);
    modal5.classList.remove('Home_modalCont__SFakS');
    modal5.classList.add('Home_displayNone__dFRW_');
  }

  const popModal6 = async() => {
    const modal6 = (document.getElementById('modalCont6') as HTMLElement);
    modal6.classList.remove('Home_displayNone__dFRW_');
    modal6.classList.add('Home_modalCont__SFakS');
  }

  const closeModal6 = async() => {
    const modal6 = (document.getElementById('modalCont6') as HTMLElement);
    modal6.classList.remove('Home_modalCont__SFakS');
    modal6.classList.add('Home_displayNone__dFRW_');
  }

  const reload = async() => {
    location.reload();
  }

  const showHamMenu = async() => {
    const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
    hamMenu.classList.add('Home_hamMenuDropdownActive__iT_P6')
  }

  const hideHamMenu = async() => {
    const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
    hamMenu.classList.remove('Home_hamMenuDropdownActive__iT_P6')
  }

const jotFormURL = "https://form.jotform.com/223266588147061";


  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.mainNav}>
          <div className={styles.pageLinkCont}>
            <Link href="/brownlist-submit">
              <a><h3 className={styles.pageLink}>Submit for BL</h3></a>
            </Link>
          </div>
          <div className={styles.pageLinkCont} onClick={reload}>
            <Link href="">
                <a><h3 className={styles.pageLinkPink}>My Trophies</h3></a>
            </Link>
          </div>
          <div className={styles.pageLinkCont}>
            <Link href="/swirled-cup">
              <a><h3 className={styles.pageLink}>Swirled Cup</h3></a>
            </Link>
          </div>
          <div className={styles.pageLinkCont}>
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

        <div className={styles.hamNav}>
            {/* <div className={styles.pageLinkCont}>
            <Link href="/nonsense">
                <a><h3 className={styles.pageLink}>Nonsense</h3></a>
            </Link>
            </div>
            <div className={styles.pageLinkCont}>
            <Link href="">
                <a><h3 className={styles.pageLink}>Swirled Cup</h3></a>
            </Link>
            </div> */}
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://tmb.imgix.net/twitter-black-white-circle.png/' alt='Black Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo} onClick={reload}>
                <Link href="">
                    <a>
                    <Image src='https://tmb.imgix.net/black-logo.png/' alt='Black BMA logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamMenu} onClick={showHamMenu}>
                <Link href="">
                    <Image src='https://tmb.imgix.net/hamburger-1.png/' alt='Black Twitter logo' width={40} height={40} />
                </Link>
            </div>
        </div>

        <div id="hamMenu" className={styles.hamMenuDropdown}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://tmb.imgix.net/twitter-white-circle.png/' alt='Black Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo} onClick={reload}>
                <Link href="/" target="_blank">
                    <a>
                    <Image src='https://tmb.imgix.net/bma-f5f5f5-trans.png/' alt='White BMA logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.closeBtn} onClick={hideHamMenu}>
                <Link href="">
                    <Image src='https://tmb.imgix.net/close-btn-f5f5f5.png/' alt='X button' width={45} height={45} />
                </Link>
            </div>
            <div className={styles.hamLinks}>
                <ul className={styles.hamLinksUL}>
                  <li onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLink}>Shiny Shit</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/swirled-cup">
                          <a><h3 className={styles.hamLink}>Swirled Cup</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/nonsense">
                          <a><h3 className={styles.hamLink}>BS</h3></a>
                      </Link>
                  </li>
                </ul>
                {/* <div className={styles.hamTwitLogo}>
                    <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                        <a className={styles.hamTwitLogoCont} target="_blank">
                        <Image src='https://tmb.imgix.net/twitter-white-circle.png/' alt='Black Twitter logo' width={45} height={45} />
                        </a>
                    </Link>
                </div> */}
            </div>
        </div>

        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}



        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        <div id='modalCont6' className={styles.displayNone} onClick={closeModal6}>
          <div className={styles.modalCard6}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://tmb.imgix.net/swirled-cup-usa.png/' alt='Black BMA logo' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>S.C. 1st Place</h1>
              <p className={styles.modalPar}>Awarded to everyone that helped the US take Platinum in the recent BMA Swirled Cup. Congrats you Mf'n champion!</p>
              <button>Tweet Trophy</button>
            </div>
          </div>
        </div>

        <div id='modalCont5' className={styles.displayNone} onClick={closeModal5}>
          <div className={styles.modalCard5}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://tmb.imgix.net/karaoke-plat.png/' alt='Black BMA logo' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Star</h1>
              <p className={styles.modalPar}>Awarded to a select few chosen by the community for positively melting faces at a BMA Karaoke night. Feel proud of this one MF, you've earned it!</p>
              <button>Tweet Trophy</button>
            </div>
          </div>
        </div>

        <div id='modalCont4' className={styles.displayNone} onClick={closeModal4}>
          <div className={styles.modalCard4}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://tmb.imgix.net/karaoke-singer-1.png/' alt='Black BMA logo' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Star</h1>
              <p className={styles.modalPar}>Awarded to every performer that makes it into a "Winner's Poll." Your talent impressed us all MF! Share this golden mic with pride!!</p>
              <button>Tweet Trophy</button>
            </div>
          </div>
        </div>

        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}


        <div className={styles.titleCont}>

          <div id="listTotals" className={styles.mfBreakdown}>
            {/* <h1 className={styles.totalMFs}>MF Totals:</h1> */}
            <h1 className={styles.brownMFs}>{bListTotal} Brown</h1>
            <h1 className={styles.goldMFs}>{gListTotal} Gold</h1>
            <h1 className={styles.platMFs}>{pListTotal} Platinum</h1>
          </div>

          <div id="listTotalsMob" className={styles.mfBreakdownMob}>
            {/* <h1 className={styles.totalMFs}>MF Totals:</h1> */}
            <h1 className={styles.brownMFs}>{bListTotal}</h1>
            <h1 className={styles.goldMFs}>{gListTotal}</h1>
            <h1 className={styles.platMFs}>{pListTotal}</h1>
          </div>

          {/* <h1 id='totalMFs' className={styles.total}>{totalMFs} MFs Strong!</h1> */}
          <h1 id='platStatusMsg' className={styles.displayNone}>Status: Platinum MF!!</h1>
          <h1 id='goldStatusMsg' className={styles.displayNone}>Status: Gold MF!</h1>
          <h1 id='brownStatusMsg' className={styles.displayNone}>Status: Brown MF</h1>

          {/* <div id='counterCont' className={styles.counterCont}> */}
            {/* <div className={styles.counter1}>
              <h1 className={styles.brownCounter}>Brown: {bListTotal}
                <span className={styles.goldCounter}> Gold: {gListTotal}</span>
                <span className={styles.platCounter}> Platinum: {pListTotal}</span>
              </h1>
            </div> */}
            {/* <div className={styles.counter2}>
              <h1 id='totalMFs' className={styles.total}>{totalMFs} MFs Total:</h1>
              <h1 className={styles.counter} id={styles.brownCounter}>{bListTotal}</h1>
              <h1 className={styles.counter} id={styles.goldCounter}>{gListTotal}</h1>
              <h1 className={styles.counter} id={styles.platCounter}>{pListTotal}</h1>
            </div>
          </div> */}

        </div>
        

        {address ? (
          <>
            <div id="mainCont" className={styles.mainCont}>
              {/* <p id="lookBelow" className={styles.displayNone}>Your trophy collection:</p> */}
              {/* <br id="messageBreak" className={styles.displayNone}></br> */}

              <div>
                <script async src="https://platform.twitter.com/widgets.js"></script>
                <button className={styles.displayNone} id="tweetBtnBrown"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/LUnk6cm1v7%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnGold"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/5GL5mtcDnC%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnPlat"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Oh%20this?%20This%20is%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20Not%20much%20space%20left%20MF%20...%20act%20now%20or%20forever%20hold%20your%20pee!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/nAPozwvx1N%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
              </div>

              <div id="trophyGrid" className={styles.displayNone}>
                <div className={styles.gridUnitCont} onClick={popModal6}>
                  <div id="scUSA" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://tmb.imgix.net/swirled-cup-usa.png/' alt='Brown Karaoke Attendee Trophy' width={1200} height={1200} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal5}>
                  <div id="platMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://tmb.imgix.net/karaoke-plat.png/' alt='Plat Karaoke Star Trophy' width={1200} height={1200} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal4}>
                  <div id="goldMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://tmb.imgix.net/karaoke-singer-1.png/' alt='Gold Karaoke Singer Trophy' width={1200} height={1200} />
                  </div>
                </div>
                <div className={styles.gridUnitCont}>
                  <div id="brownMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://tmb.imgix.net/karaoke-attendee.png/' alt='Brown Karaoke Attendee Trophy' width={1200} height={1200} />
                  </div>
                </div>
                <div className={styles.gridUnitCont}>
                  <div id="certTrophyPlat" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://brownlist.imgix.net/cert-plat.png/' alt='Platinum swirl certification trophy.' width={1200} height={1200} />
                  </div>
                </div>
                <div className={styles.gridUnitCont}>
                  <div id="certTrophyGold" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://brownlist.imgix.net/cert-gold.png/' alt='Gold swirl certification trophy.' width={1200} height={1200} />
                  </div>
                </div>
                <div className={styles.gridUnitCont}>
                  <div id="certTrophyBrown" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://brownlist.imgix.net/cert-brown.png/' alt='Brown swirl certification trophy.' width={1200} height={1200} />
                  </div>
                </div>
              </div>

              {/* <p id="statusMobile" className={styles.messageMobile}>{message}</p> */}

              {/* <p id="mistake" className={styles.displayNone}>{mistake}</p> */}

              {/* <div className={styles.certTrophySect}> */}
                {/* <h1>Verify your status now:</h1> */}
                <div id="certTrophyMosaics" className={styles.mosaicCont}>
                  <Image className={styles.trophyMosaics} src='https://brownlist.imgix.net/trophies-mosaic.gif/' alt='Platinum swirl certification trophy.' width={800} height={800} />
                </div>
                <div id="checkListCont" className={styles.checkListCont}>
                  <p className={styles.message}>Connected!</p>
                  {/* <p id="statusMobile" className={styles.messageMobile}>{message}</p> */}
                  <div className={styles.buttonsCont}>
                    <button onClick={checkAll} className={styles.mainButton} id="queryBtn">View Trophies</button>
                  </div>
                </div>
              {/* </div> */}
              
            </div>
          </>
        ) : (

          <div className={styles.connectCont}>
            {/* <div className={styles.certTrophySect}> */}
              <div id="certTrophyMosaics" className={styles.mosaicCont}>
                <Image className={styles.trophyMosaics} src='https://brownlist.imgix.net/trophies-mosaic.gif/' alt='Platinum swirl certification trophy.' width={800} height={800} />
              </div>
            {/* </div> */}
              
            
            <div className={styles.connectBtnsCont}>
              <h1 className={styles.connectInst}>Connect to Begin</h1>
              <button onClick={connectMM} className={styles.connectBtnMM} id={styles.connectBtn}>MetaMask</button>
              <button onClick={connectWC} className={styles.connectBtnWC} id={styles.connectBtn}>WalletConnect</button>
              {/* <button onClick={connectCB} className={styles.connectBtnCB} id={styles.connectBtn}>CoinBase</button> */}
            </div>

            <div className={styles.connectBtnsContMob}>
              {/* <div><h1>Connect:</h1></div> */}
              <h1 className={styles.connectInstMob}>Connect to Begin</h1>
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
        
        
        {/* <div id='homeQuests' className={styles.homeQuestCont}>
          <h1 className={styles.formTitle}>Not on The Brownlist??</h1>
          <p className={styles.formInst}>Fill out the form below:</p>
        </div> */}

        <div id="pageDetails" className={styles.pageDetails}>
          <p id="trophyDetails" className={styles.displayNone}>Click on any trophy to learn more.<br></br>If you believe a trophy is missing from your collection, stay calm MF and DM us on Twitter.<br></br><br></br>Note: final mint numbers correlating to swirl status will not be cummulative. For example, if Platinum yields 3 mints, Gold yields 2, and Brown yields an unguaranteed 1 ... you do not get 6 mints for having all three trophies in your collection, you get 3 mints for having platinum status. Again, these numbers are NOT final.</p>
        </div>
        
        <div>
          <iframe id='newForm' className={styles.newForm} title="Jotform Embed" src={jotFormURL}></iframe>
        </div>
        

      </main>
    </div>
  );
};

export default Home;
