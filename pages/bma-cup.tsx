// import { useAddress, useMetamask, useCoinbaseWallet, useWalletConnect } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import pointTotals from "../public/bmaCup.json"



const usTotal = pointTotals.pointTotals.US;


const bmaCup: NextPage = () => {
  return (
    <>
    <div className={styles.container}>


        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */}
        <div className={styles.mainNav}>
            <div className={styles.pageLinks}>
            <Link href="/nonsense">
                <a><h3 className={styles.pageLink}>BS</h3></a>
            </Link>
            </div>
            <div className={styles.pageLinks}>
            <Link href="">
                <a><h3 className={styles.pageLink}>BMA Cup</h3></a>
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


        <div className={styles.cupTitle}>BMA Cup</div>


        <div className={styles.listsCont}>

            <div className={styles.winListCont}>
                <ol className={styles.winListOL}>
                    <li>United States:<span className={styles.usersTotal}>{usTotal}</span></li>
                    <li>Nigeria</li>
                    <li>United Kingdom</li>
                    <li>Canada</li>
                    <li>Indonesia</li>
                </ol>
            </div>

            <div className={styles.loseListCont}>
                <ol className={styles.loseListOL}>
                    <li>Mexico</li>
                    <li>Australia</li>
                    <li>Italy</li>
                    <li>Germany</li>
                    <li>India</li>
                </ol>
            </div>
            
        </div>


    </div>
    </>
  );
};

export default bmaCup;
