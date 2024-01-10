'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { sendGTMEvent } from '@next/third-parties/google';

export function NavigationEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {

        if (pathname == '/business') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        const scrollToElement = (id) => {
            var element = document.getElementById(id);
            if (element) {
                var headerOffset = 72;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }

        };

        let scrollToId = searchParams.get('s');

        const timeoutId = setTimeout(() => {
            if (scrollToId) {
                scrollToElement(scrollToId);
            }
        }, 0);

        // Cleanup function
        return () => {
            clearTimeout(timeoutId); // Clear the timeout on component unmount
        };
    }, [searchParams]);

    useEffect(() => {
        sendGTMEvent({
            event: "page_view",
            page_path: pathname
        });
    }, [pathname])

    return null;
}