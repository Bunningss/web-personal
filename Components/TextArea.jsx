import Letters from '../Components/Letters';
import styles from '../styles/TextArea.module.css';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const TextArea = ({ data }) => {
  return (
    <div className={styles.text_area}>
        <Letters text={data.text}/>
        <p className={styles.text}>{data.about}</p>
        <div className={styles.btns}>
          <PrimaryButton info={data.primaryBtn}/>
          {
            data.secondaryBtn && <SecondaryButton info={data.secondaryBtn}/>
          }
        </div>
    </div>
  )
}

export default TextArea