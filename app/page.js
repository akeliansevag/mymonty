import SectionTwo from './homepage/SectionTwo';
import SectionThree from './homepage/SectionThree';
import SectionFour from './homepage/SectionFour';
import SectionFive from './homepage/SectionFive';
import SectionSix from './homepage/SectionSix';
import Section from './homepage/Section';
import HomeBanner from './homepage/HomeBanner';


export const metadata = {
  title: 'YOUR SUPER DIGITAL WALLET',
  description: 'Explore innovative to manage your finances with My Monty, your super digital wallet. Get the app now to enjoy a full mobile banking experience!',
}


export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <Section /> */}
      <SectionFive />
      <SectionSix />
    </main>
  )
}
