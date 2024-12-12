'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import khouryhome from '@/public/khouryhomedesktop2.webp';
import khouryhomemobile from '@/public/khouryhomeadmobile.webp';


const KhouryHome = () => {
  return (
    <Link href="/khoury-home" className="fixed z-20 bottom-0 w-full">
        <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={khouryhome} />
        <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={khouryhomemobile} />
    </Link>
  )
}

export default KhouryHome;