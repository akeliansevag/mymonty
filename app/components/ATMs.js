import React from 'react';
import TextBlock from './TextBlock';

const ATMs = ({title,description,bgColor}) => {
  const data = [
    {
        location: 'Gefinor, Hamra',
        time: 'Available 24/7'
    },
    {
        location: 'Beirut Souks',
        time: '10 AM to 10 PM, Seven days a week'
    },
    {
        location: 'ABC Dbayeh',
        time: '10 AM to 10 PM, Seven days a week'
    },
    {
        location: 'ABC Verdun',
        time: '10 AM to 10 PM, Seven days a week'
    },
  ]
  return (
    <section className='lg:py-28 max-lg:py-14 bg-white'>
      <div className='container'>
        <div className="text-center">
            <TextBlock title={title} description={description} center={true}/>
        </div>
        <div className='grid max-lg:grid-cols-1 lg:grid-cols-2 max-lg:mt-5 lg:mt-12 max-lg:gap-10 lg:gap-24'>
            <div className={`max-md:h-[300px] relative rounded-2xl overflow-hidden w-full bg-[${bgColor}]`}>
                <img src='/mymonty-atms.webp' className='w-full absolute bottom-0 h-full object-contain'/>
            </div>
            <div className='space-y-5'>
                {data && data.map((item,key)=> {
                    return (
                        <div key={key} className='bg-[#f7f7f7] rounded-2xl p-6 flex max-md:flex-col md:gap-5 max-md:gap-2'>
                            <div>
                                <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.489 7.489C5.12906 9.84893 3.86651 13.7235 3.86651 19.977V35.443C3.86651 41.6965 5.12906 45.571 7.489 47.9311C9.84893 50.2909 13.7235 51.5535 19.977 51.5535C19.977 51.5535 24.3154 51.5535 26.8154 51.5535C29.3154 51.5535 29.3154 55.42 26.8154 55.42C24.3154 55.42 19.977 55.42 19.977 55.42C13.3421 55.42 8.19479 54.1049 4.75496 50.665C1.31513 47.2253 0 42.078 0 35.443V19.977C0 13.3421 1.31513 8.19479 4.75496 4.75496C8.19479 1.31513 13.3421 0 19.977 0H35.443C42.078 0 47.2253 1.31513 50.665 4.75496C54.1049 8.19479 55.42 13.3421 55.42 19.977V32.3242C55.42 34.8265 51.5535 34.8265 51.5535 32.3242V19.977C51.5535 13.7235 50.2909 9.84893 47.9311 7.489C45.571 5.12906 41.6965 3.86651 35.443 3.86651H19.977C13.7235 3.86651 9.84893 5.12906 7.489 7.489Z" fill="black"/>
                                    <path d="M40.1844 26.2485V15.1651C40.1844 14.1212 39.3352 13.2705 38.2914 13.2705H17.5766C16.5343 13.2705 15.6836 14.1196 15.6836 15.1651V26.2469C15.6836 27.2892 16.5327 28.1399 17.5766 28.1399H38.293C39.3352 28.1399 40.1844 27.2908 40.1844 26.2485ZM37.3098 23.2653C37.3098 24.3699 36.4144 25.2653 35.3098 25.2653H20.5582C19.4536 25.2653 18.5582 24.3699 18.5582 23.2653V18.1467C18.5582 17.0421 19.4536 16.1467 20.5582 16.1467H35.3098C36.4144 16.1467 37.3098 17.0421 37.3098 18.1467V23.2653Z" fill="black" stroke="black" strokeWidth="0.6"/>
                                    <path d="M17.1836 36.7705H22.1836" stroke="black" strokeWidth="3.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M39.2919 40.1406H34.957V55.3828H39.2919V40.1406Z" fill="black"/>
                                    <path d="M52.5578 40.1406C51.131 40.1406 48.9792 40.4603 47.8448 42.6433C47.0885 41.1308 45.5448 40.1406 43.276 40.1406C42.2586 40.1406 41.4633 40.4525 40.7344 40.9632V43.9297C40.9605 43.8206 41.3035 43.7192 41.7635 43.7192C43.6854 43.7192 44.2662 45.3175 44.2662 47.3563V55.3867H48.5699V47.3875C48.5699 45.3799 49.1507 43.7231 51.0414 43.7231C52.932 43.7231 53.5441 45.3214 53.5441 47.3602V55.3906H57.8789V47.2744C57.8789 43.4931 56.7445 40.1484 52.5539 40.1484L52.5578 40.1406Z" fill="black"/>
                                </svg>

                            </div>
                            <div>
                                <h3 className='font-black text-2xl'>{item.location}</h3>
                                <h4 className='text-lg'>{item.time}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default ATMs;
