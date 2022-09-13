import Head from 'next/head';
import styles from '../styles/Index.module.css';
import { getheight } from '../static';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import TextArea from '../Components/TextArea';
import { homeData } from '../static';

export default function Home() {
  let ref;
  const homeRef = useRef();
  const aboutRef = useRef();
  const worksRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  let router = useRouter().asPath?.split('/')[1]?.split('#')[1];
  useEffect(() => {
    if (router) {
      router === 'home' ? ref = homeRef : router === 'about' ? ref = aboutRef : router === 'skills' ? ref = skillsRef : router === 'works' ? ref = worksRef : router === 'contact' ? ref = contactRef : null
      window.scrollTo({
        top: ref?.current?.offsetTop - 90,
        behavior: "smooth",
      });
    };
  }, [router]);
  const h = getheight();
  return (
    <div>
      <Head>
        <title>Tayef Mahmud - Developer and Designer</title>
        <meta name="description" content="Full Stack Website Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
                                                                          {/* Home */}
      <div ref={homeRef} className={h > 10 ? `default ${styles.home} ${styles.shrink} section` : `default ${styles.home} section`}>
        <div className={`section-default ${styles.wrapper}`}>
          <div className={styles.col}>
            <TextArea data={homeData}/>
          </div>
          <div className={styles.col}></div>
        </div>
      </div>
                                                                          {/* Skills */}
      <div ref={skillsRef} className={`${styles.skills} default section`}>skills</div>
                                                                          {/* Works */}
      <div ref={worksRef} className={`${styles.works} default section`}>works</div>
                                                                          {/* Contact */}
      <div ref={contactRef} className={`${styles.contact} default section`}>contact</div>
    </div>
  )
}
