import styles from '../styles/Works.module.css';
import Head from 'next/head';
import Block from '../Components/Block';

const works = () => {
  return (
    <div>
      <Head>
        <title>Tayef Mahmud - Previous Works</title>
        <meta name="description" content="Full Stack Website Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`page default ${styles.works}`}>
        <div className={`section-default ${styles.wrapper}`}>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
        </div>
      </div>
    </div>
  )
}

export default works