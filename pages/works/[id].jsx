import styles from '../../styles/Work.module.css';
import Letters from '../../Components/Letters';
import Image from 'next/image';
import { getheight } from '../../static';
import { publicCall } from '../../reqMethod';

const Work = ({ project }) => {
  let h = getheight();
  return (
    <div className={`default page`}>
      <div className={`section-default ${styles.wrapper}`}>
        <Letters text={project.title}/>
        <div className={h > 400 ? `${styles.cover_image} ${styles.slide}` : `${styles.cover_image}`}>
          <Image src={project.image} alt={project.title} layout='fill' objectFit='cover'/>
        </div>
        <p className={`text-regular-small ${styles.text}`}>{project.desc}</p>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await publicCall.get(`/project/${params.id}`);
  return {
    props: {
      project: res.data
    }
  }
}

export default Work