import Link from 'next/link';
import styles from '../styles/SecondaryButton.module.css';

const SecondaryButton = ({ info }) => {
  return (
    <Link href={info.href}>
      <button className={styles.btn_secondary}>{info.text}</button>
    </Link>
  )
}

export default SecondaryButton