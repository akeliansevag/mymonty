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
      <img class="hidden sm:block fixed bottom-0 left-0 w-full z-10" src="/banner-big.png" alt="Seamless" width="1056" height="80" />
      <img class="block sm:hidden fixed bottom-0 left-0 w-full z-10" src="/banner-small.png" alt="Seamless" width="1056" height="80" />
    </main>
  )
}
