import styles from '../styles/About.module.css';
import Section from '../Components/Section';
import { aboutData } from '../static';

const about = () => {
  return (
      <div className={`page default`}>
          <Section data={aboutData}/>
      </div>
  )
}

export default about