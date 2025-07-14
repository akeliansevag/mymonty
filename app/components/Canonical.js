'use client'
// components/Canonical.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Canonical = () => {
  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    if (!router.isReady) return;

    const baseUrl = 'https://yourdomain.com'; // Replace with real domain
    let path = router.asPath.split('?')[0].split('#')[0];

    // Ensure trailing slash
    if (!path.endsWith('/')) {
      path += '/';
    }

    setCanonicalUrl(`${baseUrl}${path}`);
  }, [router.isReady, router.asPath]);

  if (!canonicalUrl) return null;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default Canonical;
