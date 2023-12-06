import Banner from './components/Banner';
import styles from './page.module.css';
import { websiteName } from '@/app/config';
import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import SectionSeven from './homepage/SectionSeven';
import girl from '@/public/home-banner-2.webp';
import girlMobile from '@/public/home-banner-2.webp';

const data = {
  title: 'MyMonty Better Than a Bank.',
  subtitle: '',
  desc: 'Explore our innovative ways to manage your finances.',
  image: {
    inGrid: true,
    layout: 'full',
    url: girl,
    urlMobile: girlMobile,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download app'
    }
  }
}

export const metadata = {
  title: 'MyMonty',
  description: 'MyMonty',
}


export default function Home() {
  return (
    <main>
      <Banner data={data} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  )
}
