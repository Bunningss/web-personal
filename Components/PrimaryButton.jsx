import Link from 'next/link';
import styles from '../styles/PrimaryButton.module.css';

const PrimaryButton = ({ info }) => {
  return (
    <Link href={info.href}>
      <button className={styles.btn_primary}>{info.text}</button>
    </Link>
  )
}

export default PrimaryButton