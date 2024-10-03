'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import feesMobile from '@/public/0fees-mobile.webp';
import fees from '@/public/0fees-desktop.webp';


const ZeroFees = () => {
  return (
    <Link href="/zero-fees" className="fixed z-20 bottom-0 w-full">
        <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={fees} />
        <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={feesMobile} />
    </Link>
  )
}

export default ZeroFees;