import React from 'react';
import NewCarousel from './NewCarousel';

const Benefits = () => {
    const carouselData = {
        filters: [
            {
                title: 'Salary Advance'
            },
            {
                title: 'Credit Cards'
            },
            {
                title: 'Smart Tracking'
            }
        ],
        content: [
            {
                title: 'Give your employees access to financial benefits.',
                description: 'Keep your team happy. Boost satisfaction and retention.',
                button: {
                    text: 'Contact Sales Team',
                    url: '#',
                },
                contentImage: '/salary-advance-graphic.webp',
                backgroundImage: '/salary-advance.webp'
            },
            {
                title: 'Give your employees access to financial benefits.',
                description: 'Keep your team happy. Boost satisfaction and retention.',
                button: {
                    text: 'Contact Sales Team',
                    url: '#',
                },
                contentImage: '/credit-cards-graphic.webp',
                backgroundImage: '/credit-cards.webp'
            },
            {
                title: 'Give your employees access to financial benefits.',
                description: 'Keep your team happy. Boost satisfaction and retention.',
                button: {
                    text: 'Contact Sales Team',
                    url: '#',
                },
                contentImage: '/smart-tracking-graphic.svg',
                backgroundImage: '/smart-tracking.webp'
            },

        ]
    };
  return (
    <div>
      <NewCarousel data={carouselData} />
    </div>
  )
}

export default Benefits;
