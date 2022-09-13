import styles from '../styles/Letters.module.css';
import Letter from './Letter';

const Letters = ({ text }) => {
  return (
    <div className={styles.letters}>
      {
        text.split('').map((letter, index) => (
          <Letter letter={letter} key={index}/>
        ))
      }
    </div>
  )
}

export default Letters