import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import Image from 'next/image';
import RewardsClient from './RewardsClient';
import BenefitsAndOffersImage from '@/public/personal/careers.webp';

export const metadata = {
  title: 'Benefits and Offers' + websiteName,
  description: '',
};

const data = {
  title: 'Exclusive discounts & rewards',
  subtitle: 'Cards',
  desc: 'Not a MyMonty client yet? Join today!',
  image: {
    inGrid: true,
    layout: 'half',
    url: BenefitsAndOffersImage,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download App'
    }
  }
}

const BenefitsAndOffers = () => {
  return (
    <>
      <Banner data={data} />
      <RewardsClient />
    </>
  );
};

export default BenefitsAndOffers;
