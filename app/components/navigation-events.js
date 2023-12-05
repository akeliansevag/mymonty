'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function NavigationEvents() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname == '/business') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        const hash = window.location.hash;

        const scrollToElement = (hash) => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                window.scrollTo({
                    top: elementPosition - 100,
                    behavior: 'smooth',
                });
            }
        };

        const timeoutId = setTimeout(() => {
            if (hash) {
                scrollToElement(hash);
            }
        }, 0);

        // Alternatively, you can use DOMContentLoaded event
        // document.addEventListener('DOMContentLoaded', () => {
        //     if (hash) {
        //         scrollToElement(hash);
        //     }
        // });

        // Cleanup function
        return () => {
            clearTimeout(timeoutId); // Clear the timeout on component unmount
        };
    }, [pathname]);


    return null;
}