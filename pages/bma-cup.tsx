// import { useAddress, useMetamask, useCoinbaseWallet, useWalletConnect } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";



const countries = ["U.S.A.","Nigeria","U.K.","Indonesia","Canada","Germany","Australia","Mexico","Netherlands","India","Philippines","Italy","Argentina","China","Colombia","France","Morocco","New Zealand","Switzerland","Turkey","Austria","Belgium","Greece","Pakistan","Spain","Denmark","Estonia","Guatemala","Malaysia","Papua New Guinea","Portugal","Russia","Singapore","Belarus","Cameroon","Chile","El Salvador","Hong Kong","Iran","Nepal","South Africa","South Korea","Sweden"]
const pointTotals = [280,94,43,31,29,17,16,15,14,11,11,9,6,6,5,5,5,5,5,5,4,4,4,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1]
const totalsSum = pointTotals.reduce((partialSum, a) => partialSum + a, 0);


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


const bmaCup: NextPage = () => {
  return (
    <>
    <div className={styles.container}>


        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */}
        <div className={styles.mainNav}>
            <div className={styles.pageLinks}>
            <Link href="/nonsense">
                <a><h3 className={styles.pageLink}>Nonsense</h3></a>
            </Link>
            </div>
            <div className={styles.pageLinks}>
            <Link href="">
                <a><h3 className={styles.pageLink}>Swirled Cup</h3></a>
            </Link>
            </div>
            <div className={styles.logo}>
            <Link href="/">
                <a>
                <Image src='https://tmb.imgix.net/black-logo.png/' alt='Black BMA logo' width={90} height={90} />
                </a>
            </Link>
            </div>
            <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                <a className={styles.twitLogoCont} target="_blank">
                <Image src='https://tmb.imgix.net/twitter-black-white-circle.png/' alt='Black Twitter logo' width={45} height={45} />
                </a>
            </Link>
            </div>
        </div>

        <div className={styles.hamNav}>
            {/* <div className={styles.pageLinks}>
            <Link href="/nonsense">
                <a><h3 className={styles.pageLink}>Nonsense</h3></a>
            </Link>
            </div>
            <div className={styles.pageLinks}>
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
            <div className={styles.closeBtn} onClick={hideHamMenu}>
                <Link href="">
                    <Image src='https://tmb.imgix.net/close-btn-f5f5f5.png/' alt='X button' width={45} height={45} />
                </Link>
            </div>
            <div className={styles.hamLinks}>
                <div className={styles.hamLogo}>
                    <Link href="/" target="_blank">
                        <a>
                        <Image src='https://tmb.imgix.net/bma-f5f5f5-trans.png/' alt='White BMA logo' width={60} height={60} />
                        </a>
                    </Link>
                </div>
                <ul className={styles.hamLinksUL}>
                    <li>
                        <Link href="/nonsense">
                            <a><h3 className={styles.hamLink}>Nonsense</h3></a>
                        </Link>
                    </li>
                    <li onClick={reload}>
                        <Link href="">
                            <a><h3 className={styles.hamLink}>Swirled Cup</h3></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a><h3 className={styles.hamLink}>Shiny Shit</h3></a>
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


        <div className={styles.cupTitleCont}>
            <h1 className={styles.cupTitle}>Swirled Cup Leaderboard</h1>
        </div>


        <div className={styles.listsCont}>

            {/* <div className={styles.totalSums}>
                <h1>Current Point Total: {totalsSum}</h1>
                <p className={styles.pointDef}>1 point = 1 unique user from that country</p>
            </div> */}

            <div className={styles.winListCont}>
                {/* <h1>Leaders</h1> */}
                <ol className={styles.winListOL}>
                    <li className={styles.worldLi}>
                        <Image src='https://tmb.imgix.net/world.png/' alt='1st Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> World</span><span className={styles.usersTotal}>{totalsSum}</span>
                    </li>
                    <li>
                        <Image src='https://tmb.imgix.net/united-states.png/' alt='1st Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[0]}</span><span className={styles.usersTotal}>{pointTotals[0]}</span>
                    </li>
                    <li>
                        <Image src='https://tmb.imgix.net/nigeria-1.png/' alt='2nd Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[1]}</span><span className={styles.usersTotal}>{pointTotals[1]}</span></li>
                    <li>
                        <Image src='https://tmb.imgix.net/united-kingdom-1.png/' alt='3rd Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[2]}</span><span className={styles.usersTotal}>{pointTotals[2]}</span>
                    </li>
                    <li>
                        <Image src='https://tmb.imgix.net/indonesia.png/' alt='4th Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[3]}</span><span className={styles.usersTotal}>{pointTotals[3]}</span>
                    </li>
                    <li>
                        <Image src='https://tmb.imgix.net/canada.png/' alt='5th Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[4]}</span><span className={styles.usersTotal}>{pointTotals[4]}</span>

                    </li>
                </ol>
            </div>

            <div className={styles.loseListSect}>
                <div className={styles.loseListCont}>
                    <h1>Underdogs</h1>
                    <ol start={6} className={styles.loseListOL}>
                        <li>6. {countries[5]}<span className={styles.usersTotal}>{pointTotals[5]}</span></li>
                        <li>7. {countries[6]}<span className={styles.usersTotal}>{pointTotals[6]}</span></li>
                        <li>8. {countries[7]}<span className={styles.usersTotal}>{pointTotals[7]}</span></li>
                        <li>9. {countries[8]}<span className={styles.usersTotal}>{pointTotals[8]}</span></li>
                        <li>10. {countries[9]}<span className={styles.usersTotal}>{pointTotals[9]}</span></li>
                        <li>11. {countries[10]}<span className={styles.usersTotal}>{pointTotals[10]}</span></li>
                        <li>12. {countries[11]}<span className={styles.usersTotal}>{pointTotals[11]}</span></li>
                        <li>13. {countries[12]}<span className={styles.usersTotal}>{pointTotals[12]}</span></li>
                        <li>14. {countries[13]}<span className={styles.usersTotal}>{pointTotals[13]}</span></li>
                        <li>15. {countries[14]}<span className={styles.usersTotal}>{pointTotals[14]}</span></li>
                        <li>16. {countries[15]}<span className={styles.usersTotal}>{pointTotals[15]}</span></li>
                        <li>17. {countries[16]}<span className={styles.usersTotal}>{pointTotals[16]}</span></li>
                        <li>18. {countries[17]}<span className={styles.usersTotal}>{pointTotals[17]}</span></li>
                        <li>19. {countries[18]}<span className={styles.usersTotal}>{pointTotals[18]}</span></li>
                        <li>20. {countries[19]}<span className={styles.usersTotal}>{pointTotals[19]}</span></li>
                        <li>21. {countries[20]}<span className={styles.usersTotal}>{pointTotals[20]}</span></li>
                        <li>22. {countries[21]}<span className={styles.usersTotal}>{pointTotals[21]}</span></li>
                        <li>23. {countries[22]}<span className={styles.usersTotal}>{pointTotals[22]}</span></li>
                        <li>24. {countries[23]}<span className={styles.usersTotal}>{pointTotals[23]}</span></li>
                        <li>25. {countries[24]}<span className={styles.usersTotal}>{pointTotals[24]}</span></li>
                        <li>26. {countries[25]}<span className={styles.usersTotal}>{pointTotals[25]}</span></li>
                        <li>27. {countries[26]}<span className={styles.usersTotal}>{pointTotals[26]}</span></li>
                        <li>28. {countries[27]}<span className={styles.usersTotal}>{pointTotals[27]}</span></li>
                        <li>29. {countries[28]}<span className={styles.usersTotal}>{pointTotals[28]}</span></li>
                        <li>30. {countries[29]}<span className={styles.usersTotal}>{pointTotals[29]}</span></li>
                        <li>31. {countries[30]}<span className={styles.usersTotal}>{pointTotals[30]}</span></li>
                        <li>32. {countries[31]}<span className={styles.usersTotal}>{pointTotals[31]}</span></li>
                        <li>33. {countries[32]}<span className={styles.usersTotal}>{pointTotals[32]}</span></li>
                        <li>34. {countries[33]}<span className={styles.usersTotal}>{pointTotals[33]}</span></li>
                        <li>35. {countries[34]}<span className={styles.usersTotal}>{pointTotals[34]}</span></li>
                        <li>36. {countries[35]}<span className={styles.usersTotal}>{pointTotals[35]}</span></li>
                        <li>37. {countries[36]}<span className={styles.usersTotal}>{pointTotals[36]}</span></li>
                        <li>38. {countries[37]}<span className={styles.usersTotal}>{pointTotals[37]}</span></li>
                        <li>39. {countries[38]}<span className={styles.usersTotal}>{pointTotals[38]}</span></li>
                        <li>40. {countries[39]}<span className={styles.usersTotal}>{pointTotals[39]}</span></li>
                        <li>41. {countries[40]}<span className={styles.usersTotal}>{pointTotals[40]}</span></li>
                        <li>42. {countries[41]}<span className={styles.usersTotal}>{pointTotals[41]}</span></li>
                        <li>43. {countries[42]}<span className={styles.usersTotal}>{pointTotals[42]}</span></li>
                        {/* <li>44. {countries[43]}<span className={styles.usersTotal}>{pointTotals[43]}</span></li> */}
                    </ol>
                </div>
            </div>

            <div className={styles.cupInstruct}>
                <p className={styles.pointDef}>Each point represents a unique user of this website from that part of the world.<br></br>Point distribution will end on December 31st, 2022.</p>
            </div>

        </div>


    </div>
    </>
  );
};

export default bmaCup;
