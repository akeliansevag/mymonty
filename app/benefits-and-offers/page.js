import { websiteName } from '@/app/config';
import Banner from './banner';

import RewardsClient from './RewardsClient';


export const metadata = {
  title: 'Benefits and Offers' + websiteName,
  description: '',
};

const BenefitsAndOffers = () => {
  return (
    <>
      <Banner />
      <RewardsClient />
    </>
  );
};

export default BenefitsAndOffers;
