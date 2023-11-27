import Banner from './components/homepage/Banner';
import styles from './page.module.css';
import SectionTwo from './components/homepage/SectionTwo';
import SectionThree from './components/homepage/SectionThree';
import SectionFour from './components/homepage/SectionFour';
import SectionFive from './components/homepage/SectionFive';
import SectionSix from './components/homepage/SectionSix';
import SectionSeven from './components/homepage/SectionSeven';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={(<div>Loading...</div>)}>
        <Banner />
      </Suspense>

      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </main>
  )
}
