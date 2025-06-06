'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nakhaldesktop from '@/public/nakhal-desktop1.webp';
import nakhalmobile from '@/public/nakhal-mobile.webp';


const KhouryHome = () => {
  return (
    <Link href="/nakhal" className="fixed z-30 bottom-0 w-full">
      <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Nakhal Banner' src={nakhaldesktop} />
      <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Nakhal Banner' src={nakhalmobile} />
    </Link>
  )
}

export default KhouryHome;