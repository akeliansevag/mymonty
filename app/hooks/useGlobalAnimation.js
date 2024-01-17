import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGlobalAnimation = () => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(ref.current, {
            opacity: 0,
            y: -100,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 75%",
                end: "bottom top",
            },
        });
    }, []);

    return ref;
};

export default useGlobalAnimation;
