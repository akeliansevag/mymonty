import Banner from './components/homepage/Banner';
import styles from './page.module.css';
import SectionTwo from './components/homepage/SectionTwo';
import SectionThree from './components/homepage/SectionThree';
import SectionFour from './components/homepage/SectionFour';
import SectionFive from './components/homepage/SectionFive';
import SectionSix from './components/homepage/SectionSix';
import SectionSeven from './components/homepage/SectionSeven';

export default function Home() {
  return (
    <main>
      <Banner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </main>
  )
}
