import React from 'react';
import Banner from '../components/Banner';
import complaint from '@/public/personal/contact-us.webp';
import Complaint from './Complaint';

const methods = {
  1: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 8V16.2C20.5 17.8802 20.5 18.7202 20.173 19.362C19.8854 19.9265 19.4265 20.3854 18.862 20.673C18.2202 21 17.3802 21 15.7 21H8.3C6.61984 21 5.77976 21 5.13803 20.673C4.57354 20.3854 4.1146 19.9265 3.82698 19.362C3.5 18.7202 3.5 17.8802 3.5 16.2V8M3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V6.4C22 6.96005 22 7.24008 21.891 7.45399C21.7951 7.64215 21.6422 7.79513 21.454 7.89101C21.2401 8 20.9601 8 20.4 8H3.6C3.03995 8 2.75992 8 2.54601 7.89101C2.35785 7.79513 2.20487 7.64215 2.10899 7.45399C2 7.24008 2 6.96005 2 6.4V4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3ZM9.6 11.5H14.4C14.9601 11.5 15.2401 11.5 15.454 11.609C15.6422 11.7049 15.7951 11.8578 15.891 12.046C16 12.2599 16 12.5399 16 13.1V13.9C16 14.4601 16 14.7401 15.891 14.954C15.7951 15.1422 15.6422 15.2951 15.454 15.391C15.2401 15.5 14.9601 15.5 14.4 15.5H9.6C9.03995 15.5 8.75992 15.5 8.54601 15.391C8.35785 15.2951 8.20487 15.1422 8.10899 14.954C8 14.7401 8 14.4601 8 13.9V13.1C8 12.5399 8 12.2599 8.10899 12.046C8.20487 11.8578 8.35785 11.7049 8.54601 11.609C8.75992 11.5 9.03995 11.5 9.6 11.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'In our complaints box',
    'description': 'YoPersonally use the complaints box at our head office at Gefinor Center, Block E, Clemenceau St., Hamra, Beirut, Lebanon',
  },
  2: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.744 2.63346L21.272 7.52667C21.538 7.69957 21.671 7.78602 21.7674 7.90134C21.8527 8.00342 21.9167 8.12149 21.9558 8.24865C22 8.39229 22 8.55092 22 8.86818V16.1999C22 17.88 22 18.7201 21.673 19.3619C21.3854 19.9263 20.9265 20.3853 20.362 20.6729C19.7202 20.9999 18.8802 20.9999 17.2 20.9999H6.8C5.11984 20.9999 4.27976 20.9999 3.63803 20.6729C3.07354 20.3853 2.6146 19.9263 2.32698 19.3619C2 18.7201 2 17.88 2 16.1999V8.86818C2 8.55092 2 8.39229 2.04417 8.24865C2.08327 8.12149 2.14735 8.00342 2.23265 7.90134C2.32901 7.78602 2.46201 7.69957 2.72802 7.52667L10.256 2.63346M13.744 2.63346C13.1127 2.22315 12.7971 2.01799 12.457 1.93817C12.1564 1.86761 11.8436 1.86761 11.543 1.93817C11.2029 2.01799 10.8873 2.22315 10.256 2.63346M13.744 2.63346L19.9361 6.65837C20.624 7.10547 20.9679 7.32902 21.087 7.61252C21.1911 7.86027 21.1911 8.13949 21.087 8.38724C20.9679 8.67074 20.624 8.89429 19.9361 9.34139L13.744 13.3663C13.1127 13.7766 12.7971 13.9818 12.457 14.0616C12.1564 14.1321 11.8436 14.1321 11.543 14.0616C11.2029 13.9818 10.8873 13.7766 10.256 13.3663L4.06386 9.34139C3.37601 8.89429 3.03209 8.67074 2.91297 8.38724C2.80888 8.13949 2.80888 7.86027 2.91297 7.61252C3.03209 7.32902 3.37601 7.10547 4.06386 6.65837L10.256 2.63346M21.5 18.9999L14.8572 12.9999M9.14282 12.9999L2.5 18.9999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'By Mail',
    'description': 'Regular mail addressed to our Customer Protection Unit at Gefinor Center, Block E, Clemenceau St., Hamra, Beirut, Lebanon',
  },
  3: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5014 12H5.0014M4.91675 12.2915L2.58183 19.2662C2.39839 19.8142 2.30668 20.0881 2.3725 20.2569C2.42966 20.4034 2.55242 20.5145 2.7039 20.5567C2.87834 20.6054 3.1418 20.4869 3.66874 20.2497L20.3802 12.7296C20.8945 12.4981 21.1517 12.3824 21.2312 12.2216C21.3002 12.082 21.3002 11.9181 21.2312 11.7784C21.1517 11.6177 20.8945 11.5019 20.3802 11.2705L3.66291 3.74776C3.13757 3.51135 2.87489 3.39315 2.70063 3.44164C2.54929 3.48375 2.42654 3.59454 2.36918 3.74078C2.30314 3.90917 2.39388 4.18255 2.57535 4.72931L4.9174 11.7856C4.94857 11.8795 4.96415 11.9264 4.9703 11.9744C4.97576 12.0171 4.97571 12.0602 4.97014 12.1028C4.96386 12.1508 4.94816 12.1977 4.91675 12.2915Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'By Email',
    'description': 'Contact us at complaints@montyfinance.com',
  },
  4: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'By Phone',
    'description': 'Call us at +961 1 734 020',
    'label': 'Call Now',
    'link': 'callto:+9611734020',
  },
  5: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.5H12.01M8.2 22H15.8C16.9201 22 17.4802 22 17.908 21.782C18.2843 21.5903 18.5903 21.2843 18.782 20.908C19 20.4802 19 19.9201 19 18.8V5.2C19 4.07989 19 3.51984 18.782 3.09202C18.5903 2.71569 18.2843 2.40973 17.908 2.21799C17.4802 2 16.9201 2 15.8 2H8.2C7.0799 2 6.51984 2 6.09202 2.21799C5.71569 2.40973 5.40973 2.71569 5.21799 3.09202C5 3.51984 5 4.0799 5 5.2V18.8C5 19.9201 5 20.4802 5.21799 20.908C5.40973 21.2843 5.71569 21.5903 6.09202 21.782C6.51984 22 7.07989 22 8.2 22ZM12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'On Our App',
    'description': 'Reach out to our 24/7 service and support team via MyMonty app',
    'label': 'Download App',
    'link': 'https://google.com',
  },
  7: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.57181 21C8.90661 20.3598 10.41 20 12 20C13.59 20 15.0934 20.3598 16.4282 21M6.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'On this website by completing the form below',
    'description': '',
    'label': 'Fill the Form',
    'link': '#complaint_form',
  },
}

const Complaints = () => {
  const data = {
    title: 'Complaints policy',
    subtitle: 'Terms and Policies',
    image: {
      inGrid: true,
      layout: 'half',
      url: complaint,
    },
    cta: {
      type: 'button',
      button: {
        name: "Submit Complaint"
      }
    }
  };

  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>How do you make a complaint?</h2>
          <p className='leading-8 mt-4'>If you didn't get the service you expected from us, you can place a complaint through any of the following channels:</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative mt-20'>
            {Object.values(methods).map((method, index) => (
              <div key={index} className='overflowhidden rounded-[1.875rem] bg-gray-100'>
                <div className='h-full px-5 py-6'>
                  <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white text-3xl font-bold'>
                    {method.icon}
                  </div>
                  <div className='flex flex-col justifybetween mt-4'>
                    <h3 className='text-2xl uppercase font-bold'>{method.title}</h3>
                    {method.description &&
                      <p className='text-base mt-4'>{method.description}</p>
                    }
                    {method.link &&
                      <button className="mm-button mt-8 justify-self-end"><a href={method.link}>{method.label}</a></button>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>What happens after you make a complaint?</h2>
          <p className='leading-8 mt-4'>Your complaint is transferred immediately without any interference to our Customer Protection Unit at our head office.<br /><br />
            Our Customer Protection Unit will acknowledge your complaint within 3 business days.
            <br /><br />
            Our Customer Protection Unit will promptly investigate your case. Upon receiving your complaint, our unit takes swift action, aiming to review and resolve it within a maximum of 15 calendar days from the submission date.In exceptional circumstances, we have the right to renew such 15 days period for one time only subject to notifying you of such renewal.</p>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>what if you're not happy with our response?</h2>
          <p className='leading-8 mt-4'>If you're not happy with our final response, you may file a complaint with the relevant Lebanese administrative or judicial authority.
            <br /><br />
            In all cases, you may directly file a complaint to the relevant Lebanese administrative or judicial authority, without going through our Customer Protection Unit.</p>
        </div>
      </section>

      <Complaint />
    </div>
  );
};

export default Complaints;
