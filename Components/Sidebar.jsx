import styles from '../styles/Sidebar.module.css';
import ListItem from './ListItem';
import { navbar } from '../static';
import Image from 'next/image';
import facebook from '../public/assets/icons/facebook-cre.png';
import upwork from '../public/assets/icons/upwork.png';
import fiverr from '../public/assets/icons/fiverr.png';

const Sidebar = ({ active, setActive }) => {
  return (
    <div className={active ? `${styles.sidebar} ${styles.active} animate` : `${styles.sidebar} animate`} onClick={() => setActive(!active)}>
        <div className={styles.wrapper}>
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
  )
}

export default Sidebar