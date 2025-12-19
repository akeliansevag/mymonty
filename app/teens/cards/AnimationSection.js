"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function AnimationSection() {
    // Card data
    const cards = [
        { image: "how-to-order-1" },
        { image: "how-to-order-2" },
        { image: "how-to-order-3" },
        { image: "how-to-order-4" },
        { image: "how-to-order-5" },
        { image: "how-to-order-6" },
    ];

    return (
        <section className="flex flex-col lg:justify-center relative pt-20 md:pt-96 bg-[linear-gradient(214.74deg,_#000000_-28%,_#2657D4_61.08%)] text-white overflow-hidden">
            <img src="/shape-11.svg" alt="Shape" className="absolute top-0 left-0 w-full z-10" width="1728" height="177" />
            <div className="ml-container-align relative">
                <div className="flex max-lg:flex-col lg:justify-center gap-8">
                    {/* Left section with text */}
                    <div className="lg:w-1/2 flex flex-col gap-8 lg:mt-12">
                        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-none uppercase">
                            HOw to order a teen card
                        </h2>
                        <p className="text-xl">For existing users, order  your teen’s card directly from MyMonty app.</p>
                        <div>
                            <button className="mm-button !bg-[#F8EA00] !text-black !px-12">Get The App</button>
                        </div>
                    </div>

                    {/* Right section with cards */}
                    <div className="lg:w-1/2 relative max-lg:mt-10">
                        <Swiper
                            speed={1500}
                            spaceBetween={25}
                            loop={true}
                            grabCursor={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2, // < md
                                },
                                768: {
                                    slidesPerView: 1.4, // >= md / lg
                                },
                                1024: {
                                    slidesPerView: 1.8, // >= xl
                                },
                            }}
                        >
                            {cards.map((card, i) => (
                                <SwiperSlide key={i} className="!h-auto flex items-center justify-center">
                                    <img src={`/${card.image}.webp`} alt="Shape" className="w-full lg:w-full lg:h-full" width="930" height="1046" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
