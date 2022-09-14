import Head from 'next/head';
import { homeData } from '../static';
import Section from '../Components/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tayef Mahmud - Developer and Designer</title>
        <meta name="description" content="Full Stack Website Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`page default`}>
          <Section data={homeData}/>
      </div>
    </div>
  )
}
