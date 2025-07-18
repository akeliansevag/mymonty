import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import SectionSeven from './homepage/SectionSeven';
import HomeBanner from './homepage/HomeBanner';
import Head from 'next/head';
import { websiteName } from './config';

export const metadata = {
  title: 'YOUR SUPER DIGITAL WALLET' + websiteName,
  description: 'Experience seamless digital banking in Lebanon with MyMonty. Manage e-wallets, send money, apply for loans & more, all from your phone. Download the app today!',
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
