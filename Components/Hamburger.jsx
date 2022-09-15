import styles from '../styles/Hamburger.module.css';

const Hamburger = ({ active, setActive }) => {
  return (
    <div className={active ? `${styles.hamburger} ${styles.active}` : `${styles.hamburger}`} onClick={() => setActive(!active)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
    </div>
  )
}

export default Hamburger