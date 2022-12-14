import styles from '../styles/Section.module.css';
import TextArea from './TextArea';
import { getheight } from '../static';
import Image from 'next/image';

const Section = ({ data }) => {
  let h = getheight();
  return (
      <div id={data.id} className={h > 10 ? `${styles.section} default` : `${styles.section} default`}>
        <div className={`section-default ${styles.wrapper}`}>
          <div className={styles.col}>
            <TextArea data={data.data}/>
          </div>
          <div className={`${styles.col} ${styles.col_2}`}>
            {
              data.image ? <Image loading='lazy' src={data.image}/> :
              <p>{data.text}</p>
            }
          </div>
        </div>
      </div>
  )
}

export default Section