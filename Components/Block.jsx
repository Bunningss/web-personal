import Link from 'next/link';
import styles from '../styles/Block.module.css';

const Block = ({ item }) => {
  return (
    <Link href={`/works/${item._id}`}>
        <div className={styles.block}>
                <h2 className={`${styles.title} header`}>{item.title}</h2>
                <p className={`${styles.desc} text-regular-small`}>{item.tagline}</p>
        </div>
    </Link>
  )
}

export default Block