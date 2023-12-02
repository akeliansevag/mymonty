import Banner from './components/Banner';
import styles from './page.module.css';
import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import SectionSeven from './homepage/SectionSeven';
import girl from '@/public/personal/girl.png';


const data = {
  title: 'MyMonty Better Than a Bank.',
  subtitle: '',
  desc: 'Explore our innovative ways to manage your finances.',
  image:{
    layout: 'full',
    url: girl,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download app'
    }
  }
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
      <SectionSeven />
    </main>
  )
}
