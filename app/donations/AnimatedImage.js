'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const AnimatedImage = () => {
    const [isImageLoaded, setImageLoaded] = useState(false);
    const imageElement = useRef();
    const whiteBox = useRef();
    const textOne = useRef();
    const textTwo = useRef();
    const blueCircle = useRef();
    const numberElement = useRef();
    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(whiteBox.current, { scale: 1, y: 0, opacity: 1, duration: 0.4 });
        tl.to(textOne.current, { opacity: 1, duration: 0.5 });
        tl.to(textTwo.current, { opacity: 1, duration: 0.5 });
        tl.to(blueCircle.current, { scale: 1, duration: 0.3 }, "-=1");
        // tl.from(numberElement.current, {
        //     textContent: 0,
        //     duration: 1,
        //     ease: "power1.in",
        //     snap: { textContent: 1 },
        //     stagger: {
        //         each: 1.0,
        //         onUpdate: function () {
        //             numberElement.current.innerHTML = numberWithCommas(Math.ceil(numberElement.current.textContent));
        //         }
        //     }
        // }, "-=1");
        let animatedValue = { value: 0 };

        gsap.to(animatedValue, {
            value: 10450000, // your target number
            duration: 2, // duration of the animation in seconds
            ease: "power1.inOut", // easing function
            onUpdate: function () {
                // Update the DOM element with the current animated value
                // Optionally format it with commas
                numberElement.current.textContent = numberWithCommas(Math.round(animatedValue.value));
            }
        });


    }, [isImageLoaded]);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <div className='flex md:justify-end'>
            <div className='h-[500px] w-[350px] rounded-3xl overflow-hidden relative flex justify-center'>
                <div>
                    <img onLoad={handleImageLoaded} ref={imageElement} width="350" height="500" src="/animated/donations-img-1.webp" sizes='100%' alt='Donations' className='object-cover w-full h-full -z-1' />
                </div>
                
                {/* <img src='/animated/accounts-banner.webp' className='block absolute -z-1 top-0 h-full' /> */}
                <div ref={whiteBox} className='opacity-50 scale-0 absolute translate-y-[calc(100%+30px)] bottom-[30px] rounded-[30px] bg-white w-[80%] h-[115px] z-1'>
                    <div ref={blueCircle} className='flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#2657D4] absolute translate-y-[-50%] left-3 scale-0'>
                    <svg className='heart' width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1721 5.38416L19.7273 6.93881L19.7274 6.93887C19.7274 6.93888 19.7274 6.93889 19.7274 6.9389C19.7275 6.93896 19.7275 6.93901 19.7276 6.93907L20.081 7.29238L20.0207 7.35272C20.2872 7.91022 20.1896 8.59828 19.7278 9.0602L18.1721 5.38416ZM18.1721 5.38416C20.4228 3.62565 22.6295 3.59302 24.2933 4.35355C26.3197 5.27985 27.8337 7.5021 27.8337 10.1827C27.8337 12.9566 26.705 15.1017 25.0421 16.9743C23.6599 18.5306 21.9922 19.8168 20.323 21.104C20.0538 21.3116 19.7845 21.5193 19.5164 21.7281L19.5155 21.7269L19.128 22.0323C19.1262 22.0337 19.1245 22.0351 19.1228 22.0364C18.4165 22.5931 17.8179 23.056 17.2499 23.3879L17.2499 23.3879C16.6814 23.7202 16.2862 23.8332 16.0003 23.8332C15.7145 23.8332 15.3192 23.7202 14.7508 23.3879L14.7507 23.3879C14.1827 23.056 13.5841 22.5931 12.8779 22.0364L12.8779 22.0364L12.4853 21.7269L12.4843 21.7281C12.2163 21.5194 11.9471 21.3118 11.678 21.1042C10.0087 19.8169 8.34078 18.5307 6.95858 16.9743C5.29563 15.1017 4.16699 12.9566 4.16699 10.1827C4.16699 7.5021 5.68088 5.27985 7.70734 4.35355C9.55976 3.50681 12.085 3.64324 14.5949 6.05007L14.9275 6.38247L15.2663 6.73449L15.2725 6.72851L15.2929 6.74902L15.2935 6.74842L17.6065 9.06059C17.6066 9.0606 17.6066 9.06061 17.6066 9.06062C17.6066 9.06064 17.6066 9.06066 17.6066 9.06068L17.9602 9.41412L18.0205 9.35376C18.5781 9.61998 19.2661 9.52212 19.7278 9.06026L18.1721 5.38416ZM30.3238 10.6827C30.1922 13.9927 28.7609 16.5517 26.9114 18.6343C25.3568 20.3848 23.454 21.8499 21.7735 23.144C21.5319 23.33 21.295 23.5124 21.0643 23.6917L30.3238 10.6827ZM30.3238 10.6827H30.3337H30.3238ZM17.5022 23.8196C17.9902 23.5344 18.493 23.1623 19.0389 22.7376L17.5022 23.8196ZM17.5022 23.8196C17.1262 24.0394 16.7958 24.1847 16.5003 24.263L17.5022 23.8196ZM6.46014 1.62508C3.45804 2.99735 1.3587 6.0907 1.17944 9.68268H1.16699V10.1827V10.6827H1.17649C1.30879 14.1482 2.80887 16.8195 4.71543 18.9663C6.30492 20.7561 8.25506 22.2572 9.93693 23.5518C10.3134 23.8416 10.6765 24.1211 11.0191 24.3912C11.0196 24.3916 11.0201 24.392 11.0207 24.3924L11.4133 24.702L11.414 24.7011C11.9873 25.1478 12.6063 25.6095 13.2371 25.9781L13.4894 25.5464L13.2372 25.9781C13.8889 26.3589 14.6533 26.702 15.5003 26.8032V26.8332H16.0003H16.5003V26.8032C17.3474 26.702 18.1118 26.3589 18.7635 25.9781C19.3944 25.6095 20.0133 25.1478 20.5867 24.7011L20.5873 24.702L20.9752 24.3962C20.9768 24.3949 20.9784 24.3937 20.98 24.3924L20.98 24.3924C20.9842 24.3891 20.9883 24.3858 20.9925 24.3825C21.332 24.1151 21.6915 23.8383 22.0642 23.5514C23.7459 22.2569 25.6959 20.7559 27.2852 18.9663C29.1918 16.8195 30.6919 14.1482 30.8242 10.6827H30.8337V10.1827V9.68268H30.8212C30.642 6.0907 28.5426 2.99735 25.5405 1.62508C22.6436 0.300909 19.1321 0.669379 16.0003 3.28424C12.8685 0.669378 9.35704 0.30091 6.46014 1.62508ZM15.5003 26.2991V26.3332V26.2991ZM16.5003 26.3332V26.2991C17.2289 26.2008 17.905 25.9006 18.5113 25.5464C19.1135 25.1945 19.7093 24.7507 20.2771 24.3084L20.2778 24.3093L16.5003 26.3332ZM28.3218 10.6827C28.1937 13.3718 27.0357 15.4824 25.4159 17.3063C23.9994 18.9014 22.2846 20.2234 20.6123 21.5126C20.3487 21.7158 20.0862 21.9183 19.826 22.1208L19.825 22.1195L28.3218 10.6827ZM15.5003 24.263C15.2048 24.1847 14.8745 24.0394 14.4985 23.8196L15.5003 24.263Z" fill="white" stroke="white"/></svg></div>
                    <div className='pb-3 pl-5 absolute bottom-0'>
                        <h3 className='opacity-0 text-[#727272] text-xl font-[500]' ref={textOne}>Donate</h3>
                        <h2 className='opacity-0 font-[900] text-2xl' ref={textTwo}>LBP <span ref={numberElement}>20700000</span></h2>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AnimatedImage;
