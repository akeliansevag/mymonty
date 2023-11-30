import Banner from './components/Banner';
import styles from './page.module.css';
import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import SectionSeven from './homepage/SectionSeven';


const data = {
  title: 'MyMonty will always have your back.',
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
