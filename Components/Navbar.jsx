import styles from '../styles/Navbar.module.css';
import ListItem from './ListItem';
import { getheight, navbar } from '../static';
import Image from 'next/image';
import logo from '../public/assets/logo_cartoon_02.png';
import facebook from '../public/assets/icons/facebook-cre.png';
import upwork from '../public/assets/icons/upwork.png';
import fiverr from '../public/assets/icons/fiverr.png';
import Link from 'next/link';

const Navbar = () => {
  const height = getheight();
  return (
    <div className={height > 10 ? `${styles.navbar} ${styles.shrink}` : styles.navbar}>
      <div className={`${styles.wrapper} section-default`}>
        <div className={`${styles.col} ${styles.col_1}`}>
          <Link href='/'>
            <div className={height > 10 ? `${styles.logo_wrapper} ${styles.shrunk}` : `${styles.logo_wrapper}`}>
              <Image src={logo} alt="Logo" layout='fill'/>
            </div>
          </Link>
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
              <a className={styles.anchor} href="https://www.upwork.com/freelancers/~01c2e5116b1ee78ab7" target="_blank" rel="noopener noreferrer">
                <Image height='30px' width='30px' className={styles.icon} src={upwork}></Image>
              </a>
            </li>
            <li className={styles.socialsList}>
              <a className={styles.anchor} href="https://www.fiverr.com/tayef47?up_rollout=true" target="_blank" rel="noopener noreferrer">
                <Image height='30px' width='30px' className={styles.icon} src={fiverr}></Image>
              </a>
            </li>
            <li className={styles.socialsList}>
              <a className={styles.anchor} href="https://www.facebook.com/ovi.mahmud83/" target="_blank" rel="noopener noreferrer">
                <Image height='30px' width='30px' className={styles.icon} src={facebook}></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar