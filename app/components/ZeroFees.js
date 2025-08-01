'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import feesMobile from '@/public/0fees-mobile-4.webp';
import fees from '@/public/0fees-desktop-4.webp';


const ZeroFees = () => {
  return (
    <Link href="/zero-fees" className="fixed z-20 bottom-0 w-full">
        <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={fees} width='2000' height='133' />
        <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={feesMobile} width='2000' height='375' />
    </Link>
  )
}

export default ZeroFees;