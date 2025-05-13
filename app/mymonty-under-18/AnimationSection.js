"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AnimationSection() {
    const sectionRef = useRef(null); // Only one sectionRef here
    const cardRefs = useRef([]);

    useEffect(() => {
        // Make sure cards are available in the ref before initializing animation
        if (cardRefs.current.length) {
            gsap.from(cardRefs.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top", // Pin from the start of the section
                    end: "+=100%", // Set scrollable range to 100% of the section height
                    scrub: true,
                    pin: true, // Pin the section while scrolling
                    anticipatePin: 1, // Smooth pinning behavior
                },
                x: "300%", // Cards enter from the right (off-screen)
                rotation: (index) => (index % 2 === 0 ? -5 : 5), // Slight rotation for each card
                opacity: 1,
                stagger: 0.3,
            });
        }
    }, []);

    // Card data
    const cards = [
        { image: "for-teens-1", color: "#ff6347", text: "Card 1" },
        { image: "for-teens-2", color: "#4682b4", text: "Card 2" },
        { image: "for-teens-3", color: "#32cd32", text: "Card 3" },
        { image: "for-teens-4", color: "#ffcc00", text: "Card 4" },
    ];

    return (
        <section className="h-[80vh] lg:h-[100vh] flex flex-col lg:justify-center relative pt-20 pb-20 bg-[#FF7300] text-white overflow-hidden" ref={sectionRef}>
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
                        <img src="/browser.svg" alt="Browser" className="absolute -top-20 left-32" />

                        {cards.map((card, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardRefs.current[i] = el)}
                                className="tca-card flex items-center justify-center"
                                style={{
                                    marginBottom: "20px",
                                    position: "absolute",
                                    top: `0px`,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    rotate: `${
                                        i % 4 === 0 ? -5 :
                                        i % 4 === 1 ? 5 :
                                        i % 4 === 2 ? 0 :
                                        -10
                                    }deg`,
                                }}
                            >
                                <img src={`/${card.image}.webp`} alt="Shape" className="w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
