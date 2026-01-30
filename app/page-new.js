import SectionTwo from './homepage-new/SectionTwo';
import SectionThree from './homepage-new/SectionThree';
import SectionFour from './homepage-new/SectionFour';
import SectionFive from './homepage-new/SectionFive';
import SectionSix from './homepage-new/SectionSix';
import SectionSeven from './homepage-new/SectionSeven';
import SectionEight from './homepage-new/SectionEight';
import HomeBanner from './homepage-new/HomeBanner';
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
      <SectionThree />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </main>
  )
}
