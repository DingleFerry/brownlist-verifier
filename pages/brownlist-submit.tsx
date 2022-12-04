import {useAddress} from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";


// const jotFormURL = "https://form.jotform.com/223266588147061";


// const showHamMenu = async() => {
//     const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
//     hamMenu.classList.add('Home_hamMenuDropdownActive__iT_P6')
// }

// const hideHamMenu = async() => {
//     const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
//     hamMenu.classList.remove('Home_hamMenuDropdownActive__iT_P6')
// }

// const reload = async() => {
//     location.reload();
// }

// const address = useAddress();

const bmaCup: NextPage = () => {
    const address = useAddress();
    console.log(address);

    const jotFormURL = "https://form.jotform.com/223266588147061";

    const showHamMenu = async() => {
        const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
        hamMenu.classList.add('Home_hamMenuDropdownActive__iT_P6')
    }

    const hideHamMenu = async() => {
        const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
        hamMenu.classList.remove('Home_hamMenuDropdownActive__iT_P6')
    }

    const reload = async() => {
        location.reload();
    }

    const bList = brownList.brownList;
    const gList = goldList.goldList;
    const pList = platinumList.platinumList;

    const showBlistConnectMsg = async() => {
        const arr: string[] = bList;
        const arr1: string[] = gList;
        const arr2: string[] = pList;

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

        const noBlistMsg = (document.getElementById('noBlistMsg') as HTMLElement);
        const yesBlistMsg = (document.getElementById('yesBlistMsg') as HTMLElement);
        const submitForm = (document.getElementById('newForm') as HTMLElement);

        const blistMsgTitle = (document.getElementById('blistMsgTitle') as HTMLElement);
        const blistMsgPar = (document.getElementById('blistMsgPar') as HTMLElement);

        // noBlistMsg.classList.remove('Home_displayNone__dFRW_');

        // if (brownHit !== undefined || goldHit !== undefined || platHit !== undefined){
        //     noBlistMsg.classList.add('Home_displayNone__dFRW_');
        // } else if (brownHit == undefined && goldHit == undefined && platHit == undefined){
        //     yesBlistMsg.classList.add('Home_displayNone__dFRW_');
        //     submitForm.classList.remove('Home_newForm__ijaKq');
        //     submitForm.classList.add('Home_newFormDisabled__wK_Qj');
        // } else {};

        // if (address == undefined) {
        //     yesBlistMsg.classList.add('Home_displayNone__dFRW_');
        // } else if (brownHit !== undefined) {
        //     yesBlistMsg.classList.remove('Home_displayNone__dFRW_');
        //     noBlistMsg.classList.add('Home_displayNone__dFRW_');
        //     submitForm.classList.remove('Home_newForm__ijaKq');
        //     submitForm.classList.add('Home_newFormDisabled__wK_Qj');
        // } else {};

        // if on brownlist, goldlist, or platlist...
        if (brownHit !== undefined || goldHit !== undefined || platHit !== undefined){
            blistMsgTitle.innerHTML = "The connected address IS currently on the Brownlist.";
            blistMsgPar.innerHTML = "The form below has been disabled. This form is for MFs NOT on the Brownlist that would like to request placement."
            // noBlistMsg.classList.add('Home_displayNone__dFRW_');
            // yesBlistMsg.classList.remove('Home_displayNone__dFRW_');
            submitForm.classList.remove('Home_newForm__ijaKq');
            submitForm.classList.add('Home_newFormDisabled__wK_Qj');
        } else {
            // noBlistMsg.classList.remove('Home_displayNone__dFRW_');
        };
    }

    showBlistConnectMsg();

    // window.onbeforeunload = function(e) {
    //     const noBlistMsg = (document.getElementById('noBlistMsg') as HTMLElement);
    //     const yesBlistMsg = (document.getElementById('yesBlistMsg') as HTMLElement);
    //     yesBlistMsg.classList.remove('Home_displayNone__dFRW_');
    //     noBlistMsg.classList.remove('Home_displayNone__dFRW_');
    // }



  return (
    <>
    <div className={styles.container}>


        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        <div className={styles.mainNav}>
          <div className={styles.pageLinkCont} onClick={reload}>
            <Link href="">
              <a><h3 className={styles.pageLinkBrown}>Submit for BL</h3></a>
            </Link>
          </div>
          <div className={styles.pageLinkCont}>
            <Link href="/swirled-cup">
              <a><h3 className={styles.pageLink}>Swirled Cup</h3></a>
            </Link>
          </div>
          <div className={styles.pageLinkCont}>
            <Link href="/">
                <a><h3 className={styles.pageLink}>My Trophies</h3></a>
            </Link>
          </div>
          <div className={styles.pageLinkCont}>
            <Link href="/nonsense">
              <a><h3 className={styles.pageLink}>BS</h3></a>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="/">
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
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://tmb.imgix.net/twitter-black-white-circle.png/' alt='Black Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo}>
                <Link href="/">
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
            <div className={styles.hamLogo}>
                <Link href="/">
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
                  <li className={styles.hamLinkBrownLI} onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLinkBrown}>Submit for BL</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/swirled-cup">
                          <a><h3 className={styles.hamLink}>Swirled Cup</h3></a>
                      </Link>
                  </li>
                  <li className={styles.hamLink}>
                      <Link href="/">
                          <a><h3 className={styles.hamLink}>My Trophies</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/nonsense">
                          <a><h3 className={styles.hamLink}>BS</h3></a>
                      </Link>
                  </li>
                </ul>
            </div>
        </div>

        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}


        <div className={styles.formTitleCont}>
            <h1 className={styles.formTitle}>Brownlist Submission Form</h1>
        </div>

        <div className={styles.formCont}>
            <div id="noBlistMsg">
                <h1 id="blistMsgTitle">The connected address is not on The Brownlist.</h1>
                <p id="blistMsgPar">Fill out the form below to request placement, though interviews are not guaranteed. If you really want a spot, don&#39;t wait for us to reach out, make memes, show up in the comments, attend Karaoke nights ... just do whatever it takes to<br></br>MAKE YOURSELF KNOWN.</p>
            </div>
            {/* <div id="yesBlistMsg">
                <h1>The connected address IS currently on the Brownlist.</h1>
                <p>The form below has been disabled. This form is strictly for MFs NOT on the Brownlist that would like to request placement. Instead, click here to view your trophies and verify your status:</p>
                <button className={styles.myTrophiesBlist}><Link href="/"><a>My Trophies</a></Link></button>
            </div> */}

          <iframe id='newForm' className={styles.newForm} title="Jotform Embed" src={jotFormURL}></iframe>
        </div>

    </div>
    </>
  );
};

export default bmaCup;
