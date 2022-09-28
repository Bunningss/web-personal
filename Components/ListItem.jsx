import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ListItem.module.css';

const ListItem = ({ item }) => {
  return (
    <>
      {
        item.target ? 
          <a href={item.target} target="_blank" rel='noreferrer'>
              <li className={styles.listItem}>
                  <div className={styles.listItem_image}>
                    <Image src={item.icon} alt=''/>
                  </div>
              </li>
          </a> :
          <Link href={item.href ? item.href : ''}>
              <li className={styles.listItem}>
                  <div className={styles.listItem_image}>
                    <Image src={item.icon} alt=''/>
                  </div>
              </li>
          </Link>
      }
    </>
  )
}

export default ListItem