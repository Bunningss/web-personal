import styles from '../../styles/Work.module.css';
import Letters from '../../Components/Letters';
import Image from 'next/image';
import demo from '../../public/assets/kb.jpg';
import { getheight } from '../../static';

const Work = () => {
  let h = getheight();
  let text = "Days app"
  return (
    <div className={`default page`}>
      <div className={`section-default ${styles.wrapper}`}>
        <Letters text={text}/>
        <div className={h > 10 ? `${styles.cover_image} ${styles.slide}` : `${styles.cover_image}`}>
          <Image src={demo} alt='' layout='fill' objectFit='cover' loading="lazy"/>
        </div>
        <p className={`text-regular-small ${styles.text}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut hic corporis voluptatum rerum vel dolorem non dignissimos laudantium vero dolores magni totam quae, delectus, fugiat in nostrum consectetur harum! Temporibus in laudantium quaerat fugiat quam praesentium vitae unde illum vero ex corporis tempora ad iusto sunt beatae, alias ea?
        </p>
      </div>
    </div>
  )
}

export default Work