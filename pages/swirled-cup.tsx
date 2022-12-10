import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";



const countries = ["USA","Indonesia","Nigeria","UK","Canada","Germany","Australia","India","Mexico","Netherlands","Philippines","France","Italy","Singapore","Turkey","Argentina","New Zealand","Russia","Austria","China","Colombia","Spain","Greece","Morocco","Pakistan","Switzerland","Belgium","Belarus","Hungary","Vietnam","Denmark","Estonia","Guatemala","Hong Kong","Malaysia","Papua New Guinea","Portugal","Syria","Algeria","Bahrain","Brazil","Cameroon","Chile","Croatia","Czechia","El Salvador","Georgia","Iran","Japan","Nepal","Norway","Qatar","Senegal","Seychelles","South Africa","South Korea","Sweden"]
const pointTotals = [342,313,144,44,34,21,20,19,18,17,12,9,9,9,8,7,7,7,6,6,6,6,5,5,5,5,4,3,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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


        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        <div className={styles.mainNav}>

        <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src='https://ik.imagekit.io/ts6bfcsg8/all-black-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455908' alt='Black BMA logo' width={90} height={90} />
              </a>
            </Link>
          </div>

          <div className={styles.pageLinksCont}>
            <div className={styles.pageLinkCont}>
              <Link href="/nonsense">
                <a><h3 className={styles.pageLink}>BS</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont} onClick={reload}>
              <Link href="">
                <a><h3 className={styles.pageLinkBlue}>Swirled Cup</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="/brownlist-submit">
                <a><h3 className={styles.pageLink}>Submit for BL</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="/">
                  <a><h3 className={styles.pageLink}>My Trophies</h3></a>
              </Link>
            </div>
          </div>

          <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
              <a target="_blank">
                <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-black-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456279' alt='Black Twitter logo' width={45} height={45} />
              </a>
            </Link>
          </div>

        </div>

        <div className={styles.hamNav}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-black-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456279' alt='Black Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo}>
                <Link href="/">
                    <a>
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/all-black-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455908' alt='Black BMA logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamMenu} onClick={showHamMenu}>
                <Link href="">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/hamburger-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518138' alt='Black Twitter logo' width={40} height={40} />
                </Link>
            </div>
        </div>

        <div id="hamMenu" className={styles.hamMenuDropdown}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-white-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456050' alt='Black Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo}>
                <Link href="/">
                    <a>
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/all-white-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455900' alt='White BMA logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.closeBtn} onClick={hideHamMenu}>
                <Link href="">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/close-btn-f5f5f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518301' alt='X button' width={45} height={45} />
                </Link>
            </div>
            <div className={styles.hamLinks}>
                <ul className={styles.hamLinksUL}>
                    <li className={styles.hamLink}>
                      <Link href="/">
                          <a><h3 className={styles.hamLink}>My Trophies</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/brownlist-submit">
                          <a><h3 className={styles.hamLink}>Submit for BL</h3></a>
                      </Link>
                  </li>
                  <li className={styles.hamLinkBlueLI} onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLinkBlue}>Swirled Cup</h3></a>
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


        <div className={styles.cupTitleCont}>
            <h1 className={styles.cupTitle}>Swirled Cup Leaderboard</h1>
        </div>


        <div className={styles.listsCont}>

            <div className={styles.winListCont}>
                <ol className={styles.winListOL}>
                    <li className={styles.worldLi}>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/world.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511156' alt='World Icon' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> World</span><span className={styles.usersTotal}>{totalsSum}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/united-states.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511351' alt='1st Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[0]}</span><span className={styles.usersTotal}>{pointTotals[0]}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/indonesia.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634510720' alt='2nd Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[1]}</span><span className={styles.usersTotal}>{pointTotals[1]}</span></li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/nigeria-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511028' alt='3rd Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[2]}</span><span className={styles.usersTotal}>{pointTotals[2]}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/united-kingdom-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511212' alt='4th Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[3]}</span><span className={styles.usersTotal}>{pointTotals[3]}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/canada.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511072' alt='5th Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[4]}</span><span className={styles.usersTotal}>{pointTotals[4]}</span>
                    </li>
                </ol>
            </div>

            <div className={styles.loseListSect}>
                <div className={styles.loseListCont}>
                    <h1>The Underdogs</h1>
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
                        <li>44. {countries[43]}<span className={styles.usersTotal}>{pointTotals[43]}</span></li>
                        <li>45. {countries[44]}<span className={styles.usersTotal}>{pointTotals[44]}</span></li>
                        <li>46. {countries[45]}<span className={styles.usersTotal}>{pointTotals[45]}</span></li>
                        <li>47. {countries[46]}<span className={styles.usersTotal}>{pointTotals[46]}</span></li>
                        <li>48. {countries[47]}<span className={styles.usersTotal}>{pointTotals[47]}</span></li>
                        <li>49. {countries[48]}<span className={styles.usersTotal}>{pointTotals[48]}</span></li>
                        <li>50. {countries[49]}<span className={styles.usersTotal}>{pointTotals[49]}</span></li>
                        <li>51. {countries[50]}<span className={styles.usersTotal}>{pointTotals[50]}</span></li>
                        <li>52. {countries[51]}<span className={styles.usersTotal}>{pointTotals[51]}</span></li>
                        <li>53. {countries[52]}<span className={styles.usersTotal}>{pointTotals[52]}</span></li>
                        <li>54. {countries[53]}<span className={styles.usersTotal}>{pointTotals[53]}</span></li>
                        <li>55. {countries[54]}<span className={styles.usersTotal}>{pointTotals[54]}</span></li>
                        <li>56. {countries[55]}<span className={styles.usersTotal}>{pointTotals[55]}</span></li>
                        <li>57. {countries[56]}<span className={styles.usersTotal}>{pointTotals[56]}</span></li>
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
