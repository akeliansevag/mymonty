import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionOne = () => {
  const items = [
    {
        title: 'Game on',
        description: 'We’re hooking you up with all the top gaming vouchers. From <strong>PlayStation, Xbox</strong>, and <strong>Steam</strong> credits to in-game boosts for <strong>PUBG, Valorant, League of Legends</strong>, and many more, you’re always just a tap away from your next win.',
        image: '/game-on.webp'
    },
    {
        title: 'Just Get That Gift',
        description: 'Whether your gifting others or yourself, choose from platforms like <strong>Google Play, iTunes, eBay, Amazon</strong> and more. The best gifts are the ones that are easy to give (and fun to receive).',
        image: '/just-get-that-gift.webp'
    },
    {
        title: 'Stream, Listen, and Chill',
        description: 'Leave your next binge-watch or playlist to us. Find vouchers for <strong>Netflix, Shahid, Spotify, Anghami, Amazon Prime Video, Twitch, or Hulu</strong>, right where you need them. Just keep the good times rolling.',
        image: '/stream.webp'
    },
    {
        title: 'Dress to Impress',
        description: 'Let the shopping spree begin! Get your hands on vouchers from popular retailers like <strong>SHEIN</strong> or <strong>Macy\'s</strong>, and shop the hottest trends.',
        image: '/dress-to-impress.webp'
    },
    {
        title: 'Stay Connected, No Cables Attached!',
        description: 'MyMonty’s internet vouchers are taps away. Top up with <strong>Mobi, IDM, Sodetel</strong>, and more, straight from your MyMonty app. Staying connected is that easy.',
        image: '/stay-connected.webp'
    },
  ];
  return (
    <section className='bg-white lg:py-24 max-lg:py-10'>
        <div className='container'>
            <div className='flex flex-col lg:gap-24 max-lg:gap-14'>
                {items.map((item,index)=>{
                    return (
                        <div className={`flex max-lg:flex-col lg:items-center max-lg:gap-10 lg:gap-24 ${index%2!=0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <div className='lg:w-1/2'>
                                <TextBlock title={item.title} description={item.description} button={true} buttonColor="dark" />
                            </div>
                            <div className='lg:w-1/2'>
                                <img src={item.image} alt={item.title}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    </section>
  )
}

export default SectionOne;
