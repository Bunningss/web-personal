import styles from '../styles/Works.module.css';
import Head from 'next/head';
import Block from '../Components/Block';
import { publicCall } from '../reqMethod';
import axios from 'axios';

const works = ({ projectList }) => {
  return (
    <div>
      <Head>
        <title>Tayef Mahmud - Previous Works</title>
        <meta name="description" content="Full Stack Website Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`page default ${styles.works}`}>
        <div className={`section-default ${styles.wrapper}`}>
          {
            projectList.map((project, indx) => (
              <Block item={project} key={indx}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await publicCall.get('/project');
  return {
    props: {
      projectList: res.data
    }
  }
}

export default works