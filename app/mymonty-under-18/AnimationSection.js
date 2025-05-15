"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AnimationSection() {
    const sectionRef = useRef(null); // Only one sectionRef here
    const cardRefs = useRef([]);

    // useEffect(() => {
    //     // Make sure cards are available in the ref before initializing animation
    //     if (cardRefs.current.length) {
    //         gsap.from(cardRefs.current, {
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: "top top", // Pin from the start of the section
    //                 end: "+=100%", // Set scrollable range to 100% of the section height
    //                 scrub: true,
    //                 // pin: true, // Pin the section while scrolling
    //                 anticipatePin: 1, // Smooth pinning behavior
    //             },
    //             x: "300%", // Cards enter from the right (off-screen)
    //             rotation: (index) => (index % 2 === 0 ? -5 : 5), // Slight rotation for each card
    //             opacity: 1,
    //             stagger: 0.3,
    //         });
    //     }
    // }, []);

    // Card data
    const cards = [
        { image: "for-teens-1" },
        { image: "for-teens-2" },
        { image: "for-teens-3" },
        { image: "for-teens-4" },
    ];

    return (
        <section className="lg:h-[100vh] flex flex-col lg:justify-center relative py-20 bg-[#FF7300] text-white overflow-hidden" ref={sectionRef}>
            <img src="/shape-11.svg" alt="Shape" className="absolute top-0 left-0 w-full z-10" />
            <img src="/shape-12.svg" alt="Shape" className="absolute top-0 left-0" />
            <div className="container relative">
                <div className="flex max-lg:flex-col lg:justify-center gap-8">
                    {/* Left section with text */}
                    <div className="lg:w-1/3 flex flex-col gap-8 lg:mt-12">
                        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-none uppercase">
                            For Teens
                        </h1>
                        <p className="text-xl">
                            You get the freedom to manage your money your way, with a safety net to keep you on track. <br />
                            <br />
                            MyMonty &lt;18 gives you the tools to make smart financial decisions, while your parents can keep an
                            eye on things.
                        </p>
                        <div>
                            <button className="mm-button !bg-white !text-black !px-12">Get The App</button>
                        </div>
                    </div>

                    {/* Right section with cards */}
                    <div className="lg:w-2/3 relative">
                        <img src="/browser.svg" alt="Browser" className="absolute top-0 xl:-top-20 lg:left-32 max-lg:w-full" />

                        {cards.map((card, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardRefs.current[i] = el)}
                                className="tca-card flex max-lg:flex-col items-center justify-center mb-8 max-lg:mt-10 lg:absolute lg:top-0 lg:left-0 lg:left-1/2 lg:-translate-x-1/2"
                                style={{
                                    rotate: `${
                                        i % 4 === 0 ? -5 :
                                        i % 4 === 1 ? 5 :
                                        i % 4 === 2 ? 0 :
                                        -10
                                    }deg`,
                                }}
                            >
                                <img src={`/${card.image}.webp`} alt="Shape" className="w-2/3 lg:w-full lg:h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
