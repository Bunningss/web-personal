import styles from '../styles/Navbar.module.css';
import ListItem from './ListItem';
import { getheight, navbar } from '../static';
import Image from 'next/image';
import facebook from '../assets/facebook-cre.png';
import discord from '../assets/discord-cre.png';
import insta from '../assets/instagram-cre.png';

const Navbar = () => {
  const height = getheight();
  return (
    <div className={height > 10 ? `${styles.navbar} ${styles.shrink}` : styles.navbar}>
      <div className={`${styles.wrapper} section-default`}>
        <div className={`${styles.col} ${styles.col_1}`}>
          mahmud
        </div>
        <div className={`${styles.col} ${styles.col_2}`}>
          <ul className={styles.list}>
            {
              navbar.map((item, indx) => (
                <ListItem key={indx} item={item}/>
              ))
            }
          </ul>
          <ul className={styles.socials}>
            <li className={styles.socialsList}>
              <a className={styles.anchor} href="http://" target="_blank" rel="noopener noreferrer">
                <Image height='30px' width='30px' className={styles.icon} src={discord}></Image>
              </a>
            </li>
            <li className={styles.socialsList}>
              <a className={styles.anchor} href="http://" target="_blank" rel="noopener noreferrer">
                <Image height='30px' width='30px' className={styles.icon} src={facebook}></Image>
              </a>
            </li>
            <li className={styles.socialsList}>
              <a className={styles.anchor} href="http://" target="_blank" rel="noopener noreferrer">
                <Image height='30px' width='30px' className={styles.icon} src={insta}></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar