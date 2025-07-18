'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Canonical() {
  const pathname = usePathname();
  const baseUrl = 'https://mymonty.com.lb' || 'https://mymonty.com.lb';

  useEffect(() => {
    const fullUrl = baseUrl + (pathname.endsWith('/') ? pathname : pathname + '/');

    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (canonicalTag) {
      canonicalTag.setAttribute('href', fullUrl);
    } else {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      canonicalTag.setAttribute('href', fullUrl);
      document.head.appendChild(canonicalTag);
    }
  }, [pathname]);

  return null;
}
