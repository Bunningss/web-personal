import Letters from '../Components/Letters';
import styles from '../styles/TextArea.module.css';
import { getheight } from '../static';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const TextArea = ({ data }) => {
  const h = getheight();
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