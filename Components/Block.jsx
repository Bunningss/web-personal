import Link from 'next/link';
import styles from '../styles/Block.module.css';

const Block = () => {
  return (
    <Link href='/works/:id'>
        <div className={styles.block}>
                <h2 className={`${styles.title} header`}>Pocobun</h2>
                <p className={`${styles.desc} text-regular-small`}>
                    Keep track of each special moment.
                </p>
        </div>
    </Link>
  )
}

export default Block