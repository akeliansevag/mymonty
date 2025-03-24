import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionTwo = () => {
  const items = [
    {
        icon:'<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.4069 2.58331C28.4069 1.42698 29.3443 0.489563 30.5006 0.489563C47.075 0.489563 60.5111 13.9257 60.5111 30.5C60.5111 47.0744 47.075 60.5104 30.5006 60.5104C13.9264 60.5104 0.490234 47.0744 0.490234 30.5C0.490234 29.3437 1.42765 28.4062 2.58398 28.4062C3.74032 28.4062 4.67773 29.3437 4.67773 30.5C4.67773 44.7615 16.2391 56.3229 30.5006 56.3229C44.7622 56.3229 56.3236 44.7615 56.3236 30.5C56.3236 16.2384 44.7622 4.67706 30.5006 4.67706C29.3443 4.67706 28.4069 3.73965 28.4069 2.58331ZM30.5006 20.0312C31.657 20.0312 32.5944 20.9686 32.5944 22.125V31.1979H41.6673C42.8236 31.1979 43.7611 32.1353 43.7611 33.2916C43.7611 34.4479 42.8236 35.3854 41.6673 35.3854H30.5006C29.3443 35.3854 28.4069 34.4479 28.4069 33.2916V22.125C28.4069 20.9686 29.3443 20.0312 30.5006 20.0312Z" fill="white"/></svg>',
        title: 'Pay in Seconds',
        description: 'No need to visit a physical agent, pay from anywhere'
    },
    {
        icon:'<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 30.7083L33.5 22.3333L58.625 30.7083" stroke="white" stroke-width="3.75"/><path d="M33.5 5.58331V60.0208" stroke="white" stroke-width="3.75"/><path d="M8.91335 39.0833C11.307 51.083 21.1508 57.2652 27.6335 60.097C29.6475 60.9767 30.6545 61.4166 33.5 61.4166C36.3455 61.4166 37.3525 60.9767 39.3664 60.097C40.9806 59.3918 42.803 58.4792 44.6667 57.3207M53.0417 49.9823C56.2889 45.8626 58.625 40.4688 58.625 33.476C58.625 31.8903 58.625 30.428 58.625 29.0799C58.625 20.1532 58.625 15.6899 57.5711 14.1884C56.5173 12.6868 52.3206 11.2503 43.9272 8.37719L42.3281 7.82982C37.9527 6.33215 35.7652 5.58331 33.5 5.58331C31.2348 5.58331 29.0473 6.33215 24.672 7.82982L23.0729 8.37719C14.6795 11.2503 10.4828 12.6868 9.42891 14.1884C8.375 15.6899 8.375 20.1532 8.375 29.0799V30.7083" stroke="white" stroke-width="3.75" stroke-linecap="round"/></svg>',
        title: 'Top-Level Security',
        description: 'OTP verification ensures your data stays protected'
    },
    {
        icon:'<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 6.79999C20.8056 6.79999 17 10.6056 17 15.3V42.5C17 47.1944 20.8056 51 25.5 51H52.6999C57.3942 51 61.1999 47.1944 61.1999 42.5V15.3C61.1999 10.6056 57.3942 6.79999 52.6999 6.79999H25.5ZM57.7999 15.3V17H35.6999C34.7611 17 33.9999 16.2389 33.9999 15.3V10.2H52.6999C55.5168 10.2 57.7999 12.4833 57.7999 15.3ZM30.6 15.3C30.6 18.1166 32.8833 20.4 35.6999 20.4H57.7999V42.5C57.7999 45.3165 55.5168 47.6 52.6999 47.6H25.5C22.6833 47.6 20.4 45.3165 20.4 42.5V15.3C20.4 12.4833 22.6833 10.2 25.5 10.2H30.6V15.3Z" fill="white"/><path d="M42.5006 61.2C46.6129 61.2 50.0432 58.2798 50.8306 54.4H47.3106C46.6106 56.3809 44.7215 57.8 42.5006 57.8H20.4008C14.7675 57.8 10.2008 53.2331 10.2008 47.6V25.4999C10.2008 23.2794 11.62 21.3903 13.6008 20.6901V17.17C9.72101 17.9575 6.80078 21.3877 6.80078 25.4999V47.6C6.80078 55.111 12.8897 61.2 20.4008 61.2H42.5006Z" fill="white"/></svg>',
        title: 'Smart Tracking',
        description: 'Keep tabs on your bills and manage multiple payments in one place'
    }
  ];
  return (
    <section className="lg:py-24 max-lg:py-10 relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/billing-better.webp')", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className='container'>
            <div className='text-center'>
                <TextBlock buttonColor="dark" center={true} title="Billing, but Better" button={false} />
            </div>
            <div className='grid lg:grid-cols-3 max-lg:grid-cols-1 gap-5 mt-14'>
                {items.map((item) => (
                    <div className='text-white bg-black/70 rounded-2xl p-8 flex flex-col gap-4'>
                        <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                        <h4 className='text-balance font-bold text-2xl'>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SectionTwo;
