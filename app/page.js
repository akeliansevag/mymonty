import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import Section from './homepage/Section';
import HomeBanner from './homepage/HomeBanner';


export const metadata = {
  title: 'MyMonty',
  description: 'MyMonty',
}


export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Section />
      <SectionFive />
      <SectionSix />
    </main>
  )
}
