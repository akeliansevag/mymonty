import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import salaryAdvanceBanner from '@/public/salary-advance-banner.webp';
import Benefits from './Benefits';


export const metadata = {
  title: 'Salary Advance' + websiteName,
  description: '',
};

const SalaryAdvance = () => {
  const data = {
    title: 'Payday Any Day!',
    subtitle: 'Salary Advance',
    desc: 'Access a portion of your salary anytime you need it, right from your MyMonty app. ',
    image: {
      inGrid: true,
      layout: 'half',
      url: salaryAdvanceBanner,
    },
    cta: {
      type: 'button',
      button: {
        name: 'Download App'
      }
    }
  };
    
  return (
    <div className='bg-black text-white'>
      <Banner theme="dark-green" data={data} />

      <section className="py-24">
        <div className='container space-y-24'>
          <div className='flex md:flex-row max-lg:gap-10 lg:gap-32 items-center max-md:flex-col-reverse'>
            <img className='md:w-1/2' src='/salary-advance-1.webp' alt='Requested Amount' width='' height='' />
            <div>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Don’t wait for payday!</h2>
              <p className='leading-8 mt-8'>Get cash whenever you need it with MyMonty’s salary advance. Easy, instant, and in your wallet.</p>
              <ul className='flex flex-col gap-6 my-8'>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Get cash instantly</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Quick & Easy Request on the App</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Access Up to 50% of Your Salary (Max $500)</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Automatically repaid on payday</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col md:flex-row max-lg:gap-10 lg:gap-32 items-center'>
            <div>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Cash When You Need It </h2>
              <p className='leading-8 mt-8'>MyMonty’s Salary Advance gives you fast access to your money when you need it most. Only a flat $2 fee, APR 29.2% and a 2% commission that won’t be applied if you repay within 3 days. No paperwork, no credit checks, no hassle. Just quick cash straight from your app.</p>
            </div>
            <img className='md:w-1/2' src='/salary-advance-2.webp' alt='Advance Amount' width='' height='' />
          </div>
        </div>
      </section>

      <section className='py-24 max-md:py-14 bg-white text-black'>
        <div className='container space-y-8 md:space-y-24'>
            <div className='space-y-4'>
              <h2 className='section-title text-center text-balance'>Are You Eligible to apply?</h2>
              <p className='text-center'>You can request a Salary Advance if:</p>
            </div>
            
            <div className='flex max-lg:flex-col gap-5'>
              <div className='text-center flex flex-col items-center justify-center gap-5 bg-[#F7F7F7] rounded-2xl p-10 w-full'>
                <div>
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.1096 3.10425H24.893C23.0211 3.10419 21.4603 3.10415 20.2211 3.27073C18.9132 3.44658 17.7324 3.8334 16.7835 4.78229C15.8346 5.73119 15.4478 6.91202 15.2719 8.21992C15.1525 9.10819 15.1187 11.2323 15.1092 13.0535C10.8962 13.1911 8.36663 13.683 6.60874 15.4409C4.16797 17.8816 4.16797 21.8101 4.16797 29.6667C4.16797 37.5234 4.16797 41.452 6.60874 43.8926C9.04951 46.3334 12.9779 46.3334 20.8346 46.3334H29.168C37.0246 46.3334 40.9532 46.3334 43.3938 43.8926C45.8346 41.452 45.8346 37.5234 45.8346 29.6667C45.8346 21.8101 45.8346 17.8816 43.3938 15.4409C41.6359 13.683 39.1065 13.1911 34.8934 13.0535C34.8838 11.2323 34.85 9.10819 34.7307 8.21992C34.5548 6.91202 34.168 5.73119 33.219 4.78229C32.2703 3.8334 31.0894 3.44658 29.7815 3.27073C28.5423 3.10415 26.9815 3.10419 25.1096 3.10425ZM31.7678 13.004C31.7584 11.2401 31.7284 9.3419 31.6336 8.63633C31.5042 7.67494 31.2809 7.2635 31.0094 6.992C30.738 6.7205 30.3265 6.49712 29.365 6.36788C28.3588 6.23258 27.0096 6.22925 25.0013 6.22925C22.993 6.22925 21.6438 6.23258 20.6375 6.36788C19.6762 6.49712 19.2647 6.7205 18.9932 6.992C18.7217 7.2635 18.4983 7.67494 18.3691 8.63633C18.2742 9.3419 18.2442 11.2401 18.2348 13.004C19.0503 13.0001 19.9156 13.0001 20.8346 13.0001H29.168C30.0871 13.0001 30.9523 13.0001 31.7678 13.004ZM25.0013 19.7709C25.8642 19.7709 26.5638 20.4705 26.5638 21.3334V21.3547C28.8321 21.9261 30.7305 23.7147 30.7305 26.1945C30.7305 27.0574 30.0309 27.757 29.168 27.757C28.305 27.757 27.6055 27.0574 27.6055 26.1945C27.6055 25.3945 26.7184 24.2849 25.0013 24.2849C23.2842 24.2849 22.3971 25.3945 22.3971 26.1945C22.3971 26.9947 23.2842 28.1042 25.0013 28.1042C27.8865 28.1042 30.7305 30.1038 30.7305 33.139C30.7305 35.6188 28.8321 37.4074 26.5638 37.9788V38.0001C26.5638 38.863 25.8642 39.5626 25.0013 39.5626C24.1384 39.5626 23.4388 38.863 23.4388 38.0001V37.9788C21.1705 37.4074 19.2721 35.6188 19.2721 33.139C19.2721 32.2761 19.9717 31.5765 20.8346 31.5765C21.6975 31.5765 22.3971 32.2761 22.3971 33.139C22.3971 33.939 23.2842 35.0486 25.0013 35.0486C26.7184 35.0486 27.6055 33.939 27.6055 33.139C27.6055 32.3388 26.7184 31.2292 25.0013 31.2292C22.1161 31.2292 19.2721 29.2299 19.2721 26.1945C19.2721 23.7147 21.1705 21.9261 23.4388 21.3547V21.3334C23.4388 20.4705 24.1384 19.7709 25.0013 19.7709Z" fill="#B1A38B"/>
                  </svg>
                </div>
                <h4 className='uppercase font-black'>Your salary is domiciled with MyMonty</h4>
              </div>
              <div className='text-center flex flex-col items-center justify-center gap-5 bg-[#F7F7F7] rounded-2xl p-10 w-full'>
                <div>
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7891 4.6665C18.0632 4.6665 16.6641 6.06561 16.6641 7.7915V9.87484C16.6641 11.6007 18.0632 12.9998 19.7891 12.9998H30.2057C31.9316 12.9998 33.3307 11.6007 33.3307 9.87484V7.7915C33.3307 6.06561 31.9316 4.6665 30.2057 4.6665H19.7891Z" fill="#B1A38B"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5417 8.90955C10.921 9.05657 9.26662 9.47417 8.08058 10.6602C6.25 12.4908 6.25 15.4371 6.25 21.3296V33.8297C6.25 39.7222 6.25 42.6685 8.08058 44.4991C9.91117 46.3297 12.8574 46.3297 18.75 46.3297H31.25C37.1425 46.3297 40.0887 46.3297 41.9194 44.4991C43.75 42.6685 43.75 39.7222 43.75 33.8297V21.3296C43.75 15.4371 43.75 12.4908 41.9194 10.6602C40.7333 9.47417 39.079 9.05657 36.4583 8.90955V9.87492C36.4583 13.3267 33.6602 16.1249 30.2083 16.1249H19.7917C16.3399 16.1249 13.5417 13.3267 13.5417 9.87492V8.90955ZM14.5833 20.8124C13.7204 20.8124 13.0208 21.512 13.0208 22.3749C13.0208 23.2378 13.7204 23.9374 14.5833 23.9374H15.625C16.4879 23.9374 17.1875 23.2378 17.1875 22.3749C17.1875 21.512 16.4879 20.8124 15.625 20.8124H14.5833ZM21.875 20.8124C21.0121 20.8124 20.3125 21.512 20.3125 22.3749C20.3125 23.2378 21.0121 23.9374 21.875 23.9374H35.4167C36.2796 23.9374 36.9792 23.2378 36.9792 22.3749C36.9792 21.512 36.2796 20.8124 35.4167 20.8124H21.875ZM14.5833 28.1041C13.7204 28.1041 13.0208 28.8037 13.0208 29.6666C13.0208 30.5295 13.7204 31.2291 14.5833 31.2291H15.625C16.4879 31.2291 17.1875 30.5295 17.1875 29.6666C17.1875 28.8037 16.4879 28.1041 15.625 28.1041H14.5833ZM21.875 28.1041C21.0121 28.1041 20.3125 28.8037 20.3125 29.6666C20.3125 30.5295 21.0121 31.2291 21.875 31.2291H35.4167C36.2796 31.2291 36.9792 30.5295 36.9792 29.6666C36.9792 28.8037 36.2796 28.1041 35.4167 28.1041H21.875ZM14.5833 35.3958C13.7204 35.3958 13.0208 36.0953 13.0208 36.9583C13.0208 37.8212 13.7204 38.5208 14.5833 38.5208H15.625C16.4879 38.5208 17.1875 37.8212 17.1875 36.9583C17.1875 36.0953 16.4879 35.3958 15.625 35.3958H14.5833ZM21.875 35.3958C21.0121 35.3958 20.3125 36.0953 20.3125 36.9583C20.3125 37.8212 21.0121 38.5208 21.875 38.5208H35.4167C36.2796 38.5208 36.9792 37.8212 36.9792 36.9583C36.9792 36.0953 36.2796 35.3958 35.4167 35.3958H21.875Z" fill="#B1A38B"/>
                  </svg>
                </div>
                <h4 className='uppercase font-black'>You’ve received your salary for 3 months in a row on MyMonty</h4>
              </div>
              <div className='text-center flex flex-col items-center justify-center gap-5 bg-[#F7F7F7] rounded-2xl p-10 w-full'>
                <div>
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_8500_13989)">
                      <path d="M19.01 40.9762C20.5949 40.9762 25.0011 40.9762 25.0011 40.9762C25.0011 40.9762 29.4065 40.9762 30.9923 40.9762C32.5765 40.9762 33.2957 38.6712 32.3788 37.0421C31.6882 35.8144 30.5567 34.4224 28.7151 33.6318C27.6611 34.3697 26.3807 34.8037 25.0011 34.8037C23.6199 34.8037 22.3411 34.3697 21.287 33.6318C19.4448 34.4224 18.314 35.8144 17.6227 37.0421C16.7066 38.6712 17.425 40.9762 19.01 40.9762Z" fill="#B1A38B"/>
                      <path d="M25.0014 33.2614C27.7078 33.2614 29.9005 31.0696 29.9005 28.363V27.1896C29.9005 24.4832 27.7079 22.2898 25.0014 22.2898C22.2949 22.2898 20.1016 24.4832 20.1016 27.1896V28.363C20.1016 31.0696 22.2949 33.2614 25.0014 33.2614Z" fill="#B1A38B"/>
                      <path d="M39.5493 6.05554H32.1437V7.64285C32.1437 10.7058 29.6511 13.1984 26.5881 13.1984H23.4135C20.3505 13.1984 17.8579 10.7058 17.8579 7.64285V6.05554H10.4523C7.96748 6.05554 5.95312 8.0699 5.95312 10.5547V46.0009C5.95312 48.4856 7.96748 50.5 10.4523 50.5H39.5492C42.034 50.5 44.0483 48.4856 44.0483 46.0009V10.5547C44.0484 8.0699 42.0341 6.05554 39.5493 6.05554ZM39.2865 45.7381H10.715V15.1825H39.2865V45.7381Z" fill="#B1A38B"/>
                      <path d="M23.4136 11.6111H26.5882C28.7763 11.6111 30.5564 9.83086 30.5564 7.64287V4.46826C30.5564 2.28027 28.7762 0.5 26.5882 0.5H23.4136C21.2256 0.5 19.4453 2.28027 19.4453 4.46826V7.64287C19.4453 9.83076 21.2256 11.6111 23.4136 11.6111ZM22.6199 4.46826C22.6199 4.02959 22.9749 3.67461 23.4136 3.67461H26.5882C27.027 3.67461 27.3818 4.02959 27.3818 4.46826V6.05557C27.3818 6.49424 27.027 6.84922 26.5882 6.84922H23.4136C22.9749 6.84922 22.6199 6.49424 22.6199 6.05557V4.46826Z" fill="#B1A38B"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_8500_13989">
                        <rect width="50" height="50" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 className='uppercase font-black'>Your employer is signed up for the Salary Advance plan</h4>
              </div>
            </div>
        </div>
      </section>

      <section className='py-24 bg-white text-black max-md:py-14'>
        <div className='container space-y-8 md:space-y-24'>
          <div className='space-y-4'> 
            <h2 className='section-title text-center'>How It Works</h2>
            <p className='text-center max-w-2xl mx-auto'>*Only one active advance allowed at a time.</p>
          </div>
         
          <div className="flex max-lg:flex-col gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8 w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M18.6865 12.308V10.8H23.1845V29H18.6085V17.898H17.7505H14.6565V14.18H17.2305C18.3485 14.18 18.6865 13.452 18.6865 12.308Z" fill="black"/>
              </svg>
              <h4 className="font-black uppercase">Open The MyMonty APp</h4>
              <img src="/salary-advance-11.webp" className='w-[85px]' alt="s" width="" height="" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8 pb-0 md:pb-0 w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M12.5431 29V25.542L19.3551 20.056C20.8891 18.834 21.6431 17.898 21.6431 16.702C21.6431 15.194 20.6811 14.44 19.4331 14.44C18.0291 14.44 17.0151 15.454 17.0151 17.118V17.378H12.3871V16.858C12.3871 13.4 15.0651 10.644 19.4591 10.644C23.9051 10.644 26.2711 13.062 26.2711 16.52C26.2711 19.172 24.9451 20.758 22.6051 22.604L19.2771 25.23H26.3491V29H12.5431Z" fill="black"/>
              </svg>
              <h4 className="font-black uppercase">Go to “More” &gt; “Salary Advance”</h4>
              <img src="/salary-advance-22.webp" className='w-2/3 md:w-1/3 lg:w-1/2 mt-auto' alt="s" width="" height="" />
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8 pb-0 md:pb-0  w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M22.9219 19.536C24.9499 19.952 26.4579 21.2 26.4579 23.8C26.4579 26.972 23.7019 29.156 19.2299 29.156C14.7319 29.156 11.9239 26.972 11.9239 22.916H16.4739C16.5259 24.788 17.7739 25.672 19.4379 25.672C20.7379 25.672 21.8039 24.918 21.8039 23.514C21.8039 22.344 20.9979 21.59 19.3079 21.59H17.3579V18.002H19.0479C20.6859 18.002 21.5179 17.196 21.5179 15.974C21.5179 14.7 20.4779 14.128 19.3079 14.128C17.9039 14.128 16.7339 15.064 16.6559 16.546H12.2099C12.2619 13.01 15.1739 10.644 19.3599 10.644C23.6499 10.644 26.1199 12.568 26.1199 15.61C26.1199 17.742 24.7159 19.042 22.9219 19.536Z" fill="black"/>
              </svg>  
              <h4 className="font-black uppercase">Tap “New”, enter amount, simulate AND confirm</h4>
                <img src="/salary-advance-33.webp" className='w-2/3 md:w-1/3 lg:w-4/5 mt-auto' alt="s" width="" height="" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8 pb-0 md:pb-0  w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M11.7239 25.386V21.668L19.1859 10.8H24.8799V21.668H27.1939V25.386H24.8799V29H20.4079V25.386H11.7239ZM20.4079 15.09L15.9359 21.668H20.4079V15.09Z" fill="black"/>
              </svg>
              <h4 className="font-black uppercase">Agree to the terms</h4>
              <img src="/salary-advance-44.webp" className='w-2/3 md:w-1/3 lg:w-4/5 mt-auto' alt="s" width="" height="" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8 pb-0 md:pb-0  w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M20.6237 16.494C24.0557 16.494 26.8117 19.016 26.8117 22.786C26.8117 27.05 23.5877 29.156 19.6357 29.156C15.3197 29.156 12.5897 26.478 12.4597 23.046H17.0097C17.1917 24.45 18.2577 25.516 19.6357 25.516C20.9097 25.516 22.2097 24.606 22.2097 22.786C22.2097 21.2 21.1957 20.004 19.6357 20.004C18.7517 20.004 17.5557 20.394 17.1397 21.616H12.6937L13.1617 10.8H25.7197V14.57H17.3477L17.2177 17.664C18.0237 16.988 19.0637 16.494 20.6237 16.494Z" fill="black"/>
              </svg>
              <h4 className="font-black uppercase">Confirm your loan schedule</h4>
              <img src="/salary-advance-55.webp" className='w-2/3 md:w-1/3 lg:w-4/5 mt-auto' alt="s" width="" height="" />
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8 pb-0 md:pb-0  w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M13.9478 26.4C12.8038 24.866 12.1538 22.734 12.1538 20.134C12.1538 13.842 15.2478 10.644 19.9798 10.644C23.4118 10.644 26.3238 12.568 26.7398 16.078H22.2418C21.9298 14.804 20.8898 14.232 19.5898 14.232C17.6918 14.232 16.5738 15.584 16.5738 18.522V18.73C16.6778 18.6 16.7558 18.496 16.8598 18.392C17.7178 17.352 19.1738 16.728 20.7078 16.728C24.4258 16.728 26.9218 19.302 26.9218 22.942C26.9218 26.738 24.0878 29.156 19.8758 29.156C17.3278 29.156 15.2998 28.168 13.9478 26.4ZM22.3458 22.942C22.3458 21.356 21.3578 20.16 19.8758 20.16C18.3938 20.16 17.3538 21.33 17.3538 22.916C17.3538 24.502 18.3678 25.672 19.8498 25.672C21.3318 25.672 22.3458 24.502 22.3458 22.942Z" fill="black"/>
              </svg>
              <h4 className="font-black uppercase">Enter OTP</h4>
              <img src="/salary-advance-66.webp" className='w-2/3 md:w-1/3 lg:w-1/2 mt-auto' alt="s" width="" height="" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center bg-[#F7F7F7] rounded-2xl p-4 md:p-8  w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="black" strokeWidth="2"/>
                <path d="M12.7014 14.596V10.8H26.2994V13.686L18.8114 29H13.8454L21.2554 14.596H12.7014Z" fill="black"/>
              </svg>
              <h4 className="font-black text-balance uppercase">Funds are instantly disbursed to your wallet</h4>
              <img src="/salary-advance-77.webp" className='w-full md:w-1/3 lg:w-2/3' alt="s" width="" height="" />
            </div>
          </div>
        </div>
      </section>
      
      <Benefits />

      <section className='relative pt-44 pb-24 max-md:pb-14 max-md:pt-14'>
        <img src='/perks.webp' className='absolute top-0 left-0 object-cover w-full h-[70%] z-0'/>

        <div className='container relative z-10'>
          <div className='flex flex-col items-center gap-10'>
            <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>Enjoy exclusive perks and benefits that fit your lifestyle, all through one simple app.</h2>
          </div>
          <div className='flex max-md:flex-col gap-5 justify-center max-md:mt-14 md:mt-24 '>
            <div className='w-full rounded-xl bg-[linear-gradient(240.38deg,#1C1F21_11.65%,#0A0C0C_77.83%,#000000_134.99%)] p-4 md:p-8'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>Not on MyMonty Salary Domiciliation Yet?</h2>
            </div>
            
            <div className='w-full flex flex-col gap-5 rounded-xl bg-[linear-gradient(151.35deg,#007AFF_-4.42%,#2657D4_66.59%)] p-4 md:p-8'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>Talk to Your HR Today!</h2>
              <p>Why Employers Choose MyMonty</p>
              <ul className='flex flex-col gap-6 my-4'>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#00B5FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Slash payroll delays and cut costly fees</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#00B5FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Manage salaries easily with our secure, all-in-one digital portal</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#00B5FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Keep your team happy and motivated with faster payments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className='container space-y-24'>
          <div className='flex md:flex-row max-lg:gap-10 lg:gap-32 items-center max-md:flex-col-reverse'>
            <img className='md:w-1/2' src='/why-employees-love-it.webp' alt='Requested Amount' width='' height='' />
            <div>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Why Employees Love It</h2>
              <ul className='flex flex-col gap-6 my-8'>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Instant salary access</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Get salary advances anytime you need a financial boost</li>
                <li className='flex gap-2'>
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>Enjoy exclusive perks like loans and credit cards, all through one simple app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default SalaryAdvance;
