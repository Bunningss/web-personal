import styles from '../styles/Navbar.module.css';
import ListItem from './ListItem';
import { external, navbar } from '../static';
import logo from '../public/assets/icons/logo (2).png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ active, setActive }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.col}>
        <Link href='/'>
          <div className={styles.logo_wrapper}>
            <Image src={logo}/>
          </div>
        </Link>
      </div>

      <div className={styles.col}>
        <ul className={styles.navList}>
          {
            navbar.map((item, indx) => (
              <ListItem item={item} key={indx}/>
            ))
          }
        </ul>
      </div>

      <div className={styles.col}>
        <ul className={`${styles.navList} ${styles.opacity}`}>
          {
            external.map((item, indx) => (
              <ListItem item={item} key={indx}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar