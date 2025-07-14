import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import SectionSeven from './homepage/SectionSeven';
import HomeBanner from './homepage/HomeBanner';
import Head from 'next/head';

export const metadata = {
  title: 'YOUR SUPER DIGITAL WALLET',
  description: 'Explore innovative to manage your finances with My Monty, your super digital wallet. Get the app now to enjoy a full mobile banking experience!',
}


export default function Home() {
  return (
    <main>
      <Head>
        <link rel="canonical" href="https://mymonty.com.lb/" />
      </Head>
      <HomeBanner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </main>
  )
}
