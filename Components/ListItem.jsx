import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ListItem.module.css';

const ListItem = ({ item }) => {
  return (
    <Link href={item.href ? item.href : ''} target={item.target && 'blank'}>
        <li className={styles.listItem}>
          {
            item.icon ?
            <div className={styles.listItem_image}>
              <Image src={item.icon} alt=''/>
            </div> :
            <p className={styles.listItem_name}>{item.name}</p>
          }
        </li>
    </Link>
  )
}

export default ListItem