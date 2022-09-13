import Head from 'next/head';
import { section } from '../static';
import Section from '../Components/Section';

export default function Home() {
  // let ref;
  // const homeRef = useRef();
  // const aboutRef = useRef();
  // const worksRef = useRef();
  // const skillsRef = useRef();
  // const contactRef = useRef();
  // let router = useRouter().asPath?.split('/')[1]?.split('#')[1];
  // useEffect(() => {
  //   if (router) {
  //     router === 'home' ? ref = homeRef : router === 'about' ? ref = aboutRef : router === 'skills' ? ref = skillsRef : router === 'works' ? ref = worksRef : router === 'contact' ? ref = contactRef : null
  //     window.scrollTo({
  //       top: ref?.current?.offsetTop - 90,
  //       behavior: "smooth",
  //     });
  //   };
  // }, [router]);
  return (
    <div>
      <Head>
        <title>Tayef Mahmud - Developer and Designer</title>
        <meta name="description" content="Full Stack Website Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main */}
      <div className={`section`}>
      {
        section.map((sec, indx) => (
          <Section key={indx} data={sec}/>
        ))
      }
      </div>
    </div>
  )
}
