import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionFour = () => {
  return (
    <section className='bg-white max-lg:py-10 lg:py-24'>
        <div className='container'>
            <div className='text-center'>
                <TextBlock title="Prepaid and Prepared!" description="Don’t worry, if you’re a prepaid kind of person, you can also top up your Touch or Alfa lines directly from the app. Just pick your card and you’re as good as recharged!" button={true} buttonColor="dark" center={true}/>
            </div>
            <img src='/prepaid-and-prepared.webp' className='w-full lg:mt-16 max-lg:mt-10' width="2111" height="912" />
        </div>
    </section>
  )
}

export default SectionFour;
